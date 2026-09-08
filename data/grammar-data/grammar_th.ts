// Vymova — data/grammar-data/grammar_th.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник \"я\" в тайській залежить від статі мовця: ผม використовують чоловіки, ดิฉัน — жінки.",
            "en": {
              "text": "The pronoun \"I\" in Thai depends on the speaker's gender: ผม is used by men, ดิฉัน by women."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "ผม / ดิฉัน",
                "я (чоловік / жінка)"
              ],
              [
                "คุณ",
                "ти / ви"
              ],
              [
                "เขา",
                "він / вона"
              ],
              [
                "เรา",
                "ми"
              ],
              [
                "พวกเขา",
                "вони"
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
                "ผมเป็นนักเรียน.",
                "Я студент (чоловік)."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Дієслово \"เป็น\" (бути) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "เป็น використовують для ототожнення (професія, національність), а อยู่ — для позначення місцезнаходження.",
            "en": {
              "text": "เป็น is used for identity statements (profession, nationality), while อยู่ marks location."
            }
          },
          {
            "type": "formula",
            "title": "Підмет + เป็น + іменник",
            "rows": [
              ["ผม", "เป็นนักเรียน", "я студент"],
              ["เขา", "เป็นหมอ", "він/вона лікар"],
              ["เขา", "อยู่ที่บ้าน", "він/вона вдома (อยู่ для місця)"]
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
                "เขาอยู่ที่บ้าน.",
                "Він/вона вдома (อยู่ для місця)."
              ]
            ]
          }
        ],
        "titleEn": "The Verb เป็น (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ไม่\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна частка ไม่ (mâi) ставиться перед дієсловом чи прикметником — тайські дієслова взагалі не відмінюються.",
            "en": {
              "text": "The negative particle ไม่ (mâi) goes before the verb or adjective — Thai verbs never conjugate at all."
            }
          },
          {
            "type": "formula",
            "title": "ไม่ + дієслово/прикметник",
            "rows": [
              ["ผมรู้.", "ผมไม่รู้.", "Я знаю. → Я не знаю."],
              ["อาหารนี้อร่อย.", "อาหารนี้ไม่อร่อย.", "Ця їжа смачна. → Ця їжа не смачна."],
              ["เขามา.", "เขาไม่มา.", "Він приходить. → Він не приходить."]
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
                "อาหารนี้ไม่อร่อย.",
                "Ця їжа не смачна."
              ]
            ]
          }
        ],
        "titleEn": "Negation with ไม่ — A1"
      },
      {
        "id": "questions",
        "title": "Питання з \"ไหม\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються додаванням частки ไหม в кінець стверджувального речення.",
            "en": {
              "text": "Yes/no questions are formed by adding the particle ไหม at the end of the statement."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + ไหม?",
            "rows": [
              ["คุณหิว.", "คุณหิวไหม?", "Ти голодний. → Ти голодний?"],
              ["คุณเหนื่อย.", "คุณเหนื่อยไหม?", "Ти втомлений. → Ти втомлений?"],
              ["เขามา.", "เขามาไหม?", "Він приходить. → Він приходить?"]
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
                "คุณเหนื่อยไหม?",
                "Ти втомлений?"
              ]
            ]
          }
        ],
        "titleEn": "Questions with ไหม — A1"
      },
      {
        "id": "no-conjugation",
        "title": "Без відмінювання й часу — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тайські дієслова мають лише одну форму — час, тривалість чи завершеність дії передають окремими словами-маркерами, а не закінченнями.",
            "en": {
              "text": "Thai verbs have just one form — tense, duration, or completion is shown with separate marker words, not endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "เขากินข้าวแล้ว.",
                "Він/вона вже поїв(-ла) (แล้ว = маркер завершеної дії)."
              ]
            ]
          }
        ],
        "titleEn": "No Conjugation or Tense — A1"
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
        "id": "future-ja",
        "title": "Маркер майбутнього \"จะ\" — A1",
        "titleEn": "Future Marker \"Ja\" — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Тайські дієслова не мають форм часу — майбутня дія позначається окремим словом จะ (ja) перед дієсловом.",
            "en": {
              "text": "Thai verbs have no tense forms — a future action is marked with the separate word จะ (ja) before the verb."
            }
          },
          {
            "type": "formula",
            "title": "จะ + дієслово",
            "rows": [
              [
                "ผม",
                "จะไป",
                "я піду"
              ],
              [
                "เขา",
                "จะกิน",
                "він/вона їстиме"
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
                "พรุ่งนี้ผมจะไปทำงาน.",
                "Завтра я піду на роботу."
              ],
              [
                "เขาจะมาที่นี่.",
                "Він прийде сюди."
              ]
            ]
          }
        ]
      },
      {
        "id": "progressive-kamlang",
        "title": "Маркер тривалості \"กำลัง\" — A2",
        "titleEn": "Progressive Marker \"Kamlang\" — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово กำลัง (kamlang) перед дієсловом показує, що дія відбувається саме зараз.",
            "en": {
              "text": "The word กำลัง (kamlang) before the verb shows that an action is happening right now."
            }
          },
          {
            "type": "formula",
            "title": "กำลัง + дієслово",
            "rows": [
              [
                "ผม",
                "กำลังกิน",
                "я їм (зараз)"
              ],
              [
                "เขา",
                "กำลังทำงาน",
                "він/вона працює (зараз)"
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
                "ฉันกำลังอ่านหนังสือ.",
                "Я зараз читаю книгу."
              ],
              [
                "พวกเขากำลังคุยกัน.",
                "Вони зараз розмовляють."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfective-laew",
        "title": "Маркер завершеності \"แล้ว\" — A1",
        "titleEn": "Perfective Marker \"Laew\" — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Слово แล้ว (laew) в кінці речення показує, що дія вже завершена.",
            "en": {
              "text": "The word แล้ว (laew) at the end of the sentence shows that an action is already complete."
            }
          },
          {
            "type": "formula",
            "title": "дієслово + แล้ว",
            "rows": [
              [
                "ผมกิน",
                "ผมกินแล้ว",
                "я вже поїв"
              ],
              [
                "เขาไป",
                "เขาไปแล้ว",
                "він/вона вже пішов(-ла)"
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
                "ฉันทำการบ้านเสร็จแล้ว.",
                "Я вже зробив домашнє завдання."
              ],
              [
                "เขามาถึงแล้ว.",
                "Він/вона вже прибув(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "experiential-koei",
        "title": "Досвідний маркер \"เคย\" — B1",
        "titleEn": "Experiential Marker \"Koei\" — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Слово เคย (koei) перед дієсловом означає \"мати досвід колись робити щось\" — подібно до Present Perfect в англійській.",
            "en": {
              "text": "The word เคย (koei) before the verb means \"to have ever done something\" — similar to the English Present Perfect of experience."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ผมเคยไปญี่ปุ่น.",
                "Я колись бував у Японії."
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
                "คุณเคยกินทุเรียนไหม?",
                "Ти колись їв дуріан?"
              ],
              [
                "เขาไม่เคยเห็นหิมะ.",
                "Він ніколи не бачив снігу."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-perfective-yang",
        "title": "Ще не... \"ยัง...ไม่...\" — B1",
        "titleEn": "\"Not Yet\" — \"Yang...Mai...\" — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція ยัง...ไม่...(เลย) виражає \"ще не\" — заперечний відповідник маркера завершеності แล้ว.",
            "en": {
              "text": "The construction ยัง...ไม่...(เลย) expresses \"not yet\" — the negative counterpart of the perfective marker แล้ว."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ผมยังไม่กิน.",
                "Я ще не їв."
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
                "เขายังไม่มาเลย.",
                "Він ще зовсім не прийшов."
              ],
              [
                "ฉันยังไม่ได้ทำการบ้าน.",
                "Я ще не зробив домашнє завдання."
              ]
            ]
          }
        ]
      },
      {
        "id": "continuous-yu",
        "title": "Тривала дія \"อยู่\" (після дієслова) — B1",
        "titleEn": "Continuous \"Yu\" (After the Verb) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Слово อยู่ (yu) після дієслова також означає тривалість дії — на відміну від กำลัง, воно ставиться після, а не перед дієсловом, і обидва можна поєднувати.",
            "en": {
              "text": "The word อยู่ (yu) after the verb also marks ongoing action — unlike กำลัง, it goes after rather than before the verb, and the two can be combined."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "เขากินอยู่.",
                "Він/вона зараз їсть."
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
                "เด็กๆ เล่นอยู่.",
                "Діти зараз граються."
              ],
              [
                "ฝนตกอยู่.",
                "Зараз іде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб (สิ/เถอะ) — A2",
        "titleEn": "Imperative Mood (Si/Thoe) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ — це гола форма дієслова; частка สิ додає рішучості, а เถอะ пом'якшує наказ до пропозиції.",
            "en": {
              "text": "A command is just the bare verb; the particle สิ adds firmness, while เถอะ softens it into a suggestion."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ไปสิ!",
                "Іди ж бо!"
              ],
              [
                "ไปเถอะ.",
                "Ходімо (пропозиція)."
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
                "นั่งสิ!",
                "Сідай же!"
              ],
              [
                "กินข้าวเถอะ.",
                "Давай поїмо."
              ]
            ]
          }
        ]
      },
      {
        "id": "prohibitive-negative-imperative",
        "title": "Заборона \"ห้าม/อย่า\" — A2",
        "titleEn": "Prohibition \"Ham/Ya\" — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечного наказу вживають не ไม่, а окремі слова อย่า (не роби) чи ห้าม (заборонено).",
            "en": {
              "text": "For the negative imperative, not ไม่ but the dedicated words อย่า (don't) or ห้าม (forbidden) are used."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "อย่าไป!",
                "Не йди!"
              ],
              [
                "ห้ามสูบบุหรี่.",
                "Курити заборонено."
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
                "อย่าพูดเสียงดัง.",
                "Не говори голосно."
              ],
              [
                "ห้ามเข้า.",
                "Вхід заборонено."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-can-dai",
        "title": "Модальне \"ได้\" (могти) — A2",
        "titleEn": "Modal \"Dai\" (Can) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ได้ (dai), поставлене після дієслова, виражає можливість чи здатність — на відміну від багатьох мов, модальне слово йде після, а не перед дієсловом.",
            "en": {
              "text": "The word ได้ (dai), placed after the verb, expresses ability or possibility — unlike many languages, the modal word comes after rather than before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ผมพูดไทยได้.",
                "Я вмію говорити тайською."
              ],
              [
                "คุณช่วยผมได้ไหม?",
                "Ти можеш мені допомогти?"
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
                "เขาว่ายน้ำได้.",
                "Він уміє плавати."
              ],
              [
                "พรุ่งนี้ฝนอาจตกได้.",
                "Завтра може піти дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-must-tong",
        "title": "Модальне \"ต้อง\" (мусити) — A2",
        "titleEn": "Modal \"Tong\" (Must) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ต้อง (tong) перед дієсловом виражає обов'язок чи необхідність.",
            "en": {
              "text": "The word ต้อง (tong) before the verb expresses obligation or necessity."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ผมต้องไป.",
                "Мені треба йти."
              ],
              [
                "คุณต้องทำงาน.",
                "Тобі треба працювати."
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
                "เราต้องเรียน.",
                "Нам треба вчитися."
              ],
              [
                "ไม่ต้องรีบ.",
                "Не треба поспішати."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-want-yak",
        "title": "Модальне \"อยาก\" (хотіти) — A1",
        "titleEn": "Modal \"Yak\" (Want To) — A1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Слово อยาก (yak) перед дієсловом виражає бажання виконати дію (на відміну від ต้องการ, яке вживається перед іменником).",
            "en": {
              "text": "The word อยาก (yak) before the verb expresses a desire to do something (unlike ต้องการ, which is used before a noun)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ผมอยากกิน.",
                "Я хочу їсти."
              ],
              [
                "เธออยากนอน.",
                "Вона хоче спати."
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
                "พวกเขาอยากกลับบ้าน.",
                "Вони хочуть додому."
              ],
              [
                "ผมไม่อยากพูด.",
                "Я не хочу говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "serial-verb-constructions",
        "title": "Ланцюжки дієслів — B1",
        "titleEn": "Serial Verb Constructions — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів можуть стояти підряд без сполучника, кожне додає окремий відтінок значення до однієї події — типова риса мов Південно-Східної Азії.",
            "en": {
              "text": "Several verbs can stand one after another with no conjunction, each adding a shade of meaning to a single event — a typical feature of Southeast Asian languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "เดินไปโรงเรียน.",
                "Іти пішки до школи (буквально: іти-йти-школа)."
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
                "เขาวิ่งออกไป.",
                "Він вибіг (буквально: бігти-вийти)."
              ],
              [
                "ผมซื้อกลับมาให้คุณ.",
                "Я купив і приніс тобі (буквально: купити-повернутися-дати)."
              ]
            ]
          }
        ]
      },
      {
        "id": "direction-verbs-serial",
        "title": "Дієслова напрямку \"ไป/มา\" — A2",
        "titleEn": "Direction Verbs \"Pai/Ma\" (Go/Come) — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "У ланцюжку дієслів ไป (йти геть) і มา (прийти сюди) додаються після основного дієслова, щоб показати напрямок дії відносно мовця.",
            "en": {
              "text": "In a verb chain, ไป (go away) and มา (come here) are added after the main verb to show the direction of the action relative to the speaker."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "เอาไป",
                "віднести (геть)"
              ],
              [
                "เอามา",
                "принести (сюди)"
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
                "ช่วยเอาน้ำมาให้หน่อย.",
                "Принеси мені трохи води, будь ласка."
              ],
              [
                "เขาเอากระเป๋าไปแล้ว.",
                "Він уже забрав сумку."
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
        "id": "classifiers-overview",
        "title": "Класифікатори (ลักษณนาม) — A2",
        "titleEn": "Classifiers Overview — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб порахувати іменник, після числа обов'язково додають спеціальне слово-класифікатор, яке залежить від типу предмета — риса, спільна з в'єтнамською й китайською.",
            "en": {
              "text": "To count a noun, a special classifier word must follow the number, chosen according to the type of object — a feature shared with Vietnamese and Chinese."
            }
          },
          {
            "type": "formula",
            "title": "іменник + число + класифікатор",
            "rows": [
              [
                "หนังสือ (книга)",
                "หนังสือ 2 เล่ม",
                "дві книги"
              ],
              [
                "คน (людина)",
                "คน 3 คน",
                "три людини"
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
                "ฉันมีแมว 2 ตัว.",
                "У мене два коти."
              ],
              [
                "เขาซื้อรถ 1 คัน.",
                "Він купив одну машину."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifier-examples-common",
        "title": "Поширені класифікатори — B1",
        "titleEn": "Common Classifiers — B1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Основні класифікатори",
            "rows": [
              [
                "คน",
                "для людей"
              ],
              [
                "ตัว",
                "для тварин, одягу, меблів"
              ],
              [
                "ใบ",
                "для плоских/круглих предметів (листя, тарілки)"
              ],
              [
                "อัน",
                "загальний для дрібних предметів"
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
                "นักเรียน 5 คน",
                "п'ятеро учнів"
              ],
              [
                "จาน 3 ใบ",
                "три тарілки"
              ]
            ]
          }
        ]
      },
      {
        "id": "no-plural-marking",
        "title": "Відсутність множини — A1",
        "titleEn": "No Plural Marking — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники в тайській не змінюються за числом — форма однини й множини однакова, кількість зрозуміла з контексту чи числівника.",
            "en": {
              "text": "Nouns in Thai don't change for number — the singular and plural form are identical, quantity is clear from context or a numeral."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "หนังสือ",
                "книга / книги"
              ],
              [
                "เด็ก",
                "дитина / діти"
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
                "หนังสืออยู่บนโต๊ะ.",
                "Книга(-и) на столі."
              ],
              [
                "เด็กเล่นอยู่.",
                "Дитина(-и) грається(-ються)."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-plural-intensity",
        "title": "Редуплікація — B1",
        "titleEn": "Reduplication — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова підсилює значення прикметника чи натякає на \"різноманітність\" у випадку іменників.",
            "en": {
              "text": "Repeating a word intensifies an adjective's meaning or hints at \"variety\" in the case of nouns."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "สวย (гарний)",
                "สวยสวย",
                "дуже гарний"
              ],
              [
                "เด็ก ๆ",
                "діти (різні, багато)"
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
                "บ้านนี้สวยสวย.",
                "Цей дім справді гарний."
              ],
              [
                "เด็ก ๆ เล่นอยู่ในสวน.",
                "Діти граються в саду."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-comment-structure",
        "title": "Топік-коментар структура — B1",
        "titleEn": "Topic-Comment Structure — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Тему речення часто виносять на початок, а решту речення будують як коментар про неї — підмет також часто опускають, якщо він зрозумілий з контексту.",
            "en": {
              "text": "The topic of a sentence is often fronted, with the rest of the sentence built as a comment about it — the subject is also often dropped when clear from context."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "หนังสือเล่มนี้ ผมอ่านแล้ว.",
                "Цю книгу я вже прочитав."
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
                "กินข้าวหรือยัง?",
                "Ти вже їв? (підмет опущено)"
              ],
              [
                "อาหารไทย ผมชอบมาก.",
                "Тайську їжу я дуже люблю."
              ]
            ]
          }
        ]
      },
      {
        "id": "tone-system-overview",
        "title": "Система тонів — A1",
        "titleEn": "Tone System Overview — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Тайська — тональна мова з 5 тонами (середній, низький, спадний, високий, висхідний), кожен з яких змінює значення слова навіть при однаковому написанні звуків.",
            "en": {
              "text": "Thai is a tonal language with 5 tones (mid, low, falling, high, rising), each of which changes a word's meaning even when the sound spelling is identical."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонового ряду",
            "rows": [
              [
                "มา (середній)",
                "приходити"
              ],
              [
                "ม้า (падаючий)",
                "кінь"
              ],
              [
                "หมา (висхідний)",
                "собака"
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
                "เขามาแล้ว.",
                "Він уже прийшов."
              ],
              [
                "ฉันมีม้าหนึ่งตัว.",
                "У мене один кінь."
              ]
            ]
          }
        ]
      },
      {
        "id": "politeness-particles-krap-ka",
        "title": "Ввічливі частки ครับ/ค่ะ — A1",
        "titleEn": "Politeness Particles Krap/Ka — A1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливі частки ครับ (чоловіки) і ค่ะ/คะ (жінки) додаються в кінець речення для ввічливості — їхній вибір залежить від статі мовця, а не слухача.",
            "en": {
              "text": "The politeness particles ครับ (men) and ค่ะ/คะ (women) are added to the end of a sentence for politeness — their choice depends on the speaker's gender, not the listener's."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "สวัสดีครับ.",
                "Привіт (чоловік каже)."
              ],
              [
                "สวัสดีค่ะ.",
                "Привіт (жінка каже)."
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
                "ขอบคุณครับ.",
                "Дякую (чоловік)."
              ],
              [
                "ขอโทษค่ะ.",
                "Вибачте (жінка)."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-pronouns",
        "title": "Ієрархія займенників \"я/ти\" — B1",
        "titleEn": "The Hierarchy of \"I/You\" Pronouns — B1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Крім базових ผม/ดิฉัน, існує ціла низка слів для \"я\" та \"ти\" залежно від віку, статусу й стосунків — наприклад, พี่/น้อง (старший/молодший) часто заміняють займенники в розмові.",
            "en": {
              "text": "Beyond the basic ผม/ดิฉัน, there's a whole set of words for \"I\" and \"you\" depending on age, status, and relationship — for example, พี่/น้อง (elder/younger) often replace pronouns in conversation."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "พี่ (до старшого, теж \"я\" старшого)",
                "старший брат/сестра (звертання)"
              ],
              [
                "น้อง (до молодшого)",
                "молодший брат/сестра (звертання)"
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
                "พี่จะไปไหน?",
                "Куди ти йдеш? (до старшого, ввічливо)"
              ],
              [
                "น้องกินข้าวหรือยัง?",
                "Ти вже їв? (до молодшого)"
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
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), як в українській.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), like in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ผมกินข้าว.",
                "Я їм рис."
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
                "แม่ทำอาหาร.",
                "Мама готує їжу."
              ],
              [
                "นักเรียนอ่านหนังสือ.",
                "Учні читають книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-as-verb",
        "title": "Прикметник як дієслово — A2",
        "titleEn": "Adjectives Functioning as Verbs — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Тайські прикметники самі функціонують як дієслова стану — не потрібна окрема зв'язка \"бути\" перед ними.",
            "en": {
              "text": "Thai adjectives themselves function as stative verbs — no separate \"to be\" copula is needed before them."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "อาหารอร่อย.",
                "Їжа смачна (буквально: їжа смакує)."
              ],
              [
                "บ้านใหญ่.",
                "Дім великий."
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
                "เขาสูง.",
                "Він високий."
              ],
              [
                "ห้องนี้ร้อน.",
                "У цій кімнаті жарко."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (กว่า/ที่สุด) — A2",
        "titleEn": "Comparative & Superlative (Kwa/Thi Sut) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється словом กว่า після прикметника, найвищий — словом ที่สุด.",
            "en": {
              "text": "The comparative is formed with the word กว่า after the adjective, the superlative with ที่สุด."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ใหญ่ (великий)",
                "ใหญ่กว่า",
                "більший"
              ],
              [
                "ใหญ่ (великий)",
                "ใหญ่ที่สุด",
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
                "บ้านนี้ใหญ่กว่าบ้านนั้น.",
                "Цей дім більший за той."
              ],
              [
                "เขาสูงที่สุดในห้อง.",
                "Він найвищий у кімнаті."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-three-way",
        "title": "Вказівні слова (นี่/นั่น/โน่น) — A1",
        "titleEn": "Three-Way Demonstratives — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні слова мають три ступені відстані: นี่ (це, близько), นั่น (те, середня відстань), โน่น (он те, далеко) — подібно до тайської сусідки в'єтнамської.",
            "en": {
              "text": "Demonstratives have three degrees of distance: นี่ (this, near), นั่น (that, mid-distance), โน่น (that over there, far) — similar to neighboring Vietnamese."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "นี่คือหนังสือ.",
                "Це книга."
              ],
              [
                "นั่นคือรถ.",
                "Те — машина."
              ],
              [
                "โน่นคือภูเขา.",
                "Он там гора."
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
                "หนังสือเล่มนี้ของผม.",
                "Ця книга моя."
              ],
              [
                "บ้านโน่นสวยมาก.",
                "Он той дім дуже гарний."
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
                "ใคร",
                "хто"
              ],
              [
                "อะไร",
                "що"
              ],
              [
                "ที่ไหน",
                "де"
              ],
              [
                "เมื่อไหร่",
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
                "คุณชื่ออะไร?",
                "Як тебе звати?"
              ],
              [
                "คุณอยู่ที่ไหน?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-thi",
        "title": "Відносне слово \"ที่\" — B1",
        "titleEn": "Relative Marker \"Thi\" — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ที่ (thi) вводить підрядне означальне речення й перекладається як \"який/що\".",
            "en": {
              "text": "The word ที่ (thi) introduces a relative clause and translates as \"who/which/that\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "คนที่มาเมื่อวานเป็นเพื่อนผม.",
                "Людина, яка прийшла вчора, — мій друг."
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
                "หนังสือที่คุณอ่านสนุกไหม?",
                "Книга, яку ти читаєш, цікава?"
              ],
              [
                "ร้านที่เราไปอร่อยมาก.",
                "Ресторан, куди ми ходили, дуже смачний."
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
                "หนึ่ง",
                "1"
              ],
              [
                "สอง",
                "2"
              ],
              [
                "สาม",
                "3"
              ],
              [
                "สิบ",
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
                "ผมมีพี่สาวสองคน.",
                "У мене дві старші сестри."
              ],
              [
                "คนสิบคนมาแล้ว.",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-classifier-order",
        "title": "Порядок число + класифікатор — A2",
        "titleEn": "Number + Classifier Word Order — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Порядок слів при рахунку — іменник, потім число, потім класифікатор (окрім числа \"один\", яке іноді ставлять перед іменником для наголосу).",
            "en": {
              "text": "The word order when counting is noun, then number, then classifier (except \"one\", which is sometimes placed before the noun for emphasis)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "แมว 3 ตัว",
                "три коти (іменник-число-класифікатор)"
              ],
              [
                "หนึ่งคน",
                "одна людина (перед іменником для наголосу)"
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
                "ฉันมีหนังสือ 5 เล่ม.",
                "У мене п'ять книг."
              ],
              [
                "มีคนหนึ่งคนรออยู่.",
                "Чекає одна людина."
              ]
            ]
          }
        ]
      },
      {
        "id": "possession-khong",
        "title": "Належність зі словом \"ของ\" — A1",
        "titleEn": "Possession with \"Khong\" (Of) — A1",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність виражається словом ของ (khong, \"з/від\") між предметом і власником, хоча в розмовній мові його часто пропускають.",
            "en": {
              "text": "Possession is expressed with the word ของ (khong, \"of\") between the object and the owner, though it's often dropped in casual speech."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "หนังสือของผม",
                "моя книга"
              ],
              [
                "บ้านของเขา",
                "його/її дім"
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
                "นี่คือรถของฉัน.",
                "Це моя машина."
              ],
              [
                "เพื่อนของเขาเป็นหมอ.",
                "Його друг — лікар."
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
                "เยอะ / มาก",
                "багато"
              ],
              [
                "น้อย",
                "мало"
              ],
              [
                "บาง",
                "деякі"
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
                "ผมมีหนังสือเยอะ.",
                "У мене багато книг."
              ],
              [
                "ขอน้ำนิดหน่อย.",
                "Дай мені трохи води."
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
                "และ",
                "і, та"
              ],
              [
                "แต่",
                "але"
              ],
              [
                "หรือ",
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
                "ผมและคุณเป็นเพื่อนกัน.",
                "Я і ти — друзі."
              ],
              [
                "อยากไป แต่ไม่มีเวลา.",
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
                "เพราะ",
                "тому що"
              ],
              [
                "ถ้า",
                "якщо"
              ],
              [
                "เมื่อ",
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
                "ผมดีใจเพราะคุณมา.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "ถ้าว่าง ผมจะโทรหาคุณ.",
                "Якщо буду вільний, подзвоню тобі."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-should-khuan",
        "title": "Модальне \"ควร\" (варто б) — B1",
        "titleEn": "Modal \"Khuan\" (Should) — B1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Слово ควร (khuan) перед дієсловом виражає пораду чи м'який обов'язок — \"варто б\".",
            "en": {
              "text": "The word ควร (khuan) before the verb expresses advice or a soft obligation — \"should\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "คุณควรพักผ่อน.",
                "Тобі варто відпочити."
              ],
              [
                "เราควรไปแต่เช้า.",
                "Нам варто піти раніше."
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
                "เขาควรขอโทษ.",
                "Йому варто вибачитись."
              ],
              [
                "ไม่ควรพูดแบบนั้น.",
                "Не варто так говорити."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words-wh",
        "title": "Питання \"скільки/як багато\" — A2",
        "titleEn": "\"How Many/Much\" Questions — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "กี่ + класифікатор",
                "скільки (для дискретної кількості)"
              ],
              [
                "เท่าไหร่",
                "скільки (для ціни/кількості загалом)"
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
                "คุณมีพี่น้องกี่คน?",
                "Скільки в тебе братів і сестер?"
              ],
              [
                "นี่ราคาเท่าไหร่?",
                "Скільки це коштує?"
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
                "วันจันทร์",
                "понеділок"
              ],
              [
                "วันเสาร์",
                "субота"
              ],
              [
                "วันอาทิตย์",
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
                "วันนี้วันจันทร์.",
                "Сьогодні понеділок."
              ],
              [
                "ผมพักผ่อนวันอาทิตย์.",
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
                "มกราคม",
                "січень"
              ],
              [
                "พฤษภาคม",
                "травень"
              ],
              [
                "ธันวาคม",
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
                "วันเกิดผมคือเดือนพฤษภาคม.",
                "Мій день народження в травні."
              ],
              [
                "วันนี้คือวันที่สิบมกราคม.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Час (шестигодинна система) — B1",
        "titleEn": "Telling Time (6-Hour System) — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Тайська традиційна система часу ділить добу на чотири 6-годинні періоди зі своїми словами замість простого 12/24-годинного відліку.",
            "en": {
              "text": "The traditional Thai time system divides the day into four 6-hour periods with their own words, instead of a simple 12/24-hour count."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "กี่โมงแล้ว?",
                "Котра година?"
              ],
              [
                "บ่ายสองโมง",
                "друга дня (14:00)"
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
                "เราจะเจอกันตอนหกโมงเย็น.",
                "Зустрінемось о шостій вечора."
              ],
              [
                "ตอนนี้เที่ยงวัน.",
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
                "สวัสดี",
                "Привіт"
              ],
              [
                "ขอบคุณ",
                "Дякую"
              ],
              [
                "ลาก่อน",
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
                "สบายดีไหม?",
                "Як справи?"
              ],
              [
                "ขอบคุณมาก.",
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
                "แดดออก.",
                "Сонячно."
              ],
              [
                "ฝนตก.",
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
                "วันนี้อากาศร้อนมาก.",
                "Сьогодні дуже жарко."
              ],
              [
                "อากาศเย็นสบาย.",
                "Погода приємно прохолодна."
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
                "ใจเย็น ๆ",
                "заспокойся (буквально: серце холодне)"
              ],
              [
                "น้ำท่วมปาก",
                "не наважитись сказати (буквально: рот залитий водою)"
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
                "ใจเย็น ๆ นะ, ไม่มีอะไร.",
                "Заспокойся, все гаразд."
              ],
              [
                "เขาน้ำท่วมปากไม่กล้าบอก.",
                "Він не наважився сказати."
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
            "type": "intro",
            "text": "Прислівники способу дії зазвичай ставляться одразу після дієслова й часто мають ту саму форму, що й прикметник.",
            "en": {
              "text": "Manner adverbs are usually placed right after the verb and often have the same form as the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "เร็ว",
                "швидко"
              ],
              [
                "ช้า",
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
                "เขาวิ่งเร็ว.",
                "Він швидко бігає."
              ],
              [
                "พูดช้า ๆ หน่อย.",
                "Говори трохи повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-compounds",
        "title": "Складні слова — B1",
        "titleEn": "Compound Words — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ไฟ (вогонь) + ฟ้า (небо)",
                "ไฟฟ้า (електрика)"
              ],
              [
                "น้ำ (вода) + แข็ง (твердий)",
                "น้ำแข็ง (лід)"
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
                "ไฟฟ้าดับ.",
                "Електрику вимкнули."
              ],
              [
                "ขอน้ำแข็งหน่อย.",
                "Дай трохи льоду."
              ]
            ]
          }
        ]
      },
      {
        "id": "seasons",
        "title": "Пори року (три сезони) — A2",
        "titleEn": "Seasons (Three Seasons) — A2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "У Таїланді розрізняють три сезони, а не чотири: спекотний, дощовий і прохолодний.",
            "en": {
              "text": "Thailand distinguishes three seasons rather than four: hot, rainy, and cool."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ฤดูร้อน",
                "спекотний сезон"
              ],
              [
                "ฤดูฝน",
                "дощовий сезон"
              ],
              [
                "ฤดูหนาว",
                "прохолодний сезон"
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
                "ฤดูฝนมาแล้ว.",
                "Дощовий сезон уже настав."
              ],
              [
                "ฤดูหนาวอากาศเย็นสบาย.",
                "У прохолодний сезон погода приємна."
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
                "ราคาเท่าไหร่?",
                "Скільки коштує?"
              ],
              [
                "ราคาหนึ่งพันบาท.",
                "Коштує тисячу бат."
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
                "หนังสือเล่มนี้ราคาสองร้อยบาท.",
                "Ця книга коштує двісті бат."
              ],
              [
                "แพงมาก.",
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
                "ผมคิดว่า...",
                "Я думаю, що..."
              ],
              [
                "ในความคิดของผม...",
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
                "ผมคิดว่าคุณพูดถูก.",
                "Я думаю, що ти правий."
              ],
              [
                "ในความคิดของผม นี่เป็นความคิดที่ดี.",
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
                "วันนี้ / พรุ่งนี้ / เมื่อวาน",
                "сьогодні / завтра / вчора"
              ],
              [
                "ตอนนี้ / ทีหลัง",
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
                "พรุ่งนี้เจอกัน.",
                "Побачимось завтра."
              ],
              [
                "ตอนนี้ผมไม่ว่าง.",
                "Зараз я зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені слова — B1",
        "titleEn": "Indefinite Pronouns — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ใครบางคน",
                "хтось"
              ],
              [
                "อะไรบางอย่าง",
                "щось"
              ],
              [
                "ไม่มีใคร",
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
                "มีใครบางคนโทรมา.",
                "Хтось мені подзвонив."
              ],
              [
                "ผมได้ยินอะไรบางอย่าง.",
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
                "โอ้โห!",
                "Ого!"
              ],
              [
                "ว้าว!",
                "Вау!"
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
                "โอ้โห สวยมาก!",
                "Ого, дуже гарно!"
              ],
              [
                "ว้าว เก่งมาก!",
                "Вау, дуже класно!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-mi",
        "title": "Конструкція \"є/немає\" (มี/ไม่มี) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Mi/Mai Mi) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Слово มี (mi) означає і \"мати\", і \"є/існує\" — залежно від контексту, заперечується словом ไม่มี.",
            "en": {
              "text": "The word มี (mi) means both \"to have\" and \"there is/exists\" — depending on context, and is negated with ไม่มี."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "มีน้ำ.",
                "Є вода."
              ],
              [
                "ไม่มีเวลา.",
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
                "มีคนเยอะที่นี่.",
                "Тут багато людей."
              ],
              [
                "ไม่มีร้านที่นี่.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives-affection",
        "title": "Пестливі слова (เล็ก, ๆ น้อย ๆ) — B1",
        "titleEn": "Diminutives (Lek, Noi) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Замість суфіксів пестливість виражається окремими словами: เล็ก (маленький) чи น้อย (крихітний), доданими після іменника.",
            "en": {
              "text": "Instead of suffixes, diminutive/affection is expressed with separate words: เล็ก (small) or น้อย (tiny), added after the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "บ้านหลังเล็ก",
                "маленький будиночок"
              ],
              [
                "น้องน้อย",
                "малюк (молодша дитина)"
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
                "แมวตัวเล็กน่ารักมาก.",
                "Маленький котик дуже милий."
              ],
              [
                "น้องน้อยกำลังนอน.",
                "Малюк спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-final-particles-mood",
        "title": "Кінцеві частки настрою (นะ, ล่ะ) — B1",
        "titleEn": "Sentence-Final Mood Particles (Na, La) — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Частки นะ (м'яке прохання/наголос) і ล่ะ (уточнення/легке здивування) додаються в кінці речення, щоб передати емоційний відтінок без зміни буквального змісту.",
            "en": {
              "text": "The particles นะ (a soft request/emphasis) and ล่ะ (a clarification/mild surprise) are added at the end of a sentence to convey an emotional shade without changing the literal meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ไปนะ.",
                "Я пішов, добре? (м'яко)"
              ],
              [
                "แล้วคุณล่ะ?",
                "А ти як щодо тебе?"
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
                "ระวังนะ.",
                "Обережно, гаразд?"
              ],
              [
                "กินอะไรล่ะ?",
                "То що ти їстимеш?"
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
                "คุณ + ім'я",
                "пан/пані (ввічливо, універсально)"
              ],
              [
                "พี่ / น้อง + ім'я",
                "старший/молодший (родинно-теплий тон)"
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
                "สวัสดีครับ คุณสมชาย.",
                "Вітаю, пане Сомчай."
              ],
              [
                "พี่จอยว่ายังไง?",
                "Що скаже старша сестра Джой?"
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-sanskrit-pali-english",
        "title": "Запозичення з санскриту, палі та англійської — B1",
        "titleEn": "Loanwords from Sanskrit, Pali & English — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Формальна й релігійна лексика запозичена з санскриту й палі (мов буддійських текстів), тоді як сучасна технічна лексика часто йде з англійської.",
            "en": {
              "text": "Formal and religious vocabulary is borrowed from Sanskrit and Pali (the languages of Buddhist texts), while modern technical vocabulary often comes from English."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "วิทยา (з санскр., \"знання/наука\")",
                "науковий суфікс, напр. ชีววิทยา (біологія)"
              ],
              [
                "คอมพิวเตอร์ (з англ. \"computer\")",
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
                "ผมเรียนชีววิทยา.",
                "Я вивчаю біологію."
              ],
              [
                "คอมพิวเตอร์ของผมเสีย.",
                "Мій комп'ютер зламався."
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
                "น้ำขึ้นให้รีบตัก.",
                "Коли вода прибуває, поспішай зачерпнути (лови момент)."
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
                "โอกาสดีแบบนี้ น้ำขึ้นให้รีบตัก.",
                "Така гарна нагода — лови момент."
              ],
              [
                "ช้าๆ ได้พร้าเล่มงาม.",
                "Повільно, але вправно (терпіння дає якісний результат)."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-nuances-mai-chai",
        "title": "Нюанси заперечення \"ไม่\" та \"ไม่ใช่\" — B1",
        "titleEn": "Negation Nuances \"Mai\" & \"Mai Chai\" — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "\"ไม่\" заперечує дієслово чи прикметник, а \"ไม่ใช่\" заперечує саме іменник у реченнях ототожнення з เป็น.",
            "en": {
              "text": "\"ไม่\" negates a verb or adjective, while \"ไม่ใช่\" negates a noun specifically in identity sentences with เป็น."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ผมไม่หิว.",
                "Я не голодний."
              ],
              [
                "นี่ไม่ใช่หนังสือของผม.",
                "Це не моя книга."
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
                "เขาไม่ใช่หมอ.",
                "Він не лікар."
              ],
              [
                "ผมไม่ชอบกาแฟ.",
                "Мені не подобається кава."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-prepositions",
        "title": "Прийменники місця — A2",
        "titleEn": "Locative Prepositions — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Основні",
            "rows": [
              [
                "ใน",
                "в, всередині"
              ],
              [
                "บน",
                "на (поверхні)"
              ],
              [
                "ใต้",
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
                "หนังสืออยู่บนโต๊ะ.",
                "Книга на столі."
              ],
              [
                "แมวอยู่ใต้เก้าอี้.",
                "Кіт під стільцем."
              ]
            ]
          }
        ]
      },
      {
        "id": "emphasis-particles",
        "title": "Частки наголосу (เอง, จริง ๆ) — B1",
        "titleEn": "Emphasis Particles (Eng, Ching-Ching) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Слово เอง після займенника наголошує \"саме сам\", а จริง ๆ в кінці речення підсилює значення до \"справді/дійсно\".",
            "en": {
              "text": "The word เอง after a pronoun emphasizes \"one's own self\", while จริง ๆ at the end of a sentence intensifies meaning to \"really/truly\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ผมทำเอง.",
                "Я зробив це сам."
              ],
              [
                "อร่อยจริง ๆ.",
                "Справді смачно."
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
                "เธอไปเอง.",
                "Вона пішла сама."
              ],
              [
                "สวยจริง ๆ.",
                "Справді гарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-age-duration",
        "title": "Вік та тривалість часу — A2",
        "titleEn": "Age & Duration — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "อายุเท่าไหร่?",
                "Скільки років?"
              ],
              [
                "ผมอายุยี่สิบปี.",
                "Мені двадцять років."
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
                "เขาเรียนมาสามปีแล้ว.",
                "Він навчається вже три роки."
              ],
              [
                "รอสักครู่.",
                "Зачекай хвилинку."
              ]
            ]
          }
        ]
      },
      {
        "id": "buddhist-calendar-year",
        "title": "Буддійський календар (พ.ศ.) — B1",
        "titleEn": "The Buddhist Calendar (B.E.) — B1",
        "emoji": "📆",
        "sections": [
          {
            "type": "intro",
            "text": "У Таїланді офіційно вживають буддійський календар (พ.ศ.), який випереджає григоріанський на 543 роки.",
            "en": {
              "text": "Thailand officially uses the Buddhist calendar (B.E.), which runs 543 years ahead of the Gregorian calendar."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "2026 (григ.)",
                "2569 พ.ศ."
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
                "ปีนี้คือ พ.ศ. 2569.",
                "Цей рік — 2569 за буддійським календарем."
              ],
              [
                "เขาเกิดปี พ.ศ. 2543.",
                "Він народився в 2543 році (буддійський)."
              ]
            ]
          }
        ]
      },
      {
        "id": "kinship-terms-overview",
        "title": "Родинні терміни — A2",
        "titleEn": "Kinship Terms — A2",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "intro",
            "text": "Родинні терміни розрізняють старшого/молодшого (навіть серед братів і сестер) і часто вживаються як звертання до незнайомих людей відповідного віку.",
            "en": {
              "text": "Kinship terms distinguish elder/younger (even among siblings) and are often used as address terms for strangers of a corresponding age."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "พี่ชาย / น้องชาย",
                "старший брат / молодший брат"
              ],
              [
                "พี่สาว / น้องสาว",
                "старша сестра / молодша сестра"
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
                "ผมมีพี่ชายหนึ่งคน.",
                "У мене є один старший брат."
              ],
              [
                "น้องสาวผมเรียนอยู่.",
                "Моя молодша сестра навчається."
              ]
            ]
          }
        ]
      },
      {
        "id": "onomatopoeia-sound-words",
        "title": "Звуконаслідувальні слова — B1",
        "titleEn": "Onomatopoeia — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Звуконаслідувальні слова часто подвоюються й широко вживаються для опису звуків і навіть відчуттів.",
            "en": {
              "text": "Onomatopoeic words are often doubled and widely used to describe sounds and even sensations."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ปังปัง",
                "бах-бах (звук пострілу)"
              ],
              [
                "จุ๊บจุ๊บ",
                "цмок-цмок (звук поцілунку)"
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
                "ได้ยินเสียงปังปัง.",
                "Було чутно звук \"бах-бах\"."
              ],
              [
                "หมาเห่าโฮ่งโฮ่ง.",
                "Собака гавкав \"гав-гав\"."
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
        "id": "tone-minimal-pairs",
        "title": "Тонові мінімальні пари — B1",
        "titleEn": "Tonal Minimal Pairs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Слова з однаковими приголосними й голосними, але різними тонами мають абсолютно різне значення — неправильний тон може перетворити \"кінь\" на \"собаку\" чи \"прийти\".",
            "en": {
              "text": "Words with identical consonants and vowels but different tones have completely different meanings — the wrong tone can turn \"horse\" into \"dog\" or \"to come\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад тонової п'ятірки",
            "rows": [
              [
                "ไหม (висхідний)",
                "шовк / чи не так? (питальна частка)"
              ],
              [
                "ไม้ (падаючий)",
                "дерево, деревина"
              ],
              [
                "ใหม่ (низький)",
                "новий"
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
                "เสื้อผ้าไหม",
                "шовковий одяг"
              ],
              [
                "รถใหม่",
                "нова машина"
              ]
            ]
          }
        ]
      },
      {
        "id": "royal-language-register",
        "title": "Королівська мова (ราชาศัพท์) — B2",
        "titleEn": "Royal Language Register (Rachasap) — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Для розмови про королівську родину й у чернечому контексті вживають окремий, повністю відмінний словниковий регістр ราชาศัพท์ (рачасап) — навіть звичайні дієслова \"їсти\" чи \"спати\" замінюються унікальними словами.",
            "en": {
              "text": "For talking about the royal family and in monastic contexts, a completely separate vocabulary register called ราชาศัพท์ (rachasap) is used — even ordinary verbs like \"to eat\" or \"to sleep\" are replaced with unique words."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "กิน (звичайне \"їсти\")",
                "เสวย (королівське \"їсти\")"
              ],
              [
                "นอน (звичайне \"спати\")",
                "บรรทม (королівське \"спати\")"
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
                "พระองค์เสวยพระกระยาหาร.",
                "Його Величність вживає їжу (королівський регістр)."
              ],
              [
                "พระองค์บรรทมแล้ว.",
                "Його Величність вже спочиває (королівський регістр)."
              ]
            ]
          }
        ]
      },
      {
        "id": "script-no-spaces-punctuation",
        "title": "Письмо без пробілів між словами — B1",
        "titleEn": "Writing With No Spaces Between Words — B1",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від усіх мов цього курсу, тайське письмо не ставить пробілів між словами всередині речення (пробіл позначає кінець речення чи фрази) — межі слів читач визначає з контексту.",
            "en": {
              "text": "Unlike every language in this course, Thai writing places no spaces between words within a sentence (a space marks the end of a sentence or phrase) — the reader determines word boundaries from context."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ผมกินข้าวที่บ้าน",
                "я+їсти+рис+відносний.маркер+дім (без пробілів між словами)"
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
                "เขาเดินไปโรงเรียนทุกวัน",
                "Він щодня йде пішки до школи."
              ],
              [
                "ฉันชอบอ่านหนังสือมาก",
                "Мені дуже подобається читати книги."
              ]
            ]
          }
        ]
      }
    ]
  }
];
