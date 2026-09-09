// Vymova — data/grammar-data/grammar_gl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomes persoais — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Галісійська близько споріднена з португальською — обидві мови походять зі спільної середньовічної галісійсько-португальської.",
            "en": {
              "text": "Galician is closely related to Portuguese — both descend from a shared medieval Galician-Portuguese."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eu"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "el / ela"
              ],
              [
                "ми",
                "nós"
              ],
              [
                "ви",
                "vós"
              ],
              [
                "вони (ч./ж.)",
                "eles / elas"
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
        "id": "ser-vs-estar",
        "title": "Ser vs Estar — два дієслова \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Як і в іспанській та португальській, галісійська розрізняє \"ser\" (постійна ознака, тотожність) і \"estar\" (тимчасовий стан, місце) — два різні дієслова \"бути\".",
            "en": {
              "text": "As in Spanish and Portuguese, Galician distinguishes \"ser\" (permanent trait, identity) from \"estar\" (temporary state, location) — two different verbs \"to be\"."
            }
          },
          {
            "type": "table",
            "title": "ser (тотожність) vs estar (стан)",
            "rows": [
              [
                "Eu son profesor.",
                "Я вчитель. (тотожність, ser)"
              ],
              [
                "Eu estou canso.",
                "Я втомлений. (стан, estar)"
              ]
            ],
            "en": {
              "title": "ser (identity) vs estar (state)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "El é galego.",
                "Він галісієць."
              ],
              [
                "Ela está en casa.",
                "Вона вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ser vs Estar — Two Verbs \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з non — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"non\" перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle \"non\" before the verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Eu son de aquí.",
                "Eu non son de aquí.",
                "Я звідси → я не звідси"
              ],
              [
                "Ela sabe iso.",
                "Ela non sabe iso.",
                "Вона знає це → вона не знає цього"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Non estou canso.",
                "Я не втомлений."
              ],
              [
                "Non falo alemán.",
                "Я не розмовляю німецькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with non — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання позначаються лише інтонацією, без зміни порядку слів; спеціальні — питальними словами на початку речення.",
            "en": {
              "text": "Yes/no questions are marked only by intonation, without changing word order; wh-questions use question words at the start of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "quen",
                "хто"
              ],
              [
                "que",
                "що"
              ],
              [
                "onde",
                "де"
              ],
              [
                "cando",
                "коли"
              ],
              [
                "por que",
                "чому"
              ],
              [
                "como",
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
                "Es galego?",
                "Ти галісієць?"
              ],
              [
                "Onde vives?",
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
        "id": "personal-infinitive",
        "title": "Особовий інфінітив — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса, спільна лише з португальською серед романських мов: інфінітив може відмінюватися за особою й числом, зберігаючи при цьому статус інфінітива.",
            "en": {
              "text": "A unique feature shared only with Portuguese among the Romance languages: the infinitive can be inflected for person and number while still functioning as an infinitive."
            }
          },
          {
            "type": "table",
            "title": "Особовий інфінітив falar",
            "rows": [
              [
                "ao falarmos",
                "коли ми говоримо (букв. \"при говоренні-ми\")"
              ],
              [
                "ao falardes",
                "коли ви говорите"
              ]
            ],
            "en": {
              "title": "Personal Infinitive of falar"
            }
          }
        ],
        "titleEn": "The Personal Infinitive — B1"
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
        "id": "present-ar-verbs",
        "title": "Теперішній час дієслів на -ar — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова на -ar відмінюються за регулярними закінченнями, доданими до основи.",
            "en": {
              "text": "Verbs ending in -ar conjugate with regular endings added to the stem."
            }
          },
          {
            "type": "table",
            "title": "falar (говорити) — теперішній час",
            "rows": [
              [
                "eu falo",
                "я говорю"
              ],
              [
                "ti falas",
                "ти говориш"
              ],
              [
                "el fala",
                "він говорить"
              ]
            ],
            "en": {
              "title": "falar (to speak) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of -ar Verbs — A1"
      },
      {
        "id": "present-er-ir-verbs",
        "title": "Теперішній час дієслів на -er/-ir — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова на -er та -ir мають власні набори закінчень, відмінні від -ar.",
            "en": {
              "text": "Verbs ending in -er and -ir have their own sets of endings, distinct from -ar verbs."
            }
          },
          {
            "type": "table",
            "title": "comer / vivir — теперішній час",
            "rows": [
              [
                "eu como",
                "я їм"
              ],
              [
                "eu vivo",
                "я живу"
              ]
            ],
            "en": {
              "title": "comer / vivir — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of -er/-ir Verbs — A1"
      },
      {
        "id": "preterite-tense",
        "title": "Претерит (простий минулий) — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Претерит виражає завершену одноразову дію в минулому, з власними закінченнями для кожного дієвідміни.",
            "en": {
              "text": "The preterite expresses a completed, one-time past action, with its own endings for each conjugation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Onte falei con ela.",
                "Учора я поговорив з нею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Preterite (Simple Past) — A2"
      },
      {
        "id": "imperfect-tense",
        "title": "Імперфект — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект виражає тривалу чи звичну дію в минулому, без чіткої межі завершення.",
            "en": {
              "text": "The imperfect expresses an ongoing or habitual past action, with no clear end point."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cando era neno, xogaba no parque.",
                "Коли я був дитиною, я грав у парку."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється закінченнями, доданими прямо до інфінітива дієслова.",
            "en": {
              "text": "The future tense is formed with endings added directly to the verb's infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Falarei contigo mañá.",
                "Я поговорю з тобою завтра."
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
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб також утворюється закінченнями, доданими до інфінітива, паралельно до майбутнього часу.",
            "en": {
              "text": "The conditional is also formed with endings added to the infinitive, paralleling the future tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eu falaría contigo se tivese tempo.",
                "Я поговорив би з тобою, якби мав час."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказова форма 2 ос. одн. збігається з 3 ос. одн. теперішнього часу дійсного способу.",
            "en": {
              "text": "The 2nd person singular imperative coincides with the 3rd person singular of the present indicative."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Fala!",
                "Говори!"
              ],
              [
                "Falade!",
                "Говоріть! (мн.)"
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
        "id": "present-subjunctive",
        "title": "Умовний спосіб дійсного часу (subxuntivo) — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив вживається після дієслів бажання, сумніву й емоції для вираження суб'єктивного ставлення до дії.",
            "en": {
              "text": "The subjunctive is used after verbs of wish, doubt, and emotion to express a subjective attitude toward the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Espero que veñas.",
                "Сподіваюся, ти прийдеш."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Present Subjunctive — B1"
      },
      {
        "id": "imperfect-subjunctive",
        "title": "Імперфект кон'юнктива — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект кон'юнктива вживається в підрядних реченнях, залежних від минулого часу, і в нереальних умовних реченнях.",
            "en": {
              "text": "The imperfect subjunctive is used in clauses depending on a past tense, and in unreal conditional sentences."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se tivese tempo, iría.",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Imperfect Subjunctive — B1"
      },
      {
        "id": "future-subjunctive",
        "title": "Майбутній кон'юнктив — B2",
        "emoji": "🔭",
        "sections": [
          {
            "type": "intro",
            "text": "Рідкісна риса серед романських мов, спільна лише з португальською: окремий майбутній кон'юнктив вживається в умовних і часових підрядних реченнях про майбутню невизначену подію.",
            "en": {
              "text": "A feature rare among the Romance languages, shared only with Portuguese: a distinct future subjunctive is used in conditional and temporal clauses about an uncertain future event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cando poidas, chama.",
                "Коли зможеш, подзвони. (майбутній кон'юнктив poidas)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Future Subjunctive — B2"
      },
      {
        "id": "personal-infinitive-clauses",
        "title": "Особовий інфінітив у підрядних — B1",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Особовий інфінітив (див. основи) особливо часто вживається після прийменників замість особистого підрядного речення з кон'юнктивом.",
            "en": {
              "text": "The personal infinitive (see basics) is especially common after prepositions instead of a personal subordinate clause with the subjunctive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "É importante estudardes para o exame.",
                "Важливо, щоб ви вчилися до іспиту."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Personal Infinitive in Subordinate Clauses — B1"
      },
      {
        "id": "perfect-ter",
        "title": "Перфект з ter — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської, галісійська уникає складеного перфекта з haber й натомість переважно вживає простий претерит; коли складений перфект усе ж потрібен, вживають \"ter\" + дієприкметник.",
            "en": {
              "text": "Unlike Spanish, Galician avoids the compound perfect with haber and mostly prefers the simple preterite; when a compound perfect is needed, \"ter\" + participle is used instead."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ultimamente teño traballado moito.",
                "Останнім часом я багато працював."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Perfect with ter — B1"
      },
      {
        "id": "progressive-estar-a",
        "title": "Тривалий вид (estar a + інфінітив) — A2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанського герундія, галісійська (як і португальська) переважно виражає тривалу дію конструкцією \"estar a\" + інфінітив.",
            "en": {
              "text": "Unlike the Spanish gerund, Galician (like Portuguese) mostly expresses an ongoing action with \"estar a\" + infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Estou a traballar.",
                "Я зараз працюю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Aspect (estar a + Infinitive) — A2"
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
        "id": "enclisis-pronouns",
        "title": "Енклиза займенників — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської, галісійська (як і португальська) за замовчуванням ставить об'єктний займенник ПІСЛЯ дієслова в незалежному стверджувальному реченні, приєднуючи його дефісом.",
            "en": {
              "text": "Unlike Spanish, Galician (like Portuguese) by default places the object pronoun AFTER the verb in an independent affirmative clause, joined with a hyphen."
            }
          },
          {
            "type": "table",
            "title": "dígocho",
            "rows": [
              [
                "Dígocho.",
                "Я тобі це кажу. (di + go(te) + cho(lo))"
              ],
              [
                "Chámome Xoán.",
                "Мене звати Хуан."
              ]
            ],
            "en": {
              "title": "dígocho"
            }
          }
        ],
        "titleEn": "Enclisis of Object Pronouns — B1"
      },
      {
        "id": "mesoclisis",
        "title": "Мезоклиза в майбутньому/умовному — B2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "У майбутньому часі й умовному способі займенник іноді вставляють у СЕРЕДИНУ дієслова, між основою й закінченням — риса, унікальна серед живих мов Європи, спільна лише з португальською.",
            "en": {
              "text": "In the future tense and conditional mood, the pronoun is sometimes inserted INTO the middle of the verb, between the stem and the ending — a trait unique among living European languages, shared only with Portuguese."
            }
          },
          {
            "type": "table",
            "title": "falar-lle-ei",
            "rows": [
              [
                "falarei",
                "falar-lle-ei",
                "я поговорю → я поговорю з ним (займенник усередині форми)"
              ]
            ]
          }
        ],
        "titleEn": "Mesoclisis in the Future/Conditional — B2"
      },
      {
        "id": "contraction-do-da",
        "title": "Злиття прийменника й артикля (do/da) — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники \"de\" й \"en\" обов'язково зливаються з означеним артиклем в одне слово.",
            "en": {
              "text": "The prepositions \"de\" and \"en\" obligatorily fuse with the definite article into a single word."
            }
          },
          {
            "type": "table",
            "title": "de + o/a, en + o/a",
            "rows": [
              [
                "de + o = do",
                "з (нього)"
              ],
              [
                "en + a = na",
                "у (ній)"
              ]
            ],
            "en": {
              "title": "de + o/a, en + o/a"
            }
          }
        ],
        "titleEn": "Preposition-Article Contraction (do/da) — A1"
      },
      {
        "id": "contraction-coa-polo",
        "title": "Злиття con/por з артиклем (coa/polo) — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники \"con\" і \"por\" також зливаються з артиклем, хоча й не так системно, як \"de\"/\"en\".",
            "en": {
              "text": "The prepositions \"con\" and \"por\" also fuse with the article, though not as systematically as \"de\"/\"en\"."
            }
          },
          {
            "type": "table",
            "title": "con + a, por + o",
            "rows": [
              [
                "con + a = coa",
                "з (нею)"
              ],
              [
                "por + o = polo",
                "через (нього)"
              ]
            ],
            "en": {
              "title": "con + a, por + o"
            }
          }
        ],
        "titleEn": "con/por-Article Contraction (coa/polo) — A2"
      },
      {
        "id": "gender-number-agreement",
        "title": "Узгодження роду й числа — A1",
        "emoji": "⚧️",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді (-o/-a) і числі (-s), як і в інших романських мовах.",
            "en": {
              "text": "Adjectives agree with the noun in gender (-o/-a) and number (-s), as in the other Romance languages."
            }
          },
          {
            "type": "table",
            "title": "bo, boa, bos, boas",
            "rows": [
              [
                "bo día",
                "хороший день"
              ],
              [
                "boa noite",
                "хороший вечір (ж.р.)"
              ]
            ],
            "en": {
              "title": "bo, boa, bos, boas"
            }
          }
        ],
        "titleEn": "Gender and Number Agreement — A1"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється переважно закінченням -s, але слова на -l, -r, -n мають особливі закінчення множини.",
            "en": {
              "text": "The plural is mostly formed with -s, but words ending in -l, -r, -n have special plural endings."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "casa → casas",
                "будинки"
              ],
              [
                "papel → papeis",
                "папери"
              ],
              [
                "can → cans",
                "собаки"
              ]
            ],
            "en": {
              "title": "Plural Examples"
            }
          }
        ],
        "titleEn": "Forming the Plural — A1"
      },
      {
        "id": "diminutive-ino",
        "title": "Демінутив -iño/-iña — A2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Найхарактерніший галісійський суфікс, відмінний від португальського -inho й іспанського -ito: -iño/-iña виражає ніжність, малий розмір і використовується надзвичайно часто в розмовній мові.",
            "en": {
              "text": "The most characteristic Galician suffix, distinct from Portuguese -inho and Spanish -ito: -iño/-iña expresses tenderness, smallness, and is used extremely often in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "cariño, avoíña",
            "rows": [
              [
                "can → cadeliño",
                "песик"
              ],
              [
                "avoa → avoíña",
                "бабуся (ласкаво)"
              ]
            ],
            "en": {
              "title": "cariño, avoíña"
            }
          }
        ],
        "titleEn": "The Diminutive -iño/-iña — A2"
      },
      {
        "id": "augmentative",
        "title": "Аугментатив -ón/-azo — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Аугментативні суфікси -ón/-azo збільшують розмір слова й часто надають зневажливого чи гумористичного відтінку.",
            "en": {
              "text": "Augmentative suffixes -ón/-azo increase a word's size and often add a pejorative or humorous nuance."
            }
          },
          {
            "type": "table",
            "title": "casa → casón",
            "rows": [
              [
                "casa (дім) → casón",
                "величезний дім"
              ],
              [
                "home → homazo",
                "здоровань"
              ]
            ],
            "en": {
              "title": "casa → casón"
            }
          }
        ],
        "titleEn": "The Augmentative -ón/-azo — B1"
      },
      {
        "id": "no-personal-a",
        "title": "Відсутність особового a — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської, галісійська НЕ вживає прийменник \"a\" перед одушевленим прямим додатком — ще одна риса, що зближує її з португальською, а не іспанською.",
            "en": {
              "text": "Unlike Spanish, Galician does NOT use the preposition \"a\" before an animate direct object — another trait bringing it closer to Portuguese than to Spanish."
            }
          },
          {
            "type": "formula",
            "title": "Ісп. з personal a → Гал. без a",
            "rows": [
              [
                "Veo a Xoán. (ісп. Veo a Juan)",
                "Vexo Xoán.",
                "Я бачу Хуана (ісп. з \"a\") → без \"a\" в галісійській"
              ]
            ]
          }
        ],
        "titleEn": "The Absence of Personal a — A2"
      },
      {
        "id": "possessive-adjectives",
        "title": "Присвійні прикметники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні прикметники узгоджуються з іменником у роді й числі й зазвичай вживаються з означеним артиклем перед ними.",
            "en": {
              "text": "Possessive adjectives agree with the noun in gender and number and are usually used with the definite article before them."
            }
          },
          {
            "type": "table",
            "title": "o meu, a miña",
            "rows": [
              [
                "o meu can",
                "мій собака"
              ],
              [
                "a miña casa",
                "мій дім (ж.р.)"
              ]
            ],
            "en": {
              "title": "o meu, a miña"
            }
          }
        ],
        "titleEn": "Possessive Adjectives — A1"
      },
      {
        "id": "demonstrative-three-way",
        "title": "Три ступені вказівності — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості: este (близько до мовця), ese (близько до співрозмовника), aquel (далеко від обох).",
            "en": {
              "text": "Demonstratives have three degrees of distance: este (near the speaker), ese (near the listener), aquel (far from both)."
            }
          },
          {
            "type": "table",
            "title": "este / ese / aquel",
            "rows": [
              [
                "este libro",
                "ця книга (тут)"
              ],
              [
                "ese libro",
                "та книга (у тебе)"
              ],
              [
                "aquel libro",
                "он та книга (далеко)"
              ]
            ],
            "en": {
              "title": "este / ese / aquel"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — A2"
      },
      {
        "id": "relative-pronouns",
        "title": "Відносні займенники que/quen/cal — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "\"Que\" — універсальний відносний займенник; \"quen\" вживають лише для людей після прийменника; \"cal\" вибирає з-поміж варіантів.",
            "en": {
              "text": "\"Que\" is the universal relative pronoun; \"quen\" is used only for people after a preposition; \"cal\" selects among options."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A muller que vin.",
                "Жінка, яку я бачив."
              ],
              [
                "A persoa con quen falei.",
                "Людина, з якою я говорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns que/quen/cal — A2"
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом \"máis\" перед прикметником, найвищий — тим самим із означеним артиклем.",
            "en": {
              "text": "The comparative is formed with \"máis\" before the adjective, the superlative with the same plus the definite article."
            }
          },
          {
            "type": "table",
            "title": "grande → máis grande → o máis grande",
            "rows": [
              [
                "grande (великий)",
                "máis grande (більший)",
                "o máis grande (найбільший)"
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "numbers-basic",
        "title": "Числівники 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники близькі за формою до португальських і іспанських еквівалентів завдяки спільному латинському походженню.",
            "en": {
              "text": "The numbers are close in form to their Portuguese and Spanish equivalents thanks to shared Latin origin."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "un",
                "один"
              ],
              [
                "dous/dúas",
                "два (ч./ж.р.)"
              ],
              [
                "cinco",
                "п'ять"
              ],
              [
                "dez",
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
        "id": "clitic-placement-rules",
        "title": "Правила розміщення клитик — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Певні слова (заперечення, питальні слова, деякі сполучники) вимагають, щоб займенник стояв ПЕРЕД дієсловом (проклиза) замість звичайної енклизи.",
            "en": {
              "text": "Certain words (negation, question words, some conjunctions) require the pronoun to stand BEFORE the verb (proclisis) instead of the usual enclisis."
            }
          },
          {
            "type": "formula",
            "title": "Енклиза → проклиза",
            "rows": [
              [
                "Dígocho.",
                "Non cho digo.",
                "Я тобі це кажу → Я тобі це НЕ кажу (проклиза після non)"
              ]
            ]
          }
        ],
        "titleEn": "Clitic Placement Rules — B2"
      },
      {
        "id": "reflexive-pronouns",
        "title": "Зворотні займенники — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник \"se\" однаковий для 3-ї особи однини й множини й теж підкоряється правилам енклизи/проклизи.",
            "en": {
              "text": "The reflexive pronoun \"se\" is the same for 3rd person singular and plural and also follows the enclisis/proclisis rules."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chámome Ana.",
                "Мене звати Анна."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronouns — A2"
      },
      {
        "id": "combined-object-pronouns",
        "title": "Поєднання займенників (cho, llo) — B1",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Коли непрямий і прямий додаток виражені займенниками, вони зливаються в одну особливу форму (te+o=cho, lle+o=llo).",
            "en": {
              "text": "When both indirect and direct object are pronominal, they fuse into a single special form (te+o=cho, lle+o=llo)."
            }
          },
          {
            "type": "table",
            "title": "te+o=cho, lle+o=llo",
            "rows": [
              [
                "Dígocho.",
                "Я тобі це кажу (te+o=cho)"
              ],
              [
                "Dígollo.",
                "Я йому це кажу (lle+o=llo)"
              ]
            ],
            "en": {
              "title": "te+o=cho, lle+o=llo"
            }
          }
        ],
        "titleEn": "Combined Object Pronouns (cho, llo) — B1"
      },
      {
        "id": "adverbs-mente",
        "title": "Прислівники на -mente — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії утворюються додаванням -mente до жіночої форми прикметника.",
            "en": {
              "text": "Manner adverbs are formed by adding -mente to the feminine form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "rápida → rapidamente",
            "rows": [
              [
                "rápida (швидка) → rapidamente",
                "швидко"
              ],
              [
                "clara → claramente",
                "ясно"
              ]
            ],
            "en": {
              "title": "rápida → rapidamente"
            }
          }
        ],
        "titleEn": "Adverbs in -mente — A2"
      },
      {
        "id": "prepositions",
        "title": "Прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Основні прийменники близькі до португальських, хоча деякі мають власну галісійську форму.",
            "en": {
              "text": "The basic prepositions are close to Portuguese ones, though some have their own Galician form."
            }
          },
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "de",
                "з/від"
              ],
              [
                "a",
                "до"
              ],
              [
                "con",
                "з (разом)"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Prepositions — A1"
      },
      {
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівноправні частини; підрядні вводять залежне речення, часто з кон'юнктивом.",
            "en": {
              "text": "Coordinating conjunctions join equal parts; subordinating ones introduce a dependent clause, often with the subjunctive."
            }
          },
          {
            "type": "table",
            "title": "e / pero / que",
            "rows": [
              [
                "e",
                "і"
              ],
              [
                "pero",
                "але"
              ],
              [
                "que",
                "що"
              ]
            ],
            "en": {
              "title": "e / pero / que"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "seseo-gheada",
        "title": "Сесео й гьяда — B1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Дві характерні фонологічні риси галісійської вимови: \"seseo\" — відсутність розрізнення s/z (як в іспанській), і \"gheada\" — вимова g/gu як придихового h у деяких регіонах.",
            "en": {
              "text": "Two characteristic phonological features of Galician pronunciation: \"seseo\" — no s/z distinction (as in Spanish), and \"gheada\" — pronouncing g/gu as an aspirated h in some regions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gato → вимовляється як [hato] у регіонах з gheada",
                "риса, властива частині Галісії, не всій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Seseo and Gheada — B1"
      },
      {
        "id": "f-retention",
        "title": "Збереження початкового f- — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Галісійська, як і португальська, зберегла латинське початкове \"f-\" там, де іспанська перейшла на \"h-\" (facer vs ісп. hacer).",
            "en": {
              "text": "Galician, like Portuguese, kept the Latin initial \"f-\" where Spanish shifted to \"h-\" (facer vs Spanish hacer)."
            }
          },
          {
            "type": "table",
            "title": "facer vs hacer",
            "rows": [
              [
                "facer (робити, гал.)",
                "hacer (ісп.)"
              ],
              [
                "filla (дочка, гал.)",
                "hija (ісп.)"
              ]
            ],
            "en": {
              "title": "facer vs hacer"
            }
          }
        ],
        "titleEn": "Retention of Initial f- — A2"
      },
      {
        "id": "definite-articles-o-a",
        "title": "Артиклі o/a замість el/la — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль \"o/a\" (як у португальській), а не \"el/la\", як в іспанській.",
            "en": {
              "text": "The definite article is \"o/a\" (as in Portuguese), not \"el/la\" as in Spanish."
            }
          },
          {
            "type": "table",
            "title": "o home, a muller",
            "rows": [
              [
                "o home (гал.) — el hombre (ісп.)",
                "чоловік"
              ],
              [
                "a muller (гал.) — la mujer (ісп.)",
                "жінка"
              ]
            ],
            "en": {
              "title": "o home, a muller"
            }
          }
        ],
        "titleEn": "Articles o/a instead of el/la — A1"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Quen\" (хто) — для людей, \"que\" (що) — для предметів, обидва незмінні за родом.",
            "en": {
              "text": "\"Quen\" (who) is for people, \"que\" (what) for things, both invariable for gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Quen é el?",
                "Хто він?"
              ],
              [
                "Que é isto?",
                "Що це?"
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
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують дієслово з іменником, описуючи предмет через його функцію.",
            "en": {
              "text": "Compound words often join a verb and a noun, describing an object through its function."
            }
          },
          {
            "type": "table",
            "title": "abrir + latas",
            "rows": [
              [
                "abrir (відкривати) + latas (банки) = abrelatas",
                "консервний ніж"
              ]
            ],
            "en": {
              "title": "abrir + latas"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від іспанської й португальської, галісійська зберігає більш архаїчні, латинізовані назви буднів.",
            "en": {
              "text": "Unlike Spanish and Portuguese, Galician retains more archaic, Latinate names for weekdays."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "luns",
                "понеділок"
              ],
              [
                "mércores",
                "середа"
              ],
              [
                "venres",
                "п'ятниця"
              ],
              [
                "domingo",
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
            "text": "Назви місяців — латинські запозичення, дуже схожі на португальські й іспанські.",
            "en": {
              "text": "Month names are Latin borrowings, very similar to Portuguese and Spanish ones."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "xaneiro",
                "січень"
              ],
              [
                "maio",
                "травень"
              ],
              [
                "agosto",
                "серпень"
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
            "text": "Час запитують \"Que hora é?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Que hora é?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Son as tres.",
                "Зараз третя година."
              ],
              [
                "Vémonos ás cinco.",
                "Побачимось о п'ятій."
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
            "text": "Кольори — звичайні прикметники й узгоджуються з іменником у роді й числі.",
            "en": {
              "text": "Colors are ordinary adjectives, agreeing with the noun in gender and number."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "branco",
                "білий"
              ],
              [
                "negro",
                "чорний"
              ],
              [
                "vermello",
                "червоний"
              ],
              [
                "azul",
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
            "text": "Родинні терміни — звичайні іменники, часто з жіночою й чоловічою формою.",
            "en": {
              "text": "Kinship terms are ordinary nouns, often with a feminine and masculine form."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "nai",
                "мати"
              ],
              [
                "pai",
                "батько"
              ],
              [
                "irmá",
                "сестра"
              ],
              [
                "irmán",
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
            "text": "Привітання близькі до португальських, з характерною галісійською вимовою.",
            "en": {
              "text": "Greetings resemble Portuguese ones, with characteristic Galician pronunciation."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Ola!",
                "Привіт!"
              ],
              [
                "Bo día!",
                "Доброго дня!"
              ],
              [
                "Adeus!",
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
            "text": "Погоду часто описують дієсловом без окремого підмета, як в інших романських мовах.",
            "en": {
              "text": "Weather is often described with a subjectless verb, as in other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Está chovendo.",
                "Йде дощ."
              ],
              [
                "Fai frío.",
                "Холодно."
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
            "text": "Частини тіла — звичайні іменники з властивим родом, часто вживані з означеним артиклем замість присвійного.",
            "en": {
              "text": "Body parts are ordinary nouns with an inherent gender, often used with the definite article instead of a possessive."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "a man",
                "рука"
              ],
              [
                "a cabeza",
                "голова"
              ],
              [
                "o pé",
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
            "text": "Вік виражають дієсловом \"ter\" + число + \"anos\", подібно до португальського \"ter... anos\", на відміну від іспанського \"tener\".",
            "en": {
              "text": "Age is expressed with \"ter\" + number + \"anos\", similar to Portuguese \"ter... anos\", unlike Spanish \"tener\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teño vinte anos.",
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
        "id": "politeness-address",
        "title": "Форми звертання ti/vostede — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Ti\" — неформальне звертання, \"vostede\" — ввічливе, з дієсловом у 3-й особі однини, як в іспанській.",
            "en": {
              "text": "\"Ti\" is informal address, \"vostede\" is polite, taking the verb in the 3rd person singular, as in Spanish."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Como estás?",
                "Як справи? (неформально)"
              ],
              [
                "Como está vostede?",
                "Як ся маєте? (ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Address Forms ti/vostede — A2"
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
                "Miña nai!",
                "Оце так!/Мамо рідна! (букв. \"моя мати\")"
              ],
              [
                "Grazas!",
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
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через двомовне середовище з іспанською багато запозичень мають дублетні форми — питомо галісійську й castellanismo (кальку з іспанської).",
            "en": {
              "text": "Due to the bilingual environment with Spanish, many borrowings have doublet forms — a native Galician one and a castellanismo (calque from Spanish)."
            }
          },
          {
            "type": "table",
            "title": "Дублети",
            "rows": [
              [
                "chover (питоме) vs *llover (castellanismo)",
                "йти дощу"
              ]
            ],
            "en": {
              "title": "Doublets"
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
            "text": "Галісійські ідіоми часто спираються на море, дощ і сільське життя — центральні елементи галісійської культури.",
            "en": {
              "text": "Galician idioms often draw on the sea, rain, and rural life — central elements of Galician culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Está chovendo a cachón.",
                "Ллє як з відра."
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
        "id": "cantigas-heritage",
        "title": "Спадщина cantigas — B2",
        "emoji": "🎼",
        "sections": [
          {
            "type": "intro",
            "text": "Середньовічна галісійсько-португальська лірика (cantigas) XII-XIV ст. була престижною мовою поезії по всьому Піренейському півострову — навіть кастильські королі писали нею вірші, попри те, що правили іспаномовними територіями.",
            "en": {
              "text": "Medieval Galician-Portuguese lyric poetry (cantigas) from the 12th-14th centuries was the prestige language of poetry across the whole Iberian Peninsula — even Castilian kings wrote verse in it, despite ruling Spanish-speaking territories."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cantigas de Santa María (Альфонсо X)",
                "збірка написана галісійсько-португальською кастильським королем"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Cantigas Literary Heritage — B2"
      },
      {
        "id": "reintegracionismo",
        "title": "Реінтеграціонізм vs ізоляціонізм — C1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна соціолінгвістична дискусія: \"реінтеграціоністи\" вважають галісійську діалектом єдиної галісійсько-португальської мови й хочуть зближення правопису з португальським, тоді як офіційний стандарт слідує \"ізоляціоністському\" підходу, ближчому до іспанського правопису.",
            "en": {
              "text": "A unique sociolinguistic debate: \"reintegrationists\" consider Galician a dialect of a single Galician-Portuguese language and want the spelling closer to Portuguese, while the official standard follows an \"isolationist\" approach closer to Spanish spelling."
            }
          },
          {
            "type": "table",
            "title": "Офіційний vs реінтеграціоністський правопис",
            "rows": [
              [
                "nación (офіц.)",
                "nação (реінтеграц.)",
                "\"нація\" в двох конкуруючих системах письма"
              ]
            ]
          }
        ],
        "titleEn": "Reintegrationism vs Isolationism — C1"
      },
      {
        "id": "numbers-eleven-plus",
        "title": "Числівники від 11 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники 11-19 утворюються поєднанням одиниці з десятком.",
            "en": {
              "text": "Numbers 11-19 are formed by combining the digit with the ten."
            }
          },
          {
            "type": "table",
            "title": "Числа 11-19",
            "rows": [
              [
                "once",
                "одинадцять"
              ],
              [
                "vinte",
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
            "text": "Порядкові числівники узгоджуються з іменником у роді й числі, як прикметники.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and number, like adjectives."
            }
          },
          {
            "type": "table",
            "title": "primeiro, segundo, terceiro",
            "rows": [
              [
                "primeiro",
                "перший"
              ],
              [
                "segundo",
                "другий"
              ],
              [
                "terceiro",
                "третій"
              ]
            ],
            "en": {
              "title": "primeiro, segundo, terceiro"
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
            "text": "\"Alguén\" (хтось) і \"algo\" (щось) — базові неозначені займенники.",
            "en": {
              "text": "\"Alguén\" (someone) and \"algo\" (something) are the basic indefinite pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chamou alguén.",
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
            "text": "\"Ninguén\" (ніхто) і \"nada\" (нічого) можуть подвоювати заперечення разом із \"non\", на відміну від літературної англійської.",
            "en": {
              "text": "\"Ninguén\" (no one) and \"nada\" (nothing) can double up with \"non\" for negation, unlike literary English."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Non veu ninguén.",
                "Ніхто не прийшов. (подвійне заперечення)"
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
            "text": "Розділове питання утворюється фразою \"verdade?\" або \"non si?\" у кінці твердження.",
            "en": {
              "text": "A tag question is formed with the phrase \"verdade?\" or \"non si?\" at the end of a statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Fai bo tempo, verdade?",
                "Гарна погода, чи не так?"
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
        "title": "Цільове підрядне (para que) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Para que\" + кон'юнктив вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Para que\" + subjunctive introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Estudo para que aproben o exame.",
                "Я вчуся, щоб скласти іспит."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause with para que — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (porque) — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Porque\" (тому що) вводить причинове підрядне речення з дійсним способом.",
            "en": {
              "text": "\"Porque\" (because) introduces a causal clause with the indicative mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cheguei tarde porque perdín o bus.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause with porque — A2"
      },
      {
        "id": "conditional-clause",
        "title": "Умовне підрядне (se) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Se\" (якщо) вводить умовне речення; нереальна умова вимагає імперфекта кон'юнктива в підрядному й умовного способу в головному.",
            "en": {
              "text": "\"Se\" (if) introduces a conditional clause; an unreal condition requires the imperfect subjunctive in the subordinate clause and the conditional mood in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se tivese tempo, iría.",
                "Якби я мав час, я б пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause with se — B1"
      },
      {
        "id": "diminutive-in-place-names",
        "title": "Демінутив у топонімах — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Багато галісійських топонімів і прізвиськ містять застиглий демінутив -iño/-iña, що втратив зменшувальний відтінок і став частиною власної назви.",
            "en": {
              "text": "Many Galician place names and nicknames contain a frozen -iño/-iña diminutive that has lost its diminutive nuance and become part of the proper name."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A Coruña (застигла форма з артиклем і топонімним закінченням)",
                "Ла-Корунья"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Diminutive in Place Names — B1"
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
            "text": "Кілька частовживаних дієслів (ser, ir, ter, facer, dicir) мають настільки нерегулярні форми в претериті й теперішньому часі, що їх слід вивчати окремо.",
            "en": {
              "text": "A few common verbs (ser, ir, ter, facer, dicir) have forms so irregular in the preterite and present that they must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "ser/ir → fun",
                "ser і ir мають однакову форму претерита — розрізняє лише контекст"
              ],
              [
                "dicir → digo / dixen",
                "теперішній і претерит зовсім різні за коренем"
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
            "text": "Слова, що закінчуються на -n у деяких випадках втрачають наголос при множині або мають незвичну форму.",
            "en": {
              "text": "Words ending in -n sometimes shift stress in the plural or have an unusual form."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "can → cans",
                "собаки (регулярно)"
              ],
              [
                "irmán → irmáns",
                "брати (з наголосом на закінченні)"
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
            "text": "Деякі поширені формули зберігають архаїчні форми слів, що вийшли із загального вжитку в сучасній мові.",
            "en": {
              "text": "Some common formulas preserve archaic word forms that have fallen out of general use in the modern language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Deus llo pague!",
                "Хай Бог тобі віддячить! (архаїчна конструкція подяки)"
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
