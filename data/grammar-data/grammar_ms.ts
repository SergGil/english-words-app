// Vymova — data/grammar-data/grammar_ms.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MS: GrammarCategory[] = [
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
            "text": "Малайські дієслова не змінюються за особами чи числом — займенник лишається головним показником, хто виконує дію (як і в спорідненій індонезійській).",
            "en": {
              "text": "Malay verbs never change for person or number — the pronoun stays the main marker of who acts (as in related Indonesian)."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "saya / aku",
                "я (ввічливо / неформально)"
              ],
              [
                "awak / anda",
                "ти / ви (ввічливо)"
              ],
              [
                "dia",
                "він / вона"
              ],
              [
                "kami / kita",
                "ми (без співрозмовника / з ним)"
              ],
              [
                "mereka",
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
                "Saya guru.",
                "Я вчитель."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "zero-copula",
        "title": "Нульова зв'язка — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Малайська не має дієслова \"бути\" перед іменником чи прикметником — присудок ставиться відразу після підмета.",
            "en": {
              "text": "Malay has no \"to be\" verb before a noun or adjective — the predicate simply follows the subject directly."
            }
          },
          {
            "type": "formula",
            "title": "Приклади нульової зв'язки",
            "rows": [
              [
                "Saya",
                "guru.",
                "Я вчитель."
              ],
              [
                "Dia",
                "lapar.",
                "Він/вона голодний(-а)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia lapar.",
                "Він/вона голодний(-а)."
              ]
            ]
          }
        ],
        "titleEn": "Zero Copula — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"tidak\" / \"bukan\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Для заперечення дієслів і прикметників використовують tidak, а для заперечення іменників — bukan.",
            "en": {
              "text": "Verbs and adjectives are negated with tidak, while nouns are negated with bukan."
            }
          },
          {
            "type": "formula",
            "title": "tidak (дієслова) vs bukan (іменники)",
            "rows": [
              [
                "Saya tidak faham.",
                "tidak + дієслово",
                "Я не розумію."
              ],
              [
                "Ini bukan buku saya.",
                "bukan + іменник",
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
                "Ini bukan buku saya.",
                "Це не моя книга."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Tidak / Bukan — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією або суфіксом -kah, доданим до ключового слова.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, or with the suffix -kah attached to the key word."
            }
          },
          {
            "type": "formula",
            "title": "Твердження → питання",
            "rows": [
              [
                "Awak lapar.",
                "Awak lapar?",
                "Ти голодний. / Ти голодний?"
              ],
              [
                "Awak ada masa.",
                "Awak ada masa?",
                "У тебе є час. / У тебе є час?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Betulkah itu?",
                "Це справді так?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "reduplication",
        "title": "Множина через повтор — A1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Замість закінчень множина в малайській часто утворюється повторенням усього слова.",
            "en": {
              "text": "Instead of endings, the plural in Malay is often formed by reduplicating the whole word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku → buku-buku",
                "книга → книги"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kanak-kanak bermain.",
                "Діти граються."
              ]
            ]
          }
        ],
        "titleEn": "Plural via Reduplication — A1"
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
        "id": "aspect-sudah-past",
        "title": "\"sudah\" — telah berlaku — A1",
        "titleEn": "Completed Aspect: Sudah — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Малайське дієслово взагалі не змінюється за часом. Слово \"sudah\" перед дієсловом показує, що дія вже відбулася чи завершена.",
            "en": {
              "text": "Malay verbs never change form for tense at all. The word \"sudah\" before a verb marks that the action has already happened or is completed."
            }
          },
          {
            "type": "formula",
            "title": "S + sudah + дієслово",
            "rows": [
              [
                "Saya",
                "sudah makan",
                "я вже поїв"
              ],
              [
                "Dia",
                "sudah pergi",
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
                "Saya sudah baca buku ini.",
                "Я вже прочитав цю книгу."
              ],
              [
                "Mereka sudah sampai.",
                "Вони вже прибули."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-sedang-progressive",
        "title": "\"sedang\" — sedang berlaku — A1",
        "titleEn": "Progressive Aspect: Sedang — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"sedang\" перед дієсловом показує, що дія відбувається саме зараз.",
            "en": {
              "text": "The word \"sedang\" before a verb marks that the action is happening right now."
            }
          },
          {
            "type": "formula",
            "title": "S + sedang + дієслово",
            "rows": [
              [
                "Saya",
                "sedang makan",
                "я саме їм"
              ],
              [
                "Dia",
                "sedang tidur",
                "він/вона саме спить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya sedang belajar bahasa Melayu.",
                "Я зараз вивчаю малайську."
              ],
              [
                "Hujan sedang turun.",
                "Зараз іде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-akan-future",
        "title": "\"akan\" — masa depan — A1",
        "titleEn": "Future: Akan — A1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"akan\" перед дієсловом позначає дію, яка відбудеться в майбутньому.",
            "en": {
              "text": "The word \"akan\" before a verb marks an action that will happen in the future."
            }
          },
          {
            "type": "formula",
            "title": "S + akan + дієслово",
            "rows": [
              [
                "Saya",
                "akan pergi",
                "я піду"
              ],
              [
                "Kami",
                "akan berjumpa",
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
                "Esok saya akan pergi kerja.",
                "Завтра я піду на роботу."
              ],
              [
                "Dia akan telefon awak.",
                "Він тобі зателефонує."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-belum-not-yet",
        "title": "\"belum\" — belum berlaku — A2",
        "titleEn": "Negation: Belum ('Not Yet') — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від \"tidak\" (просте заперечення), \"belum\" означає, що дія ще не відбулася, але може відбутися в майбутньому.",
            "en": {
              "text": "Unlike \"tidak\" (plain negation), \"belum\" means the action hasn't happened yet but might happen in the future."
            }
          },
          {
            "type": "table",
            "title": "tidak vs belum",
            "rows": [
              [
                "Saya tidak makan.",
                "Я не їм (взагалі/не хочу).",
                "tidak"
              ],
              [
                "Saya belum makan.",
                "Я ще не їв (але поїм).",
                "belum"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya belum selesai.",
                "Я ще не закінчив."
              ],
              [
                "Dia belum sampai.",
                "Він/вона ще не прибув(-ла)."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspect-pernah-experience",
        "title": "\"pernah\" — pengalaman — A2",
        "titleEn": "Experience: Pernah — A2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"pernah\" перед дієсловом виражає досвід у минулому (\"колись робив, мати досвід\").",
            "en": {
              "text": "The word \"pernah\" before a verb expresses past experience (\"have ever done\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saya pernah ke Langkawi.",
                "Я колись бував на Лангкаві."
              ],
              [
                "Dia belum pernah makan durian.",
                "Він/вона ніколи не їв(-ла) дуріан."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Awak pernah ke Jepun?",
                "Ти колись бував в Японії?"
              ],
              [
                "Saya pernah jumpa dia.",
                "Я колись зустрічав його/її."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-actions",
        "title": "Kebiasaan (selalu/sering) — A2",
        "titleEn": "Habitual Actions (Selalu/Sering) — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну чи повторювану дію виражають словами \"biasanya\" (зазвичай) чи \"selalu\"/\"sering\" (завжди/часто) перед дієсловом.",
            "en": {
              "text": "A habitual or repeated action is expressed with \"biasanya\" (usually) or \"selalu\"/\"sering\" (always/often) before the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saya biasanya minum kopi.",
                "Я зазвичай п'ю каву."
              ],
              [
                "Dia sering lewat.",
                "Він/вона часто запізнюється."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kami selalu berjumpa hujung minggu.",
                "Ми завжди зустрічаємося на вихідних."
              ],
              [
                "Dia sering lupa barang.",
                "Він/вона часто забуває речі."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperative-mood",
        "title": "Ayat perintah — A2",
        "titleEn": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб — це просто основа дієслова, іноді з часткою \"-lah\" для пом'якшення чи наголосу.",
            "en": {
              "text": "The imperative is simply the bare verb stem, sometimes with the particle \"-lah\" for softening or emphasis."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Duduk!",
                "Сідай!"
              ],
              [
                "Duduklah.",
                "Сідай, будь ласка."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tutup pintu, tolong.",
                "Зачини двері, будь ласка."
              ],
              [
                "Jom pergi!",
                "Ходімо!"
              ]
            ]
          }
        ]
      },
      {
        "id": "prefix-me-active-voice",
        "title": "Awalan \"me-\" (aktif) — B1",
        "titleEn": "Prefix Me- (Active Voice) — B1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"me-\" перетворює основу на активне перехідне дієслово; його форма змінюється залежно від першого приголосного кореня (meng-, men-, mem-, meny-, me-).",
            "en": {
              "text": "The prefix \"me-\" turns a root into an active transitive verb; its form changes depending on the root's initial consonant (meng-, men-, mem-, meny-, me-)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "baca (читати) → membaca",
                "читати"
              ],
              [
                "tulis (писати) → menulis",
                "писати"
              ],
              [
                "beli (купувати) → membeli",
                "купувати"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya membaca buku.",
                "Я читаю книгу."
              ],
              [
                "Dia menulis surat.",
                "Він/вона пише листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "prefix-di-passive-voice",
        "title": "Awalan \"di-\" (pasif) — B1",
        "titleEn": "Prefix Di- (Passive Voice) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"di-\" утворює пасивний стан і вживається, коли фокус речення — на об'єкті, а не на діячі.",
            "en": {
              "text": "The prefix \"di-\" forms the passive voice and is used when the sentence's focus is on the object, not the doer."
            }
          },
          {
            "type": "table",
            "title": "Активний ↔ пасивний",
            "rows": [
              [
                "Saya membaca buku itu.",
                "Я читаю ту книгу.",
                "активний"
              ],
              [
                "Buku itu dibaca oleh saya.",
                "Та книга читається мною.",
                "пасивний"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Surat itu ditulis oleh dia.",
                "Той лист написаний ним/нею."
              ],
              [
                "Rumah ini dibina tahun lepas.",
                "Цей будинок побудований минулого року."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-kan-causative",
        "title": "Akhiran \"-kan\" — B1",
        "titleEn": "Suffix -Kan (Causative/Benefactive) — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс \"-kan\" додає значення каузативності (\"змусити зробити\") чи вигоди для когось (\"зробити для\") до дієслівної основи.",
            "en": {
              "text": "The suffix \"-kan\" adds a causative meaning (\"make happen\") or a benefactive one (\"do for someone\") to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "besar (великий) → membesarkan",
                "виростити (зробити великим)"
              ],
              [
                "beli (купувати) → membelikan",
                "купити для когось"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia membelikan saya hadiah.",
                "Він/вона купив(-ла) мені подарунок."
              ],
              [
                "Tolong jelaskan ini.",
                "Будь ласка, поясни це."
              ]
            ]
          }
        ]
      },
      {
        "id": "prefix-ber-stative",
        "title": "Awalan \"ber-\" — B1",
        "titleEn": "Prefix Ber- (Stative/Reflexive) — B1",
        "emoji": "🔵",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"ber-\" утворює неперехідні дієслова стану, володіння чи зворотної дії — на відміну від активного \"me-\", який позначає дію на об'єкт.",
            "en": {
              "text": "The prefix \"ber-\" forms intransitive verbs of state, possession, or reflexive action — unlike the active \"me-\", which marks action on an object."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "main (грати) → bermain",
                "гратися"
              ],
              [
                "kerja (робота) → bekerja",
                "працювати"
              ],
              [
                "anak (дитина) → beranak",
                "мати дітей"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kanak-kanak bermain di taman.",
                "Діти граються в парку."
              ],
              [
                "Saya bekerja di bank.",
                "Я працюю в банку."
              ]
            ]
          }
        ]
      },
      {
        "id": "prefix-ter-accidental",
        "title": "Awalan \"ter-\" — B1",
        "titleEn": "Prefix Ter- (Accidental/Superlative) — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"ter-\" позначає ненавмисну чи раптову дію (\"випадково зробив\") або утворює найвищий ступінь прикметника.",
            "en": {
              "text": "The prefix \"ter-\" marks an unintentional or sudden action (\"accidentally did\") or forms the superlative of an adjective."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "jatuh (падати) → terjatuh",
                "випадково впав"
              ],
              [
                "besar (великий) → terbesar",
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
                "Kuncinya terjatuh ke sungai.",
                "Ключ випадково впав у річку."
              ],
              [
                "Ini bangunan tertinggi di bandar.",
                "Це найвища будівля в місті."
              ]
            ]
          }
        ]
      },
      {
        "id": "suffix-i-locative",
        "title": "Akhiran \"-i\" — B1",
        "titleEn": "Suffix -I (Locative/Repetitive) — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс \"-i\" часто додає значення повторюваної дії на об'єкті чи вказує на місце дії, на відміну від -kan.",
            "en": {
              "text": "The suffix \"-i\" often adds a meaning of repeated action on an object, or indicates the location of the action, unlike -kan."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tanam (садити) → menanami",
                "засадити (щось площею)"
              ],
              [
                "surat (лист) → menyurati",
                "писати листи (комусь)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Petani menanami sawah dengan padi.",
                "Фермер засадив поле рисом."
              ],
              [
                "Dia menyurati kawannya setiap minggu.",
                "Він/вона пише другові щотижня."
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
        "id": "classifiers-counting",
        "title": "Kata penjodoh bilangan (orang/buah/ekor) — A2",
        "titleEn": "Classifiers (Orang/Buah/Ekor) — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Перед іменником після числівника часто вживають класифікатор, що вказує категорію предмета: \"orang\" (для людей), \"ekor\" (для тварин), \"buah\" (для предметів/плодів).",
            "en": {
              "text": "A classifier is often placed between the number and the noun to mark the object's category: \"orang\" (for people), \"ekor\" (for animals), \"buah\" (for objects/fruit)."
            }
          },
          {
            "type": "table",
            "title": "Приклади класифікаторів",
            "rows": [
              [
                "tiga orang guru",
                "три вчителі",
                "orang — люди"
              ],
              [
                "dua ekor kucing",
                "два коти",
                "ekor — тварини"
              ],
              [
                "lima buah epal",
                "п'ять яблук",
                "buah — предмети/плоди"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya ada dua ekor anjing.",
                "У мене є два пси."
              ],
              [
                "Ada tiga buah kerusi di sini.",
                "Тут є три стільці."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffix",
        "title": "Pemilikan dengan akhiran (-ku/-mu/-nya) — A2",
        "titleEn": "Possessive Suffixes (-Ku/-Mu/-Nya) — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність найпростіше виражається суфіксами -ku (мій), -mu (твій), -nya (його/її), приєднаними прямо до іменника.",
            "en": {
              "text": "Possession is most simply expressed with the suffixes -ku (my), -mu (your), -nya (his/her), attached directly to the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku (книга) → bukuku",
                "моя книга"
              ],
              [
                "rumah (дім) → rumahmu",
                "твій дім"
              ],
              [
                "kereta (машина) → keretanya",
                "його/її машина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ini rumahku.",
                "Це мій дім."
              ],
              [
                "Siapa namanya?",
                "Як його/її звати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-svo",
        "title": "Susunan kata S-V-O — A1",
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
                "Saya (S)",
                "makan (V)",
                "nasi (O) — я їм рис"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya suka Malaysia.",
                "Я люблю Малайзію."
              ],
              [
                "Dia membaca buku.",
                "Він/вона читає книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-after-noun",
        "title": "Kata sifat selepas kata nama — A1",
        "titleEn": "Adjective After Noun — A1",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від української, прикметник в малайській стоїть ПІСЛЯ іменника, а не перед ним.",
            "en": {
              "text": "Unlike Ukrainian, the adjective in Malay comes AFTER the noun, not before it."
            }
          },
          {
            "type": "table",
            "title": "Порядок слів",
            "rows": [
              [
                "rumah besar",
                "великий дім (букв. \"дім великий\")"
              ],
              [
                "kereta merah",
                "червона машина (букв. \"машина червона\")"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya ada kucing kecil.",
                "У мене є маленький кіт."
              ],
              [
                "Ini cerita sedih.",
                "Це сумна історія."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-ini-itu",
        "title": "Kata tunjuk \"ini\" dan \"itu\" — A1",
        "titleEn": "Demonstratives: Ini & Itu — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ini\" вказує на предмет поруч із мовцем (\"цей\"), \"itu\" — на віддалений чи вже згаданий предмет (\"той\"). Завжди стоять після іменника.",
            "en": {
              "text": "\"Ini\" points to something near the speaker (\"this\"), \"itu\" to something farther away or already mentioned (\"that\"). They always follow the noun."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku ini",
                "ця книга",
                "близько до мовця"
              ],
              [
                "buku itu",
                "та книга",
                "далі чи вже згадана"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rumah ini cantik.",
                "Цей дім гарний."
              ],
              [
                "Siapa orang itu?",
                "Хто та людина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "comparison-lebih-paling",
        "title": "Perbandingan (lebih/paling) — A2",
        "titleEn": "Comparison (Lebih/Paling) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь виражається словом \"lebih\" (\"більше\") перед прикметником + \"daripada\" (\"ніж\"), найвищий — словом \"paling\" (\"найбільше\").",
            "en": {
              "text": "The comparative is expressed with \"lebih\" (\"more\") before the adjective plus \"daripada\" (\"than\"); the superlative uses \"paling\" (\"most\")."
            }
          },
          {
            "type": "table",
            "title": "Звичайний → вищий → найвищий",
            "rows": [
              [
                "besar",
                "lebih besar",
                "paling besar"
              ],
              [
                "laju",
                "lebih laju",
                "paling laju"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rumah ini lebih besar daripada rumah itu.",
                "Цей дім більший, ніж той дім."
              ],
              [
                "Dia pelajar paling pandai.",
                "Він/вона найрозумніший(-ша) учень(-ниця)."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-equal-sama",
        "title": "Perbandingan setara (sama...dengan) — B1",
        "titleEn": "Equal Comparison (Sama...Dengan) — B1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Рівне порівняння (\"такий же ... як\") виражається конструкцією \"sama + прикметник + dengan\".",
            "en": {
              "text": "Equal comparison (\"as ... as\") is expressed with the construction \"sama + adjective + dengan\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "sama tinggi dengan",
                "такий же високий, як"
              ],
              [
                "sama besar dengan",
                "такий же великий, як"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Adik saya sama tinggi dengan saya.",
                "Мій молодший брат такий же високий, як я."
              ],
              [
                "Rumah ini sama cantik dengan rumah itu.",
                "Цей дім такий же гарний, як той."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-cardinal",
        "title": "Nombor — A1",
        "titleEn": "Cardinal Numbers — A1",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "satu",
                "один",
                "1"
              ],
              [
                "lima",
                "п'ять",
                "5"
              ],
              [
                "sepuluh",
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
                "Saya ada dua adik.",
                "У мене два молодших брати/сестри."
              ],
              [
                "Kelas ini ada tiga puluh pelajar.",
                "У цьому класі тридцять учнів."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-large",
        "title": "Nombor besar (ratus/ribu/juta) — A2",
        "titleEn": "Large Numbers (Ratus/Ribu/Juta) — A2",
        "emoji": "💯",
        "sections": [
          {
            "type": "table",
            "title": "Великі числа",
            "rows": [
              [
                "seratus",
                "сто",
                "100"
              ],
              [
                "seribu",
                "тисяча",
                "1000"
              ],
              [
                "sejuta",
                "мільйон",
                "1 000 000"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Harganya seratus ringgit.",
                "Ціна — сто рингітів."
              ],
              [
                "Bandar ini ada sejuta penduduk.",
                "У цьому місті мільйон мешканців."
              ]
            ]
          }
        ]
      },
      {
        "id": "numbers-ordinal",
        "title": "Nombor giliran (ke-) — A2",
        "titleEn": "Ordinal Numbers (Ke-) — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом \"ke-\" перед кількісним числівником.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix \"ke-\" before the cardinal number."
            }
          },
          {
            "type": "table",
            "title": "Кількісний → порядковий",
            "rows": [
              [
                "satu → pertama",
                "перший (незвичайна форма)"
              ],
              [
                "dua → kedua",
                "другий"
              ],
              [
                "tiga → ketiga",
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
                "Ini hari pertama saya di pejabat.",
                "Це мій перший день в офісі."
              ],
              [
                "Saya tinggal di tingkat kedua.",
                "Я живу на другому поверсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-yang",
        "title": "Kata penghubung \"yang\" — B1",
        "titleEn": "Relative Clauses with Yang — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Yang\" — універсальне слово, що вводить підрядне означальне речення й не змінюється за родом, числом чи відмінком, на відміну від багатьох інших мов.",
            "en": {
              "text": "\"Yang\" is the universal word introducing a relative clause and never changes for gender, number, or case, unlike many other languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "buku yang saya baca",
                "книга, яку я читаю"
              ],
              [
                "orang yang datang",
                "людина, яка приходить"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ini rumah yang saya beli.",
                "Це той дім, який я купив."
              ],
              [
                "Saya suka filem yang lucu.",
                "Мені подобаються фільми, які смішні."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-basic",
        "title": "Kata hubung asas (dan/atau/tetapi) — A1",
        "titleEn": "Basic Conjunctions (Dan/Atau/Tetapi) — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "dan",
                "і/та",
                "Saya dan awak."
              ],
              [
                "atau",
                "або",
                "Kopi atau teh?"
              ],
              [
                "tetapi",
                "але",
                "Nak, tetapi tak boleh."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya suka teh dan kopi.",
                "Мені подобається чай і кава."
              ],
              [
                "Saya nak pergi, tetapi tiada masa.",
                "Я хочу піти, але не маю часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunctions-correlative",
        "title": "Kata hubung berpasangan (kerana...maka) — B1",
        "titleEn": "Correlative Conjunctions (Kerana...Maka) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Парні сполучники з'єднують дві частини речення: \"kerana...maka\" (\"тому що... отже\") для причини, \"kalau...maka\" (\"якщо... то\") для умови.",
            "en": {
              "text": "Paired conjunctions link two clauses: \"kerana...maka\" (\"because... so\") for cause, \"kalau...maka\" (\"if... then\") for condition."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Kerana hujan, maka saya di rumah.",
                "Тому що йде дощ, я вдома."
              ],
              [
                "Kalau awak datang, maka saya gembira.",
                "Якщо ти прийдеш, я зраджу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kerana sibuk, saya tak boleh pergi.",
                "Через зайнятість я не можу піти."
              ],
              [
                "Kalau ada masa, saya akan telefon.",
                "Якщо буде час, я подзвоню."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjunction-temporal",
        "title": "Kata hubung masa (sebelum/selepas) — B1",
        "titleEn": "Temporal Conjunctions (Sebelum/Selepas) — B1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "sebelum",
                "перед тим як",
                "Sebelum makan, basuh tangan."
              ],
              [
                "selepas",
                "після того як",
                "Selepas makan, saya tidur."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sebelum tidur, saya baca buku.",
                "Перед сном я читаю книгу."
              ],
              [
                "Selepas tamat belajar, dia bekerja di bank.",
                "Після випуску він/вона працює в банку."
              ]
            ]
          }
        ]
      },
      {
        "id": "prepositions-basic",
        "title": "Kata depan asas (di/ke/dari) — A1",
        "titleEn": "Basic Prepositions (Di/Ke/Dari) — A1",
        "emoji": "📎",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "di",
                "в, на (місце)",
                "di rumah"
              ],
              [
                "ke",
                "до",
                "ke sekolah"
              ],
              [
                "dari",
                "з, від",
                "dari Malaysia"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya tinggal di Kuala Lumpur.",
                "Я живу в Куала-Лумпурі."
              ],
              [
                "Dia dari Pulau Pinang.",
                "Він/вона з Пенанга."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-words",
        "title": "Kata tanya — A1",
        "titleEn": "Question Words — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "apa?",
                "що?",
                "Apa ini?"
              ],
              [
                "siapa?",
                "хто?",
                "Siapa itu?"
              ],
              [
                "di mana?",
                "де?",
                "Awak di mana?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Siapa nama awak?",
                "Як тебе звати?"
              ],
              [
                "Awak nak ke mana?",
                "Куди ти йдеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Kata kerja bantu modal — A2",
        "titleEn": "Modal Verbs — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Модальні дієслова",
            "rows": [
              [
                "boleh",
                "могти/можна",
                "Saya boleh tolong."
              ],
              [
                "mesti",
                "мусити",
                "Awak mesti pergi."
              ],
              [
                "nak / hendak",
                "хотіти",
                "Saya nak makan."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bolehkah awak tolong saya?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Awak tak boleh merokok di sini.",
                "Тут не можна курити."
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-ada",
        "title": "Kewujudan/pemilikan (ada) — A1",
        "titleEn": "Existence & Possession: Ada — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ada\" (\"є, мати\") виражає і наявність предмета, і володіння ним — одне слово для обох значень.",
            "en": {
              "text": "\"Ada\" (\"to exist, to have\") expresses both the presence of something and possession of it — one word for both meanings."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Ada buku di meja.",
                "На столі є книга."
              ],
              [
                "Saya ada kucing.",
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
                "Ada restoran di sini?",
                "Тут є ресторан?"
              ],
              [
                "Saya tiada duit.",
                "У мене немає грошей."
              ]
            ]
          }
        ]
      },
      {
        "id": "days-of-week",
        "title": "Hari dalam seminggu — A1",
        "titleEn": "Days of the Week — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Isnin",
                "понеділок",
                "1"
              ],
              [
                "Jumaat",
                "п'ятниця",
                "5"
              ],
              [
                "Ahad",
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
                "Hari Isnin saya ada kelas.",
                "У понеділок у мене заняття."
              ],
              [
                "Hari ini hari Rabu.",
                "Сьогодні середа."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-dates",
        "title": "Bulan dan tarikh — A2",
        "titleEn": "Months & Dates — A2",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "table",
            "title": "Місяці (приклади)",
            "rows": [
              [
                "Januari",
                "січень",
                "01"
              ],
              [
                "Julai",
                "липень",
                "07"
              ],
              [
                "Disember",
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
                "Hari ini lima Mei.",
                "Сьогодні п'яте травня."
              ],
              [
                "Saya lahir pada bulan Disember.",
                "Я народився в грудні."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Menyatakan masa — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати час, кажуть \"Pukul berapa sekarang?\" (\"Котра зараз година?\"), а відповідь уживає слово \"pukul\" (година) + числівник.",
            "en": {
              "text": "To ask the time, one says \"Pukul berapa sekarang?\" (\"What time is it now?\"), and the answer uses \"pukul\" (hour/clock) plus the number."
            }
          },
          {
            "type": "table",
            "title": "Приклади часу",
            "rows": [
              [
                "pukul satu",
                "перша година",
                "1:00"
              ],
              [
                "pukul setengah tiga",
                "половина третьої",
                "2:30"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pukul berapa sekarang?",
                "Котра зараз година?"
              ],
              [
                "Kereta api bertolak pukul lapan.",
                "Потяг відправляється о восьмій."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-pronouns",
        "title": "Ganti nama formal dan tidak formal — A2",
        "titleEn": "Formal & Informal Pronouns — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Saya\" і \"anda\" — ввічливі/формальні форми \"я\" і \"ти/ви\" (уживані переважно в письмовій та офіційній мові), тоді як \"aku\" і \"awak\"/\"kau\" — неформальні, для друзів і рівних за віком.",
            "en": {
              "text": "\"Saya\" and \"anda\" are the polite/formal forms of \"I\" and \"you\" (used mainly in writing and official speech), while \"aku\" and \"awak\"/\"kau\" are informal, for friends and peers."
            }
          },
          {
            "type": "table",
            "title": "Формальне ↔ неформальне",
            "rows": [
              [
                "Saya dari Ukraine.",
                "Я з України. (формально)"
              ],
              [
                "Aku dari Ukraine.",
                "Я з України. (неформально)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Adakah anda ada masa?",
                "У Вас є час? (формально)"
              ],
              [
                "Awak nak makan apa?",
                "Що ти хочеш поїсти? (неформально)"
              ]
            ]
          }
        ]
      },
      {
        "id": "address-titles",
        "title": "Panggilan hormat (Encik/Puan/Cik) — A2",
        "titleEn": "Address Titles (Encik/Puan/Cik) — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість імені часто вживають ввічливі звертання: \"Encik\" (пане, до чоловіка), \"Puan\" (пані, до заміжньої жінки), \"Cik\" (панно, до незаміжньої жінки).",
            "en": {
              "text": "Instead of a name, polite titles are often used: \"Encik\" (sir, to a man), \"Puan\" (madam, to a married woman), \"Cik\" (miss, to an unmarried woman)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Encik Ahmad",
                "пан Ахмад"
              ],
              [
                "Puan Siti",
                "пані Сіті"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Selamat pagi, Encik!",
                "Доброго ранку, пане!"
              ],
              [
                "Cik, boleh saya tanya?",
                "Панно, можна запитати?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-common-phrases",
        "title": "Salam dan ungkapan umum — A1",
        "titleEn": "Greetings & Common Phrases — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Поширені фрази",
            "rows": [
              [
                "Helo.",
                "Привіт."
              ],
              [
                "Terima kasih.",
                "Дякую."
              ],
              [
                "Maaf.",
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
                "Selamat berkenalan.",
                "Приємно познайомитися."
              ],
              [
                "Jumpa lagi.",
                "До зустрічі."
              ]
            ]
          }
        ]
      },
      {
        "id": "weather-monsoon-seasons",
        "title": "Musim (kemarau/tengkujuh) — A1",
        "titleEn": "Seasons (Dry/Monsoon) — A1",
        "emoji": "🌤️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від помірного клімату з чотирма порами року, у Малайзії дві основні пори: сухий сезон і мусонний сезон дощів (tengkujuh), особливо відчутний на східному узбережжі.",
            "en": {
              "text": "Unlike temperate climates with four seasons, Malaysia has two main ones: a dry season and a monsoon rainy season (tengkujuh), especially felt on the east coast."
            }
          },
          {
            "type": "table",
            "title": "Два сезони",
            "rows": [
              [
                "musim kemarau",
                "сухий сезон"
              ],
              [
                "musim tengkujuh",
                "мусонний сезон дощів"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sekarang musim tengkujuh.",
                "Зараз мусонний сезон."
              ],
              [
                "Musim kemarau sangat panas.",
                "Сухий сезон дуже спекотний."
              ]
            ]
          }
        ]
      },
      {
        "id": "common-idioms",
        "title": "Peribahasa dan simpulan bahasa — B1",
        "titleEn": "Common Idioms — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "table",
            "title": "Поширені ідіоми",
            "rows": [
              [
                "Bagai aur dengan tebing.",
                "(букв. як бамбук і берег) — взаємовигідна співпраця."
              ],
              [
                "Ada udang di sebalik batu.",
                "(букв. є креветка за каменем) — тут є прихований мотив."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kerjasama mereka bagai aur dengan tebing.",
                "Їхня співпраця взаємовигідна."
              ],
              [
                "Saya syak ada udang di sebalik batu.",
                "Я підозрюю, що тут є прихований мотив."
              ]
            ]
          }
        ]
      },
      {
        "id": "quantifiers",
        "title": "Kata kuantiti (banyak/sedikit) — A2",
        "titleEn": "Quantifiers (Banyak/Sedikit) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "table",
            "title": "Слова кількості",
            "rows": [
              [
                "banyak",
                "багато"
              ],
              [
                "sedikit",
                "мало/трохи"
              ],
              [
                "beberapa",
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
                "Saya ada banyak kawan.",
                "У мене багато друзів."
              ],
              [
                "Beri saya sedikit masa.",
                "Дай мені трохи часу."
              ]
            ]
          }
        ]
      },
      {
        "id": "adverbs-common",
        "title": "Kata keterangan umum (juga/masih/lagi) — A2",
        "titleEn": "Common Adverbs (Juga/Masih/Lagi) — A2",
        "emoji": "🗯️",
        "sections": [
          {
            "type": "table",
            "title": "Поширені прислівники",
            "rows": [
              [
                "juga",
                "теж",
                "Saya juga nak ikut."
              ],
              [
                "masih",
                "ще",
                "Dia masih tidur."
              ],
              [
                "lagi",
                "знову/ще",
                "Makan lagi?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kami semua kawan.",
                "Ми всі друзі."
              ],
              [
                "Dia masih di pejabat.",
                "Він/вона ще в офісі."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-topic-comment",
        "title": "Struktur topik-komen — B1",
        "titleEn": "Topic-Comment Structure — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб виділити тему речення, малайська часто виносить її на початок, навіть якщо граматично вона не є підметом, а решта речення коментує цю тему.",
            "en": {
              "text": "To highlight the topic of a sentence, Malay often fronts it to the beginning, even when it is not grammatically the subject, with the rest of the sentence commenting on that topic."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Buku ini, saya sudah baca.",
                "Цю книгу я вже прочитав.",
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
                "Makanan ini, saya suka sangat.",
                "Цю страву я дуже люблю."
              ],
              [
                "Bahasa Melayu, saya belajar tiga tahun.",
                "Малайську я вчу три роки."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-plural-with-numbers",
        "title": "Tiada perulangan selepas nombor — A2",
        "titleEn": "No Reduplication After Numbers — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Коли перед іменником уже стоїть числівник, повторення (з базового правила множини) НЕ вживається — числівник уже показує кількість.",
            "en": {
              "text": "When a numeral already precedes a noun, reduplication (from the basics plural rule) is NOT used — the numeral already shows the quantity."
            }
          },
          {
            "type": "table",
            "title": "Правильно ↔ неправильно",
            "rows": [
              [
                "tiga buku",
                "tiga buku-buku ✗",
                "три книги"
              ],
              [
                "lima kanak-kanak",
                "lima kanak-kanak-kanak-kanak ✗",
                "п'ять дітей"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya ada tiga buku.",
                "У мене три книги."
              ],
              [
                "Ada lima kanak-kanak di taman.",
                "У парку п'ятеро дітей."
              ]
            ]
          }
        ]
      },
      {
        "id": "reduplication-other-uses",
        "title": "Perulangan untuk makna lain — B1",
        "titleEn": "Reduplication for Other Meanings — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова вживається не лише для множини, а й для вираження різноманітності, невизначеності чи інтенсивності.",
            "en": {
              "text": "Reduplication is used not just for the plural, but also to express variety, vagueness, or intensity."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "merah (червоний) → kemerah-merahan",
                "червонуватий"
              ],
              [
                "main (грати) → main-main",
                "жартувати, не серйозно"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Langit kelihatan kemerah-merahan waktu senja.",
                "Небо виглядає червонуватим на заході сонця."
              ],
              [
                "Jangan main-main dengan ini.",
                "Не жартуй із цим."
              ]
            ]
          }
        ]
      },
      {
        "id": "affix-pe-agent-noun",
        "title": "Awalan \"pe-\" (pelaku) — B1",
        "titleEn": "Prefix Pe- (Agent Noun) — B1",
        "emoji": "🧑",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс \"pe-\" (з тими самими алорфами, що й дієслівний \"me-\") перетворює дієслово на іменник-виконавця дії.",
            "en": {
              "text": "The prefix \"pe-\" (with the same allomorphs as verbal \"me-\") turns a verb into an agent noun (the doer of the action)."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → іменник-виконавець",
            "rows": [
              [
                "tulis (писати) → penulis",
                "письменник"
              ],
              [
                "ajar (вчити) → pengajar",
                "викладач"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia penulis terkenal.",
                "Він/вона відомий(-а) письменник(-ниця)."
              ],
              [
                "Penjual itu peramah.",
                "Той продавець дружелюбний."
              ]
            ]
          }
        ]
      },
      {
        "id": "affix-an-noun-suffix",
        "title": "Akhiran \"-an\" — B1",
        "titleEn": "Suffix -An (Noun-Forming) — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс \"-an\" перетворює дієслово чи прикметник на іменник, часто позначаючи результат дії.",
            "en": {
              "text": "The suffix \"-an\" turns a verb or adjective into a noun, often denoting the result of the action."
            }
          },
          {
            "type": "table",
            "title": "Дієслово → іменник",
            "rows": [
              [
                "makan (їсти) → makanan",
                "їжа"
              ],
              [
                "minum (пити) → minuman",
                "напій"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Makanan ini sedap sangat.",
                "Ця їжа дуже смачна."
              ],
              [
                "Saya suka minuman sejuk.",
                "Мені подобаються холодні напої."
              ]
            ]
          }
        ]
      },
      {
        "id": "circumfix-pe-an-ke-an",
        "title": "Konfiks \"pe-an\" dan \"ke-an\" — B1",
        "titleEn": "Circumfixes Pe-An & Ke-An — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Циркумфікси \"pe-an\" і \"ke-an\" (префікс + суфікс одночасно) утворюють абстрактні іменники процесу чи стану.",
            "en": {
              "text": "The circumfixes \"pe-an\" and \"ke-an\" (prefix and suffix applied together) form abstract nouns of process or state."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "didik (виховувати) → pendidikan",
                "освіта"
              ],
              [
                "sihat (здоровий) → kesihatan",
                "здоров'я"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pendidikan sangat penting.",
                "Освіта дуже важлива."
              ],
              [
                "Kesihatan adalah yang utama.",
                "Здоров'я — це найголовніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "negation-nuances",
        "title": "Nuansa penafian (tidak/bukan/belum/jangan) — B1",
        "titleEn": "Negation Nuances — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Чотири різні заперечення для різних ситуацій: \"tidak\" (дієслова/прикметники), \"bukan\" (іменники), \"belum\" (ще не), \"jangan\" (заборона, \"не роби\").",
            "en": {
              "text": "Four different negations for different situations: \"tidak\" (verbs/adjectives), \"bukan\" (nouns), \"belum\" (not yet), \"jangan\" (prohibition, \"don't\")."
            }
          },
          {
            "type": "table",
            "title": "Чотири заперечення",
            "rows": [
              [
                "Dia bukan guru.",
                "Він/вона не вчитель (іменник).",
                "bukan"
              ],
              [
                "Jangan lupa!",
                "Не забудь! (заборона)",
                "jangan"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Jangan bercakap kuat-kuat.",
                "Не говори голосно."
              ],
              [
                "Ini bukan kereta saya.",
                "Це не моя машина."
              ]
            ]
          }
        ]
      },
      {
        "id": "politeness-particles",
        "title": "Partikel kesopanan (pun/lah) — B1",
        "titleEn": "Politeness Particles (Pun/Lah) — B1",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"pun\" додає значення \"навіть, теж\" і підкреслення, а \"-lah\" пом'якшує накази чи додає переконливості твердженню.",
            "en": {
              "text": "The particle \"pun\" adds an \"even, also\" meaning and emphasis, while \"-lah\" softens commands or adds persuasiveness to a statement."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Saya pun tak tahu.",
                "Я теж не знаю.",
                "pun"
              ],
              [
                "Marilah!",
                "Ну ж бо!",
                "lah"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia pun setuju.",
                "Він/вона теж погодився(-лась)."
              ],
              [
                "Tolonglah saya.",
                "Допоможи мені, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "emphasis-particle-lah",
        "title": "Partikel penekanan \"-lah\" — B1",
        "titleEn": "Emphasis Particle -Lah — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"-lah\" приєднується до слова для наголосу, пом'якшення наказу чи надання твердженню відтінку переконання.",
            "en": {
              "text": "The particle \"-lah\" attaches to a word for emphasis, to soften a command, or to give a statement a tone of persuasion."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Duduklah.",
                "Сідай, будь ласка."
              ],
              [
                "Memanglah begitu.",
                "Так воно і є."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cubalah sekali lagi.",
                "Спробуй ще раз."
              ],
              [
                "Biarlah dia pergi.",
                "Нехай він/вона йде."
              ]
            ]
          }
        ]
      },
      {
        "id": "question-tag-kan",
        "title": "Penegas soalan \"kan\" — B1",
        "titleEn": "Tag Question: Kan — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kan\" у кінці речення (скорочено від \"bukan\") утворює доповнювальне питання \"чи не так?\", шукаючи підтвердження.",
            "en": {
              "text": "\"Kan\" at the end of a sentence (short for \"bukan\") forms a tag question meaning \"right?\", seeking confirmation."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Awak lapar, kan?",
                "Ти голодний, чи не так?"
              ],
              [
                "Ini betul, kan?",
                "Це правда, так?"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Kita dah jumpa, kan?",
                "Ми ж уже зустрічалися, так?"
              ],
              [
                "Dia baik, kan?",
                "Він/вона добрий(-а), правда?"
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-intensifiers",
        "title": "Penguat kata sifat (sangat/sekali) — A2",
        "titleEn": "Adjective Intensifiers (Sangat/Sekali) — A2",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Sangat\" стоїть перед прикметником (\"дуже\"), \"sekali\" — завжди після нього, з тим самим значенням.",
            "en": {
              "text": "\"Sangat\" precedes the adjective (\"very\"), while \"sekali\" always follows it, with the same meaning."
            }
          },
          {
            "type": "table",
            "title": "sangat vs sekali",
            "rows": [
              [
                "sangat cantik",
                "дуже гарний",
                "перед"
              ],
              [
                "cantik sekali",
                "дуже гарний",
                "після"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Makanan ini sangat sedap.",
                "Ця їжа дуже смачна."
              ],
              [
                "Filem itu bagus sekali!",
                "Той фільм дуже хороший!"
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-punya",
        "title": "Pemilikan dengan \"punya\" — A2",
        "titleEn": "Possession with Punya — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Слово \"punya\" (\"мати, володіти\") вставляється між власником і предметом як альтернатива присвійним суфіксам, особливо в розмовній мові.",
            "en": {
              "text": "The word \"punya\" (\"to have, own\") is inserted between the owner and the object as an alternative to the possessive suffixes, especially in casual speech."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ini kepunyaan saya",
                "це моє"
              ],
              [
                "kereta dia punya",
                "його/її машина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Ini bukan kepunyaan saya.",
                "Це не моє."
              ],
              [
                "Rumah siapa ini?",
                "Чий це дім?"
              ]
            ]
          }
        ]
      },
      {
        "id": "serial-verb-constructions",
        "title": "Binaan kata kerja bersiri — B1",
        "titleEn": "Serial Verb Constructions — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дієслів можуть стояти поряд без сполучника, утворюючи одну дієслівну фразу, де перше дієслово описує мету чи спосіб наступного.",
            "en": {
              "text": "Several verbs can stand together with no conjunction, forming a single verb phrase where the first verb describes the purpose or manner of the next."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "pergi membeli-belah",
                "йти по покупки"
              ],
              [
                "duduk makan",
                "сидіти й їсти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya pergi membeli-belah di pasar.",
                "Я йду по покупки на ринок."
              ],
              [
                "Jom duduk makan bersama.",
                "Ходімо сядемо поїсти разом."
              ]
            ]
          }
        ]
      },
      {
        "id": "subject-topic-omission",
        "title": "Peninggalan subjek — A2",
        "titleEn": "Subject Omission (Pro-Drop) — A2",
        "emoji": "🫥",
        "sections": [
          {
            "type": "intro",
            "text": "Якщо підмет зрозумілий із контексту, його часто опускають, особливо в розмовній мові й у відповідях.",
            "en": {
              "text": "When the subject is clear from context, it is often omitted, especially in casual speech and in answers."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dah makan?",
                "(Ти) вже їв?",
                "підмет опущено"
              ],
              [
                "Dah.",
                "(Я) вже (їв).",
                "підмет опущено"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nak ke mana?",
                "(Ти) куди йдеш?"
              ],
              [
                "Tengah sibuk.",
                "(Я) зараз зайнятий."
              ]
            ]
          }
        ]
      },
      {
        "id": "exclamations",
        "title": "Ungkapan seru — A2",
        "titleEn": "Exclamations — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Wah!",
                "Ого!"
              ],
              [
                "Aduh!",
                "Ой!"
              ],
              [
                "Aduhai!",
                "Боже мій!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wah, cantik sekali!",
                "Ого, дуже гарно!"
              ],
              [
                "Aduh, saya lupa!",
                "Ой, я забув!"
              ]
            ]
          }
        ]
      },
      {
        "id": "time-expressions-relative",
        "title": "Ungkapan masa (hari ini/semalam/esok) — A1",
        "titleEn": "Relative Time Expressions — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "hari ini",
                "сьогодні"
              ],
              [
                "semalam",
                "вчора"
              ],
              [
                "esok",
                "завтра"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Hari ini saya cuti.",
                "Сьогодні я вільний."
              ],
              [
                "Jumpa esok.",
                "До завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "counting-money-prices",
        "title": "Harga dan wang — A2",
        "titleEn": "Money & Prices — A2",
        "emoji": "💰",
        "sections": [
          {
            "type": "intro",
            "text": "Щоб запитати ціну, кажуть \"Berapa harganya?\" (\"Скільки це коштує?\"), а валюта \"ringgit\" стоїть перед числом (на відміну від рупії в Індонезії).",
            "en": {
              "text": "To ask the price, one says \"Berapa harganya?\" (\"How much does it cost?\"), and the currency \"ringgit\" (RM) precedes the number, unlike Indonesia's rupiah."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "RM seratus",
                "сто рингітів"
              ],
              [
                "murah / mahal",
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
                "Berapa harga baju ini?",
                "Скільки коштує ця сорочка?"
              ],
              [
                "Ini terlalu mahal.",
                "Це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "opinions-expressions",
        "title": "Menyatakan pendapat — A2",
        "titleEn": "Expressing Opinions — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Pada pendapat saya...",
                "На мою думку..."
              ],
              [
                "Saya rasa...",
                "Я думаю, що..."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Pada pendapat saya, ini idea yang baik.",
                "На мою думку, це хороша ідея."
              ],
              [
                "Saya rasa itu terlalu mahal.",
                "Я думаю, це занадто дорого."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-note",
        "title": "Kata pinjaman (Inggeris/Sanskrit/Arab) — B1",
        "titleEn": "Loanwords (English/Sanskrit/Arabic) — B1",
        "emoji": "🌏",
        "sections": [
          {
            "type": "intro",
            "text": "Малайська лексика має три великі шари запозичень: англійський (через британську колонізацію), санскритський (індуїстсько-буддійська епоха) та арабський (через іслам) — на відміну від індонезійської, де перший шар голландський.",
            "en": {
              "text": "Malay vocabulary has three major loanword layers: English (through British colonization), Sanskrit (Hindu-Buddhist era), and Arabic (through Islam) — unlike Indonesian, where the first layer is Dutch."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "kolej (коледж)",
                "з англійської college"
              ],
              [
                "bahasa (мова)",
                "із санскриту"
              ],
              [
                "waktu (час)",
                "з арабської"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya belajar di kolej.",
                "Я навчаюся в коледжі."
              ],
              [
                "Berapa lama waktu diperlukan?",
                "Скільки часу для цього потрібно?"
              ]
            ]
          }
        ]
      },
      {
        "id": "greetings-time-of-day",
        "title": "Salam mengikut waktu — A1",
        "titleEn": "Time-of-Day Greetings — A1",
        "emoji": "🌅",
        "sections": [
          {
            "type": "intro",
            "text": "Малайська, як і індонезійська, має окреме привітання для кожної частини доби, включно з окремим для полудня.",
            "en": {
              "text": "Malay, like Indonesian, has a separate greeting for each part of the day, including a distinct one for midday."
            }
          },
          {
            "type": "table",
            "title": "Привітання за часом доби",
            "rows": [
              [
                "Selamat pagi",
                "Доброго ранку"
              ],
              [
                "Selamat tengah hari",
                "Доброго дня (полудень)"
              ],
              [
                "Selamat malam",
                "Доброго вечора/ночі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Selamat pagi, Puan!",
                "Доброго ранку, пані!"
              ],
              [
                "Selamat malam, jumpa esok.",
                "На добраніч, до завтра."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-overview",
        "title": "Gambaran pembentukan kata — B1",
        "titleEn": "Word Formation Overview — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Малайська дуже продуктивно утворює нові слова додаванням афіксів (префіксів, суфіксів, циркумфіксів) до кореня — той самий корінь може дати кілька слів різних частин мови.",
            "en": {
              "text": "Malay is highly productive at forming new words by adding affixes (prefixes, suffixes, circumfixes) to a root — the same root can yield several words in different parts of speech."
            }
          },
          {
            "type": "table",
            "title": "Приклад одного кореня",
            "rows": [
              [
                "ajar (корінь: вчити)",
                "belajar / mengajar / pelajaran",
                "вчитися / навчати / урок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Saya belajar bahasa Melayu.",
                "Я вивчаю малайську."
              ],
              [
                "Ini pelajaran yang penting.",
                "Це важливий урок."
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
        "id": "me-nasalization-irregular",
        "title": "Peluluhan tidak beraturan pada \"me-\" — B1",
        "titleEn": "Irregular Nasalization with Me- — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Коли основа починається на k/p/t/s, ці приголосні зазвичай зникають і замінюються носовим звуком (\"peluluhan\"), але деякі запозичені чи односкладові корені зберігають початковий приголосний без змін — винятки треба запам'ятовувати.",
            "en": {
              "text": "When a root starts with k/p/t/s, that consonant usually disappears and is replaced by a nasal sound (\"peluluhan\"), but some loanwords or monosyllabic roots keep the initial consonant unchanged — the exceptions must be memorized."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "kirim (звичайне правило)",
                "menghantar (у малайській частіше вживають цей синонім)",
                "к зникає в тих словах, де застосовується"
              ],
              [
                "kritik (запозичене, виняток)",
                "mengkritik",
                "к зберігається"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dia mengkritik filem itu.",
                "Він/вона критикує той фільм."
              ],
              [
                "Saya menghantar surat.",
                "Я надсилаю листа."
              ]
            ]
          }
        ]
      },
      {
        "id": "jawi-rumi-digraphia",
        "title": "Tulisan Jawi dan Rumi — B1",
        "titleEn": "Jawi & Rumi Digraphia — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від індонезійської (лише латиниця), малайська офіційно двоалфавітна в деяких штатах і в Брунеї: латиниця (Rumi, сучасний стандарт) та арабське письмо Jawi (історичне, досі вживане на офіційних вивісках у Келантані та в релігійних текстах).",
            "en": {
              "text": "Unlike Indonesian (Latin script only), Malay is officially digraphic in some states and in Brunei: the Latin alphabet (Rumi, the modern standard) and the Arabic-based Jawi script (historical, still used on official signage in Kelantan and in religious texts)."
            }
          },
          {
            "type": "table",
            "title": "Rumi ↔ Jawi",
            "rows": [
              [
                "selamat pagi",
                "سلامت ڤاڬي",
                "латиниця / джаві"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Papan tanda di Kelantan sering ditulis dalam Jawi.",
                "Вивіски в Келантані часто пишуться письмом Джаві."
              ],
              [
                "Kebanyakan buku moden ditulis dalam Rumi.",
                "Більшість сучасних книг написані латиницею."
              ]
            ]
          }
        ]
      },
      {
        "id": "royal-court-vocabulary",
        "title": "Bahasa istana (diraja) — B1",
        "titleEn": "Royal Court Vocabulary — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Через живу традицію малайських султанатів у сучасній малайській зберігся окремий шар лексики виключно для звертання до королівської родини — власні слова замість звичайних \"я\", \"їсти\", \"вмирати\", яких немає в такому обсязі в індонезійській.",
            "en": {
              "text": "Because of the living tradition of Malay sultanates, modern Malay retains a separate vocabulary layer used exclusively when addressing royalty — its own words instead of ordinary \"I\", \"eat\", \"die\", a layer Indonesian does not preserve to the same extent."
            }
          },
          {
            "type": "table",
            "title": "Звичайне ↔ придворне слово",
            "rows": [
              [
                "saya (я)",
                "beta (я, для монарха)",
                "королівська форма"
              ],
              [
                "makan (їсти)",
                "bersantap (їсти, про монарха)",
                "королівська форма"
              ],
              [
                "mati (вмерти)",
                "mangkat (про монарха)",
                "королівська форма"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Sultan bersantap di istana.",
                "Султан їсть у палаці (придворна мова)."
              ],
              [
                "Baginda mangkat pada tahun itu.",
                "Його Величність помер того року (придворна мова)."
              ]
            ]
          }
        ]
      }
    ]
  }
];
