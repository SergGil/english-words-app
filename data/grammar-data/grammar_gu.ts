// Vymova — data/grammar-data/grammar_gu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "સર્વનામ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У гуджараті займенник третьої особи \"તે\" (te) не розрізняє роду — контекст або дієслово підказують, ідеться про чоловіка чи жінку.",
            "en": {
              "text": "In Gujarati, the third-person pronoun \"તે\" (te) doesn't distinguish gender — context or the verb form indicates whether it means \"he\" or \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "હું (huṁ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "તું / તમે (tuṁ / tame)"
              ],
              [
                "він / вона",
                "તે (te)"
              ],
              [
                "ми",
                "અમે (ame)"
              ],
              [
                "ви",
                "તમે (tame)"
              ],
              [
                "вони",
                "તેઓ (teo)"
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
        "id": "verb-chhe",
        "title": "છે (chhe) — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"છે\" (chhe) — базове дієслово \"бути\" в теперішньому часі, що стоїть у кінці речення (мова SOV).",
            "en": {
              "text": "\"છે\" (chhe) is the basic present-tense verb \"to be\", standing at the end of the sentence (SOV language)."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час чхе",
            "rows": [
              [
                "હું છું (huṁ chhuṁ)",
                "я є"
              ],
              [
                "તું છે (tuṁ chhe)",
                "ти є"
              ],
              [
                "તે છે (te chhe)",
                "він/вона є"
              ],
              [
                "અમે છીએ (ame chhīe)",
                "ми є"
              ],
              [
                "તમે છો (tame chho)",
                "ви є"
              ]
            ],
            "en": {
              "title": "Present Tense of chhe"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું શિક્ષક છું.",
                "Я вчитель."
              ],
              [
                "તે ગુજરાતથી છે.",
                "Він з Гуджарату."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "છે (chhe) — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення (નથી — nathī) — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна форма \"чхе\" — окреме слово \"નથી\" (nathī), а не просто частка заперечення перед дієсловом.",
            "en": {
              "text": "The negative form of \"chhe\" is the separate word \"નથી\" (nathī), not just a negation particle before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "હું અહીં છું.",
                "હું અહીં નથી.",
                "Я тут → я не тут"
              ],
              [
                "તે જાણે છે.",
                "તે જાણતો નથી.",
                "Він знає → він не знає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું થાક્યો નથી.",
                "Я не втомлений."
              ],
              [
                "તે ગુજરાતી બોલતી નથી.",
                "Вона не розмовляє гуджараті."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (નથી — nathī) — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією; спеціальні — питальними словами, які зазвичай стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Yes/no questions are marked only by intonation; wh-questions use question words, which usually stand right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "કોણ (koṇ)",
                "хто"
              ],
              [
                "શું (śuṁ)",
                "що"
              ],
              [
                "ક્યાં (kyāṁ)",
                "де"
              ],
              [
                "ક્યારે (kyāre)",
                "коли"
              ],
              [
                "કેમ (kem)",
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
                "તું ગુજરાતી છે?",
                "Ти гуджаратець?"
              ],
              [
                "તું ક્યાં રહે છે?",
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
        "id": "three-genders",
        "title": "Три граматичні роди — A2",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді й урду, які втратили середній рід, гуджараті — одна з небагатьох сучасних індоарійських мов, що зберегла три роди: чоловічий, жіночий і середній.",
            "en": {
              "text": "Unlike Hindi and Urdu, which lost the neuter gender, Gujarati is one of the few modern Indo-Aryan languages that has retained three genders: masculine, feminine, and neuter."
            }
          },
          {
            "type": "table",
            "title": "Три роди",
            "rows": [
              [
                "છોકરો (хлопчик, ч.р.)",
                "чоловічий рід"
              ],
              [
                "છોકરી (дівчинка, ж.р.)",
                "жіночий рід"
              ],
              [
                "છોકરું (маля, с.р.)",
                "середній рід"
              ]
            ],
            "en": {
              "title": "Three Genders"
            }
          }
        ],
        "titleEn": "Three Grammatical Genders — A2"
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
        "id": "present-habitual",
        "title": "Теперішній звичайний час — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється дієприкметником теперішнього часу (узгодженим з підметом за родом і числом) + допоміжне дієслово \"chhe\".",
            "en": {
              "text": "The present tense is formed with the present participle (agreeing with the subject in gender and number) + the auxiliary \"chhe\"."
            }
          },
          {
            "type": "table",
            "title": "જવું (йти) — теперішній час",
            "rows": [
              [
                "હું જાઉં છું (huṁ jāuṁ chhuṁ)",
                "я йду"
              ],
              [
                "તે જાય છે (te jāy chhe)",
                "він/вона йде"
              ]
            ],
            "en": {
              "title": "javuṁ (to go) — Present Tense"
            }
          }
        ],
        "titleEn": "The Present Habitual Tense — A1"
      },
      {
        "id": "present-continuous",
        "title": "Теперішній тривалий час — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Тривалу дію \"саме зараз\" виражають дієприкметником на -tu/-ti/-tu + допоміжним \"chhe\", узгодженим з підметом.",
            "en": {
              "text": "An action happening right now is expressed with the -tu/-ti/-tu participle + the auxiliary \"chhe\", agreeing with the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું કામ કરું છું.",
                "Я зараз працюю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Present Continuous — A2"
      },
      {
        "id": "past-intransitive",
        "title": "Минулий час неперехідних дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час неперехідних дієслів узгоджується з підметом за родом і числом безпосередньо, без ергативної конструкції.",
            "en": {
              "text": "The past tense of intransitive verbs agrees directly with the subject in gender and number, with no ergative construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે ગયો.",
                "Він пішов. (ч.р.)"
              ],
              [
                "તે ગઈ.",
                "Вона пішла. (ж.р.)"
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
            "text": "У минулому часі перехідних дієслів підмет отримує постпозицію -е (ергативний маркер), а дієслово узгоджується не з підметом, а з прямим додатком — характерна риса багатьох мов Північної Індії.",
            "en": {
              "text": "In the past tense of transitive verbs, the subject takes the postposition -e (ergative marker), and the verb agrees not with the subject but with the direct object — a characteristic trait of many North Indian languages."
            }
          },
          {
            "type": "formula",
            "title": "Неперех. vs перех. (ергатив)",
            "rows": [
              [
                "તે ગયો.",
                "તેણે કામ કર્યું.",
                "Він пішов (без -e) → Він зробив роботу (тે+e = teṇe, узгодження з kām, с.р.)"
              ]
            ]
          }
        ],
        "titleEn": "Past Tense of Transitive Verbs (Ergative) — B1"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється вставкою -sh- в основу дієслова разом із закінченнями за родом і числом.",
            "en": {
              "text": "The future tense is formed by inserting -sh- into the verb stem, together with endings for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું જઈશ.",
                "Я піду."
              ],
              [
                "તે આવશે.",
                "Він/вона прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Tense — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для ввічливості додається -о до основи.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; politeness adds -o to the stem."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "જા! (jā)",
                "Йди!"
              ],
              [
                "જાઓ! (jāo)",
                "Йдіть! (ввічливо)"
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
        "id": "perfect-tense",
        "title": "Перфект — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект (\"вже зробив\") утворюється дієприкметником минулого часу + допоміжне \"chhe\", вказуючи на наслідок, актуальний зараз.",
            "en": {
              "text": "The perfect (\"has already done\") is formed with the past participle + the auxiliary \"chhe\", indicating a result relevant now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "મેં કામ કર્યું છે.",
                "Я вже зробив роботу."
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
        "id": "past-continuous",
        "title": "Минулий тривалий час — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Дію, що тривала в минулому, виражають дієприкметником теперішнього часу + допоміжне \"hato/hati\" (був/була) замість \"chhe\".",
            "en": {
              "text": "An action that was ongoing in the past is expressed with the present participle + the auxiliary \"hato/hati\" (was) instead of \"chhe\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે કામ કરતો હતો.",
                "Він працював (тоді)."
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
        "id": "conditional-jo-to",
        "title": "Умовний спосіб (jo...to) — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться парою \"jo...to\" (якщо...то), з дієсловом у формі дієприкметника на -е в обох частинах.",
            "en": {
              "text": "A conditional sentence is introduced with the pair \"jo...to\" (if...then), with the verb in an -e participle form in both clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "જો સમય હોય તો, હું આવીશ.",
                "Якщо буде час, я прийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional (jo...to) — B1"
      },
      {
        "id": "optative-joiye",
        "title": "Бажальний спосіб (joiye) — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язковість чи бажаність дії виражають інфінітивом + словом \"joiye\" (треба/варто).",
            "en": {
              "text": "Obligation or desirability is expressed with the infinitive + the word \"joiye\" (should/need to)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "મારે જવું જોઈએ.",
                "Мені треба йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Optative (joiye) — B1"
      },
      {
        "id": "compound-light-verbs",
        "title": "Складені дієслова з karvũ/thavũ — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато понять виражають іменником або запозиченим словом + легким дієсловом \"karvũ\" (робити) чи \"thavũ\" (ставати), а не окремим дієсловом.",
            "en": {
              "text": "Many concepts are expressed with a noun or loanword + the light verb \"karvũ\" (to do) or \"thavũ\" (to become), rather than a dedicated verb."
            }
          },
          {
            "type": "table",
            "title": "prem + karvũ",
            "rows": [
              [
                "prem karvũ",
                "любити (букв. \"робити любов\")"
              ],
              [
                "śarū thavũ",
                "починатися (букв. \"ставати початком\")"
              ]
            ],
            "en": {
              "title": "prem + karvũ"
            }
          }
        ],
        "titleEn": "Compound Verbs with karvũ/thavũ — B1"
      },
      {
        "id": "causative-formation",
        "title": "Каузативна форма (-āv-/-vad-) — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне значення (\"змусити зробити\") утворюється вставкою -āv- або подвійною каузативною формою -vad-, доданою до основи дієслова.",
            "en": {
              "text": "The causative meaning (\"to make someone do\") is formed by inserting -āv- or the double causative -vad-, added to the verb stem."
            }
          },
          {
            "type": "table",
            "title": "kar → karāv → karāvad",
            "rows": [
              [
                "kar (робити) → karāv",
                "змусити зробити"
              ],
              [
                "karāv → karāvad",
                "змусити когось змусити зробити (подвійна каузатив.)"
              ]
            ],
            "en": {
              "title": "kar → karāv → karāvad"
            }
          }
        ],
        "titleEn": "The Causative Form (-āv-/-vad-) — B2"
      },
      {
        "id": "passive-voice",
        "title": "Пасивний стан (-ā-) — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється вставкою -ā- в основу дієслова, окремо від каузативної вставки -āv-.",
            "en": {
              "text": "The passive voice is formed by inserting -ā- into the verb stem, distinct from the causative -āv- insertion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "પુસ્તક વંચાય છે.",
                "Книгу читають (пасивно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Passive Voice (-ā-) — B2"
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
        "id": "neuter-agreement-patterns",
        "title": "Узгодження середнього роду — B1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Середній рід (успадкований від давньоіндійського, втрачений у гінді) вживається для абстрактних понять, зменшувальних форм і дитинчат тварин, з власним набором закінчень -ũ у прикметнику й дієслові.",
            "en": {
              "text": "The neuter gender (inherited from Old Indo-Aryan, lost in Hindi) is used for abstract concepts, diminutive forms, and animal young, with its own set of -ũ endings on the adjective and verb."
            }
          },
          {
            "type": "table",
            "title": "Середній рід у дії",
            "rows": [
              [
                "સારું કામ (гарна робота, с.р.)",
                "прикметник sāru"
              ],
              [
                "બચ્ચું (маля, с.р.)",
                "детеныш будь-якої тварини"
              ]
            ],
            "en": {
              "title": "Neuter Gender in Action"
            }
          }
        ],
        "titleEn": "Neuter Gender Agreement Patterns — B1"
      },
      {
        "id": "ergative-postposition-e",
        "title": "Ергативна постпозиція -e — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Постпозиція \"-e\" на підметі перехідного дієслова в минулому часі — окрема відмінкова позначка, відсутня в теперішньому чи майбутньому часі того самого дієслова.",
            "en": {
              "text": "The postposition \"-e\" on the subject of a transitive verb in the past tense is a distinct case marker, absent in the present or future tense of the same verb."
            }
          },
          {
            "type": "table",
            "title": "તેણે (teṇe)",
            "rows": [
              [
                "તે (te, наз.)",
                "તેણે (teṇe, ерг.)"
              ]
            ],
            "en": {
              "title": "તેણે (teṇe)"
            }
          }
        ],
        "titleEn": "The Ergative Postposition -e — B1"
      },
      {
        "id": "genitive-postposition-nu",
        "title": "Родова постпозиція -nũ (узгоджувана) — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості постпозицій, родова \"-nũ\" узгоджується за родом і числом з іменником, до якого відноситься присвійність, а не з власником.",
            "en": {
              "text": "Unlike most postpositions, the genitive \"-nũ\" agrees in gender and number with the possessed noun, not the possessor."
            }
          },
          {
            "type": "table",
            "title": "-no/-nī/-nũ",
            "rows": [
              [
                "રામનો છોકરો",
                "хлопчик Рама (ч.р. — -no)"
              ],
              [
                "રામની છોકરી",
                "дівчинка Рама (ж.р. — -nī)"
              ]
            ],
            "en": {
              "title": "-no/-nī/-nũ"
            }
          }
        ],
        "titleEn": "The Agreeing Genitive Postposition -nũ — A2"
      },
      {
        "id": "dative-accusative-ne",
        "title": "Давально-знахідна постпозиція -ne — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Постпозиція \"-ne\" позначає й непрямий додаток (кому), і одушевлений прямий додаток (кого).",
            "en": {
              "text": "The postposition \"-ne\" marks both the indirect object (to whom) and an animate direct object (whom)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "મેં તેને પુસ્તક આપ્યું.",
                "Я дав йому книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dative/Accusative Postposition -ne — A2"
      },
      {
        "id": "instrumental-ablative-thi",
        "title": "Інструментально-аблативна -thī — A2",
        "emoji": "🔨",
        "sections": [
          {
            "type": "intro",
            "text": "Постпозиція \"-thī\" виражає і засіб дії (\"чим\"), і рух звідкись (\"звідки\") — два значення однією формою.",
            "en": {
              "text": "The postposition \"-thī\" expresses both the means of an action (\"by what\") and motion from somewhere (\"from where\") — two meanings, one form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું બસથી આવ્યો.",
                "Я приїхав автобусом."
              ],
              [
                "તે ઘરથી આવ્યો.",
                "Він прийшов з дому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Instrumental/Ablative -thī — A2"
      },
      {
        "id": "locative-ma",
        "title": "Локативна постпозиція -mã — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Постпозиція \"-mã\" позначає перебування \"в/усередині\" чогось.",
            "en": {
              "text": "The postposition \"-mã\" marks being \"in/inside\" something."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "પુસ્તક ઘરમાં છે.",
                "Книга в домі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Locative Postposition -mã — A2"
      },
      {
        "id": "direct-oblique-case",
        "title": "Прямий і непрямий відмінок — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Перед будь-якою постпозицією іменник (і узгоджений з ним прикметник) переходить у непряму (\"косу\") форму, яка часто відрізняється від прямої закінченням.",
            "en": {
              "text": "Before any postposition, the noun (and its agreeing adjective) shifts to the oblique (\"slanted\") form, which often differs from the direct form's ending."
            }
          },
          {
            "type": "table",
            "title": "Прямий → непрямий",
            "rows": [
              [
                "છોકરો (прямий)",
                "છોકરાને (непрямий + -ne)",
                "хлопчик → хлопчику (непрямий -a перед постпозицією)"
              ]
            ]
          }
        ],
        "titleEn": "Direct and Oblique Case — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "Узгодження прикметника — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники на -ũ узгоджуються з іменником у роді, числі й відмінку (-o/-i/-ũ); інші прикметники залишаються незмінними.",
            "en": {
              "text": "Adjectives ending in -ũ agree with the noun in gender, number, and case (-o/-i/-ũ); other adjectives remain unchanged."
            }
          },
          {
            "type": "table",
            "title": "sāro, sārī, sārũ",
            "rows": [
              [
                "sāro chokro (ч.р.)",
                "хороший хлопчик"
              ],
              [
                "sārī chokrī (ж.р.)",
                "хороша дівчинка"
              ]
            ],
            "en": {
              "title": "sāro, sārī, sārũ"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина залежить від роду: чоловічий рід на -о змінюється на -a, жіночий і середній роди зазвичай додають -o чи подовжують голосну.",
            "en": {
              "text": "The plural depends on gender: masculine -o shifts to -a, feminine and neuter usually add -o or lengthen the vowel."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "છોકરો → છોકરા",
                "хлопчики"
              ],
              [
                "છોકરી → છોકરીઓ",
                "дівчинки"
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
        "id": "no-shirorekha",
        "title": "Письмо без шірорекхи — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від деванагарі (гінді, маратхі), письмо гуджараті НЕ має горизонтальної риски (шірорекхи) над буквами — історично від неї відмовилися для швидшого письма.",
            "en": {
              "text": "Unlike Devanagari (Hindi, Marathi), Gujarati script does NOT have the horizontal headline (shirorekha) above the letters — it was historically dropped for faster writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ગુજરાતી (без риски вгорі)",
                "гуджараті — сама назва мови без шірорекхи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Writing without the Shirorekha — A1"
      },
      {
        "id": "tame-vs-tu",
        "title": "Tame й tũ — рівні звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Tũ\" — фамільярне звертання (до дітей, близьких), \"tame\" — нейтрально-ввічливе, що також є формою множини \"ви\".",
            "en": {
              "text": "\"Tũ\" is familiar address (to children, close friends), \"tame\" is neutral-polite, also serving as the plural \"you\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તું ક્યાં જાય છે?",
                "Куди ти йдеш? (фамільярно)"
              ],
              [
                "તમે ક્યાં જાઓ છો?",
                "Куди ви йдете? (ввічливо/мн.)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tame and tũ — Address Levels — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне число від 1 до 100 у гуджараті має унікальну, часто непередбачувану форму, а не системну комбінацію десятка й одиниці.",
            "en": {
              "text": "Every number from 1 to 100 in Gujarati has a unique, often unpredictable form, rather than a systematic combination of tens and units."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "એક (ek)",
                "один"
              ],
              [
                "બે (be)",
                "два"
              ],
              [
                "પાંચ (pāṁc)",
                "п'ять"
              ],
              [
                "દસ (das)",
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
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ā\" (цей) вказує на близьке, \"e\"/\"pel-\" (той) — на віддалене, і обидва узгоджуються з родом іменника.",
            "en": {
              "text": "\"Ā\" (this) points to something near, \"e\"/\"pel-\" (that) to something distant, and both agree with the noun's gender."
            }
          },
          {
            "type": "table",
            "title": "ā vs e",
            "rows": [
              [
                "ā chokro",
                "цей хлопчик"
              ],
              [
                "e chokrī",
                "та дівчинка"
              ]
            ],
            "en": {
              "title": "ā vs e"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-correlative",
        "title": "Відносно-співвідносна конструкція (je...te) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Типова південноазійська конструкція: відносне речення з \"je\" (який) стоїть окремо, а головне речення повторює вказівне \"te\" (той) — замість вбудованого підрядного речення, як в українській.",
            "en": {
              "text": "A typical South Asian construction: the relative clause with \"je\" (who/which) stands separately, and the main clause repeats the demonstrative \"te\" (that) — instead of an embedded subordinate clause as in Ukrainian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "જે છોકરો આવ્યો, તે મારો ભાઈ છે.",
                "Хлопчик, що прийшов, — мій брат. (букв. \"який хлопчик прийшов, той мій брат\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Relative-Correlative Construction (je...te) — B1"
      },
      {
        "id": "reflexive-pronoun-potu",
        "title": "Зворотний займенник potũ — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "\"Potũ\" (свій) виражає зворотну присвійність, узгоджену з родом означуваного іменника, незалежно від особи підмета.",
            "en": {
              "text": "\"Potũ\" (one's own) expresses reflexive possession, agreeing with the gender of the possessed noun, regardless of the subject's person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તેણે પોતાનું કામ કર્યું.",
                "Він зробив свою (власну) роботу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun potũ — B1"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники — це, по суті, родовий відмінок особових займенників з узгоджуваним закінченням -о/-і/-ũ.",
            "en": {
              "text": "Possessive pronouns are essentially the genitive case of the personal pronouns, with an agreeing -o/-i/-ũ ending."
            }
          },
          {
            "type": "table",
            "title": "маро, тару, теhno",
            "rows": [
              [
                "મારો છોકરો",
                "мій хлопчик"
              ],
              [
                "મારી છોકરી",
                "моя дівчинка"
              ]
            ],
            "en": {
              "title": "māro, tāru, tehno"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "comparative-construction",
        "title": "Порівняльна конструкція (-thī vadhāre) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння виражають аблативною постпозицією \"-thī\" (за/від) + слово \"vadhāre\" (більше), без окремого порівняльного суфікса на прикметнику.",
            "en": {
              "text": "Comparison is expressed with the ablative postposition \"-thī\" (than) + the word \"vadhāre\" (more), with no separate comparative suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે મારાથી ઊંચો છે.",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Comparative Construction (-thī vadhāre) — A2"
      },
      {
        "id": "superlative-construction",
        "title": "Найвищий ступінь (sauthī) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється словом \"sauthī\" (за всіх) перед прикметником.",
            "en": {
              "text": "The superlative is formed with the word \"sauthī\" (than all) before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે સૌથી ઊંચો છે.",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Superlative (sauthī) — A2"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання питальних слів — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Koṇ\" (хто) і \"śũ\" (що) переходять у непряму форму (koṇe, śeni) перед постпозиціями, як і звичайні іменники.",
            "en": {
              "text": "\"Koṇ\" (who) and \"śũ\" (what) shift to an oblique form (koṇe, śeni) before postpositions, just like ordinary nouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "કોણે આ કર્યું?",
                "Хто це зробив? (koṇe — непряма форма перед ергативом)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of Interrogatives — B1"
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-додаток-присудок (SOV), дієслово завжди в кінці речення.",
            "en": {
              "text": "The basic order is subject-object-verb (SOV), with the verb always at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું પુસ્તક વાંચું છું.",
                "Я читаю книгу. (я-книгу-читаю)"
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
        "id": "complex-postpositions",
        "title": "Складені постпозиції — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Складніші просторові значення утворюють родовим відмінком + іменником-локативом (\"на верху\", \"усередині\") замість окремого прийменника.",
            "en": {
              "text": "More complex spatial meanings are formed with the genitive + a locative noun (\"on top\", \"inside\") instead of a dedicated preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ટેબલની ઉપર",
                "на столі (букв. \"стола верх-у\")"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Complex Postpositions — B1"
      },
      {
        "id": "vocative-particle",
        "title": "Кличний вигук — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Пряме звертання часто супроводжується вигуком \"e\" чи зміною закінчення іменника чоловічого роду.",
            "en": {
              "text": "Direct address is often accompanied by the interjection \"e\" or a change of ending on a masculine noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "એ છોકરા!",
                "Гей, хлопчику!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative Interjection — A2"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують два іменники або іменник і прикметник без сполучного елемента.",
            "en": {
              "text": "Compound words often join two nouns or a noun and an adjective with no linking element."
            }
          },
          {
            "type": "table",
            "title": "Складні слова",
            "rows": [
              [
                "પુસ્તક + ઘર = પુસ્તકાલય",
                "бібліотека (книга + дім)"
              ]
            ],
            "en": {
              "title": "Compound Words"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "reduplication-emphasis",
        "title": "Редуплікація для підсилення — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення слова підсилює значення або виражає розподільність — поширений прийом у мовах Південної Азії.",
            "en": {
              "text": "Repeating a word intensifies the meaning or expresses distributiveness — a common device in South Asian languages."
            }
          },
          {
            "type": "table",
            "title": "ધીરે ધીરે",
            "rows": [
              [
                "ધીરે ધીરે (повільно-повільно)",
                "поступово"
              ]
            ],
            "en": {
              "title": "ધીરે ધીરે"
            }
          }
        ],
        "titleEn": "Reduplication for Emphasis — B1"
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії — це застигла форма прикметника середнього роду.",
            "en": {
              "text": "Many manner adverbs are a frozen neuter form of the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે ઝડપથી ચાલે છે.",
                "Він швидко ходить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Крім tũ/tame, третя, найповажніша форма \"āp\" вживається до значно старших чи високоповажних осіб, утворюючи трирівневу систему ввічливості.",
            "en": {
              "text": "Besides tũ/tame, a third, most respectful form \"āp\" is used for significantly older or highly respected people, forming a three-tier politeness system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "આપ કેમ છો?",
                "Як ви поживаєте? (найввічливіше)"
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
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Назви днів тижня пов'язані з індуїстськими божествами й небесними тілами, як і в більшості мов Північної Індії.",
            "en": {
              "text": "The names of the days of the week are tied to Hindu deities and celestial bodies, as in most North Indian languages."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "સોમવાર (somvār)",
                "понеділок (місяць)"
              ],
              [
                "બુધવાર (budhvār)",
                "середа (Меркурій)"
              ],
              [
                "રવિવાર (ravivār)",
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
            "text": "Поряд із запозиченими англійськими назвами, гуджараті зберігає власний індуїстський місячний календар із власними назвами місяців.",
            "en": {
              "text": "Alongside borrowed English names, Gujarati retains its own Hindu lunar calendar with its own month names."
            }
          },
          {
            "type": "table",
            "title": "Місяці (індуїстський календар)",
            "rows": [
              [
                "ચૈત્ર (chaitra)",
                "перший місяць (берез.-квіт.)"
              ],
              [
                "શ્રાવણ (śrāvaṇ)",
                "місяць мусону"
              ]
            ],
            "en": {
              "title": "Months (Hindu Calendar)"
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
            "text": "Час запитують \"Kētlā vāgyā chhē?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Kētlā vāgyā chhē?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ત્રણ વાગ્યા છે.",
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
            "text": "Кольори — прикметники, узгоджені за родом (-о/-і/-ũ), як і решта якісних прикметників.",
            "en": {
              "text": "Colors are adjectives, agreeing in gender (-o/-i/-ũ), like the rest of the qualitative adjectives."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "સફેદ (safed)",
                "білий"
              ],
              [
                "કાળો (kāḷo)",
                "чорний"
              ],
              [
                "લાલ (lāl)",
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
            "text": "Гуджараті, як і інші мови Південної Азії, розрізняє родичів за материнською й батьківською лінією окремими словами.",
            "en": {
              "text": "Gujarati, like other South Asian languages, distinguishes maternal and paternal relatives with separate words."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "મા (mā)",
                "мати"
              ],
              [
                "બાપ/પિતા (bāp/pitā)",
                "батько"
              ],
              [
                "કાકા (kākā)",
                "дядько по батьківській лінії"
              ],
              [
                "મામા (māmā)",
                "дядько по материнській лінії"
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
            "text": "\"Kēm chho?\" (як справи?) — стандартне привітання, буквально \"як є?\".",
            "en": {
              "text": "\"Kēm chho?\" (how are you?) is the standard greeting, literally \"how are [you]?\"."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "નમસ્તે (namaste)",
                "привіт/вітаю"
              ],
              [
                "કેમ છો?",
                "як справи?"
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
            "text": "Погоду описують дієсловом \"padvũ\" (падати) для дощу й прикметниками для температури.",
            "en": {
              "text": "Weather is described with the verb \"padvũ\" (to fall) for rain, and adjectives for temperature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "વરસાદ પડે છે.",
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
            "text": "Частини тіла — звичайні іменники з властивим родом, часто середнього роду.",
            "en": {
              "text": "Body parts are ordinary nouns with an inherent gender, often neuter."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "હાથ (hāth, ч.р.)",
                "рука"
              ],
              [
                "માથું (māthũ, с.р.)",
                "голова"
              ],
              [
                "પગ (pag, ч.р.)",
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
            "text": "Вік виражають конструкцією \"X vaṛas nũ\" (X-річний), яку узгоджують з родом означуваної особи.",
            "en": {
              "text": "Age is expressed with the construction \"X vaṛas nũ\" (X years old), agreeing with the gender of the person described."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "તે વીસ વર્ષનો છે.",
                "Йому двадцять років."
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
        "id": "politeness-levels",
        "title": "Рівні ввічливості — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім tũ/tame, старших і незнайомих часто називають родинними термінами (\"бгаі\" — брате, \"бен\" — сестро) замість особового займенника — знак поваги.",
            "en": {
              "text": "Besides tũ/tame, elders and strangers are often addressed with kinship terms (\"bhāi\" — brother, \"ben\" — sister) instead of a personal pronoun — a sign of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ભાઈ, મદદ કરશો?",
                "Брате, чи не допоможете?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness Levels — A2"
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
                "અરે!",
                "Ой!/Овва!"
              ],
              [
                "વાહ!",
                "Чудово!"
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
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через торговельну історію Гуджарату мова має шари перської, арабської й англійської лексики, часто адаптованої з новим значенням.",
            "en": {
              "text": "Due to Gujarat's trading history, the language has layers of Persian, Arabic, and English vocabulary, often adapted with a new meaning."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "ટેબલ (ṭebal, від table)",
                "стіл"
              ],
              [
                "દુકાન (dukān, з перської)",
                "крамниця"
              ]
            ],
            "en": {
              "title": "Loanwords"
            }
          }
        ],
        "titleEn": "Adapting Loanwords — B1"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Гуджаратські ідіоми часто спираються на торгівлю й підприємництво — центральні елементи гуджаратської культури.",
            "en": {
              "text": "Gujarati idioms often draw on trade and entrepreneurship — central elements of Gujarati culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "નફો રાખવો.",
                "Отримувати вигоду (букв. \"тримати прибуток\")."
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
        "id": "gujarati-diaspora",
        "title": "Гуджаратська діаспора — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки давній торговельній традиції гуджаратці утворюють одну з найбільших і найвпливовіших індійських діаспор — у Східній Африці, Великій Британії та США, часто зберігаючи мову через покоління.",
            "en": {
              "text": "Thanks to a long trading tradition, Gujaratis form one of the largest and most influential Indian diasporas — in East Africa, the UK, and the US, often keeping the language across generations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Значні гуджаратськомовні громади в Лондоні, Найробі й Нью-Джерсі.",
                "історична торговельна діаспора, а не лише недавня трудова міграція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gujarati Diaspora — B2"
      },
      {
        "id": "jain-vegetarian-vocabulary",
        "title": "Джайнська вегетаріанська лексика — B2",
        "emoji": "🥗",
        "sections": [
          {
            "type": "intro",
            "text": "Через сильний вплив джайнізму гуджараті має особливо багату й точну лексику для вегетаріанської їжі та понять ненасильства (ahiṃsā), відображаючи культурні цінності регіону.",
            "en": {
              "text": "Due to the strong influence of Jainism, Gujarati has especially rich and precise vocabulary for vegetarian food and concepts of nonviolence (ahiṃsā), reflecting the region's cultural values."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "અહિંસા (ahiṃsā)",
                "ненасильство — центральне поняття джайнської й гуджаратської культури"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Jain Vegetarian Vocabulary — B2"
      },
      {
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кожне число до сотні має унікальну форму, яку слід запам'ятовувати окремо, а не виводити із загального правила.",
            "en": {
              "text": "Every number up to a hundred has a unique form to be memorized individually, rather than derived from a general rule."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-20",
            "rows": [
              [
                "અગિયાર (agyār)",
                "одинадцять"
              ],
              [
                "વીસ (vīs)",
                "двадцять"
              ]
            ],
            "en": {
              "title": "Numbers 11-20"
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
            "text": "Порядкові числівники узгоджуються з іменником у роді, як прикметники на -ũ.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender, like -ũ adjectives."
            }
          },
          {
            "type": "table",
            "title": "પહેલો, બીજો, ત્રીજો",
            "rows": [
              [
                "પહેલો (pahelo)",
                "перший"
              ],
              [
                "બીજો (bījo)",
                "другий"
              ],
              [
                "ત્રીજો (trījo)",
                "третій"
              ]
            ],
            "en": {
              "title": "પહેલો, બીજો, ત્રીજો"
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
            "text": "\"Koī\" (хтось) і \"kāik\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Koī\" (someone) and \"kāik\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "કોઈ આવ્યું.",
                "Хтось прийшов."
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
            "text": "\"Koī nathī\" (ніхто) і \"kaĩ nathī\" (нічого) поєднують неозначений займенник із запереченням \"nathī\".",
            "en": {
              "text": "\"Koī nathī\" (no one) and \"kaĩ nathī\" (nothing) combine the indefinite pronoun with the negation \"nathī\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "કોઈ આવ્યું નથી.",
                "Ніхто не прийшов."
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
            "text": "Розділове питання утворюється часткою \"ne\" в кінці твердження.",
            "en": {
              "text": "A tag question is formed with the particle \"ne\" at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "આજે સરસ દિવસ છે, ને?",
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
        "title": "Цільове підрядне (māṭe) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Māṭe\" (для) + інфінітив вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Māṭe\" (for) + infinitive introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું કામ કરવા માટે આવ્યો.",
                "Я прийшов, щоб працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause (māṭe) — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (kāraṇ ke) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Kāraṇ ke\" (тому що) вводить причинове підрядне речення.",
            "en": {
              "text": "\"Kāraṇ ke\" (because) introduces a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "હું મોડો પડ્યો, કારણ કે બસ ચૂકી ગયો.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (kāraṇ ke) — B1"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (jo...to) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Пара \"jo...to\" (якщо...то) вводить умовне речення, як і в тенах (див. розділ часів).",
            "en": {
              "text": "The pair \"jo...to\" (if...then) introduces a conditional sentence, as in tenses (see the tense section)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "જો વરસાદ પડે તો, હું ઘરે રહીશ.",
                "Якщо піде дощ, я залишусь удома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause (jo...to) — B1"
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
            "text": "Кілька частовживаних дієслів (jāvũ-йти, karvũ-робити, dēvũ-давати, lēvũ-брати) мають суплетивні або сильно нерегулярні форми минулого часу.",
            "en": {
              "text": "A few common verbs (jāvũ-to go, karvũ-to do, dēvũ-to give, lēvũ-to take) have suppletive or heavily irregular past-tense forms."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "jāvũ (йти) → gayo",
                "минулий час не за жодним стандартним правилом"
              ],
              [
                "karvũ (робити) → karyũ",
                "нерегулярна вставка перед закінченням"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "Irregular Verbs — B2"
      },
      {
        "id": "irregular-plurals",
        "title": "Неправильна множина — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені іменники (особливо середнього роду й запозичення) не підкоряються стандартним правилам множини й потребують запам'ятовування окремо.",
            "en": {
              "text": "Some common nouns (especially neuter and loanwords) don't follow the standard plural rules and must be memorized individually."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ભાઈ → ભાઈઓ",
                "брати (додається -o, не -a)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули зберігають архаїчні санскритські форми слів, що вийшли із загального вжитку в сучасній розмовній мові.",
            "en": {
              "text": "Some common formulas preserve archaic Sanskrit word forms that have fallen out of general use in modern colloquial speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "જય શ્રી કૃષ્ણ!",
                "Слава Крішні! (традиційна санскритизована формула привітання)"
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
