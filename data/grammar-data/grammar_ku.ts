// Vymova — data/grammar-data/grammar_ku.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Cînavkên Kesane — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Курдська мова курманджі (Туреччина, Сирія) записується латинкою, тоді як сорані (Ірак, Іран) — арабицею; тут наведено курманджі.",
            "en": {
              "text": "The Kurmanji dialect of Kurdish (Turkey, Syria) is written in Latin script, while Sorani (Iraq, Iran) uses Arabic script; Kurmanji is shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ez"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона / воно",
                "ew"
              ],
              [
                "ми",
                "em"
              ],
              [
                "ви",
                "hûn"
              ],
              [
                "вони",
                "ew"
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
        "id": "verb-bun",
        "title": "Bûn — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Bûn\" (бути) — базове дієслово курдської, що узгоджується з підметом за особою й числом.",
            "en": {
              "text": "\"Bûn\" (to be) is the basic Kurdish verb, agreeing with the subject in person and number."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час bûn",
            "rows": [
              [
                "ez im",
                "я є"
              ],
              [
                "tu yî",
                "ти є"
              ],
              [
                "ew e",
                "він/вона є"
              ],
              [
                "em in",
                "ми є"
              ],
              [
                "hûn in",
                "ви є"
              ],
              [
                "ew in",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of bûn"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez mamoste me.",
                "Я вчитель."
              ],
              [
                "Ew ji Kurdistanê ye.",
                "Він/вона з Курдистану."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bûn — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення (na-/ne-) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється префіксом \"na-\" (для теперішнього/майбутнього) чи \"ne-\" (для минулого й дієслова bûn), доданим до дієслова.",
            "en": {
              "text": "Negation is formed with the prefix \"na-\" (for present/future) or \"ne-\" (for the past and the verb bûn), added to the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ez im.",
                "Ez nînim.",
                "Я є → я не є"
              ],
              [
                "Ew dizane.",
                "Ew nizane.",
                "Він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez westiyayî nînim.",
                "Я не втомлений."
              ],
              [
                "Ew bi Kurdî napeyive.",
                "Він/вона не розмовляє курдською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (na-/ne-) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією; спеціальні — питальними словами.",
            "en": {
              "text": "Yes/no questions are marked only by intonation; wh-questions use question words."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "kî",
                "хто"
              ],
              [
                "çi",
                "що"
              ],
              [
                "li ku",
                "де"
              ],
              [
                "kengî",
                "коли"
              ],
              [
                "çima",
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
                "Tu kurd î?",
                "Ти курд?"
              ],
              [
                "Tu li ku dijî?",
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
        "id": "ezafe-construction",
        "title": "Конструкція ізафет — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса курдської та інших іранських мов: означуваний іменник приєднує спеціальну частку-зв'язку (ізафет), яка з'єднує його з наступним прикметником чи присвійником — замінник відмінка чи прийменника.",
            "en": {
              "text": "The most defining trait of Kurdish and other Iranian languages: a noun being modified takes a special linking particle (ezafe) that connects it to a following adjective or possessor — replacing what a case ending or preposition would do."
            }
          },
          {
            "type": "table",
            "title": "Ізафет",
            "rows": [
              [
                "mal-a min",
                "мій дім (mal + -a + min, ізафет жіночого роду)"
              ],
              [
                "kitêb-a spî",
                "біла книга (ізафет + прикметник)"
              ]
            ],
            "en": {
              "title": "Ezafe"
            }
          }
        ],
        "titleEn": "The Ezafe Construction — A2"
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
        "id": "present-tense",
        "title": "Теперішній час (di-) — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється префіксом \"di-\" перед основою дієслова + особові закінчення.",
            "en": {
              "text": "The present tense is formed with the prefix \"di-\" before the verb stem + personal endings."
            }
          },
          {
            "type": "table",
            "title": "xwendin (читати) — теперішній час",
            "rows": [
              [
                "ez dixwînim",
                "я читаю"
              ],
              [
                "tu dixwînî",
                "ти читаєш"
              ],
              [
                "ew dixwîne",
                "він/вона читає"
              ]
            ],
            "en": {
              "title": "xwendin (to read) — Present Tense"
            }
          }
        ],
        "titleEn": "The Present Tense (di-) — A1"
      },
      {
        "id": "past-intransitive",
        "title": "Минулий час неперехідних дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час неперехідних дієслів узгоджується з підметом безпосередньо, без ергативної конструкції.",
            "en": {
              "text": "The past tense of intransitive verbs agrees directly with the subject, with no ergative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez çûm.",
                "Я пішов(ла)."
              ],
              [
                "Ew hat.",
                "Він/вона прийшов(ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense of Intransitive Verbs — A2"
      },
      {
        "id": "past-transitive-ergative",
        "title": "Минулий час перехідних дієслів (ергатив) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша граматична риса курдської: у минулому часі перехідних дієслів підмет стоїть у непрямому відмінку, а дієслово узгоджується не з підметом, а з прямим додатком — розщеплена ергативність, успадкована з давньоіранської.",
            "en": {
              "text": "Kurdish's most defining grammatical trait: in the past tense of transitive verbs, the subject stands in the oblique case, and the verb agrees not with the subject but with the direct object — split ergativity inherited from Old Iranian."
            }
          },
          {
            "type": "formula",
            "title": "Неперех. vs перех. (ергатив)",
            "rows": [
              [
                "Ez çûm.",
                "Min pirtûk xwend.",
                "Я пішов (прямий, без ергатива) → Я прочитав книгу (min = непрямий \"я\", узгодження з pirtûk)"
              ]
            ]
          }
        ],
        "titleEn": "Past Tense of Transitive Verbs (Ergative) — B1"
      },
      {
        "id": "present-perfect",
        "title": "Перфект — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу (-î) + допоміжне дієслово bûn, вказуючи на актуальність результату зараз.",
            "en": {
              "text": "The perfect is formed with the past participle (-î) + the auxiliary bûn, indicating the result is relevant now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Min xwendiye.",
                "Я вже прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect Tense — B1"
      },
      {
        "id": "future-de-we",
        "title": "Майбутній час (dê/wê) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутнє утворюється часткою \"dê\" (або \"wê\") перед дієсловом у підрядній (без di-) формі.",
            "en": {
              "text": "The future is formed with the particle \"dê\" (or \"wê\") before the verb in its subjunctive (di-less) form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez dê biçim.",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense (dê/wê) — A2"
      },
      {
        "id": "subjunctive-bare-present",
        "title": "Підрядний спосіб (без di-) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядний спосіб — гола форма дієслова без префікса \"di-\", вживана після модальних дієслів і сполучників бажання.",
            "en": {
              "text": "The subjunctive is the bare verb form without the \"di-\" prefix, used after modal verbs and conjunctions of wish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Divê ez biçim.",
                "Мені треба йти. (biçim без di-)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive (without di-) — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказ утворюється основою дієслова без префікса \"di-\"; для множини додається -in.",
            "en": {
              "text": "The imperative is formed with the verb stem without the \"di-\" prefix; the plural adds -in."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Bixwîne!",
                "Читай!"
              ],
              [
                "Bixwînin!",
                "Читайте! (мн.)"
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
        "id": "negative-past",
        "title": "Заперечення минулого часу — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення минулого часу вживає префікс \"ne-\" замість теперішнього \"na-\", і в перехідних дієсловах зберігає ергативну конструкцію.",
            "en": {
              "text": "Negating the past tense uses the prefix \"ne-\" instead of the present's \"na-\", and in transitive verbs it keeps the ergative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Min pirtûk nexwend.",
                "Я не прочитав книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Past Tense — B1"
      },
      {
        "id": "past-continuous",
        "title": "Минулий тривалий час — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий тривалий час зберігає префікс \"di-\" на основі минулого часу, вказуючи на дію, що тривала.",
            "en": {
              "text": "The past continuous keeps the prefix \"di-\" on the past stem, indicating an action that was ongoing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez dixwendim.",
                "Я читав (тоді, тривало)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Past Continuous — B1"
      },
      {
        "id": "conditional-eger",
        "title": "Умовний спосіб (eger) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "\"Eger\" (якщо) вводить умовне речення з дієсловом у підрядному способі в обох частинах.",
            "en": {
              "text": "\"Eger\" (if) introduces a conditional sentence with the verb in the subjunctive in both clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eger baran bibare, ez ê li malê bimînim.",
                "Якщо піде дощ, я залишусь удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional (eger) — B1"
      },
      {
        "id": "modal-verbs",
        "title": "Модальні дієслова (dikare, divê) — A2",
        "emoji": "🎛️",
        "sections": [
          {
            "type": "intro",
            "text": "\"Dikare\" (могти) і \"divê\" (мусити) — безособові модальні конструкції, що вимагають підрядного способу наступного дієслова.",
            "en": {
              "text": "\"Dikare\" (can) and \"divê\" (must) are impersonal modal constructions requiring the subjunctive of the following verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez dikarim Kurdî biaxivim.",
                "Я вмію говорити курдською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verbs (dikare, divê) — A2"
      },
      {
        "id": "pronominal-clitic-suffixes",
        "title": "Займенникові клітики на дієслові — B2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "В ергативній конструкції особовий підмет-агент іноді виражається лише клітичним закінченням, приєднаним прямо до дієслова, без окремого слова-займенника.",
            "en": {
              "text": "In the ergative construction, the personal agent subject is sometimes expressed only by a clitic ending attached directly to the verb, with no separate pronoun word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pirtûk xwend-im.",
                "Я прочитав книгу. (клітика -im замість окремого min)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pronominal Clitics on the Verb — B2"
      },
      {
        "id": "negative-future",
        "title": "Заперечення майбутнього часу — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення майбутнього поєднує частку \"dê\" із запереченим підрядним дієсловом (\"na-\" + гола основа).",
            "en": {
              "text": "Negating the future combines the particle \"dê\" with the negated subjunctive verb (\"na-\" + bare stem)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez dê neçim.",
                "Я не піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negating the Future Tense — B1"
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
        "id": "prepositions-simple",
        "title": "Прості прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Крім циркумпозицій, курдська має й прості прийменники, що керують непрямим відмінком наступного іменника.",
            "en": {
              "text": "Besides circumpositions, Kurdish also has simple prepositions, which govern the oblique case of the following noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ji mal",
                "з дому (ji + непрямий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A1"
      },
      {
        "id": "direct-oblique-case",
        "title": "Прямий і непрямий відмінок — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Курдська має лише два відмінки: прямий (підмет, називна форма) і непрямий (додаток, після прийменника, агент в ергативній конструкції) — значно простіша система, ніж давньоіранська, з якої вона походить.",
            "en": {
              "text": "Kurdish has only two cases: direct (subject, citation form) and oblique (object, after a preposition, the agent in the ergative construction) — a much simpler system than the Old Iranian it descends from."
            }
          },
          {
            "type": "table",
            "title": "Прямий → непрямий",
            "rows": [
              [
                "jin (жінка, прямий)",
                "jinê (непрямий, ж.р.)"
              ],
              [
                "mêr (чоловік, прямий)",
                "mêr (непрямий, ч.р. однини — незмінний)"
              ]
            ],
            "en": {
              "title": "Direct → Oblique"
            }
          }
        ],
        "titleEn": "The Direct and Oblique Case — B1"
      },
      {
        "id": "two-genders",
        "title": "Два граматичні роди — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід (без середнього), що визначає форму ізафету й непрямого відмінка.",
            "en": {
              "text": "Nouns have masculine or feminine gender (no neuter), which determines the form of the ezafe and the oblique case."
            }
          },
          {
            "type": "table",
            "title": "Два роди",
            "rows": [
              [
                "mêr (чоловік, ч.р.)",
                "чоловічий рід"
              ],
              [
                "jin (жінка, ж.р.)",
                "жіночий рід"
              ]
            ],
            "en": {
              "title": "Two Genders"
            }
          }
        ],
        "titleEn": "Two Grammatical Genders — A1"
      },
      {
        "id": "ezafe-chains",
        "title": "Ланцюги ізафету — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли іменник має кілька визначень (прикметник і присвійник одночасно), ізафет повторюється на кожному елементі ланцюга.",
            "en": {
              "text": "When a noun has several modifiers (an adjective and a possessor at once), the ezafe repeats on each element of the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mal-a spî ya min",
                "мій білий дім (mal + ізафет + spî + ізафет + min)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ezafe Chains — B1"
      },
      {
        "id": "ezafe-gender-forms",
        "title": "Форми ізафету за родом і числом — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Ізафет має окрему форму для кожного роду, числа й відмінка: -ê (ч.р.), -a (ж.р.), -ên (мн.).",
            "en": {
              "text": "The ezafe has a distinct form for each gender, number, and case: -ê (masc.), -a (fem.), -ên (plural)."
            }
          },
          {
            "type": "table",
            "title": "-ê, -a, -ên",
            "rows": [
              [
                "kitêb-a min (ж.р.)",
                "моя книга"
              ],
              [
                "kur-ê min (ч.р.)",
                "мій син"
              ],
              [
                "pirtûk-ên min (мн.)",
                "мої книги"
              ]
            ],
            "en": {
              "title": "-ê, -a, -ên"
            }
          }
        ],
        "titleEn": "Ezafe Forms by Gender and Number — B1"
      },
      {
        "id": "indefinite-marker-ek",
        "title": "Неозначений суфікс -ek — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначеність позначає суфікс \"-ek\", доданий до кінця іменника, на відміну від окремого артикля.",
            "en": {
              "text": "Indefiniteness is marked with the suffix \"-ek\", added to the end of the noun, unlike a separate article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pirtûk-ek",
                "якась книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Indefinite Suffix -ek — A1"
      },
      {
        "id": "definite-bare-noun",
        "title": "Означеність без артикля — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність не має окремого позначення взагалі: гола форма іменника (без -ek) читається як визначена залежно від контексту.",
            "en": {
              "text": "Definiteness has no dedicated marker at all: the bare noun form (without -ek) is read as definite depending on context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Min pirtûk dît.",
                "Я побачив (ту) книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definiteness without an Article — A1"
      },
      {
        "id": "circumpositions",
        "title": "Циркумпозиції — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса курдської: багато просторових значень виражають \"циркумпозиціями\" — прийменником перед іменником і ще одним елементом після нього, що обгортають іменник з обох боків.",
            "en": {
              "text": "A unique Kurdish feature: many spatial meanings are expressed with \"circumpositions\" — a preposition before the noun and another element after it, wrapping the noun on both sides."
            }
          },
          {
            "type": "table",
            "title": "di...de, li...ve",
            "rows": [
              [
                "di mal de",
                "у домі (di...de обгортає mal)"
              ],
              [
                "li ser",
                "на (li...ser)"
              ]
            ],
            "en": {
              "title": "di...de, li...ve"
            }
          }
        ],
        "titleEn": "Circumpositions — B1"
      },
      {
        "id": "reflexive-xwe",
        "title": "Зворотний займенник xwe — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Xwe\" (себе/свій) — універсальний зворотний займенник, однаковий для всіх осіб і чисел.",
            "en": {
              "text": "\"Xwe\" (self/own) is the universal reflexive pronoun, the same for all persons and numbers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ew xwe dibîne.",
                "Він бачить себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun xwe — B1"
      },
      {
        "id": "possessive-ezafe-pronoun",
        "title": "Присвійність через ізафет + займенник — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається формою ізафету на іменнику + особовий займенник у непрямому відмінку.",
            "en": {
              "text": "Possession is expressed with the ezafe form on the noun + the personal pronoun in the oblique case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mal-a min",
                "мій дім"
              ],
              [
                "kur-ê te",
                "твій син"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via Ezafe + Pronoun — A1"
      },
      {
        "id": "comparative-tir",
        "title": "Порівняльний суфікс -tir — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -tir, доданим до прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -tir added to the adjective."
            }
          },
          {
            "type": "table",
            "title": "mezin → mezintir",
            "rows": [
              [
                "mezin (великий) → mezintir",
                "більший"
              ]
            ]
          }
        ],
        "titleEn": "The Comparative Suffix -tir — A2"
      },
      {
        "id": "superlative-tirin",
        "title": "Найвищий ступінь (-tirîn) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється суфіксом -tirîn перед іменником.",
            "en": {
              "text": "The superlative is formed with the suffix -tirîn before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mezintirîn bajar",
                "найбільше місто"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (-tirîn) — A2"
      },
      {
        "id": "numbers-gender",
        "title": "Числівники з родом — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівник \"du\" (два) має форму \"dido\" при самостійному вживанні, а іменник після будь-якого числівника завжди стоїть в однині.",
            "en": {
              "text": "The number \"du\" (two) has the form \"dido\" when standing alone, and the noun after any numeral always stays in the singular."
            }
          },
          {
            "type": "table",
            "title": "Числа + однина",
            "rows": [
              [
                "du pirtûk",
                "дві книги (pirtûk в однині)"
              ]
            ]
          }
        ],
        "titleEn": "Numbers with the Singular Noun — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ev\" (цей) вказує на близьке, \"ew\" (той/він) — на віддалене; \"ew\" водночас слугує й займенником 3-ї особи.",
            "en": {
              "text": "\"Ev\" (this) points to something near, \"ew\" (that/he) to something distant; \"ew\" also doubles as the 3rd-person pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ev pirtûka min e.",
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
        "id": "relative-clause-ku",
        "title": "Відносна частка ku — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ku\" — універсальний відносний і підрядний сполучник \"який/що\", незмінний за родом і числом.",
            "en": {
              "text": "\"Ku\" is the universal relative and subordinating conjunction \"who/which/that\", invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mirovê ku hat, heval-ê min e.",
                "Чоловік, що прийшов, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative Particle ku — A2"
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-додаток-присудок (SOV), дієслово зазвичай у кінці речення.",
            "en": {
              "text": "The basic order is subject-object-verb (SOV), the verb usually at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Min pirtûk xwend.",
                "Я прочитав книгу. (я-книгу-прочитав)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "SOV Word Order — A2"
      },
      {
        "id": "adjective-after-noun-ezafe",
        "title": "Прикметник після іменника через ізафет — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника, з'єднаний ізафетом, на відміну від препозитивного порядку в українській.",
            "en": {
              "text": "The adjective stands after the noun, linked by the ezafe, unlike the prenominal order in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mal-a mezin",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Adjective after the Noun via Ezafe — A2"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина прямого відмінка утворюється суфіксом -an тільки в непрямій позиції; у прямому відмінку множина іменника часто взагалі не відрізняється від однини без контексту.",
            "en": {
              "text": "The oblique-case plural is formed with the suffix -an; in the direct case, the noun's plural is often not distinguished from the singular without context."
            }
          },
          {
            "type": "table",
            "title": "Приклад множини",
            "rows": [
              [
                "pirtûk-an (непрямий мн.)",
                "книг (непрямий відмінок множини)"
              ]
            ]
          }
        ],
        "titleEn": "Forming the Plural — A2"
      },
      {
        "id": "vocative-case",
        "title": "Кличний відмінок — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох сучасних іранських мов, курдська зберегла окремий кличний відмінок зі своїм закінченням при прямому звертанні.",
            "en": {
              "text": "Unlike many modern Iranian languages, Kurdish has retained a separate vocative case with its own ending for direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kekê!",
                "Брате! (кличний від kek)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative Case — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують два корені через ізафет або без нього, залежно від типу складання.",
            "en": {
              "text": "Compound words often join two roots with or without the ezafe, depending on the type of compounding."
            }
          },
          {
            "type": "table",
            "title": "ziman + zan",
            "rows": [
              [
                "ziman (мова) + zan (знавець) = zimanzan",
                "лінгвіст"
              ]
            ]
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники стоять перед іменником, подібно до більшості мов.",
            "en": {
              "text": "Numerals stand before the noun, like in most languages."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "yek",
                "один"
              ],
              [
                "du",
                "два"
              ],
              [
                "pênc",
                "п'ять"
              ],
              [
                "deh",
                "десять"
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
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Hûn\" (ви) вживають і як множину, і як ввічливу форму до однієї особи, подібно до французького \"vous\".",
            "en": {
              "text": "\"Hûn\" (you) is used both as the plural and as the polite form for one person, similar to French \"vous\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hûn çawa ne?",
                "Як ви почуваєтесь? (ввічливо)"
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
        "id": "interrogative-declension",
        "title": "Відмінювання питальних слів — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kî\" (хто) переходить у непряму форму \"kê\" перед прийменниками чи в ергативній позиції, як і звичайні іменники.",
            "en": {
              "text": "\"Kî\" (who) shifts to the oblique form \"kê\" before prepositions or in the ergative position, just like ordinary nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kê pirtûk xwend?",
                "Хто прочитав книгу? (непряма форма перед ергативом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of Interrogative Words — B1"
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
            "title": "û / lê / ji ber ku",
            "rows": [
              [
                "û",
                "і"
              ],
              [
                "lê",
                "але"
              ],
              [
                "ji ber ku",
                "тому що"
              ]
            ],
            "en": {
              "title": "û / lê / ji ber ku"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "possessive-pronouns-table",
        "title": "Повна таблиця присвійних — A2",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники — це особові займенники в непрямому відмінку, що йдуть після іменника з ізафетом.",
            "en": {
              "text": "Possessive pronouns are the personal pronouns in the oblique case, following the noun with the ezafe."
            }
          },
          {
            "type": "table",
            "title": "min, te, wî/wê",
            "rows": [
              [
                "mal-a min",
                "мій дім"
              ],
              [
                "mal-a te",
                "твій дім"
              ],
              [
                "mal-a wî/wê",
                "його/її дім"
              ]
            ],
            "en": {
              "title": "min, te, wî/wê"
            }
          }
        ],
        "titleEn": "The Full Possessive Pronoun Table — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (узагальнено) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Крім \"eger\" (див. розділ часів), умову інколи вводить те саме слово в скороченому розмовному вигляді \"ger\" без втрати значення.",
            "en": {
              "text": "Besides \"eger\" (see the tense section), a condition is sometimes introduced with the same word in its shortened colloquial form \"ger\" with no loss of meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ger tu bixwazî, em ê biçin.",
                "Якщо ти хочеш, ми підемо."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (Colloquial Form) — B1"
      },
      {
        "id": "newroz-cultural-vocabulary",
        "title": "Лексика Новрузу — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Свято Новруз (новий рік, весняне рівнодення) має окремий шар обрядової лексики, пов'язаної з вогнем, стрибками через вогнище й оновленням — центральна культурна подія курдського року.",
            "en": {
              "text": "The Newroz holiday (new year, spring equinox) has its own layer of ritual vocabulary tied to fire, jumping over bonfires, and renewal — the central cultural event of the Kurdish year."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Newroz pîroz be!",
                "Щасливого Новрузу! (традиційне вітання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Newroz Vocabulary — B1"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня переважно описові, пов'язані з порядком у тижні, а не з іменами богів чи планет.",
            "en": {
              "text": "The days of the week are mostly descriptive, tied to their order in the week, rather than names of gods or planets."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Duşem (понеділок)",
                "\"другий день\""
              ],
              [
                "Yekşem (неділя)",
                "\"перший день\""
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
            "text": "Курдська використовує власний сонячний календар (рожев'я курдскан) паралельно до міжнародного, з початком року на Новруз.",
            "en": {
              "text": "Kurdish uses its own solar calendar (Kurdish Rojhilat calendar) alongside the international one, with the year starting at Newroz."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Rêbendan (січень)",
                "зимовий місяць"
              ],
              [
                "Xakelêwe (квітень)",
                "місяць Новрузу"
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
            "text": "Час запитують \"Saet çend e?\" (котра година?).",
            "en": {
              "text": "Time is asked with \"Saet çend e?\" (what hour is it?)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Saet sisê ye.",
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
            "text": "Кольори — звичайні прикметники, що стоять після іменника через ізафет.",
            "en": {
              "text": "Colors are ordinary adjectives, standing after the noun via the ezafe."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "spî",
                "білий"
              ],
              [
                "reş",
                "чорний"
              ],
              [
                "sor",
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
            "text": "Родинні терміни мають властивий рід, який впливає на форму ізафету при вживанні присвійника.",
            "en": {
              "text": "Kinship terms have an inherent gender, which affects the ezafe form used with a possessor."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "dayik (мати, ж.р.)",
                "мати"
              ],
              [
                "bav (батько, ч.р.)",
                "батько"
              ],
              [
                "xwişk (сестра, ж.р.)",
                "сестра"
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
            "text": "\"Tu çawa yî?\" (як справи?) — стандартне привітання, з відповіддю \"Baş im\" (я добре).",
            "en": {
              "text": "\"Tu çawa yî?\" (how are you?) is the standard greeting, answered with \"Baş im\" (I'm well)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Rojbaş!",
                "Доброго дня!"
              ],
              [
                "Bi xatirê te!",
                "До побачення!"
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
            "text": "Погоду описують дієсловом \"barîn\" (падати) для дощу.",
            "en": {
              "text": "Weather is described with the verb \"barîn\" (to fall) for rain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Baran dibare.",
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
                "dest (рука, ч.р.)",
                "рука"
              ],
              [
                "ser (голова, ч.р.)",
                "голова"
              ],
              [
                "lep (нога/стопа)",
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
            "text": "Вік виражають конструкцією \"X salî\" (X-річний) + дієслово bûn.",
            "en": {
              "text": "Age is expressed with \"X salî\" (X years old) + the verb bûn."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez bîst salî me.",
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
        "id": "kurmanji-vs-sorani-split",
        "title": "Курманджі vs сорані — діалектний розрив — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Курманджі й сорані різняться не лише писемністю (латинка vs арабиця), а й граматикою: сорані майже втратив ергативну конструкцію й займенникові клітики, якими щедро користується курманджі — деякі лінгвісти вважають їх окремими мовами, а не діалектами.",
            "en": {
              "text": "Kurmanji and Sorani differ not just in script (Latin vs Arabic) but in grammar: Sorani has largely lost the ergative construction and pronominal clitics that Kurmanji uses extensively — some linguists consider them separate languages rather than dialects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Речення з ергативною конструкцією в курманджі виражається зовсім інакше в сорані.",
                "граматична, не лише писемна, розбіжність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kurmanji vs Sorani — the Dialectal Divide — B2"
      },
      {
        "id": "stateless-multicountry-status",
        "title": "Мова без держави, розділена чотирма країнами — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Курдською говорять десятки мільйонів людей у Туреччині, Іраку, Ірані та Сирії, але вона не є офіційною державною мовою в жодній з цих держав, крім автономного Іракського Курдистану — рідкість для мови такого масштабу поширення.",
            "en": {
              "text": "Kurdish is spoken by tens of millions of people across Turkey, Iraq, Iran, and Syria, yet it is not an official state language in any of those countries except autonomous Iraqi Kurdistan — unusual for a language of this scale."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Курдська мала заборонені в публічному вжитку періоди в Туреччині XX ст.",
                "історія заборон і відродження, подібна до інших мов без власної держави"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "A Stateless Language Split across Four Countries — B2"
      },
      {
        "id": "dengbej-oral-tradition",
        "title": "Усна традиція денгбежів — B2",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "\"Денгбеж\" — традиційні курдські оповідачі-співці, що усно передають епічні історії, історичні події й родовідні перекази без письмового запису — центральний інститут збереження курдської культурної пам'яті в часи заборон на письмову мову.",
            "en": {
              "text": "\"Dengbêj\" are traditional Kurdish singer-storytellers who orally transmit epic tales, historical events, and genealogical lore without written record — a central institution for preserving Kurdish cultural memory during periods when the written language was banned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Денгбежі досі виступають на зібраннях, передаючи історії без жодного письмового тексту.",
                "живий приклад усної літературної традиції"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dengbêj Oral Tradition — B2"
      },
      {
        "id": "loanword-layers",
        "title": "Шари запозичень (арабська, турецька, перська) — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Залежно від країни проживання, курдська вбирає різні шари запозичень: курманджі в Туреччині — більше турецьких слів, сорані в Іраку/Ірані — більше арабських і перських.",
            "en": {
              "text": "Depending on the country of residence, Kurdish absorbs different loanword layers: Kurmanji in Turkey takes more Turkish words, Sorani in Iraq/Iran takes more Arabic and Persian ones."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "rapor (від турецької)",
                "звіт"
              ],
              [
                "kitêb (від арабської)",
                "книга"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Loanword Layers (Arabic, Turkish, Persian) — B1"
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
                "Way!",
                "Ой!/Овва!"
              ],
              [
                "Spas!",
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
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Курдські ідіоми часто спираються на гірське пастушаче життя й гостинність.",
            "en": {
              "text": "Kurdish idioms often draw on mountain pastoral life and hospitality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mala te xweş be.",
                "Хай буде гарним твій дім (побажання вдячності гостя)."
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
                "yanzdeh",
                "одинадцять"
              ],
              [
                "bîst",
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
            "text": "Порядкові числівники утворюються суфіксом -emîn, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -emîn added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yekemîn",
                "перший"
              ],
              [
                "duyemîn",
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
            "text": "\"Kesek\" (хтось) і \"tiştek\" (щось) — базові неозначені займенники, утворені суфіксом -ek.",
            "en": {
              "text": "\"Kesek\" (someone) and \"tiştek\" (something) are the basic indefinite pronouns, formed with the suffix -ek."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kesek telefon kir.",
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
            "text": "\"Kesek\" і \"tiştek\" у заперечному контексті з префіксом \"ne-\" набувають значення \"ніхто/нічого\".",
            "en": {
              "text": "\"Kesek\" and \"tiştek\" in a negative context with the prefix \"ne-\" take on the meaning \"no one/nothing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Li wir kesek nebû.",
                "Там нікого не було."
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
            "text": "Розділове питання утворюється фразою \"ne wisa ye?\" (чи не так?) у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"ne wisa ye?\" (isn't that so?) at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Îro hewa xweş e, ne wisa ye?",
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
        "title": "Цільове підрядне (ji bo ku) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ji bo ku\" (щоб) вводить цільове підрядне речення з дієсловом у підрядному способі.",
            "en": {
              "text": "\"Ji bo ku\" (in order to) introduces a purpose clause with the verb in the subjunctive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Min Kurdî fêr bû ji bo ku ez bi dapîra xwe re biaxivim.",
                "Я вивчив курдську, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (ji bo ku) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (ji ber ku) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ji ber ku\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Ji ber ku\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez paşde mam ji ber ku otobês winda kir.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (ji ber ku) — A2"
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
            "text": "Кілька частовживаних дієслів (bûn-бути, çûn-йти, hatin-приходити) мають суплетивні основи минулого й теперішнього часу, які слід вивчати окремо.",
            "en": {
              "text": "A few common verbs (bûn-to be, çûn-to go, hatin-to come) have suppletive present and past stems that must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "çûn (йти) → çû-",
                "основа минулого часу не за жодним стандартним правилом"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "ergative-agreement-exceptions",
        "title": "Винятки в ергативному узгодженні — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі на позір перехідні дієслова (особливо з абстрактним чи неконкретним додатком) не викликають повної ергативної конструкції й узгоджуються з підметом, а не з додатком.",
            "en": {
              "text": "Some seemingly transitive verbs (especially with an abstract or non-specific object) don't trigger the full ergative construction and agree with the subject instead of the object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі складені дієслова з легким дієсловом поводяться як неперехідні попри перехідне значення.",
                "виняток, що вимагає окремого запам'ятовування для кожного дієслова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Exceptions in Ergative Agreement — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули (особливо гостинні побажання) зберігають архаїчну граматичну форму, невживану в сучасному мовленні.",
            "en": {
              "text": "Some common formulas (especially hospitality wishes) preserve an archaic grammatical form not used in modern speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Serê te sax be.",
                "Будь здоровий (буквально \"хай твоя голова буде здоровою\", архаїчна конструкція)."
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
