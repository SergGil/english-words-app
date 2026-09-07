// Vymova — data/grammar-data/grammar_vi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_VI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Đại từ nhân xưng — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "В’єтнамські займенники залежать від віку, статі та ступеня формальності — це не просто \"я/ти/він\", а звертання на кшталт \"старший брат\", \"молодша сестра\" тощо. Нижче — нейтральні базові форми для початківців.",
            "en": {
              "text": "Vietnamese pronouns depend on age, gender, and formality — they work more like kinship terms (\"older brother\", \"younger sister\") than fixed words. Below are the neutral beginner-level forms."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "tôi",
                "я (нейтральне, ввічливе)"
              ],
              [
                "bạn",
                "ти / ви (до ровесника)"
              ],
              [
                "anh",
                "він / ти (старший чоловік)"
              ],
              [
                "chị",
                "вона / ти (старша жінка)"
              ],
              [
                "chúng tôi",
                "ми (без співрозмовника)"
              ],
              [
                "họ",
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
                "Tôi là sinh viên.",
                "Я студент."
              ],
              [
                "Bạn khỏe không?",
                "Як ти? (букв. Ти здоровий?)"
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "verb-la",
        "title": "Động từ \"là\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "\"Là\" (бути/є) з’єднує підмет з іменником і не змінюється за особами, числом чи часом — на відміну від англійського \"to be\".",
            "en": {
              "text": "\"Là\" (to be) links a subject to a noun and never changes for person, number, or tense — unlike English \"to be\"."
            }
          },
          {
            "type": "formula",
            "title": "S + là + іменник",
            "rows": [
              [
                "Tôi",
                "là",
                "giáo viên. (Я вчитель.)"
              ],
              [
                "Đây",
                "là",
                "sách. (Це книга.)"
              ],
              [
                "Cô ấy",
                "là",
                "bác sĩ. (Вона лікар.)"
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
                "Anh ấy là bạn tôi.",
                "Він мій друг."
              ],
              [
                "Đây là nhà của tôi.",
                "Це мій дім."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Là (To Be) — A1"
      },
      {
        "id": "negation",
        "title": "Phủ định \"không\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"không\" перед дієсловом чи прикметником. З дієсловом \"là\" перед іменником вживають \"không phải là\".",
            "en": {
              "text": "Negation is formed with the particle \"không\" before a verb or adjective. With \"là\" before a noun, use \"không phải là\" instead."
            }
          },
          {
            "type": "table",
            "title": "Схема заперечення",
            "rows": [
              [
                "không + дієслово/прикметник",
                "không biết (не знаю), không lớn (не великий)"
              ],
              [
                "không phải là + іменник",
                "không phải là bác sĩ (не лікар)"
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
                "Tôi không biết.",
                "Я не знаю."
              ],
              [
                "Đây không phải là xe của tôi.",
                "Це не моя машина."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Không — A1"
      },
      {
        "id": "questions",
        "title": "Câu hỏi \"có ... không?\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання \"так/ні\" утворюються рамковою конструкцією \"có ... không?\" навколо дієслова чи прикметника — порядок слів речення не міняється.",
            "en": {
              "text": "Yes/no questions are formed by wrapping the verb or adjective in \"có ... không?\" — the word order of the statement stays the same."
            }
          },
          {
            "type": "formula",
            "title": "S + có + дієслово/прикметник + không?",
            "rows": [
              [
                "Bạn",
                "có khỏe không?",
                "(Ти здоровий? / Як справи?)"
              ],
              [
                "Anh ấy",
                "có đi không?",
                "(Він іде?)"
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
                "Bạn có khỏe không? — Có, tôi khỏe.",
                "Як ти? — Так, я здоровий."
              ],
              [
                "Chị có bận không? — Không, tôi không bận.",
                "Ти зайнята? — Ні, я не зайнята."
              ]
            ]
          }
        ],
        "titleEn": "Questions with Có...Không? — A1"
      },
      {
        "id": "classifiers",
        "title": "Loại từ (класифікатори) — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Перед іменником у в’єтнамській зазвичай стоїть класифікатор — слово, що вказує категорію предмета (подібно до \"штука\" в \"дві штуки хліба\"). Вибір класифікатора залежить від типу об’єкта.",
            "en": {
              "text": "Vietnamese nouns are usually preceded by a classifier — a word marking the object's category (similar to \"piece\" in \"two pieces of bread\"). The classifier depends on the kind of object."
            }
          },
          {
            "type": "table",
            "title": "Основні класифікатори",
            "rows": [
              [
                "cái",
                "неживі предмети — cái bàn (стіл)"
              ],
              [
                "con",
                "тварини/істоти — con mèo (кіт)"
              ],
              [
                "quả / trái",
                "круглі плоди — quả cam (апельсин)"
              ],
              [
                "chiếc",
                "транспорт, парні предмети — chiếc xe (машина)"
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
                "Tôi có một con mèo.",
                "У мене є кіт."
              ],
              [
                "Đây là quả cam.",
                "Це апельсин."
              ]
            ]
          }
        ],
        "titleEn": "Classifiers — A1"
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
        "id": "aspect-da-past",
        "title": "\"đã\" — hành động đã xảy ra — A1",
        "titleEn": "Past/Completed Aspect: Đã — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "В'єтнамське дієслово взагалі не змінюється за часом. Частка \"đã\" перед дієсловом показує, що дія вже відбулася чи завершена.",
            "en": {
              "text": "Vietnamese verbs never change form for tense at all. The particle \"đã\" before a verb marks that the action has already happened or is completed."
            }
          },
          {
            "type": "formula",
            "title": "S + đã + дієслово",
            "rows": [
              [
                "Tôi",
                "đã ăn",
                "я вже поїв"
              ],
              [
                "Cô ấy",
                "đã đi",
                "вона вже пішла"
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
                "Tôi đã xem phim này rồi.",
                "Я вже дивився цей фільм."
              ],
              [
                "Họ đã đến Việt Nam.",
                "Вони вже приїхали у В'єтнам."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-dang-progressive",
        "title": "\"đang\" — hành động đang diễn ra — A1",
        "titleEn": "Progressive Aspect: Đang — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"đang\" перед дієсловом показує, що дія відбувається саме зараз — пряма відповідність теперішньому тривалому часу.",
            "en": {
              "text": "The particle \"đang\" before a verb marks that the action is happening right now — a direct match to the present continuous."
            }
          },
          {
            "type": "formula",
            "title": "S + đang + дієслово",
            "rows": [
              [
                "Tôi",
                "đang ăn",
                "я саме їм"
              ],
              [
                "Anh ấy",
                "đang ngủ",
                "він саме спить"
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
                "Tôi đang học tiếng Việt.",
                "Я зараз вивчаю в'єтнамську."
              ],
              [
                "Trời đang mưa.",
                "Зараз йде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-se-future",
        "title": "\"sẽ\" — thì tương lai — A1",
        "titleEn": "Future Tense: Sẽ — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"sẽ\" перед дієсловом позначає дію, яка відбудеться в майбутньому.",
            "en": {
              "text": "The particle \"sẽ\" before a verb marks an action that will happen in the future."
            }
          },
          {
            "type": "formula",
            "title": "S + sẽ + дієслово",
            "rows": [
              [
                "Tôi",
                "sẽ đi",
                "я піду"
              ],
              [
                "Chúng tôi",
                "sẽ gặp",
                "ми зустрінемося"
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
                "Ngày mai tôi sẽ đi làm.",
                "Завтра я піду на роботу."
              ],
              [
                "Cô ấy sẽ gọi cho bạn.",
                "Вона тобі зателефонує."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-vua-moi",
        "title": "\"vừa/mới\" — vừa mới xảy ra — A2",
        "titleEn": "Recent Past: Vừa/Mới ('Just Did') — A2",
        "emoji": "🆕",
        "sections": [
          {
            "type": "intro",
            "text": "Частки \"vừa\" чи \"mới\" перед дієсловом показують, що дія відбулася зовсім недавно (\"щойно\").",
            "en": {
              "text": "The particles \"vừa\" or \"mới\" before a verb mark that the action happened very recently (\"just now\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi vừa ăn xong.",
                "Я щойно закінчив їсти."
              ],
              [
                "Anh ấy mới về.",
                "Він щойно повернувся."
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
                "Chúng tôi vừa mới gặp nhau.",
                "Ми щойно зустрілися."
              ],
              [
                "Cô ấy mới gọi cho tôi.",
                "Вона щойно подзвонила мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-roi-completion",
        "title": "\"rồi\" — tiểu từ hoàn thành — A1",
        "titleEn": "Completion Particle: Rồi — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"rồi\" (\"уже\") стоїть у кінці речення й підкреслює, що дія завершена — часто поєднується з \"đã\" на початку для посилення.",
            "en": {
              "text": "The particle \"rồi\" (\"already\") stands at the end of the sentence and emphasizes that an action is complete — often paired with \"đã\" at the start for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi ăn rồi.",
                "Я вже поїв."
              ],
              [
                "Tôi đã ăn rồi.",
                "Я вже точно поїв (подвійний акцент)."
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
                "Bạn làm xong bài tập chưa? — Làm rồi.",
                "Ти вже зробив домашнє? — Уже зробив."
              ],
              [
                "Tôi về nhà rồi.",
                "Я вже повернувся додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-chua-not-yet",
        "title": "\"chưa\" — chưa xảy ra — A2",
        "titleEn": "Negation: Chưa ('Not Yet') — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від \"không\" (просте заперечення), \"chưa\" означає, що дія ще не відбулася, але може відбутися в майбутньому.",
            "en": {
              "text": "Unlike \"không\" (plain negation), \"chưa\" means the action hasn't happened yet but might happen in the future."
            }
          },
          {
            "type": "table",
            "title": "không vs chưa",
            "rows": [
              [
                "Tôi không ăn.",
                "Я не їм (взагалі/не хочу).",
                "không"
              ],
              [
                "Tôi chưa ăn.",
                "Я ще не їв (але поїм).",
                "chưa"
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
                "Tôi chưa làm bài tập.",
                "Я ще не зробив домашнє завдання."
              ],
              [
                "Anh ấy chưa đến.",
                "Він ще не прийшов."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-actions",
        "title": "Hành động thường xuyên (thường/hay) — A2",
        "titleEn": "Habitual Actions (Thường/Hay) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну чи повторювану дію виражають словами \"thường\" (зазвичай) чи \"hay\" (часто) перед дієсловом.",
            "en": {
              "text": "A habitual or repeated action is expressed with \"thường\" (usually) or \"hay\" (often) before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi thường uống cà phê.",
                "Я зазвичай п'ю каву."
              ],
              [
                "Cô ấy hay đi muộn.",
                "Вона часто запізнюється."
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
                "Chúng tôi thường gặp nhau vào cuối tuần.",
                "Ми зазвичай зустрічаємося на вихідних."
              ],
              [
                "Anh ấy hay quên đồ.",
                "Він часто забуває речі."
              ]
            ]
          }
        ]
      },
      {
        "id": "duration-expressions",
        "title": "Diễn đạt khoảng thời gian — B1",
        "titleEn": "Duration Expressions — B1",
        "emoji": "⏲️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалість дії виражається словом \"trong\" (протягом) перед періодом часу, що ставиться після дієслова.",
            "en": {
              "text": "The duration of an action is expressed with \"trong\" (\"for, during\") before the time period, placed after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "học trong hai năm",
                "навчатися два роки"
              ],
              [
                "sống ở đây trong ba tháng",
                "жити тут три місяці"
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
                "Tôi đã học tiếng Anh trong năm năm.",
                "Я вивчав англійську п'ять років."
              ],
              [
                "Chúng tôi ở Hà Nội trong một tuần.",
                "Ми були в Ханої тиждень."
              ]
            ]
          }
        ]
      },
      {
        "id": "frequency-expressions",
        "title": "Tần suất (luôn luôn/thỉnh thoảng/không bao giờ) — A2",
        "titleEn": "Frequency Expressions — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "table",
            "title": "Слова частоти",
            "rows": [
              [
                "luôn luôn",
                "завжди"
              ],
              [
                "thỉnh thoảng",
                "іноді"
              ],
              [
                "không bao giờ",
                "ніколи"
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
                "Tôi luôn luôn đi bộ đến trường.",
                "Я завжди йду пішки до школи."
              ],
              [
                "Anh ấy không bao giờ uống rượu.",
                "Він ніколи не п'є алкоголь."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Câu cầu khiến (hãy/đi) — A2",
        "titleEn": "Imperative Mood (Hãy/Đi) — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється словом \"hãy\" перед дієсловом (м'яке спонукання) або словом \"đi\" після дієслова (розмовне, рішучіше).",
            "en": {
              "text": "The imperative is formed with \"hãy\" before the verb (a gentle urging) or \"đi\" after the verb (casual, more insistent)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Hãy ngồi xuống.",
                "Сідайте, будь ласка."
              ],
              [
                "Đi đi!",
                "Йди вже!"
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
                "Hãy cẩn thận!",
                "Будь обережним!"
              ],
              [
                "Ăn đi!",
                "Їж уже!"
              ]
            ]
          }
        ]
      },
      {
        "id": "time-words-order",
        "title": "Vị trí từ chỉ thời gian — A2",
        "titleEn": "Placement of Time Words — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Слова часу (\"сьогодні\", \"завтра\") найчастіше ставляться на початку речення чи відразу після підмета, перед дієсловом.",
            "en": {
              "text": "Time words (\"today\", \"tomorrow\") are most often placed at the start of the sentence or right after the subject, before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади порядку",
            "rows": [
              [
                "Hôm nay tôi đi làm.",
                "Сьогодні я йду на роботу.",
                "на початку"
              ],
              [
                "Tôi hôm nay đi làm.",
                "Я сьогодні йду на роботу.",
                "після підмета"
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
                "Ngày mai chúng tôi sẽ đi du lịch.",
                "Завтра ми поїдемо в подорож."
              ],
              [
                "Tối qua tôi không ngủ được.",
                "Учора ввечері я не міг заснути."
              ]
            ]
          }
        ]
      },
      {
        "id": "experience-aspect",
        "title": "\"đã từng\" — kinh nghiệm — A2",
        "titleEn": "Experience Aspect: Đã Từng ('Have Ever') — A2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"đã từng\" перед дієсловом виражає досвід у минулому (\"колись робив, мати досвід\").",
            "en": {
              "text": "The construction \"đã từng\" before a verb expresses past experience (\"have ever done, have the experience of\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi đã từng đến Nhật.",
                "Я колись бував у Японії."
              ],
              [
                "Cô ấy chưa từng ăn món này.",
                "Вона ще ніколи не їла цю страву."
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
                "Bạn đã từng xem phim này chưa?",
                "Ти колись дивився цей фільм?"
              ],
              [
                "Anh ấy đã từng làm việc ở đây.",
                "Він колись працював тут."
              ]
            ]
          }
        ]
      },
      {
        "id": "continuous-mai-cu",
        "title": "\"mãi/cứ\" — liên tục — B1",
        "titleEn": "Continuous Action: Mãi/Cứ — B1",
        "emoji": "🔂",
        "sections": [
          {
            "type": "intro",
            "text": "Слова \"mãi\" чи \"cứ\" перед дієсловом виражають дію, що триває невпинно чи повторюється знову і знову, часто з відтінком невдоволення.",
            "en": {
              "text": "The words \"mãi\" or \"cứ\" before a verb express an action that keeps happening endlessly or repeatedly, often with a tone of annoyance."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Anh ấy cứ nói.",
                "Він усе говорить і говорить."
              ],
              [
                "Trời mưa mãi.",
                "Дощ іде безперестанку."
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
                "Con mèo cứ kêu suốt đêm.",
                "Кіт усю ніч нявкав без перестанку."
              ],
              [
                "Tôi cứ quên mật khẩu.",
                "Я постійно забуваю пароль."
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
        "id": "comparison-hon",
        "title": "So sánh hơn (hơn) — A2",
        "titleEn": "Comparative: Hơn — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь порівняння утворюється: прикметник + \"hơn\" + об'єкт порівняння.",
            "en": {
              "text": "The comparative is formed: adjective + \"hơn\" + the object being compared to."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cao hơn",
                "вищий",
                "+ đối tượng"
              ],
              [
                "đẹp hơn",
                "гарніший",
                "+ đối tượng"
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
                "Nhà này lớn hơn nhà kia.",
                "Цей дім більший за той дім."
              ],
              [
                "Tôi cao hơn em tôi.",
                "Я вищий за мого молодшого брата."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparison-nhat",
        "title": "So sánh nhất (nhất) — A2",
        "titleEn": "Superlative: Nhất — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється додаванням \"nhất\" після прикметника.",
            "en": {
              "text": "The superlative is formed by adding \"nhất\" after the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cao nhất",
                "найвищий"
              ],
              [
                "ngon nhất",
                "найсмачніший"
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
                "Đây là món ăn ngon nhất.",
                "Це найсмачніша страва."
              ],
              [
                "Anh ấy là người cao nhất trong lớp.",
                "Він найвищий у класі."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparison-bang",
        "title": "So sánh bằng (bằng/như) — A2",
        "titleEn": "Equal Comparison: Bằng/Như — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Рівне порівняння (\"такий же ... як\") виражається словами \"bằng\" чи \"như\" після прикметника.",
            "en": {
              "text": "Equal comparison (\"as ... as\") is expressed with \"bằng\" or \"như\" after the adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cao bằng",
                "такий же високий, як"
              ],
              [
                "đẹp như",
                "такий же гарний, як"
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
                "Em gái tôi cao bằng tôi.",
                "Моя молодша сестра така ж висока, як я."
              ],
              [
                "Cô ấy đẹp như diễn viên.",
                "Вона гарна, як акторка."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-duoc-bi",
        "title": "Thể bị động (được/bị) — B1",
        "titleEn": "Passive Voice: Được/Bị — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасив утворюється словами \"được\" (позитивний чи нейтральний результат) чи \"bị\" (негативний результат) перед дієсловом.",
            "en": {
              "text": "The passive is formed with \"được\" (a positive or neutral result) or \"bị\" (a negative result) before the verb."
            }
          },
          {
            "type": "table",
            "title": "được vs bị",
            "rows": [
              [
                "Tôi được khen.",
                "Мене похвалили (приємно).",
                "được"
              ],
              [
                "Tôi bị phạt.",
                "Мене покарали (неприємно).",
                "bị"
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
                "Anh ấy được mời đến dự tiệc.",
                "Його запросили на вечірку."
              ],
              [
                "Xe tôi bị hỏng.",
                "Моя машина зламалася (неприємність)."
              ]
            ]
          }
        ]
      },
      {
        "id": "resultative-complement",
        "title": "Bổ ngữ kết quả (xong/được) — B1",
        "titleEn": "Resultative Complements (Xong/Được) — B1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"xong\" після дієслова показує, що дія повністю завершена; \"được\" показує, що дію вдалося успішно виконати.",
            "en": {
              "text": "The word \"xong\" after a verb shows the action is fully finished; \"được\" shows the action was successfully accomplished."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "làm xong",
                "закінчив робити"
              ],
              [
                "làm được",
                "зміг зробити"
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
                "Tôi đã làm xong bài tập.",
                "Я закінчив домашнє завдання."
              ],
              [
                "Tôi không giải được bài toán này.",
                "Я не зміг розв'язати цю задачу."
              ]
            ]
          }
        ]
      },
      {
        "id": "directional-complement",
        "title": "Bổ ngữ chỉ hướng (ra/vào/lên/xuống) — A2",
        "titleEn": "Directional Complements — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Слова напрямку \"ra\" (наружу), \"vào\" (всередину), \"lên\" (вгору), \"xuống\" (вниз) додаються після дієслова руху, щоб уточнити напрямок.",
            "en": {
              "text": "The directional words \"ra\" (out), \"vào\" (in), \"lên\" (up), \"xuống\" (down) are added after a verb of movement to specify direction."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "đi ra",
                "виходити"
              ],
              [
                "đi vào",
                "заходити"
              ],
              [
                "đi lên",
                "йти вгору"
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
                "Anh ấy đi vào phòng.",
                "Він заходить у кімнату."
              ],
              [
                "Em bé chạy ra ngoài.",
                "Дитина вибігла назовні."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-predicate",
        "title": "Tính từ làm vị ngữ — A1",
        "titleEn": "Adjectives as Predicates — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "В'єтнамські прикметники функціонують безпосередньо як присудок, без зв'язки \"là\" — на відміну від іменних присудків.",
            "en": {
              "text": "Vietnamese adjectives function directly as the predicate, with no \"là\" copula needed — unlike noun predicates."
            }
          },
          {
            "type": "table",
            "title": "Прикметник-присудок vs іменник-присудок",
            "rows": [
              [
                "Tôi vui.",
                "Я радий (без \"là\").",
                "прикметник"
              ],
              [
                "Tôi là sinh viên.",
                "Я студент (з \"là\").",
                "іменник"
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
                "Món này ngon.",
                "Ця страва смачна."
              ],
              [
                "Trời hôm nay đẹp.",
                "Сьогодні гарна погода."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifier-full-list",
        "title": "Danh sách loại từ phổ biến — A2",
        "titleEn": "Common Classifiers (Extended List) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На додаток до основних класифікаторів з розділу \"Основи\" (cái, con, quả, chiếc) є й інші: \"người\" (для людей), \"cây\" (дерева, тонкі довгі предмети), \"tờ\" (папір, газети).",
            "en": {
              "text": "In addition to the core classifiers from the Basics section (cái, con, quả, chiếc), there are others: \"người\" (for people), \"cây\" (trees, long thin objects), \"tờ\" (paper, newspapers)."
            }
          },
          {
            "type": "table",
            "title": "Інші класифікатори",
            "rows": [
              [
                "người",
                "hai người bạn (два друга)"
              ],
              [
                "cây",
                "một cây bút (одна ручка)"
              ],
              [
                "tờ",
                "một tờ báo (одна газета)"
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
                "Lớp tôi có hai mươi người học sinh.",
                "У моєму класі двадцять учнів."
              ],
              [
                "Tôi mua một tờ báo.",
                "Я купив одну газету."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Đại từ chỉ định (này/đó/kia) — A1",
        "titleEn": "Demonstratives: Này/Đó/Kia — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Này\" вказує на предмет поруч із мовцем, \"đó/đấy\" — поруч зі слухачем або вже згаданий, \"kia\" — далеко від обох. Завжди стоять після іменника.",
            "en": {
              "text": "\"Này\" points to something near the speaker, \"đó/đấy\" near the listener or already mentioned, \"kia\" far from both. They always follow the noun."
            }
          },
          {
            "type": "table",
            "title": "Три ступені відстані",
            "rows": [
              [
                "cái này",
                "ця річ (тут)",
                "близько до мовця"
              ],
              [
                "cái đó",
                "та річ (у тебе)",
                "близько до слухача"
              ],
              [
                "cái kia",
                "он та річ (далеко)",
                "далеко від обох"
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
                "Quyển sách này rất hay.",
                "Ця книга дуже цікава."
              ],
              [
                "Ai là người kia?",
                "Хто та людина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "question-particle-tags",
        "title": "Câu hỏi có tiểu từ (à/ư/phải không) — A2",
        "titleEn": "Tag Questions (À/Ư/Phải Không) — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Додавання частки \"à\" чи \"ư\" в кінці стверджувального речення перетворює його на питання з відтінком здивування чи уточнення; \"phải không?\" шукає підтвердження (\"чи не так?\").",
            "en": {
              "text": "Adding \"à\" or \"ư\" to the end of a statement turns it into a question with a tone of surprise or checking; \"phải không?\" seeks confirmation (\"right?\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Bạn mệt à?",
                "Ти втомлений?",
                "здивування"
              ],
              [
                "Đây là nhà bạn, phải không?",
                "Це твій дім, чи не так?",
                "підтвердження"
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
                "Anh là người Việt à?",
                "Ти в'єтнамець?"
              ],
              [
                "Cô ấy đẹp, phải không?",
                "Вона гарна, правда ж?"
              ]
            ]
          }
        ]
      },
      {
        "id": "question-word-gi-dau-ai",
        "title": "Đại từ nghi vấn (gì/đâu/ai/nào) — A1",
        "titleEn": "Interrogative Pronouns (Gì/Đâu/Ai/Nào) — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "gì?",
                "що?",
                "Đây là cái gì?"
              ],
              [
                "đâu?",
                "де?",
                "Bạn ở đâu?"
              ],
              [
                "ai?",
                "хто?",
                "Ai đó?"
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
                "Bạn tên là gì?",
                "Як тебе звати?"
              ],
              [
                "Nhà vệ sinh ở đâu?",
                "Де туалет?"
              ]
            ]
          }
        ]
      },
      {
        "id": "alternative-questions",
        "title": "Câu hỏi lựa chọn (hay) — A2",
        "titleEn": "Alternative Questions (Hay) — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"hay\" (\"або\") у питанні пропонує вибір між двома варіантами — на відміну від \"hoặc\", яке вживається лише в стверджувальних реченнях.",
            "en": {
              "text": "The word \"hay\" (\"or\") in a question offers a choice between two options — unlike \"hoặc\", which is only used in statements."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Bạn muốn trà hay cà phê?",
                "Ти хочеш чай чи каву?"
              ],
              [
                "Anh đi bằng xe máy hay ô tô?",
                "Ти їдеш мотоциклом чи машиною?"
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
                "Hôm nay hay ngày mai?",
                "Сьогодні чи завтра?"
              ],
              [
                "Bạn thích mùa hè hay mùa đông?",
                "Тобі подобається літо чи зима?"
              ]
            ]
          }
        ]
      },
      {
        "id": "indefinite-pronouns",
        "title": "Đại từ bất định (ai cũng/gì cũng) — B1",
        "titleEn": "Indefinite Pronouns (Ai Cũng/Gì Cũng) — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Питальне слово + \"cũng\" утворює значення \"будь-хто/будь-що\": \"ai cũng\" (всі, хто завгодно), \"gì cũng\" (будь-що).",
            "en": {
              "text": "An interrogative word plus \"cũng\" forms an \"any-/every-\" meaning: \"ai cũng\" (anyone, everyone), \"gì cũng\" (anything)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ai cũng biết.",
                "Всі знають (будь-хто знає)."
              ],
              [
                "Tôi ăn gì cũng được.",
                "Я з'їм що завгодно."
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
                "Ở đâu cũng có người Việt.",
                "В'єтнамці є всюди."
              ],
              [
                "Khi nào cũng được, đừng lo.",
                "Коли завгодно, не хвилюйся."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-basic",
        "title": "Liên từ cơ bản (và/hoặc/nhưng) — A1",
        "titleEn": "Basic Conjunctions (Và/Hoặc/Nhưng) — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "và",
                "і/та",
                "Tôi và bạn."
              ],
              [
                "hoặc",
                "або",
                "Trà hoặc cà phê."
              ],
              [
                "nhưng",
                "але",
                "Muốn nhưng không thể."
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
                "Tôi thích trà và cà phê.",
                "Мені подобається чай і кава."
              ],
              [
                "Tôi muốn đi nhưng không có thời gian.",
                "Я хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-correlative",
        "title": "Liên từ tương hỗ (vì...nên/nếu...thì) — B1",
        "titleEn": "Correlative Conjunctions (Vì...Nên/Nếu...Thì) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Парні сполучники з'єднують дві частини речення: \"vì...nên\" (\"тому що... отже\") для причини, \"nếu...thì\" (\"якщо... то\") для умови.",
            "en": {
              "text": "Paired conjunctions link two clauses: \"vì...nên\" (\"because... so\") for cause, \"nếu...thì\" (\"if... then\") for condition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Vì trời mưa nên tôi ở nhà.",
                "Тому що йде дощ, я залишився вдома."
              ],
              [
                "Nếu bạn đến thì tôi rất vui.",
                "Якщо ти прийдеш, я дуже зрадію."
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
                "Vì bận nên tôi không đi được.",
                "Через зайнятість я не можу піти."
              ],
              [
                "Nếu có thời gian thì tôi sẽ gọi cho bạn.",
                "Якщо буде час, я тобі подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-basic",
        "title": "Giới từ cơ bản (ở/từ/đến/cho) — A1",
        "titleEn": "Basic Prepositions (Ở/Từ/Đến/Cho) — A1",
        "emoji": "📎",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "ở",
                "в, на (місце)",
                "ở Hà Nội"
              ],
              [
                "từ",
                "з, від",
                "từ Việt Nam"
              ],
              [
                "đến",
                "до",
                "đến trường"
              ],
              [
                "cho",
                "для, заради",
                "cho bạn"
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
                "Tôi sống ở Hà Nội.",
                "Я живу в Ханої."
              ],
              [
                "Quà này là cho em.",
                "Цей подарунок для тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-svo",
        "title": "Trật tự từ cơ bản (S-V-O) — A1",
        "titleEn": "Basic SVO Word Order — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), як в українській. Немає відмінків чи дієвідмінювання, що позначали би граматичну роль.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), as in Ukrainian. There are no case endings or verb conjugation to mark grammatical role."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Tôi (S)",
                "ăn (V)",
                "cơm (O) — я їм рис"
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
                "Tôi yêu Việt Nam.",
                "Я люблю В'єтнам."
              ],
              [
                "Cô ấy đọc sách.",
                "Вона читає книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "modifiers-order",
        "title": "Trật tự định ngữ (danh từ + tính từ) — B1",
        "titleEn": "Order of Modifiers (Noun + Adjective) — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, прикметник у в'єтнамській стоїть ПІСЛЯ іменника, а не перед ним.",
            "en": {
              "text": "Unlike Ukrainian, the adjective in Vietnamese comes AFTER the noun, not before it."
            }
          },
          {
            "type": "table",
            "title": "Порядок слів",
            "rows": [
              [
                "nhà lớn",
                "великий дім (букв. \"дім великий\")"
              ],
              [
                "cô gái đẹp",
                "гарна дівчина (букв. \"дівчина гарна\")"
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
                "Tôi có một con mèo nhỏ.",
                "У мене є маленький кіт."
              ],
              [
                "Đây là một câu chuyện buồn.",
                "Це сумна історія."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-cardinal",
        "title": "Số đếm — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "một",
                "один",
                "1"
              ],
              [
                "năm",
                "п'ять",
                "5"
              ],
              [
                "mười",
                "десять",
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
                "Tôi có hai anh trai.",
                "У мене два старші брати."
              ],
              [
                "Lớp có ba mươi học sinh.",
                "У класі тридцять учнів."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-ordinal",
        "title": "Số thứ tự (thứ) — A2",
        "titleEn": "Ordinal Numbers (Thứ) — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються словом \"thứ\" перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with the word \"thứ\" before the cardinal number."
            }
          },
          {
            "type": "table",
            "title": "Кількісний → порядковий",
            "rows": [
              [
                "một → thứ nhất",
                "перший"
              ],
              [
                "hai → thứ hai",
                "другий"
              ],
              [
                "ba → thứ ba",
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
                "Đây là lần thứ hai tôi đến đây.",
                "Це вдруге я тут."
              ],
              [
                "Tôi sống ở tầng thứ ba.",
                "Я живу на третьому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Các ngày trong tuần — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Крім неділі (\"chủ nhật\"), дні тижня — це просто \"thứ\" + порядковий номер (понеділок = \"другий день\", бо неділя вважається першим).",
            "en": {
              "text": "Except for Sunday (\"chủ nhật\"), days of the week are simply \"thứ\" + ordinal number (Monday = \"second day\", since Sunday counts as the first)."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "thứ hai",
                "понеділок",
                "букв. \"другий\""
              ],
              [
                "thứ sáu",
                "п'ятниця",
                "букв. \"шостий\""
              ],
              [
                "chủ nhật",
                "неділя",
                "виняток"
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
                "Hôm nay là thứ hai.",
                "Сьогодні понеділок."
              ],
              [
                "Tôi nghỉ vào chủ nhật.",
                "Я відпочиваю в неділю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Tháng và ngày — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Місяці просто позначаються числом + \"tháng\" (місяць). У даті порядок: день - місяць - рік.",
            "en": {
              "text": "Months are simply a number plus \"tháng\" (month). Date order is day-month-year."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tháng một",
                "січень",
                "1"
              ],
              [
                "tháng mười hai",
                "грудень",
                "12"
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
                "Sinh nhật tôi là ngày năm tháng năm.",
                "Мій день народження п'ятого травня."
              ],
              [
                "Hôm nay là ngày mười tháng mười.",
                "Сьогодні десяте жовтня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Cách nói giờ — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Mấy giờ rồi?\" (\"Котра година?\"), а відповідь уживає число + \"giờ\" (година).",
            "en": {
              "text": "To ask the time, Vietnamese say \"Mấy giờ rồi?\" (\"What time is it?\"), and the answer uses a number plus \"giờ\" (hour)."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "một giờ",
                "перша година",
                "1:00"
              ],
              [
                "năm giờ rưỡi",
                "половина шостої",
                "5:30"
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
                "Mấy giờ rồi?",
                "Котра зараз година?"
              ],
              [
                "Tàu chạy lúc tám giờ.",
                "Потяг вирушає о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Động từ khuyết thiếu (có thể/phải/nên) — A1",
        "titleEn": "Modal Verbs (Có Thể/Phải/Nên) — A1",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "có thể",
                "могти",
                "Tôi có thể giúp."
              ],
              [
                "phải",
                "мусити",
                "Tôi phải đi."
              ],
              [
                "nên",
                "варто/слід",
                "Bạn nên nghỉ."
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
                "Bạn có thể giúp tôi không?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Bạn nên đi khám bác sĩ.",
                "Тобі варто піти до лікаря."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligation-phai-can",
        "title": "Nghĩa vụ (phải/cần) — A2",
        "titleEn": "Obligation (Phải/Cần) — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "\"Phải\" виражає сильний обов'язок (\"мусити\"), \"cần\" — потребу (\"потрібно\"), обидва перед дієсловом.",
            "en": {
              "text": "\"Phải\" expresses strong obligation (\"must\"), \"cần\" expresses need (\"need to\"), both before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi phải đi ngay.",
                "Мені треба йти негайно."
              ],
              [
                "Bạn cần nghỉ ngơi.",
                "Тобі потрібно відпочити."
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
                "Chúng ta phải hoàn thành bài tập.",
                "Ми мусимо завершити завдання."
              ],
              [
                "Tôi cần tiền.",
                "Мені потрібні гроші."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-words",
        "title": "Từ láy (lặp âm) — B1",
        "titleEn": "Reduplication (Từ Láy) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення складу чи цілого слова (từ láy) — дуже поширений спосіб творення емоційно забарвлених слів, що підсилюють чи пом'якшують значення.",
            "en": {
              "text": "Repeating a syllable or a whole word (từ láy) is a very common way to form emotionally coloured words that intensify or soften meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "xinh xinh",
                "миленький (від xinh — гарний)",
                "пом'якшення"
              ],
              [
                "đỏ đỏ",
                "червонуватий",
                "пом'якшення"
              ],
              [
                "lung linh",
                "мерехтливий",
                "образне слово"
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
                "Cô bé xinh xinh.",
                "Дівчинка миленька."
              ],
              [
                "Ánh đèn lung linh.",
                "Світло мерехтить."
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-co",
        "title": "Tồn tại/sở hữu (có) — A1",
        "titleEn": "Existence & Possession: Có — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"Có\" (\"є, мати\") виражає і наявність предмета, і володіння ним — одне слово для обох значень.",
            "en": {
              "text": "\"Có\" (\"to exist, to have\") expresses both the presence of something and possession of it — one word for both meanings."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Trên bàn có sách.",
                "На столі є книга."
              ],
              [
                "Tôi có một con mèo.",
                "У мене є кіт."
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
                "Ở đây có nhà hàng không?",
                "Тут є ресторан?"
              ],
              [
                "Tôi không có tiền.",
                "У мене немає грошей."
              ]
            ]
          }
        ]
      },
      {
        "id": "locative-o",
        "title": "Vị trí (ở) — A1",
        "titleEn": "Location: Ở — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ở\" позначає місце перебування (\"в, на, у\") й уживається і як дієслово (\"жити, бути в\"), і як прийменник.",
            "en": {
              "text": "\"Ở\" marks location (\"in, at\") and is used both as a verb (\"to live, to be at\") and as a preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Tôi ở Hà Nội.",
                "Я живу в Ханої.",
                "дієслово"
              ],
              [
                "Sách ở trên bàn.",
                "Книга на столі.",
                "прийменник"
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
                "Bạn ở đâu?",
                "Де ти живеш?"
              ],
              [
                "Chìa khóa ở trong túi.",
                "Ключі в сумці."
              ]
            ]
          }
        ]
      },
      {
        "id": "emphasis-chinh-la",
        "title": "Nhấn mạnh (chính/là) — B1",
        "titleEn": "Emphasis Construction (Chính/Là) — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"chính\" перед іменником чи займенником підкреслює саме цей предмет/особу (\"саме, власне\"), часто в парі з \"là\".",
            "en": {
              "text": "The word \"chính\" before a noun or pronoun emphasizes exactly that person/thing (\"precisely, exactly\"), often paired with \"là\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Chính tôi đã làm điều đó.",
                "Саме я це зробив."
              ],
              [
                "Đó chính là vấn đề.",
                "Це і є саме та проблема."
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
                "Chính anh ấy nói với tôi.",
                "Саме він мені сказав."
              ],
              [
                "Đây chính là nơi tôi sinh ra.",
                "Це саме те місце, де я народився."
              ]
            ]
          }
        ]
      },
      {
        "id": "even-construction",
        "title": "\"ngay cả...cũng\" (thậm chí) — B1",
        "titleEn": "'Even' Construction — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція \"ngay cả... cũng\" чи просто \"thậm chí\" виражає значення \"навіть\".",
            "en": {
              "text": "The construction \"ngay cả... cũng\" or simply \"thậm chí\" expresses \"even\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ngay cả tôi cũng không biết.",
                "Навіть я не знаю."
              ],
              [
                "Thậm chí anh ấy cũng đồng ý.",
                "Навіть він погодився."
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
                "Ngay cả trẻ con cũng hiểu.",
                "Навіть діти розуміють."
              ],
              [
                "Thậm chí mùa đông cũng nóng ở đây.",
                "Тут навіть взимку жарко."
              ]
            ]
          }
        ]
      },
      {
        "id": "double-object-verbs",
        "title": "Động từ hai bổ ngữ (cho/tặng) — A2",
        "titleEn": "Double-Object Verbs (Cho/Tặng) — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова \"cho\" (давати) і \"tặng\" (дарувати) можуть мати два об'єкти поспіль: отримувач і сам предмет.",
            "en": {
              "text": "The verbs \"cho\" (to give) and \"tặng\" (to gift) can take two objects in a row: the recipient and the item itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cho tôi cuốn sách",
                "дай мені книгу"
              ],
              [
                "tặng mẹ hoa",
                "подарувати мамі квіти"
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
                "Anh ấy tặng tôi một món quà.",
                "Він подарував мені подарунок."
              ],
              [
                "Cho tôi xem menu.",
                "Покажіть мені меню."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbial-placement",
        "title": "Vị trí trạng từ — B1",
        "titleEn": "Adverbial Placement — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії зазвичай ставляться після дієслова, тоді як прислівники частоти й ступеня (luôn, cũng, rất) — перед дієсловом чи прикметником.",
            "en": {
              "text": "Manner adverbs usually come after the verb, while frequency and degree adverbs (luôn, cũng, rất) come before the verb or adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nói nhanh",
                "говорити швидко",
                "спосіб — після"
              ],
              [
                "rất nhanh",
                "дуже швидко",
                "ступінь — перед"
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
                "Anh ấy chạy rất nhanh.",
                "Він бігає дуже швидко."
              ],
              [
                "Cô ấy hát rất hay.",
                "Вона дуже гарно співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "degree-complement",
        "title": "Mức độ (quá/lắm) — A2",
        "titleEn": "Degree Complement (Quá/Lắm) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Quá\" може стояти і перед прикметником (\"дуже\"), і після нього (\"занадто\"); \"lắm\" завжди стоїть після прикметника (\"дуже, вельми\").",
            "en": {
              "text": "\"Quá\" can go either before an adjective (\"very\") or after it (\"too much\"); \"lắm\" always follows the adjective (\"very much\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "quá đẹp",
                "дуже гарний",
                "перед"
              ],
              [
                "đẹp quá",
                "занадто/дуже гарний",
                "після"
              ],
              [
                "đẹp lắm",
                "дуже гарний",
                "lắm — завжди після"
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
                "Món này ngon lắm!",
                "Ця страва дуже смачна!"
              ],
              [
                "Trời nóng quá!",
                "Сьогодні занадто жарко!"
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Cách xưng hô lịch sự — A2",
        "titleEn": "Formal/Informal Address — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "На додаток до базових займенників (розділ \"Основи\"), для старших/поважних осіб уживають \"ông\" (пан, дідусь) чи \"bà\" (пані, бабуся) замість нейтральних форм.",
            "en": {
              "text": "In addition to the basic pronouns from the Basics section, \"ông\" (sir, grandfather) or \"bà\" (madam, grandmother) are used for elders or respected people instead of neutral forms."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ông",
                "пан (старший чоловік)"
              ],
              [
                "bà",
                "пані (старша жінка)"
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
                "Chào ông!",
                "Доброго дня, пане!"
              ],
              [
                "Bà có khỏe không?",
                "Як Ви, пані?"
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Thành ngữ phổ biến — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Nước chảy đá mòn.",
                "(букв. вода точить камінь) — терпіння і труд усе перетруть."
              ],
              [
                "Một cây làm chẳng nên non.",
                "Одне дерево не зробить гору (сила в єдності)."
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
                "Có công mài sắt, có ngày nên kim.",
                "Наполегливою працею можна досягти всього."
              ],
              [
                "Đi một ngày đàng, học một sàng khôn.",
                "Подорож навчає більше, ніж будь-яка книга."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Phân biệt không/chưa/chẳng — B1",
        "titleEn": "Negation Nuances: Không/Chưa/Chẳng — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "\"Không\" — нейтральне заперечення, \"chưa\" — \"ще не\", а \"chẳng\" — розмовний, емоційно забарвлений варіант \"không\" з відтінком розчарування.",
            "en": {
              "text": "\"Không\" is neutral negation, \"chưa\" means \"not yet\", and \"chẳng\" is a colloquial, emotionally coloured variant of \"không\" with a tone of disappointment."
            }
          },
          {
            "type": "table",
            "title": "Три варіанти заперечення",
            "rows": [
              [
                "Tôi không đi.",
                "Я не йду (нейтрально).",
                "không"
              ],
              [
                "Tôi chưa đi.",
                "Я ще не пішов.",
                "chưa"
              ],
              [
                "Tôi chẳng muốn đi.",
                "Мені геть не хочеться йти.",
                "chẳng"
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
                "Anh ấy chẳng bao giờ giúp tôi.",
                "Він узагалі ніколи мені не допомагає."
              ],
              [
                "Tôi chưa hiểu rõ.",
                "Я ще не зрозумів до кінця."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "Diễn đạt thời tiết — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "Trời đẹp.",
                "Гарна погода."
              ],
              [
                "Trời mưa.",
                "Іде дощ."
              ],
              [
                "Trời nóng.",
                "Жарко."
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
                "Hôm nay trời rất lạnh.",
                "Сьогодні дуже холодно."
              ],
              [
                "Ngày mai trời sẽ nắng.",
                "Завтра буде сонячно."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Lời chào thông dụng — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Xin chào.",
                "Привіт/здрастуйте."
              ],
              [
                "Cảm ơn.",
                "Дякую."
              ],
              [
                "Xin lỗi.",
                "Вибачте."
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
                "Rất vui được gặp bạn.",
                "Дуже приємно познайомитися."
              ],
              [
                "Hẹn gặp lại.",
                "До нових зустрічей."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Từ chỉ lượng (nhiều/ít/vài) — A2",
        "titleEn": "Quantifiers (Nhiều/Ít/Vài) — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "nhiều",
                "багато"
              ],
              [
                "ít",
                "мало"
              ],
              [
                "vài",
                "кілька"
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
                "Tôi có nhiều bạn.",
                "У мене багато друзів."
              ],
              [
                "Cho tôi vài phút.",
                "Дай мені кілька хвилин."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-common",
        "title": "Trạng từ thông dụng (cũng/đều/còn) — A2",
        "titleEn": "Common Adverbs (Cũng/Đều/Còn) — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Поширені прислівники",
            "rows": [
              [
                "cũng",
                "теж",
                "Tôi cũng muốn đi."
              ],
              [
                "đều",
                "всі (однаково)",
                "Mọi người đều đến."
              ],
              [
                "còn",
                "ще, а",
                "Tôi còn trẻ."
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
                "Chúng tôi đều là sinh viên.",
                "Ми всі студенти."
              ],
              [
                "Còn bạn thì sao?",
                "А як щодо тебе?"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-time-place",
        "title": "Trật tự thời gian và nơi chốn — B1",
        "titleEn": "Order of Time & Place — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "У в'єтнамському реченні місце зазвичай вказується перед часом, коли обидва стоять після дієслова (на відміну від англійської, де час зазвичай останній, але тут теж час може бути останнім — порядок дещо гнучкий, хоча \"місце перед часом\" поширеніший).",
            "en": {
              "text": "In a Vietnamese sentence, place usually comes before time when both follow the verb, though the order is somewhat flexible."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Tôi gặp bạn ở công viên lúc 5 giờ.",
                "Я зустрів тебе в парку о 5-й.",
                "місце + час"
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
                "Chúng ta học ở trường vào buổi sáng.",
                "Ми навчаємося в школі зранку."
              ],
              [
                "Tôi làm việc ở nhà hôm nay.",
                "Сьогодні я працюю вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-final-particles",
        "title": "Tiểu từ cuối câu (nhé/thôi) — A2",
        "titleEn": "Sentence-Final Particles (Nhé/Thôi) — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "\"Nhé\" в кінці речення додає м'якості чи пропозиції (\"добре?\"), \"thôi\" виражає обмеження чи примирення (\"та й усе, просто\").",
            "en": {
              "text": "\"Nhé\" at the end of a sentence adds softness or a suggestion (\"okay?\"), while \"thôi\" expresses limitation or resignation (\"just, that's it\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Đi nhé!",
                "Ходімо, добре?"
              ],
              [
                "Thôi, tôi về.",
                "Та все, я пішов."
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
                "Gọi cho tôi nhé.",
                "Подзвони мені, добре?"
              ],
              [
                "Ăn một chút thôi.",
                "З'їм лише трохи."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Đếm tiền và giá cả — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Cái này giá bao nhiêu?\" (\"Скільки це коштує?\"), а валюта \"đồng\" зазвичай ставиться після числа.",
            "en": {
              "text": "To ask the price, one says \"Cái này giá bao nhiêu?\" (\"How much does this cost?\"), and the currency \"đồng\" is placed after the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "một trăm nghìn đồng",
                "сто тисяч донгів"
              ],
              [
                "rẻ / đắt",
                "дешевий / дорогий"
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
                "Cái áo này giá bao nhiêu?",
                "Скільки коштує ця сорочка?"
              ],
              [
                "Giá này quá đắt.",
                "Ця ціна занадто висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "tone-overview",
        "title": "Sáu thanh điệu — A1",
        "titleEn": "The Six Tones — A1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "У в'єтнамській шість тонів, позначених діакритичними знаками, і кожен тон змінює значення слова повністю — той самий набір букв із різними тонами означає різні слова.",
            "en": {
              "text": "Vietnamese has six tones, marked with diacritics, and each tone completely changes a word's meaning — the same letters with different tones are entirely different words."
            }
          },
          {
            "type": "table",
            "title": "Приклад зміни значення за тоном",
            "rows": [
              [
                "ma",
                "привид",
                "рівний тон"
              ],
              [
                "má",
                "мама/щока",
                "високий тон"
              ],
              [
                "mã",
                "кінь (ханойська вимова) / код",
                "ламаний тон"
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
                "Mẹ tôi nấu cơm.",
                "Моя мама готує рис."
              ],
              [
                "Con ngựa chạy nhanh.",
                "Кінь бігає швидко."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-comment-structure",
        "title": "Cấu trúc đề-thuyết (chủ đề) — B1",
        "titleEn": "Topic-Comment Structure — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб виділити тему речення, в'єтнамська часто виносить її на початок, навіть якщо граматично вона не є підметом, а решта речення коментує цю тему.",
            "en": {
              "text": "To highlight the topic of a sentence, Vietnamese often fronts it to the beginning, even when it is not grammatically the subject, with the rest of the sentence commenting on that topic."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Cái nhà này, tôi rất thích.",
                "Цей дім — мені дуже подобається.",
                "тема виділена"
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
                "Món này, tôi ăn rồi.",
                "Цю страву я вже їв."
              ],
              [
                "Tiếng Việt, tôi học được ba năm.",
                "В'єтнамську я вчу вже три роки."
              ]
            ]
          }
        ]
      },
      {
        "id": "classifier-with-demonstrative",
        "title": "Loại từ + đại từ chỉ định — A2",
        "titleEn": "Classifier + Demonstrative — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Класифікатор і вказівний займенник часто поєднуються в один вираз, наприклад \"cái này\" (\"ця річ\"), і можуть вживатися самостійно, без самого іменника.",
            "en": {
              "text": "A classifier and a demonstrative often combine into one expression, like \"cái này\" (\"this thing\"), and can stand alone without the noun itself."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cái này",
                "ця річ",
                "cái + này"
              ],
              [
                "con đó",
                "та тварина/істота",
                "con + đó"
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
                "Cái này bao nhiêu tiền?",
                "Скільки коштує ця річ?"
              ],
              [
                "Con kia là con chó của tôi.",
                "Он та тварина — мій пес."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-serialization",
        "title": "Chuỗi động từ (đi làm/đi học) — B1",
        "titleEn": "Serial Verb Constructions — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів можуть стояти поряд без сполучника, утворюючи одну дієслівну фразу, де перше дієслово описує спосіб чи мету наступного (\"đi làm\" — \"йти робити\" = йти на роботу).",
            "en": {
              "text": "Several verbs can stand together with no conjunction, forming a single verb phrase where the first verb describes the manner or purpose of the next (\"đi làm\" — \"go do\" = go to work)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "đi làm",
                "йти на роботу (букв. \"йти робити\")"
              ],
              [
                "đi học",
                "йти на навчання"
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
                "Tôi đi chợ mua rau.",
                "Я йду на ринок купувати овочі."
              ],
              [
                "Anh ấy đi du lịch nghỉ ngơi.",
                "Він їде в подорож відпочивати."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-cua",
        "title": "Sở hữu (của) — A1",
        "titleEn": "Possessive: Của — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"của\" (\"належний, чий\") вставляється між предметом і власником; у дуже тісних зв'язках (сім'я, частини тіла) її часто пропускають.",
            "en": {
              "text": "The particle \"của\" (\"belonging to\") is inserted between the object and the owner; in very close relations (family, body parts) it's often dropped."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "nhà của tôi",
                "мій дім",
                "з của"
              ],
              [
                "mẹ tôi",
                "моя мама",
                "без của (родина)"
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
                "Đây là xe của anh ấy.",
                "Це його машина."
              ],
              [
                "Sách của tôi ở đâu?",
                "Де моя книга?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-ma",
        "title": "Mệnh đề quan hệ (mà) — B1",
        "titleEn": "Relative Clauses: Mà — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"mà\" (\"що, який\") вводить підрядне означальне речення після іменника, подібно до українського \"який/що\".",
            "en": {
              "text": "The word \"mà\" (\"that, which\") introduces a relative clause after a noun, similar to \"which/that\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "quyển sách mà tôi đọc",
                "книга, яку я читаю"
              ],
              [
                "người mà tôi yêu",
                "людина, яку я люблю"
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
                "Đây là nhà mà tôi sinh ra.",
                "Це дім, у якому я народився."
              ],
              [
                "Cô gái mà bạn gặp hôm qua là em tôi.",
                "Дівчина, яку ти зустрів учора, — моя молодша сестра."
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
        "id": "irregular-classifier-pairings",
        "title": "Loại từ đặc biệt — B1",
        "titleEn": "Irregular Classifier Pairings — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі іменники вимагають класифікатора, який не підпадає під загальні правила й просто запам'ятовується окремо: \"cái\" для абстрактних понять, \"chiếc\" для одного предмета з пари (одна туфля), \"bức\" для картин і листів.",
            "en": {
              "text": "Some nouns require a classifier that doesn't fit the general rules and simply has to be memorized separately: \"cái\" for abstract concepts, \"chiếc\" for one item of a pair (a single shoe), \"bức\" for paintings and letters."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "một chiếc giày",
                "один черевик (з пари)"
              ],
              [
                "một bức tranh",
                "одна картина"
              ],
              [
                "một bức thư",
                "один лист"
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
                "Tôi mất một chiếc giày.",
                "Я загубив один черевик."
              ],
              [
                "Cô ấy viết một bức thư.",
                "Вона написала листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-pitfalls",
        "title": "Những lỗi thường gặp với không/chưa — B1",
        "titleEn": "Common Pitfalls: Không vs Chưa — B1",
        "emoji": "🚧",
        "sections": [
          {
            "type": "intro",
            "text": "Типова помилка — вживати \"không\" у питанні про досвід чи стан, що ще може змінитися, замість \"chưa\". \"Bạn ăn cơm chưa?\" (\"Ти вже їв?\") звучить природно, а \"Bạn ăn cơm không?\" означає зовсім інше — \"Ти їстимеш рис (чи ні)?\".",
            "en": {
              "text": "A typical mistake is using \"không\" when asking about an experience or a state that could still change, instead of \"chưa\". \"Bạn ăn cơm chưa?\" (\"Have you eaten yet?\") sounds natural, while \"Bạn ăn cơm không?\" means something different — \"Will you eat (or not)?\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади різниці",
            "rows": [
              [
                "Bạn ăn cơm chưa?",
                "Ти вже їв?",
                "питання про минуле"
              ],
              [
                "Bạn ăn cơm không?",
                "Ти будеш їсти?",
                "питання про пропозицію"
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
                "Bạn xem phim này chưa?",
                "Ти вже дивився цей фільм?"
              ],
              [
                "Bạn có muốn xem phim không?",
                "Ти хочеш подивитися фільм?"
              ]
            ]
          }
        ]
      },
      {
        "id": "regional-pronunciation-variation",
        "title": "Sự khác biệt phát âm vùng miền — B1",
        "titleEn": "Regional Pronunciation Variation — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Північна (ханойська) і південна (сайгонська) вимова суттєво різняться: північний діалект розрізняє всі шість тонів чітко, а південний спрощує деякі (зокрема ламаний тон \"ã\" та гачкуватий \"ả\" часто зливаються), а також по-іншому вимовляє деякі приголосні (r/d/gi).",
            "en": {
              "text": "Northern (Hanoi) and Southern (Saigon) pronunciation differ substantially: the Northern dialect clearly distinguishes all six tones, while the Southern dialect merges some of them (notably the tonal marks ã and ả often collapse together), and pronounces certain consonants (r/d/gi) differently."
            }
          },
          {
            "type": "table",
            "title": "Приклади регіональних відмінностей",
            "rows": [
              [
                "r (північ: [z], південь: [r])",
                "ra (виходити)",
                "вимова"
              ],
              [
                "ã/ả (південь часто зливає)",
                "mã/mả",
                "тони"
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
                "Người Hà Nội nói khác người Sài Gòn.",
                "Ханойці говорять інакше, ніж сайгонці."
              ],
              [
                "Giọng miền Nam nghe rất dễ thương.",
                "Південний акцент звучить дуже мило."
              ]
            ]
          }
        ]
      }
    ]
  }
];
