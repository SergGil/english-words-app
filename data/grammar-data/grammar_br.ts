// Vymova — data/grammar-data/grammar_br.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Rakverbioù Personel — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Бретонська — єдина кельтська мова, що збереглася на європейському континенті, а не на Британських островах.",
            "en": {
              "text": "Breton is the only Celtic language that survived on the European continent rather than the British Isles."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "me"
              ],
              [
                "ти",
                "te"
              ],
              [
                "він / вона",
                "eñ / hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "c'hwi"
              ],
              [
                "вони",
                "int"
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
        "id": "to-be-bezan-zo",
        "title": "Два дієслова \"бути\": bezañ / zo — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Bezañ — це звичайне, відмінюване дієслово \"бути\" для постійних станів, а zo — окрема незмінна форма для ототожнення й наявності \"тут і зараз\", яка не відмінюється за особою.",
            "en": {
              "text": "Bezañ is the regular, conjugated \"to be\" verb for lasting states, while zo is a separate, invariant form for identity and existence \"here and now\", which doesn't conjugate by person."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + zo",
            "rows": [
              [
                "Ur c'helenner",
                "eo Yann.",
                "Янн — учитель."
              ],
              [
                "Skuizh",
                "on.",
                "Я втомлений (bezañ, відмінюване)."
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
                "Ur medisin eo.",
                "Він/вона лікар."
              ]
            ]
          }
        ],
        "titleEn": "Two \"To Be\" Verbs: Bezañ/Zo — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ne...ket\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення обгортає дієслово: частка ne ставиться перед дієсловом, а ket — після нього, подібно до структури французького ne...pas.",
            "en": {
              "text": "Negation wraps around the verb: the particle ne goes before it, and ket after it, similar in structure to French ne...pas."
            }
          },
          {
            "type": "formula",
            "title": "ne + дієслово + ket",
            "rows": [
              [
                "Gouzout a ran.",
                "Ne ouzon ket.",
                "Я знаю. → Я не знаю."
              ],
              [
                "Deuet eo.",
                "N'eo ket deuet.",
                "Він прийшов. → Він не прийшов."
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
                "Ne gomprenan ket.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ne...Ket — A1"
      },
      {
        "id": "questions",
        "title": "Питання з часткою \"daoust ha\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Формальні питання так/ні починаються з daoust ha (\"чи\"); у розмовній мові її часто пропускають, лишаючи саму інтонацію.",
            "en": {
              "text": "Formal yes/no questions start with daoust ha (\"whether\"); in casual speech it is often dropped, leaving just the rising intonation."
            }
          },
          {
            "type": "formula",
            "title": "Daoust ha + твердження?",
            "rows": [
              [
                "Skuizh out.",
                "Daoust ha skuizh out?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "Deuet eo.",
                "Deuet eo?",
                "Він прийшов. → Він прийшов?"
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
                "Naon ac'h eus?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with Daoust Ha — A1"
      },
      {
        "id": "initial-consonant-mutation-overview",
        "title": "Мутації початкового приголосного — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Як і у валлійській чи ірландській, перший приголосний слова в бретонській систематично змінюється залежно від граматичного контексту (роду, попереднього слова) — ключова риса всіх кельтських мов.",
            "en": {
              "text": "As in Welsh or Irish, a word's first consonant systematically changes depending on grammatical context (gender, the preceding word) — a key feature of all Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ki (собака, вихідна форма)",
                "ma c'hi (мій собака, з мутацією k→c'h)"
              ],
              [
                "tad (батько)",
                "e dad (його батько, з мутацією t→d)"
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
                "Ma zi zo bras.",
                "Мій дім великий (t→z мутація)."
              ]
            ]
          }
        ],
        "titleEn": "Initial Consonant Mutations — A2"
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
        "id": "present-tense-bezan",
        "title": "Теперішній час дієслова bezañ — A1",
        "titleEn": "Present Tense of Bezañ — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово bezañ (бути) відмінюється за особою в теперішньому часі, коли йдеться про постійний стан чи ознаку.",
            "en": {
              "text": "The verb bezañ (to be) conjugates by person in the present when talking about a lasting state or quality."
            }
          },
          {
            "type": "formula",
            "title": "bezañ — теперішній",
            "rows": [
              [
                "me",
                "on",
                "я є"
              ],
              [
                "te",
                "out",
                "ти є"
              ],
              [
                "eñ/hi",
                "eo",
                "він/вона є"
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
                "Skuizh omp.",
                "Ми втомлені."
              ],
              [
                "Laouen int.",
                "Вони щасливі."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-habitual-a-vez",
        "title": "Звичайна дія (bez'/a vez) — B1",
        "titleEn": "Habitual Present (Bez'/A Vez) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Для звичної, повторюваної дії вживають окрему звичну форму bez' (замість zo/eo), що виражає \"зазвичай буває\".",
            "en": {
              "text": "For a habitual, repeated action, a separate habitual form bez' (instead of zo/eo) is used, expressing \"usually is\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Bez' e vez glav e Breizh.",
                "У Бретані зазвичай бувають дощі."
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
                "Bez' e vezan skuizh diwezhat.",
                "Я зазвичай втомлений увечері."
              ],
              [
                "Bez' e vez tomm er goañv.",
                "Взимку зазвичай тепло (тут: незвично тепло)."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-imperfect",
        "title": "Минулий незавершений час — A2",
        "titleEn": "Imperfect Past — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час утворюється особовим закінченням -en/-es/-e, доданим до основи дієслова, і виражає тривалу чи звичну дію в минулому.",
            "en": {
              "text": "The imperfect past is formed with the personal ending -en/-es/-e added to the verb stem, expressing an ongoing or habitual past action."
            }
          },
          {
            "type": "formula",
            "title": "основа + en/es/e",
            "rows": [
              [
                "me",
                "kanen",
                "я співав"
              ],
              [
                "te",
                "kanes",
                "ти співав"
              ],
              [
                "eñ",
                "kane",
                "він співав"
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
                "Bez' e kanen bemdez.",
                "Я зазвичай співав щодня."
              ],
              [
                "Karout a rae ar mor.",
                "Він/вона любив(-ла) море."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-simple-preterite",
        "title": "Минулий доконаний час — A2",
        "titleEn": "Simple Past (Preterite) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий доконаний час утворюється власним рядом закінчень (-is/-jout/-jas тощо), доданих до основи, і виражає одноразову завершену дію.",
            "en": {
              "text": "The simple past is formed with its own set of endings (-is/-jout/-jas, etc.) added to the stem, expressing a single completed action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Kanet en deus dec'h.",
                "Він заспівав учора."
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
                "Deuet on dec'h.",
                "Я прийшов учора."
              ],
              [
                "Gwelet he deus he mamm.",
                "Вона побачила свою маму."
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
            "text": "Майбутній час утворюється особовим закінченням -in/-i/-o, доданим до основи дієслова.",
            "en": {
              "text": "The future tense is formed with the personal ending -in/-i/-o added to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "основа + in/i/o",
            "rows": [
              [
                "me",
                "kanin",
                "я співатиму"
              ],
              [
                "te",
                "kani",
                "ти співатимеш"
              ],
              [
                "eñ",
                "kano",
                "він співатиме"
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
                "Warc'hoazh e vin laouen.",
                "Завтра я буду радий."
              ],
              [
                "Dont a rin.",
                "Я прийду."
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
            "text": "Умовний спосіб утворюється закінченнями -fen/-fes/-fe, доданими до основи, вживається для гіпотетичної умови й ввічливого прохання.",
            "en": {
              "text": "The conditional mood is formed with the endings -fen/-fes/-fe added to the stem, used for hypothetical conditions and polite requests."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mar bijen skuizh, e chomfen er gêr.",
                "Якби я був втомлений, я б лишився вдома."
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
                "Mennout a rafen dont.",
                "Я хотів би прийти."
              ],
              [
                "Gallout a rafe skoazellañ ac'hanon.",
                "Він міг би мені допомогти."
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
            "text": "Наказовий спосіб для 2-ї особи однини — це основа дієслова з закінченням -it/-Ø; множина/ввічлива форма додає -it.",
            "en": {
              "text": "The imperative for the 2nd person singular is the verb stem with the ending -it/-Ø; the plural/polite form adds -it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Deus!",
                "Приходь!"
              ],
              [
                "Deuit!",
                "Приходьте!"
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
                "Digor an nor!",
                "Відчини двері!"
              ],
              [
                "Azezit, mar plij.",
                "Сідайте, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "preverbal-particle-system",
        "title": "Дієслівні частки a/e/ne перед присудком — B1",
        "titleEn": "Preverbal Particles A/E/Ne — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Стверджувальне речення завжди вимагає частку перед відмінюваним дієсловом — a, якщо на першому місці підмет чи додаток, e — якщо обставина; вибір частки — обов'язкова граматична вимога, не стилістична забаганка.",
            "en": {
              "text": "An affirmative sentence always requires a particle before the conjugated verb — a if the subject or object leads, e if an adverbial does; the particle choice is an obligatory grammatical requirement, not a stylistic option."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Yann a gan.",
                "Янн співає (a, бо Yann на першому місці)."
              ],
              [
                "Bremañ e kanan.",
                "Зараз я співаю (e, бо обставина на першому місці)."
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
                "Ar paotr a lenn.",
                "Хлопець читає."
              ],
              [
                "Alies e lennan.",
                "Часто я читаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense-periphrastic",
        "title": "Перфект (кावout/bezañ + дієприкметник) — B1",
        "titleEn": "Perfect Tense (Kavout/Bezañ + Participle) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється допоміжним дієсловом kaout (мати) для більшості дієслів, або bezañ (бути) для дієслів руху/стану, плюс дієприкметник минулого часу.",
            "en": {
              "text": "The perfect is formed with the auxiliary kaout (to have) for most verbs, or bezañ (to be) for motion/state verbs, plus the past participle."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Debret em eus.",
                "Я вже поїв."
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
                "Aet eo d'ar gêr.",
                "Він/вона пішов(-ла) додому."
              ],
              [
                "Skrivet he deus ul lizher.",
                "Вона написала листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "pluperfect",
        "title": "Давноминулий час — B1",
        "titleEn": "Pluperfect — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Давноминулий час поєднує ту саму допоміжну конструкцію з дієсловом \"мати/бути\" у минулому незавершеному часі.",
            "en": {
              "text": "The pluperfect combines the same auxiliary construction with \"to have/be\" in the imperfect past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Debret am boa a-raok dont.",
                "Я вже поїв, перш ніж прийти."
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
                "Aet e oa d'ar gêr.",
                "Він уже пішов додому (до того)."
              ],
              [
                "Skrivet he doa ul lizher.",
                "Вона вже написала листа (до того)."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-noun-infinitive-usage",
        "title": "Дієслівний іменник замість дієслова — B1",
        "titleEn": "The Verbal Noun Instead of a Finite Verb — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Бретонський \"інфінітив\" насправді функціонує як іменник (дієслівний іменник) і часто виноситься на початок речення для наголосу, а відмінюване допоміжне ober (робити) додається після нього.",
            "en": {
              "text": "The Breton \"infinitive\" actually functions as a noun (a verbal noun) and is often fronted for emphasis, with the conjugated auxiliary ober (to do) added after it."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dont a ran.",
                "Я прийду (буквально: приходити роблю)."
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
                "Karout a ran ac'hanout.",
                "Я люблю тебе."
              ],
              [
                "Lenn a ra al levr.",
                "Він/вона читає книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "impersonal-passive-form",
        "title": "Безособова форма (пасив без підмета) — B2",
        "titleEn": "Impersonal Form (Subjectless Passive) — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен час має окрему безособову форму дієслова (закінчення -er/-or), що виражає дію без вказаного виконавця — типова кельтська риса, відсутня в романських чи германських мовах.",
            "en": {
              "text": "Every tense has a separate impersonal verb form (ending -er/-or) expressing an action with no specified doer — a typical Celtic feature absent from Romance or Germanic languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Lennet e vez al levrioù.",
                "Книги читають (безособово, хтось невідомий)."
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
                "Debret e vez bara amañ.",
                "Тут їдять хліб (безособово)."
              ],
              [
                "Graet e voe kalz labour.",
                "Було зроблено багато роботи."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-vs-punctual-distinction",
        "title": "Три форми \"бути\": zo/eo/emañ — B1",
        "titleEn": "Three \"To Be\" Forms: Zo/Eo/Emañ — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Крім zo (ототожнення) й eo (те саме значення в іншому синтаксичному контексті), emañ вживається спеціально для місцезнаходження \"тут і зараз\" — три різні слова замість одного \"є\".",
            "en": {
              "text": "Besides zo (identity) and eo (the same meaning in a different syntactic context), emañ is used specifically for location \"here and now\" — three different words instead of one \"is\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ur c'helenner eo.",
                "Він учитель (ототожнення)."
              ],
              [
                "Er gêr emañ.",
                "Він удома (місцезнаходження)."
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
                "Amañ emañ ar levr.",
                "Книга тут."
              ],
              [
                "Yann zo laouen.",
                "Янн щасливий."
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
        "id": "soft-mutation",
        "title": "М'яка мутація — B1",
        "titleEn": "Soft Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "М'яка мутація — найпоширеніший тип, при якому глухі приголосні стають дзвінкими, а деякі дзвінкі — фрикативними, після означеного артикля з іменниками жіночого роду й в інших контекстах.",
            "en": {
              "text": "The soft mutation is the most common type, where voiceless consonants become voiced, and some voiced ones become fricatives, after the definite article with feminine nouns and in other contexts."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kador (стілець)",
                "ar gador",
                "стілець → цей стілець (k→g)"
              ],
              [
                "ti (дім)",
                "an ti",
                "без мутації тут (t після an не змінюється)"
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
                "Ar gador zo bras.",
                "Стілець великий."
              ],
              [
                "Ur vaouez zo amañ.",
                "Тут є жінка (m→v)."
              ]
            ]
          }
        ]
      },
      {
        "id": "spirant-mutation",
        "title": "Спірантна мутація — B1",
        "titleEn": "Spirant Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Спірантна мутація перетворює k, p, t на фрикативні звуки c'h, f, z, вживається переважно після числівника \"три\" й після присвійних займенників 1-ї особи.",
            "en": {
              "text": "The spirant mutation turns k, p, t into the fricatives c'h, f, z, used mostly after the numeral \"three\" and after 1st-person possessives."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kalon (серце)",
                "ma c'halon",
                "моє серце (k→c'h)"
              ],
              [
                "ti (дім)",
                "tri zi",
                "три доми (t→z)"
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
                "Ma c'hazh zo gwenn.",
                "Мій кіт білий."
              ],
              [
                "Tri fried zo amañ.",
                "Тут троє чоловіків (p→f)."
              ]
            ]
          }
        ]
      },
      {
        "id": "hard-mutation",
        "title": "Тверда мутація — B1",
        "titleEn": "Hard Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тверда мутація, навпаки, перетворює дзвінкі приголосні на глухі, вживається після деяких прийменників і часток заперечення.",
            "en": {
              "text": "The hard mutation, conversely, turns voiced consonants into voiceless ones, used after certain prepositions and the negative particle."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "bara (хліб)",
                "ne bar ket bara",
                "тут b→p після ne (заперечення)"
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
                "Ne gomprenan ket.",
                "Я не розумію (g→k)."
              ],
              [
                "Ho ti zo bras.",
                "Ваш дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "mutation-triggers-overview",
        "title": "Огляд тригерів мутації — B2",
        "titleEn": "Overview of Mutation Triggers — B2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади тригерів",
            "rows": [
              [
                "ar/an/al + ж.р. однини",
                "м'яка мутація"
              ],
              [
                "ma (мій)",
                "спірантна мутація"
              ],
              [
                "ne (заперечення)",
                "тверда мутація"
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
                "Ar wreg a lenn.",
                "Жінка читає (g залишається, тут інша умова)."
              ],
              [
                "Ne welan ket anezhañ.",
                "Я його не бачу."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation-suffixes-various",
        "title": "Множина — розмаїття суфіксів — A2",
        "titleEn": "Plural Formation — Various Suffixes — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома різними суфіксами (-où, -ien, -ed, -i) залежно від конкретного іменника, а не одним універсальним правилом.",
            "en": {
              "text": "The plural is formed with several different suffixes (-où, -ien, -ed, -i) depending on the specific noun, rather than one universal rule."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ti (дім)",
                "tiez",
                "доми"
              ],
              [
                "den (людина)",
                "tud",
                "люди (супплетивна форма)"
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
                "Tiez zo bras.",
                "Доми великі."
              ],
              [
                "Tud zo amañ.",
                "Тут є люди."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-irregular-vowel-change",
        "title": "Множина через зміну голосного — B1",
        "titleEn": "Plural via Vowel Change — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі іменники утворюють множину не суфіксом, а внутрішньою зміною голосного основи — подібно до англійського foot/feet.",
            "en": {
              "text": "Some nouns form the plural not with a suffix but with an internal vowel change in the stem — similar to English foot/feet."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "karr (машина)",
                "kirri",
                "машини (a→i)"
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
                "Kirri zo war an hent.",
                "На дорозі є машини."
              ],
              [
                "Meur a garr zo gwerzhet.",
                "Продано кілька машин."
              ]
            ]
          }
        ]
      },
      {
        "id": "dual-number-body-parts",
        "title": "Двоїна для парних частин тіла — B1",
        "titleEn": "Dual Number for Paired Body Parts — B1",
        "emoji": "👀",
        "sections": [
          {
            "type": "intro",
            "text": "Парні частини тіла мають окрему двоїнну форму з префіксом daou-/div-, відмінну і від однини, і від звичайної множини.",
            "en": {
              "text": "Paired body parts have a separate dual form with the prefix daou-/div-, distinct from both the singular and the regular plural."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "lagad (око)",
                "daoulagad",
                "двоє очей"
              ],
              [
                "dorn (рука)",
                "daouarn",
                "дві руки"
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
                "Daoulagad glas he deus.",
                "У неї блакитні очі."
              ],
              [
                "Gant e zaouarn e labour.",
                "Він працює своїми руками."
              ]
            ]
          }
        ]
      },
      {
        "id": "grammatical-gender-two-way",
        "title": "Два роди: чоловічий/жіночий — A1",
        "titleEn": "Two Genders: Masculine/Feminine — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід (без середнього) — рід невидимий на самому іменнику, але видимий через мутацію після артикля.",
            "en": {
              "text": "Nouns are masculine or feminine (no neuter) — gender is invisible on the noun itself, but visible through mutation after the article."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "an ti (ч.р., без мутації)",
                "дім"
              ],
              [
                "ar gador (ж.р., з мутацією)",
                "стілець"
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
                "An ti zo bras.",
                "Дім великий."
              ],
              [
                "Ar gador zo nevez.",
                "Стілець новий."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-indefinite-article",
        "title": "Відсутність неозначеного артикля — A1",
        "titleEn": "No Indefinite Article — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від французької чи англійської, бретонська взагалі не має неозначеного артикля (\"a/an\") — гола форма іменника вже означає \"якийсь\".",
            "en": {
              "text": "Unlike French or English, Breton has no indefinite article at all (\"a/an\") — the bare noun form already means \"a/some\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ti",
                "дім / якийсь дім (без артикля)"
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
                "Ur ti",
                "теж \"якийсь дім\" (ur вживається рідше, з наголосом)"
              ],
              [
                "Ti zo amañ.",
                "Тут є дім."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-ar-al-an",
        "title": "Означений артикль ar/al/an — A1",
        "titleEn": "Definite Article Ar/Al/An — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль має три форми (ar, al, an), обрані за першою літерою наступного слова.",
            "en": {
              "text": "The definite article has three forms (ar, al, an), chosen by the first letter of the following word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ar c'hi (собака)",
                "цей собака"
              ],
              [
                "an ti (дім)",
                "цей дім"
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
                "Al levr zo mat.",
                "Книга хороша."
              ],
              [
                "An dud zo laouen.",
                "Люди щасливі."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (-mañ/-se) — A1",
        "titleEn": "Demonstratives (-Mañ/-Se) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні частки -mañ (це) і -se (те) додаються ПІСЛЯ іменника з означеним артиклем, а не стоять окремо перед ним.",
            "en": {
              "text": "The demonstrative particles -mañ (this) and -se (that) are added AFTER the noun with the definite article, rather than standing separately before it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "al levr-mañ",
                "ця книга"
              ],
              [
                "an ti-se",
                "той дім"
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
                "Al levr-mañ zo mat.",
                "Ця книга гарна."
              ],
              [
                "An ti-se zo bras.",
                "Той дім великий."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-mutation-trigger",
        "title": "Присвійні займенники (тригери мутації) — A2",
        "titleEn": "Possessives (Mutation Triggers) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники стоять перед іменником і кожен викликає свій тип мутації першого приголосного — ma (мій) спірантну, e (його) м'яку, he (її) тверду.",
            "en": {
              "text": "Possessives stand before the noun and each triggers its own type of mutation on the first consonant — ma (my) spirant, e (his) soft, he (her) hard."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ma zi (мій дім, спірантна)",
                "e di (його дім, м'яка)"
              ],
              [
                "he zi (її дім, тверда)",
                "три різних мутації того самого слова"
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
                "Ma c'hazh zo gwenn.",
                "Мій кіт білий."
              ],
              [
                "He c'hazh zo du.",
                "Її кіт чорний."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-a-e",
        "title": "Відносне слово (a/ma) — B1",
        "titleEn": "Relative Particle (A/Ma) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне означальне речення вводиться часткою a (для підмета) чи ma (для непрямого додатка) замість окремого слова \"який/що\".",
            "en": {
              "text": "A relative clause is introduced with the particle a (for the subject) or ma (for an oblique object), rather than a separate word for \"who/which\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "an den a zeuas dec'h",
                "людина, яка прийшла вчора"
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
                "Al levr a lennan zo mat.",
                "Книга, яку я читаю, гарна."
              ],
              [
                "An ti ma choman ennañ zo kozh.",
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
                "piv",
                "хто"
              ],
              [
                "petra",
                "що"
              ],
              [
                "pelec'h",
                "де"
              ],
              [
                "pegoulz",
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
                "Piv out?",
                "Хто ти?"
              ],
              [
                "Pelec'h e chomez?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-construction",
        "title": "Зворотна конструкція (en em) — B1",
        "titleEn": "Reflexive Construction (En Em) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення виражається часткою en em, поставленою перед дієслівним іменником.",
            "en": {
              "text": "The reflexive meaning is expressed with the particle en em, placed before the verbal noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "gwelout (бачити)",
                "en em welout",
                "бачити себе"
              ],
              [
                "kannañ (мити)",
                "en em gannañ",
                "митися"
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
                "En em wel a ra er melezour.",
                "Він бачить себе в дзеркалі."
              ],
              [
                "En em gannañ a ran bemdez.",
                "Я миюся щодня."
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
                "unan",
                "1"
              ],
              [
                "daou/div",
                "2"
              ],
              [
                "tri/teir",
                "3"
              ],
              [
                "dek",
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
                "Div c'hoar am eus.",
                "У мене дві сестри."
              ],
              [
                "Dek den zo deuet.",
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
            "text": "Числа понад 20 будуються на основі 20 (ugent), подібно до французької: 40 буквально \"два-двадцять\", 80 — \"чотири-двадцять\".",
            "en": {
              "text": "Numbers above 20 are built on a base of 20 (ugent), similar to French: 40 is literally \"two-twenty\", 80 is \"four-twenty\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ugent",
                "20"
              ],
              [
                "daou-ugent",
                "40 (2×20)"
              ],
              [
                "pevar-ugent",
                "80 (4×20)"
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
                "Daou-ugent bloaz am eus.",
                "Мені сорок років."
              ],
              [
                "Pevar-ugent den zo deuet.",
                "Прийшло вісімдесят людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-noun-agreement",
        "title": "Однина іменника після числівника — A2",
        "titleEn": "Singular Noun After Numerals — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник зазвичай залишається в однині, а не переходить у множину.",
            "en": {
              "text": "After a numeral the noun usually stays singular, rather than switching to the plural."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "daou zen",
                "двоє людей (буквально: два людина)"
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
                "Tri levr am eus.",
                "У мене три книги."
              ],
              [
                "Pemp bloaz zo tremenet.",
                "Минуло п'ять років."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjugated-prepositions",
        "title": "Прийменники, що відмінюються за особою — B1",
        "titleEn": "Prepositions That Conjugate by Person — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники (gant \"з\", da \"до\", evit \"для\") відмінюються за особою, як дієслова, — коли додаток займенниковий, він зливається в одне слово з прийменником.",
            "en": {
              "text": "Prepositions (gant \"with\", da \"to\", evit \"for\") conjugate by person like verbs — when the object is a pronoun, it fuses into one word with the preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади \"gant\" (з)",
            "rows": [
              [
                "ganin",
                "зі мною"
              ],
              [
                "ganit",
                "з тобою"
              ],
              [
                "gantañ",
                "з ним"
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
                "Deuet eo ganin.",
                "Він прийшов зі мною."
              ],
              [
                "Ul levr am eus roet dezhañ.",
                "Я дав йому книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-vso-fronting",
        "title": "Порядок слів VSO та винесення на початок — B1",
        "titleEn": "VSO Order & Fronting — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча базовий порядок вважається VSO, на практиці елемент, на якому робиться наголос (підмет, додаток чи обставина), майже завжди виноситься на перше місце перед дієсловом.",
            "en": {
              "text": "Although the base order is considered VSO, in practice the emphasized element (subject, object, or adverbial) is almost always fronted before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Ar paotr a lenn al levr.",
                "Хлопець читає книгу (підмет спереду)."
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
                "Al levr a lenn ar paotr.",
                "Книгу читає хлопець (додаток спереду, наголос)."
              ],
              [
                "Bremañ e labouran.",
                "Зараз я працюю."
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
                "ha/hag",
                "і, та"
              ],
              [
                "met",
                "але"
              ],
              [
                "pe",
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
                "Me ha te zo mignoned.",
                "Я і ти — друзі."
              ],
              [
                "Mont a garfen, met n'em eus ket amzer.",
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
                "rak",
                "тому що"
              ],
              [
                "mar",
                "якщо"
              ],
              [
                "pa",
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
                "Laouen on rak deuet out.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Pa vin dieub e vin bec'h.",
                "Коли буду вільний, подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова (gallout/dleout) — A2",
        "titleEn": "Modal Verbs (Gallout/Dleout) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Gallout a ran neuial.",
                "Я вмію плавати."
              ],
              [
                "Dleout a ran mont.",
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
                "Dleout a rez studiañ.",
                "Тобі треба вчитися."
              ],
              [
                "Mennout a ran sikour.",
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
                "kalz",
                "багато"
              ],
              [
                "nebeut",
                "мало"
              ],
              [
                "un tammig",
                "трохи"
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
                "Kalz levrioù am eus.",
                "У мене багато книг."
              ],
              [
                "Roit din un tammig dour.",
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
                "Lun",
                "понеділок"
              ],
              [
                "Sadorn",
                "субота"
              ],
              [
                "Sul",
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
                "Hiziv zo Lun.",
                "Сьогодні понеділок."
              ],
              [
                "Diskuizhañ a ran d'ar Sul.",
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
                "Genver",
                "січень"
              ],
              [
                "Mae",
                "травень"
              ],
              [
                "Kerzu",
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
                "Ma deiziad-ganedigezh zo e Mae.",
                "Мій день народження в травні."
              ],
              [
                "Hiziv eo an dekvet a viz Genver.",
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
                "Pet eur eo?",
                "Котра година?"
              ],
              [
                "Teir eur eo.",
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
                "En em welout a raimp da c'hwec'h eur.",
                "Зустрінемось о шостій."
              ],
              [
                "Kreisteiz eo bremañ.",
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
                "Demat",
                "Привіт"
              ],
              [
                "Trugarez",
                "Дякую"
              ],
              [
                "Kenavo",
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
                "Mont a ra?",
                "Як справи?"
              ],
              [
                "Trugarez vras.",
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
                "Heol zo.",
                "Сонячно."
              ],
              [
                "Glav a ra.",
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
                "Yen eo hiziv.",
                "Сьогодні холодно."
              ],
              [
                "Tomm bras eo.",
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
                "kaout aon",
                "боятися (буквально: мати страх)"
              ],
              [
                "mont a ra brav",
                "все гаразд (буквально: іде гарно)"
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
                "Aon am eus.",
                "Я боюся."
              ],
              [
                "Mont a ra brav ganin.",
                "У мене все гаразд."
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
                "buan",
                "швидко"
              ],
              [
                "gouestlek",
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
                "Buan e red.",
                "Він швидко бігає."
              ],
              [
                "Komzit gouestlek, mar plij.",
                "Говоріть повільніше, будь ласка."
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
                "-ded",
                "утворює абстрактні іменники (free→frankiz-ded, вільний→свобода)"
              ],
              [
                "-our",
                "утворює назви професій (labour→labourer, робота→робітник)"
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
                "Ar frankiz zo pouezus.",
                "Свобода важлива."
              ],
              [
                "Ul labourer eo.",
                "Він робітник."
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
                "dorn (рука) + skoell (рукав)",
                "dornskoell (рукавичка)"
              ],
              [
                "ti (дім) + kêr (місто)",
                "kêr (місто, історичне з'єднання)"
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
                "Ma dornskoelloù zo tomm.",
                "Мої рукавички теплі."
              ],
              [
                "Mont a ran d'ar gêr.",
                "Я йду в місто."
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
                "nevez-amzer",
                "весна"
              ],
              [
                "hañv",
                "літо"
              ],
              [
                "diskar-amzer",
                "осінь"
              ],
              [
                "goañv",
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
                "Tomm eo en hañv.",
                "Влітку тепло."
              ],
              [
                "Karout a ran an diskar-amzer.",
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
                "Pegement eo?",
                "Скільки коштує?"
              ],
              [
                "Mil euro eo.",
                "Тисяча євро."
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
                "Al levr-mañ zo daou-ugent euro.",
                "Ця книга коштує сорок євро."
              ],
              [
                "Ker bras eo.",
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
                "Soñjal a ran...",
                "Я думаю, що..."
              ],
              [
                "Da'm meno...",
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
                "Soñjal a ran ez out gwir.",
                "Я думаю, що ти правий."
              ],
              [
                "Da'm meno ur soñj vat eo.",
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
                "hiziv / warc'hoazh / dec'h",
                "сьогодні / завтра / вчора"
              ],
              [
                "bremañ / goude",
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
                "Kenavo warc'hoazh.",
                "До завтра."
              ],
              [
                "Ampich on bremañ.",
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
                "unan bennak",
                "хтось"
              ],
              [
                "un dra bennak",
                "щось"
              ],
              [
                "den ebet",
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
                "Unan bennak en deus pellgomzet din.",
                "Хтось мені подзвонив."
              ],
              [
                "Klevet em eus un dra bennak.",
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
                "Ma doue!",
                "Ой! (буквально: мій Боже)"
              ],
              [
                "Dispar!",
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
                "Ma doue, ken brav!",
                "Ой, як гарно!"
              ],
              [
                "Dispar, keleier mat!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-emana",
        "title": "Конструкція наявності \"zo\" — A2",
        "titleEn": "Existential \"Zo\" (There Is) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Dour zo.",
                "Є вода."
              ],
              [
                "Amzer n'eus ket.",
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
                "Kalz tud zo amañ.",
                "Тут багато людей."
              ],
              [
                "Stal ebet n'eus amañ.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-ig) — B1",
        "titleEn": "Diminutives (-Ig) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливість виражається дуже продуктивним суфіксом -ig, доданим до кінця іменника.",
            "en": {
              "text": "Affection/diminutive is expressed with the highly productive suffix -ig, added to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ti (дім)",
                "tiig",
                "будиночок"
              ],
              [
                "mamm (мама)",
                "mammig",
                "матусенька"
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
                "Ur c'hi bihanig eo.",
                "Це маленький собачка."
              ],
              [
                "Ma mammig zo mat-tre.",
                "Моя матусенька дуже добра."
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
                "Aotrou",
                "пан"
              ],
              [
                "Itron",
                "пані"
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
                "Demat, Aotrou.",
                "Вітаю, пане."
              ],
              [
                "Digarezit, Itron.",
                "Вибачте, пані."
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
                "Ar wirionez a zo mat da lavarout.",
                "Правду добре казати."
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
                "Nemet labour a ro frouezh.",
                "Тільки праця дає плоди."
              ],
              [
                "An amzer a dremen buan.",
                "Час минає швидко."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-french",
        "title": "Запозичення з французької — B1",
        "titleEn": "French Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через багатовікові тісні контакти з французькою мовою бретонська має шар сучасної й адміністративної лексики, запозиченої з французької, хоча зберігає власну кельтську базову лексику.",
            "en": {
              "text": "Through centuries of close contact with French, Breton has a layer of modern and administrative vocabulary borrowed from French, while retaining its own Celtic core vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "telefon (з фр.)",
                "телефон"
              ],
              [
                "ofis (з фр.)",
                "офіс"
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
                "Ma zelefon zo torret.",
                "Мій телефон зламався."
              ],
              [
                "War-lec'h ez an d'an ofis.",
                "Потім я йду в офіс."
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
            "text": "Прикметник зазвичай стоїть ПІСЛЯ іменника, як у французькій.",
            "en": {
              "text": "The adjective usually stands AFTER the noun, like in French."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "un ti bras",
                "великий дім"
              ],
              [
                "ur plac'h koant",
                "гарна дівчина"
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
                "Ur c'hi bihan am eus.",
                "У мене маленький собака."
              ],
              [
                "Ar plac'h koant a gan.",
                "Гарна дівчина співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (-oc'h/-añ) — A2",
        "titleEn": "Comparative & Superlative (-Och/-Añ) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -oc'h, найвищий — суфіксом -añ.",
            "en": {
              "text": "The comparative is formed with the suffix -oc'h, the superlative with -añ."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "bras (великий)",
                "brasoc'h",
                "більший"
              ],
              [
                "bras (великий)",
                "brasañ",
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
                "An ti-mañ zo brasoc'h.",
                "Цей дім більший."
              ],
              [
                "Hi eo ar skañvañ er skol.",
                "Вона найрозумніша в школі."
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
                "kentañ",
                "перший"
              ],
              [
                "eil",
                "другий"
              ],
              [
                "trede",
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
                "Ma levr kentañ eo.",
                "Це моя перша книга."
              ],
              [
                "An eil plas en deus tapet.",
                "Він зайняв друге місце."
              ]
            ]
          }
        ]
      },
      {
        "id": "verbal-noun-deep",
        "title": "Дієслівний іменник як синтаксичний центр — B2",
        "titleEn": "The Verbal Noun as the Syntactic Pivot — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Бретонський дієслівний іменник може вживатися і як звичайний іменник з артиклем/прикметником, і як центр складеного присудка — це подвійна природа є ключем до розуміння всього дієслівного синтаксису мови.",
            "en": {
              "text": "The Breton verbal noun can be used both as a regular noun with an article/adjective and as the pivot of a compound predicate — this dual nature is key to understanding the language's whole verbal syntax."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "al lenn (читання, іменник)",
                "lenn a ran (я читаю, дієслівний присудок)"
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
                "Al lenn zo dudius.",
                "Читання цікаве."
              ],
              [
                "Lenn a ran al levr.",
                "Я читаю книгу."
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
                "Mamm!",
                "Мамо!"
              ],
              [
                "Yann, deus amañ!",
                "Янне, іди сюди!"
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
                "Mamm, deus amañ!",
                "Мамо, іди сюди!"
              ],
              [
                "Aotrou, sikourit ac'hanon.",
                "Пане, допоможіть мені."
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
        "id": "conjugated-prepositions-deep",
        "title": "Повна парадигма відмінюваних прийменників — B2",
        "titleEn": "The Full Paradigm of Conjugated Prepositions — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від майже всіх мов цього курсу, кожен бретонський прийменник має ПОВНУ парадигму з окремою формою для кожної особи — це не виняток з кількома прийменниками, а системна риса всієї прийменникової системи, як у валлійській чи ірландській.",
            "en": {
              "text": "Unlike almost every language in this course, every Breton preposition has a FULL paradigm with a separate form for every person — this isn't an exception involving a few prepositions, it's a systematic trait of the entire preposition system, as in Welsh or Irish."
            }
          },
          {
            "type": "table",
            "title": "Повна парадигма \"da\" (до)",
            "rows": [
              [
                "din / dit / dezhañ",
                "мені / тобі / йому"
              ],
              [
                "dimp / deoc'h / dezho",
                "нам / вам / їм"
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
                "Roet en deus ul levr din.",
                "Він дав мені книгу."
              ],
              [
                "Komzet he deus dezho.",
                "Вона поговорила з ними."
              ]
            ]
          }
        ]
      },
      {
        "id": "dialectal-fragmentation-four-dialects",
        "title": "Чотири діалекти без єдиної розмовної норми — B2",
        "titleEn": "Four Dialects with No Single Spoken Standard — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Бретонська історично не мала єдиної усної норми — чотири основні діалекти (леонський, корнуайський, треґорський, ваннський) розрізняються вимовою, лексикою й навіть частиною граматики настільки, що письмовий стандарт (peurunvan), який викладає цей курс, є значною мірою штучним компромісом.",
            "en": {
              "text": "Breton historically had no single spoken standard — the four main dialects (Léon, Cornouaille, Trégor, Vannetais) differ in pronunciation, vocabulary, and even some grammar enough that the written standard (peurunvan) taught in this course is largely an artificial compromise."
            }
          },
          {
            "type": "table",
            "title": "Приклад розбіжності",
            "rows": [
              [
                "Леон/Корнуай/Треґор: kelenner (учитель)",
                "спільна форма"
              ],
              [
                "Ванн: skoler (учитель)",
                "зовсім інше слово"
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
                "Ur c'helenner on e Bro-Léon.",
                "Я вчитель у Леоні."
              ],
              [
                "Ur skoler on e Bro-Wened.",
                "Я вчитель у Ванні (інше слово)."
              ]
            ]
          }
        ]
      },
      {
        "id": "revitalization-diwan-schools",
        "title": "Мова під загрозою й рух відродження Diwan — B2",
        "titleEn": "An Endangered Language & the Diwan Revival Movement — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Кількість носіїв бретонської різко скоротилася протягом 20 ст. через державну політику Франції, спрямовану проти регіональних мов; з 1977 р. рух шкіл-занурень Diwan навчає нове покоління дітей бретонською з нуля, часто без сімейної передачі мови.",
            "en": {
              "text": "The number of Breton speakers dropped sharply during the 20th century due to French state policy against regional languages; since 1977, the Diwan immersion school movement has been teaching a new generation of children Breton from scratch, often with no family transmission of the language."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Skolioù Diwan",
                "школи-занурення бретонською мовою"
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
                "Ma bugel a ya d'ur skol Diwan.",
                "Моя дитина ходить до школи Diwan."
              ],
              [
                "Ar brezhoneg a zo bev c'hoazh.",
                "Бретонська мова досі жива."
              ]
            ]
          }
        ]
      }
    ]
  }
];
