// Vymova — data/grammar-data/grammar_ko.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KO: GrammarCategory[] = [
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
            "text": "У корейській займенники часто просто опускаються, якщо зрозуміло з контексту, про кого йдеться — це називають pro-drop.",
            "en": {
              "text": "Korean pronouns are frequently dropped when the referent is clear from context — this is called \"pro-drop\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "저 / 나",
                "я (ввічливо / звичайно)"
              ],
              [
                "너 / 당신",
                "ти / ви"
              ],
              [
                "그 / 그녀",
                "він / вона"
              ],
              [
                "우리",
                "ми"
              ],
              [
                "그들",
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
                "저는 학생이에요.",
                "Я студент."
              ],
              [
                "(당신은) 어디에서 왔어요?",
                "Звідки ви? (займенник часто опускається)"
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"이다\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Зв'язка \"이다\" приєднується прямо до іменника-присудка; у ввічливій формі теперішнього часу вона виглядає як -이에요/-예요.",
            "en": {
              "text": "The copula \"이다\" attaches directly to the predicate noun; in the polite present tense it appears as -이에요/-예요."
            }
          },
          {
            "type": "formula",
            "title": "받침 있음/없음 + -이에요/-예요",
            "rows": [
              [
                "학생 (받침 있음)",
                "학생이에요",
                "студент є"
              ],
              [
                "의사 (받침 없음)",
                "의사예요",
                "лікар є"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "그는 의사예요.",
                "Він лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula 이다 — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"안\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Найпростіше заперечення — частка 안 перед дієсловом; є й довша форма з суфіксом -지 않다.",
            "en": {
              "text": "The simplest negation is the particle 안 before the verb; a longer form uses the suffix -지 않다."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальне → заперечне",
            "rows": [
              [
                "가요.",
                "안 가요.",
                "Іду. / Не йду."
              ],
              [
                "먹어요.",
                "안 먹어요.",
                "Їм. / Не їм."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "저는 커피를 안 마셔요.",
                "Я не п'ю каву."
              ]
            ]
          }
        ],
        "titleEn": "Negation with 안 — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У ввічливій розмовній мові питання часто утворюються просто висхідною інтонацією на закінченні -요, без окремої питальної частки.",
            "en": {
              "text": "In polite conversational speech, questions are often formed just with rising intonation on the -요 ending, with no separate question particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "학생이에요.",
                "학생이에요?",
                "Студент є. / Студент?"
              ],
              [
                "배고파요.",
                "배고파요?",
                "Голодний. / Голодний?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "배고파요?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "particles",
        "title": "Частки та порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Корейська має порядок слів SOV (дієслово в кінці), а граматична роль слова позначається часткою: 은/는 — тема, 이/가 — підмет, 을/를 — додаток.",
            "en": {
              "text": "Korean uses SOV word order (verb last), and a word's grammatical role is marked by a particle: 은/는 for topic, 이/가 for subject, 을/를 for object."
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
                "저는 밥을 먹어요.",
                "Я їм рис (букв. \"я рис їм\")."
              ]
            ]
          }
        ],
        "titleEn": "Particles & SOV Word Order — A1"
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
        "id": "present-informal-polite",
        "title": "현재형 (-아요/-어요) — A1",
        "titleEn": "Present Tense (Informal Polite -아요/-어요) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Найуживаніша ввічлива форма теперішнього часу: якщо остання голосна основи ㅏ/ㅗ — додається -아요, у решті випадків -어요.",
            "en": {
              "text": "The most common polite present-tense ending: if the stem's last vowel is ㅏ/ㅗ, add -아요; otherwise add -어요."
            }
          },
          {
            "type": "formula",
            "title": "가다 (йти) / 먹다 (їсти) — теперішній час",
            "rows": [
              [
                "가다 (основа: 가)",
                "가요",
                "іду / йду"
              ],
              [
                "먹다 (основа: 먹)",
                "먹어요",
                "їм"
              ],
              [
                "하다 (основа: 하)",
                "해요",
                "роблю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "저는 학교에 가요.",
                "Я йду до школи."
              ],
              [
                "매일 커피를 마셔요.",
                "Я щодня п'ю каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-formal-polite",
        "title": "현재형 (-ㅂ니다/-습니다) — A2",
        "titleEn": "Present Tense (Formal Polite -ㅂ니다/-습니다) — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Офіційно-ввічлива форма (합쇼체) вживається в новинах, презентаціях і формальних ситуаціях. Якщо основа закінчується на голосну — додається -ㅂ니다, на приголосну — -습니다.",
            "en": {
              "text": "The formal polite form (hapsyo-che) is used in news broadcasts, presentations, and formal settings. Vowel-ending stems take -ㅂ니다; consonant-ending stems take -습니다."
            }
          },
          {
            "type": "table",
            "title": "Ввічливе -아요 vs формальне -ㅂ니다",
            "rows": [
              [
                "가요",
                "갑니다",
                "іду (звичайно / формально)"
              ],
              [
                "먹어요",
                "먹습니다",
                "їм (звичайно / формально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "안녕하십니까?",
                "Здрастуйте? (дуже формально)"
              ],
              [
                "회의를 시작하겠습니다.",
                "Ми розпочинаємо засідання."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-plain",
        "title": "기본형/사전형 — A2",
        "titleEn": "Present Tense (Plain/Dictionary Form) — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Словникова (базова) форма закінчується на -다 і вживається в довідниках, письмовому стилі та неформальному мовленні між близькими людьми.",
            "en": {
              "text": "The plain/dictionary form ends in -다 and is used in dictionaries, written style, and casual speech among close friends."
            }
          },
          {
            "type": "table",
            "title": "Словникова форма",
            "rows": [
              [
                "가다",
                "йти",
                "інфінітив/словникова форма"
              ],
              [
                "먹다",
                "їсти",
                "інфінітив/словникова форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "나는 간다.",
                "Я йду (неформально, до близького)."
              ],
              [
                "이 책은 재미있다.",
                "Ця книга цікава (письмовий стиль)."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense",
        "title": "과거형 (-았/-었) — A1",
        "titleEn": "Past Tense (-았/-었) — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється тим самим правилом гармонії голосних, що й теперішній: -았어요 (ㅏ/ㅗ основи) чи -었어요 (решта), додаючи -어요/아요 після інфікса.",
            "en": {
              "text": "The past tense follows the same vowel-harmony rule as the present: -았어요 (ㅏ/ㅗ stems) or -었어요 (other stems), adding the polite ending after the infix."
            }
          },
          {
            "type": "formula",
            "title": "가다 (йти) — минулий час",
            "rows": [
              [
                "가다",
                "갔어요",
                "ходив/пішов"
              ],
              [
                "먹다",
                "먹었어요",
                "їв"
              ],
              [
                "하다",
                "했어요",
                "робив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "어제 영화를 봤어요.",
                "Учора я дивився фільм."
              ],
              [
                "아침을 먹었어요.",
                "Я поснідав."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-gess",
        "title": "미래형 (-겠-) — A2",
        "titleEn": "Future/Intention (-겠-) — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Інфікс -겠- виражає намір, рішучість або передбачення й додається до основи перед закінченням.",
            "en": {
              "text": "The infix -겠- expresses intention, determination, or prediction, and is inserted into the stem before the ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "하다 → 하겠어요",
                "зроблю (з рішучістю)"
              ],
              [
                "오다 → 오겠어요",
                "прийду"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "최선을 다하겠습니다.",
                "Я докладу всіх зусиль."
              ],
              [
                "내일 비가 오겠어요.",
                "Завтра, схоже, піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-l-geoyeyo",
        "title": "미래형 (-(으)ㄹ 거예요) — A2",
        "titleEn": "Future Tense (-(으)ㄹ 거예요) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Найуживаніша конструкція для планів і майбутніх дій: основа + -(으)ㄹ (майбутній модифікатор) + 거예요 (буде справа).",
            "en": {
              "text": "The most common construction for plans and future actions: stem + -(으)ㄹ (future modifier) + 거예요 (\"it will be the case\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "가다 → 갈 거예요",
                "піду"
              ],
              [
                "먹다 → 먹을 거예요",
                "їстиму"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "내일 친구를 만날 거예요.",
                "Завтра я зустрінуся з другом."
              ],
              [
                "주말에 여행을 갈 거예요.",
                "На вихідних я поїду в подорож."
              ]
            ]
          }
        ]
      },
      {
        "id": "progressive-go-itda",
        "title": "진행형 (-고 있다) — A1",
        "titleEn": "Progressive Aspect (-고 있다) — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія виражається основою дієслова + -고 있다 (\"перебувати в процесі дії\") — прямий аналог теперішнього тривалого часу.",
            "en": {
              "text": "The progressive aspect is expressed with the verb stem plus -고 있다 (\"to be in the process of\") — a direct analogue of the present continuous."
            }
          },
          {
            "type": "table",
            "title": "Звичайний ↔ тривалий",
            "rows": [
              [
                "읽어요",
                "읽고 있어요",
                "читаю / читаю (зараз)"
              ],
              [
                "써요",
                "쓰고 있어요",
                "пишу / пишу (зараз)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "지금 숙제를 하고 있어요.",
                "Зараз я роблю домашнє завдання."
              ],
              [
                "아이가 자고 있어요.",
                "Дитина спить."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-myeon",
        "title": "조건형 (-(으)면) — A2",
        "titleEn": "Conditional (-(으)면) — A2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовна форма \"якщо\" утворюється додаванням -면 (після голосної основи) чи -으면 (після приголосної) до основи дієслова чи прикметника.",
            "en": {
              "text": "The \"if\" conditional is formed by adding -면 (after a vowel stem) or -으면 (after a consonant stem) to the verb or adjective stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "가다 → 가면",
                "якщо піду"
              ],
              [
                "춥다 → 추우면",
                "якщо холодно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "시간이 있으면 전화하세요.",
                "Якщо буде час, зателефонуйте."
              ],
              [
                "비가 오면 집에 있을 거예요.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-seyo",
        "title": "명령형 (-(으)세요) — A1",
        "titleEn": "Imperative (-(으)세요) — A1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливий наказовий спосіб утворюється суфіксом -(으)세요, який одночасно є формою пошани до співрозмовника (той самий суфікс -시- шаноби, у скороченому вигляді).",
            "en": {
              "text": "The polite imperative is formed with -(으)세요, which is also honorific toward the listener (a contracted form of the -시- respect suffix)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "앉다 → 앉으세요",
                "сідайте"
              ],
              [
                "오다 → 오세요",
                "приходьте"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "여기 앉으세요.",
                "Сідайте тут."
              ],
              [
                "조심하세요!",
                "Будьте обережні!"
              ]
            ]
          }
        ]
      },
      {
        "id": "propositive-jja",
        "title": "청유형 (-자/-(으)ㅂ시다) — A2",
        "titleEn": "Propositive ('Let's') (-자/-(으)ㅂ시다) — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Пропозиція спільної дії \"давай(мо)\" виражається неформальним -자 або ввічливим -(으)ㅂ시다.",
            "en": {
              "text": "A proposal for joint action (\"let's\") is expressed with the casual -자 or the polite -(으)ㅂ시다."
            }
          },
          {
            "type": "table",
            "title": "Неформальне ↔ ввічливе",
            "rows": [
              [
                "가자",
                "давай підемо (неформально)"
              ],
              [
                "갑시다",
                "ходімо (ввічливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "같이 저녁 먹자!",
                "Давай повечеряємо разом!"
              ],
              [
                "회의를 시작합시다.",
                "Розпочнімо зустріч."
              ]
            ]
          }
        ]
      },
      {
        "id": "connective-aseo",
        "title": "연결어미 -아서/-어서 — A2",
        "titleEn": "Connective -아서/-어서 ('Because/And Then') — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучний суфікс -아서/-어서 з'єднує два дієслова, виражаючи причину або послідовність дій, і не приймає окремого закінчення часу.",
            "en": {
              "text": "The connective suffix -아서/-어서 links two clauses, expressing cause or sequence, and does not take a separate tense ending."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "아파서 못 가요.",
                "Не можу піти, бо хворію."
              ],
              [
                "일어나서 세수했어요.",
                "Прокинувся і вмився."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "배가 고파서 밥을 먹었어요.",
                "Був голодний, тому поїв."
              ],
              [
                "학교에 가서 친구를 만났어요.",
                "Пішов до школи і зустрів друга."
              ]
            ]
          }
        ]
      },
      {
        "id": "connective-jiman",
        "title": "연결어미 -지만 — A2",
        "titleEn": "Connective -지만 ('But') — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник -지만 приєднується до основи дієслова чи прикметника й виражає протиставлення (\"але, проте\").",
            "en": {
              "text": "The connective -지만 attaches to the verb or adjective stem and expresses contrast (\"but, however\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "작지만 편해요.",
                "Маленьке, але зручне."
              ],
              [
                "비싸지만 좋아요.",
                "Дороге, але хороше."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "춥지만 나가고 싶어요.",
                "Холодно, але я хочу вийти."
              ],
              [
                "어렵지만 재미있어요.",
                "Складно, але цікаво."
              ]
            ]
          }
        ]
      },
      {
        "id": "connective-go",
        "title": "연결어미 -고 — A1",
        "titleEn": "Connective -고 ('And') — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник -고 з'єднує кілька дій чи ознак у ряд, відповідаючи українському \"і/та\".",
            "en": {
              "text": "The connective -고 links a series of actions or qualities, corresponding to \"and\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "예쁘고 똑똑해요.",
                "Красива і розумна."
              ],
              [
                "밥을 먹고 자요.",
                "Їсть і спить (їсть, потім спить)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "아침에 운동하고 학교에 가요.",
                "Вранці займаюся спортом і йду до школи."
              ],
              [
                "방은 크고 밝아요.",
                "Кімната велика і світла."
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
        "id": "particle-e",
        "title": "조사 에 — A1",
        "titleEn": "Particle 에 (Time/Location Goal) — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Частка 에 позначає час дії або кінцеву точку руху (\"куди\", \"коли\").",
            "en": {
              "text": "The particle 에 marks the time of an action or the destination of movement (\"to/at\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "학교에 가요.",
                "Іду до школи.",
                "напрямок"
              ],
              [
                "세 시에 만나요.",
                "Зустрічаємось о третій.",
                "час"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "집에 있어요.",
                "Я вдома."
              ],
              [
                "일요일에 쉬어요.",
                "У неділю відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-eseo",
        "title": "조사 에서 — A2",
        "titleEn": "Particle 에서 (Location of Action / From) — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Частка 에서 позначає місце, де відбувається дія, або відправну точку руху (\"звідки\") — на відміну від 에, яке позначає лише напрямок чи час.",
            "en": {
              "text": "The particle 에서 marks where an action takes place, or the starting point of movement (\"from\") — unlike 에, which marks only direction or time."
            }
          },
          {
            "type": "table",
            "title": "에 vs 에서",
            "rows": [
              [
                "학교에 가요.",
                "Іду до школи (напрямок).",
                "에"
              ],
              [
                "학교에서 공부해요.",
                "Навчаюся в школі (місце дії).",
                "에서"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "카페에서 친구를 만났어요.",
                "Я зустрів друга в кафе."
              ],
              [
                "서울에서 왔어요.",
                "Я приїхав із Сеула."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-do",
        "title": "조사 도 — A1",
        "titleEn": "Particle 도 ('Also/Too') — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Частка 도 замінює 은/는, 이/가 чи 을/를 і означає \"також, теж\".",
            "en": {
              "text": "The particle 도 replaces 은/는, 이/가, or 을/를 and means \"also, too\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "저도 학생이에요.",
                "Я теж студент."
              ],
              [
                "이것도 주세요.",
                "Дайте це теж."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "형도 왔어요.",
                "Старший брат теж прийшов."
              ],
              [
                "저는 커피도 차도 좋아해요.",
                "Мені подобається і кава, і чай."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-wa-gwa",
        "title": "조사 와/과, 하고 — A1",
        "titleEn": "Particle 와/과, 하고 ('And/With') — A1",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "와/과 (у писемному й формальному стилі) та 하고 (у розмовному) з'єднують іменники в значенні \"і\" або \"з\".",
            "en": {
              "text": "와/과 (written/formal style) and 하고 (spoken style) connect nouns meaning \"and\" or \"with\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "친구와 함께",
                "разом із другом",
                "формально"
              ],
              [
                "친구하고 같이",
                "разом із другом",
                "розмовно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "빵과 우유를 샀어요.",
                "Я купив хліб і молоко."
              ],
              [
                "동생하고 놀았어요.",
                "Я гуляв з молодшим братом/сестрою."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-ui",
        "title": "조사 의 — A2",
        "titleEn": "Particle 의 (Possessive) — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка 의 показує належність (\"чий/чия\") і в розмовній мові часто вимовляється як [에] або взагалі опускається.",
            "en": {
              "text": "The particle 의 marks possession (\"whose\") and in casual speech is often pronounced [e] or dropped entirely."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "저의 책",
                "моя книга",
                "формально"
              ],
              [
                "제 책",
                "моя книга",
                "скорочена форма 저 + 의"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "이것은 선생님의 가방이에요.",
                "Це сумка вчителя."
              ],
              [
                "한국의 수도는 서울이에요.",
                "Столиця Кореї — Сеул."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-buteo-kkaji",
        "title": "조사 부터/까지 — A2",
        "titleEn": "Particle 부터/까지 ('From/Until') — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "부터 позначає початкову межу (\"з, від\"),까지 — кінцеву межу (\"до\") у часі чи просторі.",
            "en": {
              "text": "부터 marks the starting boundary (\"from\") and 까지 the ending boundary (\"until/to\") in time or space."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "9시부터 6시까지 일해요.",
                "Працюю з 9-ї до 6-ї.",
                "час"
              ],
              [
                "서울부터 부산까지",
                "від Сеула до Пусана",
                "простір"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "내일부터 방학이에요.",
                "З завтрашнього дня канікули."
              ],
              [
                "여기까지 오세요.",
                "Приходьте сюди (до цього місця)."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-ro",
        "title": "조사 (으)로 — A2",
        "titleEn": "Particle (으)로 (Direction/Means) — A2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка (으)로 позначає напрямок руху, засіб пересування або знаряддя дії (\"чим, за допомогою чого\").",
            "en": {
              "text": "The particle (으)로 marks direction of movement, means of transport, or the instrument of an action (\"by/with\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "오른쪽으로 가세요.",
                "Ідіть праворуч.",
                "напрямок"
              ],
              [
                "버스로 가요.",
                "Їду автобусом.",
                "засіб"
              ],
              [
                "젓가락으로 먹어요.",
                "Їм паличками.",
                "знаряддя"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "지하철로 학교에 가요.",
                "Я їду до школи метро."
              ],
              [
                "펜으로 써 주세요.",
                "Напишіть ручкою, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-boda",
        "title": "조사 보다 — A2",
        "titleEn": "Particle 보다 ('Than') — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Частка 보다 приєднується до іменника, з яким порівнюють, і означає \"ніж, порівняно з\".",
            "en": {
              "text": "The particle 보다 attaches to the noun being compared against and means \"than, compared to\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "오늘은 어제보다 추워요.",
                "Сьогодні холодніше, ніж учора."
              ],
              [
                "형보다 커요.",
                "Він вищий за старшого брата."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "비행기가 기차보다 빨라요.",
                "Літак швидший за поїзд."
              ],
              [
                "나는 커피보다 차를 좋아해요.",
                "Я люблю чай більше, ніж каву."
              ]
            ]
          }
        ]
      },
      {
        "id": "counters-classifiers",
        "title": "단위 명사 (수량사) — A2",
        "titleEn": "Counters & Classifiers — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб порахувати предмети, після числівника потрібен спеціальний класифікатор, що залежить від типу об'єкта: 개 (предмети), 명/분 (люди), 마리 (тварини), 잔 (напої), 권 (книги).",
            "en": {
              "text": "To count objects, a special classifier follows the number depending on the object type: 개 (things), 명/분 (people), 마리 (animals), 잔 (drinks), 권 (books)."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "사과 세 개",
                "три яблука",
                "개 — предмети"
              ],
              [
                "학생 두 명",
                "два студенти",
                "명 — люди"
              ],
              [
                "커피 한 잔",
                "одна кава",
                "잔 — напої"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "강아지 두 마리가 있어요.",
                "У мене є два цуценята."
              ],
              [
                "책 세 권을 샀어요.",
                "Я купив три книги."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-native-korean",
        "title": "고유어 수사 — A1",
        "titleEn": "Native Korean Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Корейська має дві паралельні системи числівників. Питомо корейська система (하나, 둘, 셋...) уживається для віку, годин і з класифікаторами предметів/людей.",
            "en": {
              "text": "Korean has two parallel numeral systems. The native Korean system (하나, 둘, 셋...) is used for age, hours, and with object/people classifiers."
            }
          },
          {
            "type": "table",
            "title": "1-5 (корейська система)",
            "rows": [
              [
                "하나",
                "один",
                "1"
              ],
              [
                "둘",
                "два",
                "2"
              ],
              [
                "셋",
                "три",
                "3"
              ],
              [
                "다섯",
                "п'ять",
                "5"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "저는 스무 살이에요.",
                "Мені двадцять років."
              ],
              [
                "사과 두 개 주세요.",
                "Дайте два яблука, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-sino-korean",
        "title": "한자어 수사 — A2",
        "titleEn": "Sino-Korean Numbers — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Китайсько-корейська система числівників (일, 이, 삼...) уживається для дат, грошей, номерів телефонів і хвилин.",
            "en": {
              "text": "The Sino-Korean numeral system (일, 이, 삼...) is used for dates, money, phone numbers, and minutes."
            }
          },
          {
            "type": "table",
            "title": "1-5 (китайсько-корейська система)",
            "rows": [
              [
                "일",
                "один",
                "1"
              ],
              [
                "이",
                "два",
                "2"
              ],
              [
                "삼",
                "три",
                "3"
              ],
              [
                "오",
                "п'ять",
                "5"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "오늘은 오월 오일이에요.",
                "Сьогодні п'яте травня."
              ],
              [
                "이것은 만 원이에요.",
                "Це десять тисяч вон."
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-subject-si",
        "title": "존댓말 -(으)시- — B1",
        "titleEn": "Subject Honorific Suffix -(으)시- — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Інфікс -(으)시- вставляється в дієслово, коли підмет речення — людина вищого статусу (за віком, посадою тощо), незалежно від того, хто слухач.",
            "en": {
              "text": "The infix -(으)시- is inserted into the verb when the sentence's subject is a person of higher status (by age, position, etc.), regardless of who the listener is."
            }
          },
          {
            "type": "table",
            "title": "Звичайне ↔ шанобливе",
            "rows": [
              [
                "가요",
                "가세요",
                "іде / іде (шанобливо про підмет)"
              ],
              [
                "읽어요",
                "읽으세요",
                "читає / читає (шанобливо)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "선생님이 오세요.",
                "Вчитель приходить (шанобливо)."
              ],
              [
                "할머니는 댁에 계세요.",
                "Бабуся вдома (шанобливо)."
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-vocabulary",
        "title": "존댓말 특수 어휘 — B1",
        "titleEn": "Honorific Vocabulary — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже поширених дієслів мають окреме, повністю відмінне шанобливе слово замість регулярного суфікса -시-: 드시다 (їсти/пити), 계시다 (бути/перебувати), 주무시다 (спати).",
            "en": {
              "text": "A handful of very common verbs have a completely separate honorific word instead of the regular -시- suffix: 드시다 (to eat/drink), 계시다 (to be/stay), 주무시다 (to sleep)."
            }
          },
          {
            "type": "table",
            "title": "Звичайне ↔ шанобливе слово",
            "rows": [
              [
                "먹다",
                "드시다",
                "їсти"
              ],
              [
                "있다",
                "계시다",
                "бути/перебувати"
              ],
              [
                "자다",
                "주무시다",
                "спати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "할아버지께서 진지를 드세요.",
                "Дідусь їсть (шанобливо)."
              ],
              [
                "안녕히 주무세요.",
                "Надобраніч (шанобливо)."
              ]
            ]
          }
        ]
      },
      {
        "id": "speech-levels",
        "title": "말투 (높임말 체계) — B1",
        "titleEn": "Speech Levels — B1",
        "emoji": "🎚️",
        "sections": [
          {
            "type": "intro",
            "text": "Корейська має систему рівнів мовлення: формально-ввічливий 합쇼체 (-ㅂ니다), звичайно-ввічливий 해요체 (-아요/-어요) і невимушений 해체 (-아/-어, без -요) для близьких і молодших.",
            "en": {
              "text": "Korean has a system of speech levels: formal-polite hapsyo-che (-ㅂ니다), plain-polite haeyo-che (-아요/-어요), and casual hae-che (-아/-어, no -요) for close friends and younger people."
            }
          },
          {
            "type": "table",
            "title": "Три основні рівні",
            "rows": [
              [
                "갑니다",
                "формально-ввічливий",
                "합쇼체"
              ],
              [
                "가요",
                "звичайно-ввічливий",
                "해요체"
              ],
              [
                "가",
                "невимушений",
                "해체"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "감사합니다.",
                "Дякую (формально)."
              ],
              [
                "고마워.",
                "Дякую (невимушено, до друга)."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-i-geu-jeo",
        "title": "지시대명사 이/그/저 — A1",
        "titleEn": "Demonstratives 이/그/저 — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "이 вказує на предмет поруч із мовцем, 그 — поруч зі слухачем, 저 — далеко від обох. Завжди стоять перед іменником.",
            "en": {
              "text": "이 points to something near the speaker, 그 near the listener, and 저 far from both. They always precede the noun."
            }
          },
          {
            "type": "table",
            "title": "Три ступені відстані",
            "rows": [
              [
                "이 책",
                "ця книга (тут)",
                "близько до мовця"
              ],
              [
                "그 책",
                "та книга (у тебе)",
                "близько до слухача"
              ],
              [
                "저 책",
                "он та книга (далеко)",
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
                "이것은 제 우산이에요.",
                "Це моя парасолька."
              ],
              [
                "저 사람은 누구예요?",
                "Хто он та людина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-conjugation",
        "title": "형용사 활용 — A2",
        "titleEn": "Adjective (Descriptive Verb) Conjugation — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Корейські прикметники (형용사) граматично поводяться як дієслова — відмінюються за часом і ввічливістю так само, без окремої зв'язки \"бути\".",
            "en": {
              "text": "Korean adjectives (hyeongyongsa) behave grammatically like verbs — conjugating for tense and politeness the same way, with no separate \"to be\" copula needed."
            }
          },
          {
            "type": "table",
            "title": "예쁘다 (гарний) — відмінювання",
            "rows": [
              [
                "예쁘다",
                "예뻐요",
                "гарний(-а) є"
              ],
              [
                "예쁘다",
                "예뻤어요",
                "був(-ла) гарний(-а)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "날씨가 좋아요.",
                "Погода хороша."
              ],
              [
                "이 커피는 뜨거워요.",
                "Ця кава гаряча."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "비교급/최상급 — A2",
        "titleEn": "Comparative & Superlative — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь виражається словом 더 (\"більше\") перед прикметником, найвищий — словом 가장 чи 제일 (\"найбільше\").",
            "en": {
              "text": "The comparative is expressed with 더 (\"more\") before the adjective, and the superlative with 가장 or 제일 (\"most\")."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "커요",
                "더 커요",
                "가장 커요"
              ],
              [
                "빨라요",
                "더 빨라요",
                "제일 빨라요"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "이게 더 좋아요.",
                "Це краще."
              ],
              [
                "이 산이 한국에서 가장 높아요.",
                "Ця гора найвища в Кореї."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-attributive",
        "title": "관형사형 어미 — B1",
        "titleEn": "Attributive (Relative) Clauses — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого відносного займенника корейська вживає означальні (атрибутивні) закінчення перед іменником: -는 (теперішнє), -(으)ㄴ (минуле/стан), -(으)ㄹ (майбутнє).",
            "en": {
              "text": "Instead of a separate relative pronoun, Korean uses attributive endings directly before the noun: -는 (present), -(으)ㄴ (past/state), -(으)ㄹ (future)."
            }
          },
          {
            "type": "table",
            "title": "Приклади атрибутивних форм",
            "rows": [
              [
                "읽는 책",
                "книга, яку читаю",
                "теперішнє"
              ],
              [
                "읽은 책",
                "книга, яку прочитав",
                "минуле"
              ],
              [
                "읽을 책",
                "книга, яку прочитаю",
                "майбутнє"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "어제 만난 친구예요.",
                "Це друг, якого я зустрів учора."
              ],
              [
                "내일 갈 곳이에요.",
                "Це місце, куди я піду завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "giving-receiving-verbs",
        "title": "주다/받다 (수수동사) — B1",
        "titleEn": "Giving & Receiving Verbs (주다/받다) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "주다 (давати) і 받다 (отримувати) — базові дієслова обміну; ввічлива/шаноблива форма давання старшому — 드리다.",
            "en": {
              "text": "주다 (to give) and 받다 (to receive) are the basic exchange verbs; the polite/honorific form for giving to someone senior is 드리다."
            }
          },
          {
            "type": "table",
            "title": "Три рівні \"давати\"",
            "rows": [
              [
                "주다",
                "давати (звичайно)",
                "нейтральне"
              ],
              [
                "드리다",
                "давати (шанобливо)",
                "старшому/поважному"
              ],
              [
                "받다",
                "отримувати",
                "—"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "친구에게 선물을 줬어요.",
                "Я дав подарунок другові."
              ],
              [
                "선생님께 선물을 드렸어요.",
                "Я подарував подарунок учителю (шанобливо)."
              ]
            ]
          }
        ]
      },
      {
        "id": "desire-form",
        "title": "희망형 -고 싶다 — A2",
        "titleEn": "Desiderative Form (-고 싶다, 'Want To') — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виконати дію виражається основою дієслова + -고 싶다 (\"хотіти\"), яке відмінюється як звичайне прикметникове дієслово.",
            "en": {
              "text": "The desire to do something is expressed with the verb stem plus -고 싶다 (\"to want\"), which conjugates like a regular descriptive verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "가다 → 가고 싶어요",
                "хочу піти"
              ],
              [
                "먹다 → 먹고 싶어요",
                "хочу з'їсти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "한국에 가고 싶어요.",
                "Я хочу поїхати до Кореї."
              ],
              [
                "쉬고 싶어요.",
                "Я хочу відпочити."
              ]
            ]
          }
        ]
      },
      {
        "id": "suggestion-request",
        "title": "제안/요청 -을까요?/-아 주세요 — A2",
        "titleEn": "Suggestions & Requests — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "-(으)ㄹ까요? пропонує спільну дію (\"чи не...?\"), а -아/어 주세요 ввічливо просить когось щось зробити.",
            "en": {
              "text": "-(으)ㄹ까요? proposes a joint action (\"shall we...?\"), while -아/어 주세요 politely asks someone to do something."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "같이 갈까요?",
                "Підемо разом?",
                "пропозиція"
              ],
              [
                "도와주세요.",
                "Допоможіть, будь ласка.",
                "прохання"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "창문을 열까요?",
                "Відкрити вікно?"
              ],
              [
                "문을 닫아 주세요.",
                "Зачиніть двері, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "permission-prohibition",
        "title": "허가/금지 -아도 되다/-면 안 되다 — A2",
        "titleEn": "Permission & Prohibition — A2",
        "emoji": "🚦",
        "sections": [
          {
            "type": "intro",
            "text": "-아/어도 되다 виражає дозвіл (\"можна\"), а -(으)면 안 되다 виражає заборону (\"не можна\").",
            "en": {
              "text": "-아/어도 되다 expresses permission (\"may/is okay\"), while -(으)면 안 되다 expresses prohibition (\"must not\")."
            }
          },
          {
            "type": "table",
            "title": "Дозвіл ↔ заборона",
            "rows": [
              [
                "들어가도 돼요.",
                "Можна зайти.",
                "дозвіл"
              ],
              [
                "여기서 담배를 피우면 안 돼요.",
                "Тут не можна курити.",
                "заборона"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "사진을 찍어도 돼요?",
                "Можна сфотографувати?"
              ],
              [
                "늦으면 안 돼요.",
                "Не можна запізнюватися."
              ]
            ]
          }
        ]
      },
      {
        "id": "obligation",
        "title": "의무 -아야 하다/되다 — B1",
        "titleEn": "Obligation ('Must') — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість дії виражається основою + -아/어야 하다 чи -아/어야 되다 (\"мусити, повинен\").",
            "en": {
              "text": "Obligation is expressed with the stem plus -아/어야 하다 or -아/어야 되다 (\"must, have to\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "가다 → 가야 해요",
                "мушу піти"
              ],
              [
                "먹다 → 먹어야 돼요",
                "мушу з'їсти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "숙제를 해야 해요.",
                "Мені треба зробити домашнє завдання."
              ],
              [
                "병원에 가야 돼요.",
                "Мені треба піти до лікарні."
              ]
            ]
          }
        ]
      },
      {
        "id": "experience",
        "title": "경험 -아/어 본 적이 있다 — A2",
        "titleEn": "Experience ('Have Done Before') — A2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Досвід виконання дії в минулому виражається конструкцією -아/어 본 적이 있다 (\"мати досвід робити щось\").",
            "en": {
              "text": "Past experience of an action is expressed with the construction -아/어 본 적이 있다 (\"to have the experience of doing something\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "가다 → 가 본 적이 있어요",
                "я бував там"
              ],
              [
                "먹다 → 먹어 본 적이 없어요",
                "я ніколи цього не їв"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "한국에 가 본 적이 있어요.",
                "Я бував у Кореї."
              ],
              [
                "김치를 먹어 본 적이 없어요.",
                "Я ніколи не їв кімчі."
              ]
            ]
          }
        ]
      },
      {
        "id": "quotation-styles",
        "title": "인용법 -다고/-라고 하다 — B1",
        "titleEn": "Quotation (-다고/-라고 하다) — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Непряма мова передається додаванням -다고 (для дієслів/прикметників) чи -라고 (для іменників) перед дієсловом 하다 (\"казати\").",
            "en": {
              "text": "Reported speech is formed by adding -다고 (for verbs/adjectives) or -라고 (for nouns) before the verb 하다 (\"to say\")."
            }
          },
          {
            "type": "table",
            "title": "Пряма ↔ непряма мова",
            "rows": [
              [
                "\"가요\" (пряма)",
                "간다고 해요",
                "каже, що йде"
              ],
              [
                "\"학생이에요\" (пряма)",
                "학생이라고 해요",
                "каже, що студент"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "내일 비가 온다고 해요.",
                "Кажуть, завтра піде дощ."
              ],
              [
                "그는 의사라고 했어요.",
                "Він сказав, що він лікар."
              ]
            ]
          }
        ]
      },
      {
        "id": "reason-nikka-aseo",
        "title": "이유: -니까 vs -아서 — B1",
        "titleEn": "Reason: -니까 vs -아서 — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Обидва означають \"тому що\", але -니까 вживається перед наказом/пропозицією й підкреслює суб'єктивну причину, тоді як -아서 вживається для об'єктивної причини й не поєднується з наказовим/пропозиційним закінченням.",
            "en": {
              "text": "Both mean \"because\", but -니까 is used before an imperative/suggestion and stresses a subjective reason, while -아서 is used for an objective reason and cannot combine with imperative/propositive endings."
            }
          },
          {
            "type": "table",
            "title": "니까 ↔ 아서",
            "rows": [
              [
                "비가 오니까 우산을 가져가세요.",
                "Оскільки йде дощ, візьміть парасольку.",
                "-니까 + наказ"
              ],
              [
                "비가 와서 우산을 썼어요.",
                "Оскільки йшов дощ, я скористався парасолькою.",
                "-아서 + факт"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "늦었으니까 서두릅시다.",
                "Оскільки ми запізнюємося, поквапмося."
              ],
              [
                "피곤해서 일찍 잤어요.",
                "Оскільки був втомлений, я рано ліг спати."
              ]
            ]
          }
        ]
      },
      {
        "id": "contrast-neunde",
        "title": "배경/대조 -는데 — B1",
        "titleEn": "Background/Contrast -는데 — B1",
        "emoji": "🌗",
        "sections": [
          {
            "type": "intro",
            "text": "Одне з найуживаніших закінчень — -는데/-(으)ㄴ데 вводить фоновий контекст, м'яке протиставлення чи ввічливе передчуття наступного речення.",
            "en": {
              "text": "One of the most common endings, -는데/-(으)ㄴ데, introduces background context, a soft contrast, or a polite lead-in to what follows."
            }
          },
          {
            "type": "table",
            "title": "Приклади вживання",
            "rows": [
              [
                "비가 오는데 우산이 없어요.",
                "Іде дощ, а в мене немає парасольки.",
                "контраст"
              ],
              [
                "여기 날씨가 좋은데요.",
                "Погода тут гарна (з відтінком коментаря).",
                "фон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "집에 가는데 비가 왔어요.",
                "Я йшов додому, і пішов дощ."
              ],
              [
                "맛있는데 좀 비싸요.",
                "Смачно, але трохи дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "purpose-clause",
        "title": "목적 -(으)려고/-기 위해서 — B1",
        "titleEn": "Purpose (-으려고/-기 위해서) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "-(으)려고 і -기 위해서 виражають мету (\"щоб, для того щоб\") перед головним дієсловом.",
            "en": {
              "text": "-(으)려고 and -기 위해서 express purpose (\"in order to\") before the main verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "돈을 벌려고 일해요.",
                "Працюю, щоб заробити гроші."
              ],
              [
                "건강을 위해서 운동해요.",
                "Займаюся спортом заради здоров'я."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "시험에 합격하려고 열심히 공부해요.",
                "Наполегливо навчаюся, щоб скласти іспит."
              ],
              [
                "친구를 만나기 위해서 서울에 갔어요.",
                "Я поїхав до Сеула, щоб зустрітися з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "요일 — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "월요일",
                "понеділок",
                "1"
              ],
              [
                "금요일",
                "п'ятниця",
                "5"
              ],
              [
                "일요일",
                "неділя",
                "7"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "월요일에 학교에 가요.",
                "У понеділок я йду до школи."
              ],
              [
                "오늘은 무슨 요일이에요?",
                "Який сьогодні день тижня?"
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "월/날짜 — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Місяці — це просто китайсько-корейські числівники + 월 (місяць); дати — числівник + 일 (день). Порядок: рік-місяць-день.",
            "en": {
              "text": "Months are simply the Sino-Korean number plus 월 (month); dates are the number plus 일 (day). Order is year-month-day."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "일월",
                "січень",
                "1월"
              ],
              [
                "오월 오일",
                "п'яте травня",
                "5월 5일"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "생일이 언제예요?",
                "Коли твій день народження?"
              ],
              [
                "시월에 태어났어요.",
                "Я народився в жовтні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "시간 말하기 — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Години називаються питомо корейськими числівниками + 시, а хвилини — китайсько-корейськими числівниками + 분. Це єдиний випадок, де обидві системи числівників поєднуються в одному виразі.",
            "en": {
              "text": "Hours use native Korean numbers plus 시, while minutes use Sino-Korean numbers plus 분. This is the one case where both numeral systems combine in a single expression."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "한 시",
                "перша година",
                "1:00 — корейська"
              ],
              [
                "한 시 삼십 분",
                "перша тридцять",
                "1:30 — корейська+китайська"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "지금 몇 시예요?",
                "Котра зараз година?"
              ],
              [
                "세 시 반에 만나요.",
                "Зустрінемося о пів на четверту."
              ]
            ]
          }
        ]
      },
      {
        "id": "plain-form-casual-speech",
        "title": "반말 (비격식체) — B1",
        "titleEn": "Plain Form in Casual Speech (Banmal) — B1",
        "emoji": "😊",
        "sections": [
          {
            "type": "intro",
            "text": "반말 — це невимушена мова без -요, яку вживають між близькими друзями чи до молодших. Уживати її до старших чи незнайомих без дозволу вважається грубим.",
            "en": {
              "text": "Banmal is casual speech dropping -요, used between close friends or toward younger people. Using it toward elders or strangers without permission is considered rude."
            }
          },
          {
            "type": "table",
            "title": "존댓말 (ввічливе) ↔ 반말 (невимушене)",
            "rows": [
              [
                "뭐 해요?",
                "뭐 해?",
                "Що робиш?"
              ],
              [
                "가요.",
                "가.",
                "Іду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "우리 반말할까?",
                "Давай перейдемо на 'ти'?"
              ],
              [
                "나 지금 갈게.",
                "Я вже йду."
              ]
            ]
          }
        ]
      },
      {
        "id": "existence-itda-eopda",
        "title": "존재: 있다/없다 — A1",
        "titleEn": "Existence: 있다/없다 — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "있다 (\"є, перебуває, має\") і його заперечення 없다 (\"немає\") виражають водночас і наявність предмета, і володіння ним.",
            "en": {
              "text": "있다 (\"to exist, to be there, to have\") and its negation 없다 (\"to not have\") express both the presence of an object and possession of it."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "책상 위에 책이 있어요.",
                "На столі є книга."
              ],
              [
                "시간이 없어요.",
                "У мене немає часу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "집에 고양이가 있어요.",
                "У мене вдома є кіт."
              ],
              [
                "돈이 없어요.",
                "У мене немає грошей."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs",
        "title": "부사 — A2",
        "titleEn": "Adverbs — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Поширені прислівники",
            "rows": [
              [
                "빨리",
                "швидко"
              ],
              [
                "천천히",
                "повільно"
              ],
              [
                "아주",
                "дуже"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "빨리 오세요.",
                "Приходьте швидко."
              ],
              [
                "아주 맛있어요.",
                "Дуже смачно."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-flexibility",
        "title": "어순의 유연성 — A2",
        "titleEn": "Word Order Flexibility — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово завжди стоїть в кінці речення, але порядок інших членів речення досить вільний, оскільки частки, а не позиція, показують граматичну роль слова.",
            "en": {
              "text": "The verb always comes at the end of the sentence, but the order of other elements is fairly flexible, since particles — not position — mark grammatical role."
            }
          },
          {
            "type": "table",
            "title": "Гнучкий порядок",
            "rows": [
              [
                "저는 사과를 먹어요.",
                "Я їм яблуко.",
                "нейтральний"
              ],
              [
                "사과를 저는 먹어요.",
                "Яблуко я їм (акцент).",
                "переставлений"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "오늘 저는 학교에 가요.",
                "Сьогодні я йду до школи."
              ],
              [
                "학교에 오늘 저는 가요.",
                "До школи сьогодні я йду (акцент на школу)."
              ]
            ]
          }
        ]
      },
      {
        "id": "sentence-final-particles",
        "title": "종결 어미 (요, 죠, 네) — A2",
        "titleEn": "Sentence-Final Particles (요, 죠, 네) — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "요 робить речення ввічливим, 죠 (від 지요) шукає підтвердження (\"чи не так?\"), а 네 виражає щире здивування чи усвідомлення (\"ага, справді\").",
            "en": {
              "text": "요 makes a sentence polite, 죠 (from 지요) seeks confirmation (\"right?\"), and 네 expresses genuine surprise or realization (\"oh, I see\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "맞아요.",
                "Правильно.",
                "요 — ввічливо"
              ],
              [
                "맞죠?",
                "Правда ж?",
                "죠 — підтвердження"
              ],
              [
                "맛있네요!",
                "Ой, смачно!",
                "네 — здивування"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "오늘 날씨 좋죠?",
                "Гарна сьогодні погода, чи не так?"
              ],
              [
                "정말 크네요!",
                "Ой, справді велике!"
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-stem-changes",
        "title": "불규칙 활용 (어간 변화) — B1",
        "titleEn": "Irregular Stem Changes — B1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька груп дієслів і прикметників змінюють кінцевий приголосний або голосний основи перед закінченням, що починається на голосну: ㅂ-неправильні (덥다 → 더워요), ㄷ-неправильні (듣다 → 들어요), 르-неправильні (모르다 → 몰라요).",
            "en": {
              "text": "Several groups of verbs/adjectives change their final stem consonant or vowel before a vowel-initial ending: ㅂ-irregular (덥다 → 더워요), ㄷ-irregular (듣다 → 들어요), 르-irregular (모르다 → 몰라요)."
            }
          },
          {
            "type": "table",
            "title": "Приклади неправильних основ",
            "rows": [
              [
                "덥다 (спекотно)",
                "더워요",
                "ㅂ → 우"
              ],
              [
                "듣다 (слухати)",
                "들어요",
                "ㄷ → ㄹ"
              ],
              [
                "모르다 (не знати)",
                "몰라요",
                "르 → ㄹㄹ"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "오늘 정말 더워요.",
                "Сьогодні справді спекотно."
              ],
              [
                "잘 몰라요.",
                "Я не дуже знаю."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-titles-address",
        "title": "호칭: 님/씨 — A1",
        "titleEn": "Titles of Address: 님/씨 — A1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "씨 додається до повного імені чи імені для нейтрально-ввічливого звертання до рівних; 님 — шанобливий суфікс до посад і титулів (선생님 — вчитель, 사장님 — директор).",
            "en": {
              "text": "씨 is added to a full name or first name for neutral-polite address among equals; 님 is an honorific suffix for titles and positions (선생님 — teacher, 사장님 — director)."
            }
          },
          {
            "type": "table",
            "title": "Приклади звертань",
            "rows": [
              [
                "김민수 씨",
                "пан/пані Мінсу Кім",
                "씨 — нейтрально"
              ],
              [
                "선생님",
                "пане вчителю",
                "님 — шанобливо"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "지민 씨, 안녕하세요.",
                "Здрастуйте, пане/пані Джимін."
              ],
              [
                "사장님, 잠깐 시간 있으세요?",
                "Пане директоре, у вас є хвилинка?"
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-expressions",
        "title": "날씨 표현 — A1",
        "titleEn": "Weather Expressions — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "날씨가 좋아요.",
                "Погода гарна."
              ],
              [
                "비가 와요.",
                "Іде дощ."
              ],
              [
                "눈이 와요.",
                "Іде сніг."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "오늘 정말 더워요.",
                "Сьогодні дуже спекотно."
              ],
              [
                "내일은 흐릴 거예요.",
                "Завтра буде хмарно."
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "인사말 — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "안녕하세요.",
                "Привіт/здрастуйте."
              ],
              [
                "감사합니다.",
                "Дякую."
              ],
              [
                "죄송합니다.",
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
                "처음 뵙겠습니다.",
                "Приємно познайомитися (вперше бачимось)."
              ],
              [
                "또 만나요.",
                "До нових зустрічей."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "수량 표현 (많이/조금) — A2",
        "titleEn": "Quantifiers (많이/조금) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "많이",
                "багато"
              ],
              [
                "조금/좀",
                "трохи"
              ],
              [
                "다",
                "все/всі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "많이 드세요.",
                "Їжте досхочу."
              ],
              [
                "조금만 기다려 주세요.",
                "Зачекайте трохи, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "nominalizer-gi-eum",
        "title": "명사형 전성어미 -기/-음 — B1",
        "titleEn": "Nominalizers -기/-음 — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікси -기 та -음/-ㅁ перетворюють дієслово на іменник: -기 частіше означає загальну діяльність, -음 — конкретний факт чи результат.",
            "en": {
              "text": "The suffixes -기 and -음/-ㅁ turn a verb into a noun: -기 more often names a general activity, -음 a specific fact or result."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → іменник",
            "rows": [
              [
                "읽다 (читати)",
                "읽기",
                "читання"
              ],
              [
                "믿다 (вірити)",
                "믿음",
                "віра"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "운동하기가 좋아요.",
                "Займатися спортом добре."
              ],
              [
                "그의 말을 믿음이 중요해요.",
                "Важлива віра в його слова."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-voice",
        "title": "피동 표현 — B1",
        "titleEn": "Passive Voice — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється інфіксами -이/-히/-리/-기- (для окремих дієслів) або конструкцією -아/어지다 (продуктивніший спосіб для решти дієслів).",
            "en": {
              "text": "The passive is formed with the infixes -이/-히/-리/-기- (for specific verbs) or the construction -아/어지다 (a more productive method for other verbs)."
            }
          },
          {
            "type": "table",
            "title": "Активний → пасивний",
            "rows": [
              [
                "보다 (бачити)",
                "보이다",
                "бути видимим"
              ],
              [
                "만들다 (робити)",
                "만들어지다",
                "бути зробленим"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "산이 보여요.",
                "Гору видно."
              ],
              [
                "이 케이크는 초콜릿으로 만들어졌어요.",
                "Цей торт зроблено з шоколаду."
              ]
            ]
          }
        ]
      },
      {
        "id": "causative-voice",
        "title": "사동 표현 — B1",
        "titleEn": "Causative Voice — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан показує, що підмет змушує чи дозволяє комусь виконати дію, утворюється інфіксами -이/-히/-리/-기/-우- або конструкцією -게 하다.",
            "en": {
              "text": "The causative voice shows that the subject makes or lets someone else act, formed with the infixes -이/-히/-리/-기/-우- or the construction -게 하다."
            }
          },
          {
            "type": "table",
            "title": "Активний → каузативний",
            "rows": [
              [
                "먹다 (їсти)",
                "먹이다",
                "годувати (змусити їсти)"
              ],
              [
                "가다 (йти) → 가게 하다",
                "가게 했어요",
                "змусив піти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "아이에게 밥을 먹여요.",
                "Я годую дитину."
              ],
              [
                "엄마가 아이를 웃게 했어요.",
                "Мама розсмішила дитину."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-mot",
        "title": "불가능: 못/-지 못하다 — A2",
        "titleEn": "Negative Ability (못) — A2",
        "emoji": "🙅",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від простого заперечення 안, частка 못 (чи суфікс -지 못하다) означає неможливість виконати дію через зовнішні обставини чи брак уміння.",
            "en": {
              "text": "Unlike simple negation with 안, the particle 못 (or the suffix -지 못하다) expresses inability to perform an action due to external circumstances or lack of skill."
            }
          },
          {
            "type": "table",
            "title": "안 (не хоче) ↔ 못 (не може)",
            "rows": [
              [
                "안 가요.",
                "Не йду (за власним рішенням).",
                "안"
              ],
              [
                "못 가요.",
                "Не можу піти (обставини).",
                "못"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "다리가 아파서 못 걸어요.",
                "Не можу йти, бо болить нога."
              ],
              [
                "수영을 못해요.",
                "Я не вмію плавати."
              ]
            ]
          }
        ]
      },
      {
        "id": "subject-omission-prodrop",
        "title": "주어 생략 — A2",
        "titleEn": "Subject Omission (Pro-Drop) — A2",
        "emoji": "🫥",
        "sections": [
          {
            "type": "intro",
            "text": "Якщо підмет зрозумілий із контексту, його зазвичай опускають — повторення займенника в кожному реченні звучить неприродно й навіть різко.",
            "en": {
              "text": "When the subject is clear from context, it is usually omitted — repeating the pronoun in every sentence sounds unnatural and even blunt."
            }
          },
          {
            "type": "table",
            "title": "З підметом ↔ без підмета (природніше)",
            "rows": [
              [
                "저는 배고파요. 저는 밥을 먹을 거예요.",
                "(звучить дивно, повторення)",
                "з підметом"
              ],
              [
                "배고파요. 밥을 먹을 거예요.",
                "Голодний. Піду поїм.",
                "без підмета — природно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "어디 가요?",
                "(Ти) куди йдеш?"
              ],
              [
                "집에 가요.",
                "(Я) йду додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "onomatopoeia-mimetic",
        "title": "의성어/의태어 — B1",
        "titleEn": "Onomatopoeia & Mimetic Words — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Корейська має величезний шар звуконаслідувальних (의성어) та образотворчих (의태어) слів, які описують не лише звуки, а й манеру руху чи стан.",
            "en": {
              "text": "Korean has a huge layer of onomatopoeic (uiseongeo) and mimetic (uitaeeo) words that describe not just sounds but also manner of movement or state."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "멍멍",
                "гав-гав (собака)",
                "звук"
              ],
              [
                "반짝반짝",
                "виблискуючи",
                "образ"
              ],
              [
                "살금살금",
                "крадькома",
                "манера руху"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "별이 반짝반짝 빛나요.",
                "Зірки виблискують."
              ],
              [
                "아기가 새근새근 자요.",
                "Дитина спокійно сопить уві сні."
              ]
            ]
          }
        ]
      },
      {
        "id": "idioms-common-expressions",
        "title": "관용 표현 — B1",
        "titleEn": "Idioms & Common Expressions — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "발이 넓다.",
                "(букв. широкі ноги) — мати багато знайомств."
              ],
              [
                "눈이 높다.",
                "(букв. високі очі) — бути перебірливим/вимогливим."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "그는 발이 넓어서 아는 사람이 많아요.",
                "У нього широке коло знайомств."
              ],
              [
                "시간이 금이다.",
                "Час — це гроші (букв. золото)."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-hanja",
        "title": "한자어 조어법 — B1",
        "titleEn": "Sino-Korean Word Formation — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Понад половина корейської лексики походить із китайських коренів (한자어) і активно комбінується для творення нових слів, на відміну від питомо корейських слів (고유어).",
            "en": {
              "text": "Over half of Korean vocabulary derives from Chinese roots (hanjaeo) and is actively combined to form new words, unlike native Korean words (goyueo)."
            }
          },
          {
            "type": "table",
            "title": "Приклади ханмунної лексики",
            "rows": [
              [
                "학교 (學校)",
                "школа",
                "학 (навчання) + 교 (заклад)"
              ],
              [
                "대학교 (大學校)",
                "університет",
                "대 (великий) + 학교"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "저는 대학교에 다녀요.",
                "Я навчаюся в університеті."
              ],
              [
                "이것은 중요한 정보예요.",
                "Це важлива інформація."
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
        "id": "irregular-verbs",
        "title": "불규칙 동사 — B1",
        "titleEn": "Irregular Verbs — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово 하다 (\"робити\") має унікальну форму -어요 → 해요 замість очікуваного -하어요. Кілька дієслів на 르 (모르다, 부르다) подвоюють кінцевий приголосний.",
            "en": {
              "text": "The verb 하다 (\"to do\") has the unique form -어요 → 해요 instead of the expected -하어요. Several 르-ending verbs (모르다, 부르다) double their final consonant."
            }
          },
          {
            "type": "table",
            "title": "Особливі форми",
            "rows": [
              [
                "하다 → 해요",
                "роблю",
                "неправильне -어요"
              ],
              [
                "부르다 → 불러요",
                "кличу/співаю",
                "르-неправильне"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "숙제를 해요.",
                "Роблю домашнє завдання."
              ],
              [
                "노래를 불러요.",
                "Співаю пісню."
              ]
            ]
          }
        ]
      },
      {
        "id": "number-system-exceptions",
        "title": "두 수사 체계의 예외 — B1",
        "titleEn": "Numeral System Exceptions — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча вік зазвичай рахують питомо корейськими числівниками, у формальному чи медичному контексті іноді вживають китайсько-корейські (\"20세\" замість \"스무 살\"). Числа 20-90 у корейській системі мають окремі корені (스물, 서른...), а не просто складаються з 2+10.",
            "en": {
              "text": "While age is normally counted with native Korean numbers, formal or medical contexts sometimes use Sino-Korean instead (\"20세\" rather than \"스무 살\"). Numbers 20-90 in the native system have their own separate roots (스물, 서른...) rather than simply combining 2+10."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "스무 살",
                "двадцять років",
                "не \"둘열살\""
              ],
              [
                "서른 살",
                "тридцять років",
                "не \"셋열살\""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "저는 스물다섯 살이에요.",
                "Мені двадцять п'ять років."
              ],
              [
                "환자는 45세입니다.",
                "Пацієнту 45 років (формально, ханмунна форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "honorific-irregular-vocabulary",
        "title": "특수 존댓말 어휘 — B1",
        "titleEn": "Special Honorific Vocabulary — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Крім регулярного суфікса -시-, деякі слова мають цілком окремі шанобливі відповідники, включно з іменниками: 밥 → 진지 (їжа), 집 → 댁 (дім), 이름 → 성함 (ім'я).",
            "en": {
              "text": "Besides the regular -시- suffix, some words have entirely separate honorific counterparts, including nouns: 밥 → 진지 (meal), 집 → 댁 (home), 이름 → 성함 (name)."
            }
          },
          {
            "type": "table",
            "title": "Звичайне ↔ шанобливе слово",
            "rows": [
              [
                "밥",
                "진지",
                "їжа/страва"
              ],
              [
                "집",
                "댁",
                "дім"
              ],
              [
                "이름",
                "성함",
                "ім'я"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "할머니, 진지 드세요.",
                "Бабусю, їжте, будь ласка (шанобливо)."
              ],
              [
                "성함이 어떻게 되세요?",
                "Як Вас звати? (дуже ввічливо)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
