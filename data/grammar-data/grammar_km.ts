// Vymova — data/grammar-data/grammar_km.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "សព្វនាម — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У кхмерській немає окремих форм множини для займенників — число часто взагалі не позначають граматично, лише контекстом чи додатковими словами.",
            "en": {
              "text": "Khmer has no separate plural pronoun forms — number is often not marked grammatically at all, only by context or extra words."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ខ្ញុំ (khnhom)"
              ],
              [
                "ти",
                "អ្នក (neak)"
              ],
              [
                "він / вона",
                "គាត់ (koat)"
              ],
              [
                "ми",
                "យើង (yerng)"
              ],
              [
                "ви",
                "អ្នក (neak)"
              ],
              [
                "вони",
                "ពួកគេ (puok ke)"
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
        "id": "chea-vs-mean",
        "title": "ជា (chea) vs មាន (mean) — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"ជា\" (chea) вживають для тотожності й класифікації (\"X є Y\"), \"មាន\" (mean) — для наявності й володіння (\"є/має\") — два різні слова замість універсального \"бути\".",
            "en": {
              "text": "\"ជា\" (chea) is used for identity and classification (\"X is Y\"), \"មាន\" (mean) for existence and possession (\"there is/has\") — two different words instead of a universal \"to be\"."
            }
          },
          {
            "type": "table",
            "title": "ជា (тотожність) vs មាន (наявність)",
            "rows": [
              [
                "ខ្ញុំជាគ្រូ។",
                "Я вчитель. (chea)"
              ],
              [
                "ខ្ញុំមានឆ្កែ។",
                "У мене є собака. (mean)"
              ]
            ],
            "en": {
              "title": "chea (identity) vs mean (existence)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់ជាខ្មែរ។",
                "Він/вона кхмер(ка)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "ជា (chea) vs មាន (mean) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення (min...te) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється циркумфіксом: \"min/ men\" перед дієсловом і частка \"ទេ\" (te) в кінці речення — обидві частини потрібні одночасно.",
            "en": {
              "text": "Negation is formed with a circumfix: \"min/men\" before the verb and the particle \"ទេ\" (te) at the end of the sentence — both parts are required together."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "ខ្ញុំជាគ្រូ។",
                "ខ្ញុំមិនមែនជាគ្រូទេ។",
                "Я вчитель → я не вчитель (min men...te)"
              ],
              [
                "គាត់ដឹង។",
                "គាត់មិនដឹងទេ។",
                "Він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំមិនហត់ទេ។",
                "Я не втомлений."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (min...te) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання часто закінчуються часткою \"ទេ\" (te, тією ж, що й у запереченні) або \"ឬទេ\" (rue te); спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions often end with the particle \"ទេ\" (te, the same one used in negation) or \"ឬទេ\" (rue te); wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "នរណា (norna)",
                "хто"
              ],
              [
                "អ្វី (avey)",
                "що"
              ],
              [
                "ណា (na)",
                "де"
              ],
              [
                "ពេលណា (pel na)",
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
                "អ្នកជាខ្មែរឬទេ?",
                "Ти кхмер?"
              ],
              [
                "អ្នកនៅឯណា?",
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
        "id": "pronoun-hierarchy",
        "title": "Ієрархія займенників — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса кхмерської: замість кількох нейтральних займенників \"я\"/\"ти\" є десятки слів, вибір яких залежить від віку, статусу, релігійного сану співрозмовників — навіть звертання до ченця чи короля вимагає окремого, унікального займенника.",
            "en": {
              "text": "Khmer's most defining trait: instead of a few neutral \"I\"/\"you\" pronouns, there are dozens of words, chosen based on the age, status, and religious rank of the speakers — even addressing a monk or the king requires a separate, unique pronoun."
            }
          },
          {
            "type": "table",
            "title": "Приклади ієрархії",
            "rows": [
              [
                "ខ្ញុំ (khnhom) — нейтральне \"я\"",
                "звичайне ввічливе"
              ],
              [
                "ខ្ញុំបាទ/ខ្ញុំម្ចាស់ (khnhom baat/khnhom mchah)",
                "\"я\" — шанобливо, до старших/ченців"
              ]
            ],
            "en": {
              "title": "Examples of the Hierarchy"
            }
          }
        ],
        "titleEn": "The Pronoun Hierarchy — B1"
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
        "id": "completed-ban",
        "title": "Завершений вид (បាន — ban) — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ban\" перед дієсловом позначає завершену дію в минулому.",
            "en": {
              "text": "The particle \"ban\" before the verb marks a completed past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំបានទៅផ្សារ។",
                "Я ходив на ринок."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Completed Aspect (បាន — ban) — A1"
      },
      {
        "id": "progressive-kampong",
        "title": "Тривалий вид (កំពុង — kampong) — A1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"kampong\" перед дієсловом позначає дію, що триває саме зараз.",
            "en": {
              "text": "The particle \"kampong\" before the verb marks an action happening right now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់កំពុងញ៉ាំបាយ។",
                "Він/вона зараз їсть."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Progressive Aspect (កំពុង — kampong) — A1"
      },
      {
        "id": "future-nung",
        "title": "Майбутній час (នឹង — nung) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"nung\" перед дієсловом позначає майбутню дію.",
            "en": {
              "text": "The particle \"nung\" before the verb marks a future action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំនឹងទៅថ្ងៃស្អែក។",
                "Я піду завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (នឹង — nung) — A2"
      },
      {
        "id": "experiential-thleap",
        "title": "Досвід у минулому (ធ្លាប់ — thleap) — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"thleap\" перед дієсловом виражає \"колись траплялося робити\" — досвід, окремий від завершеного виду \"ban\".",
            "en": {
              "text": "The word \"thleap\" before the verb expresses \"has ever done/used to do\" — an experiential meaning, distinct from the completed aspect \"ban\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំធ្លាប់ទៅប្រទេសបារាំង។",
                "Я колись бував у Франції."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Experiential Aspect (ធ្លាប់ — thleap) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється голим дієсловом без жодної частки часу.",
            "en": {
              "text": "The imperative is formed with the bare verb, with no tense particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ទៅ!",
                "Іди!"
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
        "id": "polite-request-sohm",
        "title": "Ввічливе прохання (សូម — sohm) — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"sohm\" перед дієсловом пом'якшує наказ до ввічливого прохання — окрема форма від простого імператива.",
            "en": {
              "text": "The word \"sohm\" before the verb softens a command into a polite request — a separate form from the plain imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "សូមអង្គុយ។",
                "Будь ласка, сідайте."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Polite Request (សូម — sohm) — A2"
      },
      {
        "id": "desiderative-jong",
        "title": "Бажальна конструкція (ចង់ — jong) — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражають словом \"jong\" (хотіти) перед дієсловом.",
            "en": {
              "text": "A wish is expressed with the word \"jong\" (to want) before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំចង់ញ៉ាំបាយ។",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Desiderative Construction (ចង់ — jong) — A2"
      },
      {
        "id": "modal-ach",
        "title": "Модальна конструкція (អាច — ach) — A2",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Спроможність виражають словом \"ach\" (могти) перед дієсловом.",
            "en": {
              "text": "Ability is expressed with the word \"ach\" (can) before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំអាចនិយាយភាសាខ្មែរ។",
                "Я вмію говорити кхмерською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Modal Construction (អាច — ach) — A2"
      },
      {
        "id": "involuntary-trov",
        "title": "Мимовільна/пасивна конструкція (ត្រូវ — trov) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"trov\" (буквально \"мусити/бути враженим\") перед дієсловом виражає пасивну чи мимовільну дію, зазвичай неприємну для підмета — окрема функція від значення \"мусити\".",
            "en": {
              "text": "The word \"trov\" (literally \"must/be affected by\") before the verb expresses a passive or involuntary action, usually unpleasant for the subject — a separate function from its \"must\" meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់ត្រូវឆ្កែខាំ។",
                "Його вкусив собака. (пасивно-потерпіла конструкція)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Involuntary/Passive Construction (ត្រូវ — trov) — B1"
      },
      {
        "id": "negative-future",
        "title": "Заперечення майбутнього часу — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення майбутнього поєднує звичайний циркумфікс \"min...te\" з часткою \"nung\" усередині.",
            "en": {
              "text": "Negating the future combines the ordinary \"min...te\" circumfix with the particle \"nung\" inside it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំមិននឹងទៅទេ។",
                "Я не піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Future Tense — B1"
      },
      {
        "id": "serial-verb-construction",
        "title": "Серіальна дієслівна конструкція — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Два чи більше дієслова можуть стояти поспіль без сполучника, описуючи одну складну подію послідовними кроками — типова риса мов Південно-Східної Азії.",
            "en": {
              "text": "Two or more verbs can stand in a row with no conjunction, describing one complex event as sequential steps — a typical trait of Southeast Asian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់ដើរទៅផ្ទះ។",
                "Він пішов (ходьбою) додому. (ходити-йти без сполучника)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Serial Verb Construction — B2"
      },
      {
        "id": "completive-haey",
        "title": "Завершеність (ហើយ — haey) — A2",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"haey\" (вже) в кінці речення підкреслює, що дія повністю завершена — часто поєднується з \"ban\" для сильнішого наголосу на результаті.",
            "en": {
              "text": "The particle \"haey\" (already) at the end of the sentence emphasizes that the action is fully complete — often combined with \"ban\" for stronger emphasis on the result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំបានញ៉ាំហើយ។",
                "Я вже поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Completion (ហើយ — haey) — A2"
      },
      {
        "id": "habitual-often-unmarked",
        "title": "Звична дія без спеціального маркера — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, регулярна дія часто виражається просто дієсловом без частки часу, спираючись на контекст або часове слово (\"дагх\" — щодня).",
            "en": {
              "text": "A habitual, regular action is often expressed with just the bare verb with no tense particle, relying on context or a time word (\"every day\")."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំរៀនភាសាខ្មែរជារៀងរាល់ថ្ងៃ។",
                "Я вчу кхмерську щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Habitual Aspect (Often Unmarked) — B1"
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
        "id": "interrogative-declension",
        "title": "Питальні слова в різних позиціях — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальне слово зазвичай стоїть на тому самому місці в реченні, де стояла б відповідь, а не переміщується на початок, як у більшості європейських мов.",
            "en": {
              "text": "A question word usually stands in the same sentence position the answer would occupy, rather than moving to the front as in most European languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "អ្នកទៅណា?",
                "Куди ти йдеш? (буквально \"ти йдеш куди\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words in Situ — B1"
      },
      {
        "id": "classifiers-counting",
        "title": "Класифікатори при лічбі — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Рахуючи предмети, між числом та іменником обов'язково вставляють класифікатор, що залежить від форми чи категорії предмета — подібно до інших мов Південно-Східної Азії.",
            "en": {
              "text": "When counting objects, a classifier — depending on the object's shape or category — must be inserted between the number and the noun, similar to other Southeast Asian languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "សៀវភៅបីក្បាល",
                "три книги (kbal — класифікатор для книг/тварин)"
              ],
              [
                "មនុស្សបីនាក់",
                "три людини (neak — класифікатор для людей)"
              ]
            ],
            "en": {
              "title": "Classifier Examples"
            }
          }
        ],
        "titleEn": "Classifiers in Counting — B1"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кхмерська система числівників базується на п'ятірках: числа 6-9 буквально означають \"п'ять+одиниця\".",
            "en": {
              "text": "The Khmer numeral system is based on fives: the numbers 6-9 literally mean \"five+unit\"."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "មួយ (muoy)",
                "один"
              ],
              [
                "ប្រាំ (pram)",
                "п'ять"
              ],
              [
                "ប្រាំមួយ (pram muoy)",
                "шість (п'ять+один)"
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
        "id": "no-plural-marking",
        "title": "Відсутність позначення множини — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник ніколи не змінюється у множині: число видно лише з числівника, класифікатора чи слова \"puok\" (група/усі) за потреби.",
            "en": {
              "text": "The noun never changes for plural: number is conveyed only by a numeral, classifier, or the word \"puok\" (group/all) when needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំមានសៀវភៅ។",
                "У мене є книга/книги. (без контексту неоднозначно)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absence of Plural Marking — A1"
      },
      {
        "id": "reduplication-intensity",
        "title": "Редуплікація для інтенсивності — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прикметника посилює значення або пом'якшує його залежно від слова.",
            "en": {
              "text": "Repeating an adjective intensifies or softens the meaning depending on the word."
            }
          },
          {
            "type": "table",
            "title": "ស្រស់ស្អាត → ស្រស់ស្រស់",
            "rows": [
              [
                "ស្រស់ (свіжий) → ស្រស់ៗ",
                "дуже свіжий"
              ]
            ]
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "possession-robsa",
        "title": "Присвійність через robsa — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається словом \"robsa\" (від/належний) між означуваним іменником і власником, або просто зіставленням без нього в короткій розмовній формі.",
            "en": {
              "text": "Possession is expressed with the word \"robsa\" (belonging to) between the possessed noun and the possessor, or by simple juxtaposition without it in short colloquial form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "សៀវភៅរបស់ខ្ញុំ។",
                "Моя книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via robsa — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"នេះ\" (nih, це) вказує на близьке, \"នោះ\" (nuh, те) — на віддалене; обидва стоять після іменника.",
            "en": {
              "text": "\"នេះ\" (nih, this) points to something near, \"នោះ\" (nuh, that) to something distant; both follow the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "សៀវភៅនេះជារបស់ខ្ញុំ។",
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
        "id": "relative-clause-del",
        "title": "Відносна частка ដែល (del) — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Del\" — універсальний відносний займенник \"який/що\", незмінний за родом і числом.",
            "en": {
              "text": "\"Del\" is the universal relative pronoun \"who/which/that\", invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "អ្នកដែលមកគឺជាមិត្តខ្ញុំ។",
                "Людина, що прийшла, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particle ដែល (del) — A2"
      },
      {
        "id": "comparative-jang",
        "title": "Порівняльна конструкція (ជាង — jang) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають словом \"jang\" (перевищувати/ніж) після прикметника.",
            "en": {
              "text": "Comparison is expressed with the word \"jang\" (exceeding/than) after the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់ខ្ពស់ជាងខ្ញុំ។",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (ជាង — jang) — A2"
      },
      {
        "id": "superlative-bamphot",
        "title": "Найвищий ступінь (បំផុត — bamphot) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється словом \"bamphot\" (найбільше) після прикметника.",
            "en": {
              "text": "The superlative is formed with the word \"bamphot\" (most) after the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គាត់ខ្ពស់បំផុត។",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (បំផុត — bamphot) — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Порядок слів SVO — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-присудок-додаток (SVO).",
            "en": {
              "text": "The basic order is subject-verb-object (SVO)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំស្រលាញ់អ្នក។",
                "Я тебе люблю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SVO Word Order — A1"
      },
      {
        "id": "adjectives-as-stative-predicates",
        "title": "Прикметник як присудок — A2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник функціонує як присудок без жодного дієслова \"бути\" — сам прикметник стоїть на місці присудка.",
            "en": {
              "text": "The adjective functions as the predicate with no verb \"to be\" at all — the adjective itself stands in the predicate position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ផ្ទះនេះធំ។",
                "Цей дім великий."
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
            "title": "ហើយ / ប៉ុន្តែ / ព្រោះ",
            "rows": [
              [
                "ហើយ (haey)",
                "і"
              ],
              [
                "ប៉ុន្តែ (ponta)",
                "але"
              ],
              [
                "ព្រោះ (proh)",
                "тому що"
              ]
            ],
            "en": {
              "title": "ហើយ / ប៉ុន្តែ / ព្រោះ"
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
            "text": "Основний прийменник \"ñoú\" (у/на/при) поєднує кілька просторових значень.",
            "en": {
              "text": "The core preposition \"ñoú\" (in/at) combines several spatial meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំនៅផ្ទះ។",
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
            "text": "Складні слова часто поєднують два корені, один з яких може бути пальським/санскритським запозиченням.",
            "en": {
              "text": "Compound words often join two roots, one of which may be a Pali/Sanskrit loanword."
            }
          },
          {
            "type": "table",
            "title": "សៀវភៅ + ដ្ឋាន",
            "rows": [
              [
                "សៀវភៅ (книга) + ដ្ឋាន (місце) = សៀវភៅដ្ឋាន",
                "бібліотека"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "register-consonant-series",
        "title": "Дві серії приголосних (регістр голосних) — B2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Приголосні кхмерської абетки поділені на дві серії, кожна з яких по-різному впливає на вимову приєднаної голосної — та сама голосна літера звучить по-різному залежно від серії приголосного.",
            "en": {
              "text": "The consonants of the Khmer alphabet are split into two series, each affecting the pronunciation of the attached vowel differently — the same vowel letter sounds different depending on the consonant's series."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Той самий голосний знак дає різний звук після приголосного 1-ї серії й 2-ї серії.",
                "ключова риса кхмерської писемності, відсутня в більшості інших абугід"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Two Consonant Series (Vowel Register) — B2"
      },
      {
        "id": "subscript-consonants",
        "title": "Підрядкові приголосні — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Другий приголосний у скупченні пишеться зменшеною формою під першим (підрядковий знак), а не поруч у рядку — успадковано з брахмійських писемностей Індії.",
            "en": {
              "text": "The second consonant in a cluster is written in a reduced subscript form below the first, not side by side on the line — inherited from India's Brahmic scripts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ស្រុក — приголосний \"រ\" написаний підрядково під \"ស\".",
                "типова конструкція кхмерського письма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subscript Consonants — B1"
      },
      {
        "id": "no-word-spacing",
        "title": "Відсутність пробілів між словами — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний кхмерський текст не розділяє слова пробілами взагалі — пробіл позначає лише межу речення чи фрази, а не окремого слова, як у більшості мов зі щоденною писемністю.",
            "en": {
              "text": "Traditional Khmer text doesn't separate words with spaces at all — a space marks only a sentence or phrase boundary, not an individual word, unlike most languages with everyday writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Читач мусить самостійно розпізнавати межі слів у суцільному рядку символів.",
                "виклик для тих, хто вчить мову з нуля"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Spaces between Words — B1"
      },
      {
        "id": "vocative-address-particle",
        "title": "Звертання — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання часто просто ставить ім'я чи титул на початку речення.",
            "en": {
              "text": "Direct address often simply places the name or title at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "សុភា មកទីនេះ!",
                "Софо, йди сюди!"
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
        "id": "topic-comment-structure",
        "title": "Структура тема-коментар — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Мовці часто виносять тему розмови на початок речення, навіть якщо вона не є граматичним підметом — типова риса розмовної мови.",
            "en": {
              "text": "Speakers often place the topic of conversation at the start of the sentence, even when it isn't the grammatical subject — a typical trait of colloquial speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ការងារនេះ ខ្ញុំចូលចិត្ត។",
                "Ця робота — я її люблю. (тема винесена наперед)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Topic-Comment Structure — B1"
      },
      {
        "id": "time-expressions-structure",
        "title": "Структура виразів часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Часові вирази зазвичай стоять на початку чи в кінці речення, оскільки саме дієслово не несе часового значення.",
            "en": {
              "text": "Time expressions usually stand at the start or end of the sentence, since the verb itself carries no tense meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ថ្ងៃស្អែកខ្ញុំនឹងទៅ។",
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
        "id": "directional-particles-mok-tow",
        "title": "Напрямкові частки (មក/ទៅ — mok/tow) — B1",
        "emoji": "🧲",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mok\" (сюди) і \"tow\" (туди) після дієслова розрізняють рух до й від мовця, подібно до інших мов Південно-Східної Азії й Океанії.",
            "en": {
              "text": "\"Mok\" (hither) and \"tow\" (thither) after the verb distinguish motion towards and away from the speaker, similar to other Southeast Asian and Oceanic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "មកទីនេះ!",
                "Іди сюди! (mok)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Particles (មក/ទៅ — mok/tow) — B1"
      },
      {
        "id": "collective-marker-puok",
        "title": "Збірний маркер puok — A2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"puok\" перед іменником чи займенником явно позначає групу/множину, коли контексту недостатньо.",
            "en": {
              "text": "The word \"puok\" before a noun or pronoun explicitly marks a group/plural when context alone isn't enough."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ពួកគេទៅសាលា។",
                "Вони йдуть до школи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Collective Marker puok — A2"
      },
      {
        "id": "counting-classifier-deep",
        "title": "Класифікатор \"пласке\" й \"тонке\" — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Окремі класифікатори існують для плоских предметів (аркуш), тонких видовжених (нитка) і круглих — вибір класифікатора точно описує форму предмета.",
            "en": {
              "text": "Separate classifiers exist for flat objects (sheet), thin elongated ones (thread), and round ones — the choice of classifier precisely describes the object's shape."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів форми",
            "rows": [
              [
                "ក្រដាសមួយសន្លឹក",
                "один аркуш паперу (sanleuk = плаский)"
              ]
            ]
          }
        ],
        "titleEn": "Shape-Based Classifiers — B1"
      },
      {
        "id": "focus-particle",
        "title": "Фокусна частка — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка, поставлена після слова, підкреслює його — \"саме\", подібно до фокусних часток в інших мовах регіону.",
            "en": {
              "text": "A particle placed after a word emphasizes it — \"exactly\", similar to focus particles in other languages of the region."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំហ្នឹងហើយដែលធ្វើ។",
                "Це саме я зробив це."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Focus Particle — B1"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня названі на честь небесних тіл, пов'язаних з індуїстською астрологією, успадкованою через давній вплив Індії.",
            "en": {
              "text": "The days of the week are named after celestial bodies tied to Hindu astrology, inherited through ancient Indian influence."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "ថ្ងៃច័ន្ទ (thngai chan)",
                "понеділок (місяць)"
              ],
              [
                "ថ្ងៃអាទិត្យ (thngai atit)",
                "неділя (сонце)"
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
            "text": "Поряд із міжнародним календарем, кхмерська зберігає традиційний місячний календар з власними назвами місяців для релігійних свят.",
            "en": {
              "text": "Alongside the international calendar, Khmer retains a traditional lunar calendar with its own month names for religious holidays."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "មករា (mokara)",
                "січень"
              ],
              [
                "ពិសាខ (pisak)",
                "місяць народження Будди"
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
            "text": "Час запитують \"ម៉ោងប៉ុន្មាន?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"ម៉ោងប៉ុន្មាន?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ម៉ោងបី។",
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
                "ស (sar)",
                "білий"
              ],
              [
                "ខ្មៅ (khmav)",
                "чорний"
              ],
              [
                "ក្រហម (krahom)",
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
            "text": "Родинні терміни розрізняють старших і молодших родичів того самого ступеня окремими словами.",
            "en": {
              "text": "Kinship terms distinguish older and younger relatives of the same degree with separate words."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "ម្ដាយ (mday)",
                "мати"
              ],
              [
                "ឪពុក (ov puk)",
                "батько"
              ],
              [
                "បង (bong)",
                "старший брат/сестра"
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
        "id": "sompeah-greeting",
        "title": "Привітання-сампеах — A1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Словесне привітання \"ជំរាបសួរ\" (chumreap suor) традиційно супроводжується жестом \"sampeah\" — складеними долонями на різній висоті залежно від статусу співрозмовника, подібно до тайського вая.",
            "en": {
              "text": "The verbal greeting \"ជំរាបសួរ\" (chumreap suor) is traditionally accompanied by the \"sampeah\" gesture — palms pressed together at a height depending on the interlocutor's status, similar to the Thai wai."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "ជំរាបសួរ!",
                "Вітаю! (формально)"
              ],
              [
                "អរគុណ!",
                "Дякую!"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "The Sompeah Greeting — A1"
      },
      {
        "id": "weather-expressions",
        "title": "Вирази про погоду — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду описують дієсловом \"ភ្លៀង\" (пхлієнг — падати дощу).",
            "en": {
              "text": "Weather is described with the verb \"ភ្លៀង\" (to rain)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ភ្លៀងធ្លាក់។",
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
            "text": "Частини тіла — звичайні іменники, деякі мають окрему шанобливу форму для монахів чи королівської родини.",
            "en": {
              "text": "Body parts are ordinary nouns, some with a separate honorific form for monks or the royal family."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "ដៃ (dai)",
                "рука"
              ],
              [
                "ក្បាល (kbal)",
                "голова"
              ],
              [
                "ជើង (jeung)",
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
            "text": "Вік виражають конструкцією \"អាយុ X ឆ្នាំ\" (X років віку).",
            "en": {
              "text": "Age is expressed with the construction \"អាយុ X ឆ្នាំ\" (X years of age)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំអាយុម្ភៃឆ្នាំ។",
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
        "id": "royal-vocabulary-reachasap",
        "title": "Королівська лексика (реачасап) — C1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Окремий шар лексики \"реачасап\" (королівська мова) вживають виключно про короля й членів королівської родини — навіть слова \"їсти\", \"спати\", \"голова\" мають цілком інші, унікальні відповідники.",
            "en": {
              "text": "A separate vocabulary layer, \"reachasap\" (royal language), is used exclusively for the king and royal family — even words like \"eat\", \"sleep\", \"head\" have entirely different, unique equivalents."
            }
          },
          {
            "type": "table",
            "title": "Звичайне vs королівське слово",
            "rows": [
              [
                "ស្លាប់ (звичайне \"померти\")",
                "សោយទិវង្គត (королівське \"померти\")"
              ]
            ],
            "en": {
              "title": "Ordinary vs Royal Word"
            }
          }
        ],
        "titleEn": "Royal Vocabulary (Reachasap) — C1"
      },
      {
        "id": "monastic-register",
        "title": "Монаший регістр — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Окрема, менш екстремальна, ніж королівська, лексика вживається для чернецтва: миряни звертаються до ченців і говорять про них особливими словами з поваги до буддійського сану.",
            "en": {
              "text": "A separate, less extreme vocabulary than the royal one is used for Buddhist monks: laypeople address and speak about monks with special words out of respect for their monastic status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ឆាន់ (chan) — \"їсти\" про ченця, замість звичайного ញ៉ាំ.",
                "окремий шар поваги для духовенства"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Monastic Register — B2"
      },
      {
        "id": "pali-sanskrit-loanword-layer",
        "title": "Пальсько-санскритський шар — B1",
        "emoji": "🕉️",
        "sections": [
          {
            "type": "intro",
            "text": "Через буддизм і давній індуїстський вплив кхмерська зберігає численні пальські й санскритські запозичення, особливо в релігійній, науковій і абстрактній лексиці.",
            "en": {
              "text": "Due to Buddhism and ancient Hindu influence, Khmer retains numerous Pali and Sanskrit loanwords, especially in religious, scholarly, and abstract vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "សាលា (від śālā)",
                "школа"
              ],
              [
                "ធម៌ (від dharma)",
                "закон/учення"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The Pali/Sanskrit Loanword Layer — B1"
      },
      {
        "id": "french-loanword-layer",
        "title": "Французький шар запозичень — B1",
        "emoji": "🇫🇷",
        "sections": [
          {
            "type": "intro",
            "text": "Через колоніальну історію Камбоджі кхмерська має шар французьких запозичень, особливо в адміністративній і сучасній побутовій лексиці.",
            "en": {
              "text": "Due to Cambodia's colonial history, Khmer has a layer of French loanwords, especially in administrative and modern everyday vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "កាបូប (від cabas?)",
                "сумка"
              ],
              [
                "សាំងវិច (від sandwich)",
                "сендвіч"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "The French Loanword Layer — B1"
      },
      {
        "id": "politeness-particle-baat-cha",
        "title": "Частка ввічливості (баат/чаа) — A1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частку \"баат\" (від чоловіка) чи \"чаа\" (від жінки) додають у кінці речення для ввічливого підтвердження чи звертання — окремі за статтю мовця.",
            "en": {
              "text": "The particle \"baat\" (from a man) or \"chaa\" (from a woman) is added at the end of a sentence for a polite acknowledgment or address — different depending on the speaker's gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "បាទ!",
                "Так! (сказано чоловіком)"
              ],
              [
                "ចាស!",
                "Так! (сказано жінкою)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Politeness Particle (baat/chaa) — A1"
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
                "អូ!",
                "Ой!/Овва!"
              ],
              [
                "អរគុណច្រើន!",
                "Дуже дякую!"
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
            "text": "Кхмерські ідіоми часто спираються на буддійську філософію й сільське життя.",
            "en": {
              "text": "Khmer idioms often draw on Buddhist philosophy and rural life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ដើមឈើមួយមិនអាចធ្វើជាព្រៃ។",
                "Одне дерево не робить лісу (про важливість спільноти)."
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
                "ដប់មួយ (dop muoy)",
                "одинадцять"
              ],
              [
                "ម្ភៃ (mphey)",
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
            "text": "Порядкові числівники утворюються словом \"ទី\" (thi) перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with the word \"ទី\" (thi) before the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ទីមួយ",
                "перший"
              ],
              [
                "ទីពីរ",
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
            "text": "\"នរណាម្នាក់\" (хтось) і \"អ្វីមួយ\" (щось) — базові неозначені вирази.",
            "en": {
              "text": "\"នរណាម្នាក់\" (someone) and \"អ្វីមួយ\" (something) are the basic indefinite expressions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "មាននរណាម្នាក់ទូរស័ព្ទមក។",
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
            "text": "\"គ្មាននរណាទេ\" (нікого немає) поєднує заперечення наявності \"gmien\" з часткою \"te\".",
            "en": {
              "text": "\"គ្មាននរណាទេ\" (no one is there) combines the existential negation \"gmien\" with the particle \"te\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "គ្មាននរណានៅទីនោះទេ។",
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
            "text": "Розділове питання утворюється фразою \"មែនទេ?\" (хіба не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"មែនទេ?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ថ្ងៃនេះស្អាតណាស់ មែនទេ?",
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
        "title": "Цільове підрядне (ដើម្បី — daembei) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Daembei\" (щоб) вводить цільове підрядне речення.",
            "en": {
              "text": "\"Daembei\" (in order to) introduces a purpose clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំរៀនភាសាខ្មែរដើម្បីនិយាយជាមួយជីដូនខ្ញុំ។",
                "Я вчу кхмерську, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (ដើម្បី — daembei) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (ព្រោះ — proh) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Proh\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Proh\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ខ្ញុំយឺតព្រោះខកឡានក្រុង។",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (ព្រោះ — proh) — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (បើ — baeu) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Baeu\" (якщо) вводить умовне речення.",
            "en": {
              "text": "\"Baeu\" (if) introduces a conditional sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "បើខ្ញុំមានពេល ខ្ញុំនឹងទៅ។",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (បើ — baeu) — B1"
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
            "text": "Кілька частовживаних дієслів (mean-мати/бути, chea-бути) не поєднуються зі стандартними видовими частками так само вільно, як інші дієслова, і мають обмежені або нерегулярні поєднання.",
            "en": {
              "text": "A few common verbs (mean-to have/be, chea-to be) don't combine with the standard aspect particles as freely as other verbs, and have limited or irregular combinations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ជា (chea) рідко поєднується з kampong (тривалий вид), на відміну від дієслів дії.",
                "стативні дієслова мають обмежену видову парадигму"
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
        "id": "vowel-register-exceptions",
        "title": "Винятки в регістрі голосних — B2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі слова мають вимову голосної, що не відповідає очікуваній серії приголосного через історичні звукозміни — ці слова слід запам'ятовувати з вимовою окремо.",
            "en": {
              "text": "Some words have a vowel pronunciation that doesn't match the expected consonant series due to historical sound changes — these words must be memorized with their pronunciation individually."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Кілька поширених слів зберігають вимову, що суперечить формальному правилу серії.",
                "фонологічний виняток, зафіксований лише історично"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Register Exceptions — B2"
      },
      {
        "id": "fixed-royal-idiomatic-expressions",
        "title": "Застиглі королівські вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо в офіційних оголошеннях) зберігають лексику реачасап навіть тоді, коли йдеться не про короля, — застигла данина шанобливій традиції.",
            "en": {
              "text": "Some common formulas (especially in official announcements) preserve reachasap vocabulary even when not referring to the king — a frozen tribute to the tradition of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Офіційні оголошення іноді запозичують королівську лексику для підвищення урочистості тону.",
                "стилістичний прийом, що виходить за межі буквального значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Royal-Register Expressions — B2"
      }
    ]
  }
];
