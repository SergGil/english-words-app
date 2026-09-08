// Vymova — data/grammar-data/grammar_am.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "የግል ተውላጠ ስም — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В амхарській займенник \"ти\" має окремі форми залежно від того, звертаєшся ти до чоловіка чи до жінки.",
            "en": {
              "text": "In Amharic, the pronoun \"you\" has separate forms depending on whether you're addressing a man or a woman."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "እኔ (ənē)"
              ],
              [
                "ти (до чоловіка)",
                "አንተ (antä)"
              ],
              [
                "ти (до жінки)",
                "አንቺ (anchi)"
              ],
              [
                "він",
                "እሱ (əssu)"
              ],
              [
                "вона",
                "እሷ (əsswa)"
              ],
              [
                "ми",
                "እኛ (ənya)"
              ],
              [
                "ви",
                "እናንተ (ənantä)"
              ],
              [
                "вони",
                "እነሱ (ənässu)"
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
        "id": "to-be",
        "title": "Зв'язка \"ነው/ናት\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка \"бути\" узгоджується і з особою, і з родом підмета, і ставиться в кінці речення, після присудка.",
            "en": {
              "text": "The \"to be\" copula agrees with both the person and the gender of the subject, and goes at the end of the sentence, after the predicate."
            }
          },
          {
            "type": "formula",
            "title": "Присудок + ነው/ናት/ነኝ",
            "rows": [
              [
                "እሱ",
                "መምህር ነው",
                "він учитель"
              ],
              [
                "እሷ",
                "መምህር ናት",
                "вона учителька"
              ],
              [
                "እኔ",
                "መምህር ነኝ",
                "я учитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እርሱ ዶክተር ነው።",
                "Він лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula Näw/Nat — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення አል...ም — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється не одним словом, а обгорткою навколо дієслова: префікс አል- на початку й суфікс -ም у кінці одночасно.",
            "en": {
              "text": "Negation isn't formed with a single word but with a wrapper around the verb: the prefix አል- at the start and the suffix -ም at the end, simultaneously."
            }
          },
          {
            "type": "formula",
            "title": "አል- + дієслово + -ም",
            "rows": [
              [
                "አውቃለሁ",
                "አላውቅም",
                "я знаю → я не знаю"
              ],
              [
                "ይመጣል",
                "አይመጣም",
                "він прийде → він не прийде"
              ],
              [
                "እፈልጋለሁ",
                "አልፈልግም",
                "я хочу → я не хочу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እኔ አላውቅም።",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Al-...-M — A1"
      },
      {
        "id": "questions",
        "title": "Питання — інтонація — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні найчастіше утворюються висхідною інтонацією без зміни порядку слів; частка እንዴ додає відтінок здивування чи уточнення.",
            "en": {
              "text": "Yes/no questions are most often formed with rising intonation, without changing word order; the particle እንዴ adds a shade of surprise or clarification."
            }
          },
          {
            "type": "formula",
            "title": "Твердження + висхідна інтонація?",
            "rows": [
              [
                "ደክሞሃል።",
                "ደክሞሃል?",
                "Ти втомлений. → Ти втомлений?"
              ],
              [
                "ትራባለህ።",
                "ትራባለህ?",
                "Ти голодний. → Ти голодний?"
              ],
              [
                "መጣ።",
                "መጣ?",
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
                "ውሃ ትፈልጋለህ?",
                "Ти хочеш води?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — Rising Intonation — A1"
      },
      {
        "id": "gender-agreement-2nd-3rd-person",
        "title": "Узгодження за родом у 2-й/3-й особі — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від займенника \"я\" чи \"ми\", форми \"ти\" й \"він/вона\" різняться за родом — і дієслово, і прикметник обов'язково узгоджуються з цим родом.",
            "en": {
              "text": "Unlike \"I\" or \"we\", the forms of \"you\" and \"he/she\" differ by gender — both the verb and the adjective must agree with that gender."
            }
          },
          {
            "type": "table",
            "title": "Приклад узгодження",
            "rows": [
              [
                "አንተ ጎበዝ ነህ",
                "ти (чол.) молодець"
              ],
              [
                "አንቺ ጎበዝ ነሽ",
                "ти (жін.) молодець"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እሱ ትልቅ ነው፣ እሷ ትንሽ ናት።",
                "Він великий, вона маленька."
              ]
            ]
          }
        ],
        "titleEn": "Gender Agreement in 2nd/3rd Person — A1"
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
        "id": "present-imperfective",
        "title": "Теперішній/звичний час (ይ-...-ል) — A1",
        "titleEn": "Present/Habitual (Yə-...-Al) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній і звичний час утворюються префіксом-суфіксом, що обгортає основу дієслова: особовий префікс на початку і -ል у кінці.",
            "en": {
              "text": "The present/habitual tense is formed with a prefix-suffix wrapper around the verb stem: a personal prefix at the start and -ል at the end."
            }
          },
          {
            "type": "formula",
            "title": "особовий префікс + основа + ል",
            "rows": [
              [
                "እኔ",
                "እጽፋለሁ",
                "я пишу"
              ],
              [
                "አንተ",
                "ትጽፋለህ",
                "ти пишеш (чол.)"
              ],
              [
                "እሱ",
                "ይጽፋል",
                "він пише"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እናቴ ምሳ ታበስላለች።",
                "Моя мама готує обід."
              ],
              [
                "ተማሪዎች መጽሐፍ ያነባሉ።",
                "Учні читають книгу."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-perfective",
        "title": "Минулий час (суфіксальна відміна) — A2",
        "titleEn": "Past Tense (Suffix Conjugation) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється особовими суфіксами, доданими прямо до основи дієслова, без окремого префікса.",
            "en": {
              "text": "The past tense is formed with personal suffixes added directly to the verb stem, with no separate prefix."
            }
          },
          {
            "type": "formula",
            "title": "основа + особовий суфікс",
            "rows": [
              [
                "እኔ",
                "ጻፍኩ",
                "я написав"
              ],
              [
                "አንተ",
                "ጻፍክ",
                "ти написав (чол.)"
              ],
              [
                "እሱ",
                "ጻፈ",
                "він написав"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ትናንት መጽሐፍ አነበብኩ።",
                "Вчора я прочитав книгу."
              ],
              [
                "እሷ ወደ ቤት ሄደች።",
                "Вона пішла додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "present-continuous-periphrastic",
        "title": "Тривала дія (конверб + допоміжне) — B1",
        "titleEn": "Continuous Aspect (Converb + Auxiliary) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія \"саме зараз\" виражається конвербом (дієприслівниковою формою) головного дієслова плюс допоміжне дієслово \"бути\" አለ.",
            "en": {
              "text": "The \"right now\" continuous aspect is expressed with the converb (a gerund-like form) of the main verb plus the auxiliary \"to be\" አለ."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "እየጻፍኩ ነው።",
                "Я саме пишу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እሱ እየበላ ነው።",
                "Він саме їсть."
              ],
              [
                "ልጆቹ እየተጫወቱ ናቸው።",
                "Діти саме граються."
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
            "text": "Майбутній час найчастіше виражається тією ж теперішньою/звичною формою (ይ-...-ል) плюс слово ነው в кінці, або контекстом.",
            "en": {
              "text": "The future is most often expressed with the same present/habitual form (ይ-...-ል) plus the word ነው at the end, or by context."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ነገ እመጣለሁ።",
                "Завтра я прийду."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እሷ ትመጣለች።",
                "Вона прийде."
              ],
              [
                "ነገ ዝናብ ይዘንባል።",
                "Завтра піде дощ."
              ]
            ]
          }
        ]
      },
      {
        "id": "perfect-tense",
        "title": "Перфект (стан результату) — B1",
        "titleEn": "Perfect (Resultant State) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект виражається конвербом + допоміжним дієсловом \"бути\" в теперішньому часі, підкреслюючи актуальний стан-результат дії.",
            "en": {
              "text": "The perfect is expressed with a converb plus the auxiliary \"to be\" in the present, emphasizing the present resultant state of the action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "በልቻለሁ።",
                "Я вже поїв (і досі ситий)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እሱ ደርሷል።",
                "Він уже прибув."
              ],
              [
                "መልእክቱን ልኬያለሁ።",
                "Я вже надіслав повідомлення."
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
            "text": "Наказовий спосіб має окремі форми для чоловічого й жіночого роду однини та для множини, утворені особливими закінченнями основи.",
            "en": {
              "text": "The imperative has distinct forms for masculine and feminine singular and for the plural, formed with special stem endings."
            }
          },
          {
            "type": "table",
            "title": "\"መጣ\" (приходити) — наказовий",
            "rows": [
              [
                "до чол.",
                "ና!",
                "Іди сюди!"
              ],
              [
                "до жін.",
                "ነይ!",
                "Іди сюди!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ተቀመጥ!",
                "Сідай! (до чол.)"
              ],
              [
                "ብላ!",
                "Їж! (до жін.)"
              ]
            ]
          }
        ]
      },
      {
        "id": "jussive-subjunctive",
        "title": "Юссив/кон'юнктив (ይ-...) — B1",
        "titleEn": "Jussive/Subjunctive (Yə-...) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Юссив (\"хай він...\", \"нехай...\") утворюється особливим префіксальним рядом, вживається для непрямого наказу третій особі й у підрядних реченнях мети.",
            "en": {
              "text": "The jussive (\"let him...\", \"may...\") is formed with a special prefix set, used for indirect commands to the third person and in purpose clauses."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ይምጣ።",
                "Хай він прийде."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እግዚአብሔር ይባርክህ።",
                "Хай Бог тебе благословить."
              ],
              [
                "እንድትሳካላት እንመኝላታለን።",
                "Ми бажаємо, щоб їй пощастило."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-past",
        "title": "Заперечення минулого часу — B1",
        "titleEn": "Negative Past Tense — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "У минулому часі той самий циркумфікс አል-...-ም додається до дещо іншої (заперечної) основи дієслова, ніж стверджувальний минулий час.",
            "en": {
              "text": "In the past tense, the same circumfix አል-...-ም is added to a slightly different (negative) verb stem than the affirmative past."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ጻፈ (він написав)",
                "አልጻፈም (він не написав)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "አልመጣችም።",
                "Вона не прийшла."
              ],
              [
                "እኛ አልበላንም።",
                "Ми не їли."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-future",
        "title": "Заперечення майбутнього часу — B1",
        "titleEn": "Negative Future Tense — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечний майбутній час знову використовує циркумфікс, цього разу додаючи -ም до форми, що відповідає теперішньо-звичному часу.",
            "en": {
              "text": "The negative future again uses the circumfix, this time adding -ም to a form matching the present-habitual."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ይመጣል (він прийде)",
                "አይመጣም (він не прийде)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ነገ አልመጣም።",
                "Завтра я не прийду."
              ],
              [
                "ዝናብ አይዘንብም።",
                "Дощу не буде."
              ]
            ]
          }
        ]
      },
      {
        "id": "converb-gerund-chaining",
        "title": "Конверб (дієприслівник) для зв'язку речень — B1",
        "titleEn": "Converb Chaining Across Clauses — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість численних сполучників \"і потім\", амхарська широко вживає конверб (дієприслівникову форму), щоб нанизувати кілька дій в один ланцюжок з одним головним дієсловом у кінці.",
            "en": {
              "text": "Instead of many \"and then\" conjunctions, Amharic widely uses the converb (a gerund-like form) to string several actions into one chain with a single main verb at the end."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ተነስቶ በላ።",
                "Він встав і поїв (буквально: вставши, поїв)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ውሃ ጠጥታ ወጣች።",
                "Вона випила води і вийшла."
              ],
              [
                "መጽሐፉን አንብቦ ተኛ።",
                "Він прочитав книгу і ліг спати."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-suffix-on-verb",
        "title": "Об'єктний суфікс на дієслові — B1",
        "titleEn": "Object Suffix Attached to the Verb — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий додаток-займенник часто приєднується прямо до дієслова як суфікс, замінюючи окреме слово.",
            "en": {
              "text": "A pronoun direct object is often attached directly to the verb as a suffix, replacing a separate word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "አየሁት።",
                "Я побачив його (-ት = його)."
              ],
              [
                "ወደድኳት።",
                "Я полюбив її (-ኋት = її)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ጠራችኝ።",
                "Вона покликала мене."
              ],
              [
                "ላክንላችሁ።",
                "Ми надіслали вам."
              ]
            ]
          }
        ]
      },
      {
        "id": "compound-verb-constructions",
        "title": "Складені дієслова (іменник + አለ/አደረገ) — B1",
        "titleEn": "Compound Verbs (Noun + Alä/Adärrägä) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато понять виражаються складеною конструкцією \"іменник/звуконаслідування + допоміжне дієслово\" (አለ — сказати/бути, አደረገ — робити), а не одним простим дієсловом.",
            "en": {
              "text": "Many concepts are expressed with a compound construction \"noun/ideophone + auxiliary verb\" (አለ — to say/be, አደረገ — to do), rather than one simple verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ፈገግ አለ",
                "він усміхнувся (буквально: усмішка сказав)"
              ],
              [
                "ጥሩ አደረገ",
                "він зробив добре"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እማማ ፈገግ አለች።",
                "Мама усміхнулася."
              ],
              [
                "ጥሩ ስራ አደረግክ።",
                "Ти зробив гарну роботу."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб (ብ- якщо) — B1",
        "titleEn": "Conditional Mood (Bə- If) — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення \"якщо\" утворюється префіксом ብ-, доданим до дієслова умовної частини, без окремого слова \"якщо\".",
            "en": {
              "text": "A conditional \"if\" clause is formed with the prefix ብ-, added to the verb of the condition, with no separate word for \"if\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ብትመጣ ደስ ይለኛል።",
                "Якщо ти прийдеш, я зрадію."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ብታጠናም አታልፍም።",
                "Навіть якщо ти вчитимешся, не складеш."
              ],
              [
                "ገንዘብ ቢኖረኝ እጓዛለሁ።",
                "Якби в мене були гроші, я б подорожував."
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
        "id": "genitive-ye-construction",
        "title": "Родовий префікс የ- (\"чийсь\") — A2",
        "titleEn": "Genitive Prefix Yə- (\"Of\") — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий префікс የ-, що вводить підрядне речення, вживається й окремо перед іменником-власником для вираження належності (\"чийсь\").",
            "en": {
              "text": "The same prefix የ- that introduces a relative clause is also used on its own before a possessor noun to express possession (\"someone's\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "የመምህሩ መጽሐፍ",
                "книга вчителя"
              ],
              [
                "የእናቴ ቤት",
                "дім моєї мами"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ይህ የልጁ ኳስ ነው።",
                "Це м'яч хлопчика."
              ],
              [
                "የኢትዮጵያ ዋና ከተማ አዲስ አበባ ናት።",
                "Столиця Ефіопії — Аддис-Абеба."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-large",
        "title": "Великі числа (сотні/тисячі) — A2",
        "titleEn": "Large Numbers (Hundreds/Thousands) — A2",
        "emoji": "💯",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "መቶ",
                "сто"
              ],
              [
                "ሺህ",
                "тисяча"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መቶ ብር ስጠኝ።",
                "Дай мені сто бир."
              ],
              [
                "አንድ ሺህ ሰዎች መጡ።",
                "Прийшла тисяча людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "root-pattern-morphology",
        "title": "Трибуквений корінь (як в арабській/івриті) — B1",
        "titleEn": "Triconsonantal Roots (Like Arabic/Hebrew) — B1",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Амхарська, як і арабська та іврит, будує слова на основі трибуквеного (частіше 3-приголосного) кореня, а різні голосні \"шаблони\" навколо нього дають різні, але споріднені значення.",
            "en": {
              "text": "Amharic, like Arabic and Hebrew, builds words from a three-consonant root, with different vowel \"patterns\" around it producing different but related meanings."
            }
          },
          {
            "type": "table",
            "title": "Приклад кореня ስ-ብ-ር (\"ламати\")",
            "rows": [
              [
                "ሰበረ",
                "він зламав"
              ],
              [
                "ይሰብራል",
                "він ламає"
              ],
              [
                "ስብር",
                "поламаний/уламок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ብርጭቆውን ሰበረ።",
                "Він розбив склянку."
              ],
              [
                "መስታወቱ ተሰበረ።",
                "Дзеркало розбилося."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-suffix",
        "title": "Означений артикль-суфікс (-u/-wa) — A2",
        "titleEn": "Definite Article Suffix (-U/-Wa) — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність виражається не окремим словом, а суфіксом, доданим до кінця іменника (-u для чоловічого/загального, -wa/-itua для жіночого) — подібно до скандинавських мов.",
            "en": {
              "text": "Definiteness is expressed not with a separate word but with a suffix attached to the end of the noun (-u for masculine/general, -wa/-itua for feminine) — similar to the Scandinavian languages."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ቤት (дім)",
                "ቤቱ",
                "цей дім / дім (означ.)"
              ],
              [
                "ልጅ (дитина)",
                "ልጇ",
                "ця дитина (жін.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ቤቱ ትልቅ ነው።",
                "Дім великий."
              ],
              [
                "መጽሐፉ የእኔ ነው።",
                "Книга моя."
              ]
            ]
          }
        ]
      },
      {
        "id": "accusative-marker-n",
        "title": "Знахідний маркер -ን — A2",
        "titleEn": "Accusative Marker -N — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Означений прямий додаток позначається суфіксом -ን, доданим до кінця іменника (часто після означеного артикля).",
            "en": {
              "text": "A definite direct object is marked with the suffix -ን, added to the end of the noun (often after the definite article)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "መጽሐፉን አነበብኩ።",
                "Я прочитав (ту) книгу."
              ],
              [
                "በሩን ከፈተ።",
                "Він відчинив двері."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ልጁን አየሁት።",
                "Я побачив хлопчика."
              ],
              [
                "ማርያምን ጠራት።",
                "Він покликав Мар'ям."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-suffix-och",
        "title": "Множина -ኦች — A1",
        "titleEn": "Plural Suffix -Och — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -ኦች (-očč), доданим до основи іменника; для людей часто вживають ще й -ዎች.",
            "en": {
              "text": "The plural is formed with the suffix -ኦች (-očč) added to the noun stem; for people, -ዎች is often used instead."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ቤት (дім)",
                "ቤቶች",
                "доми"
              ],
              [
                "ልጅ (дитина)",
                "ልጆች",
                "діти"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ቤቶቹ ትልቅ ናቸው።",
                "Доми великі."
              ],
              [
                "ልጆች ይጫወታሉ።",
                "Діти граються."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-agreement-gender",
        "title": "Узгодження прикметника за родом — A2",
        "titleEn": "Adjective Gender Agreement — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником за родом (для людей і деяких тварин), часто отримуючи суфікс -ት у жіночому роді.",
            "en": {
              "text": "Adjectives agree with the noun in gender (for people and some animals), often taking the suffix -ት in the feminine."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ትልቅ ልጅ",
                "великий хлопчик"
              ],
              [
                "ትልቅ ልጅ (жін. ትልቅ→ትልቅ, без зміни для більшості прикметників)",
                "велика дівчинка"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ቆንጆ ልጅ ናት።",
                "Вона гарна дівчинка."
              ],
              [
                "ደግ ሰው ነው።",
                "Він добра людина."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-suffixes",
        "title": "Присвійні суфікси — A2",
        "titleEn": "Possessive Suffixes — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Належність часто виражається коротким суфіксом, доданим прямо до іменника (-ዬ мій, -ህ твій чол., -ሽ твоя жін.), а не окремим словом.",
            "en": {
              "text": "Possession is often expressed with a short suffix attached directly to the noun (-ዬ my, -ህ your masc., -ሽ your fem.), rather than a separate word."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ቤት (дім)",
                "ቤቴ",
                "мій дім"
              ],
              [
                "መጽሐፍ (книга)",
                "መጽሐፍህ",
                "твоя книга (чол.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ቤቴ ትንሽ ነው።",
                "Мій дім маленький."
              ],
              [
                "እናትሽ የት ናት?",
                "Де твоя мама?"
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (ይህ/ይቺ) — A1",
        "titleEn": "Demonstratives (Yəh/Yəchi) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ይህ መጽሐፍ",
                "ця книга (чол.)"
              ],
              [
                "ይቺ ልጅ",
                "ця дівчинка (жін.)"
              ],
              [
                "እነዚህ",
                "ці (мн.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ይህ የእኔ ነው።",
                "Це моє."
              ],
              [
                "እነዚያ ልጆች ጓደኞቼ ናቸው።",
                "Ті діти — мої друзі."
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-clause-ye-prefix",
        "title": "Відносний префікс የ- — B1",
        "titleEn": "Relative Prefix Yə- — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне означальне речення утворюється префіксом የ-, доданим прямо до дієслова, а не окремим займенником \"який/що\".",
            "en": {
              "text": "A relative clause is formed with the prefix የ-, added directly to the verb, rather than a separate word for \"who/which/that\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "የመጣው ሰው",
                "людина, яка прийшла"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "የማነበው መጽሐፍ ጥሩ ነው።",
                "Книга, яку я читаю, гарна."
              ],
              [
                "የምትወደው ፊልም ምንድን ነው?",
                "Який фільм, що ти любиш?"
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
                "ማን",
                "хто"
              ],
              [
                "ምን",
                "що"
              ],
              [
                "የት",
                "де"
              ],
              [
                "መቼ",
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
                "ስምህ ማን ነው?",
                "Як тебе звати?"
              ],
              [
                "የት ትኖራለህ?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-pronoun-ras",
        "title": "Зворотний займенник \"ራስ\" — B1",
        "titleEn": "Reflexive Pronoun \"Ras\" (Self) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе/самого\" виражається словом ራስ (\"голова/сам\") із присвійним суфіксом.",
            "en": {
              "text": "The reflexive meaning \"self\" is expressed with the word ራስ (\"head/self\") plus a possessive suffix."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ራሴ",
                "я сам"
              ],
              [
                "ራሱ",
                "він сам"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ራሴን በመስታወት አየሁ።",
                "Я побачив себе в дзеркалі."
              ],
              [
                "ራሱን ወቀሰ።",
                "Він звинуватив себе."
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
                "አንድ",
                "1"
              ],
              [
                "ሁለት",
                "2"
              ],
              [
                "ሶስት",
                "3"
              ],
              [
                "አስር",
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
                "ሁለት እህቶች አሉኝ።",
                "У мене дві сестри."
              ],
              [
                "አስር ሰዎች መጡ።",
                "Прийшло десять людей."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-agreement",
        "title": "Іменник після числівника (без множини) — A2",
        "titleEn": "Noun After a Numeral (No Plural) — A2",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник зазвичай залишається в однині, а не переходить у множину — риса, спільна з багатьма мовами Африки й Азії.",
            "en": {
              "text": "After a numeral the noun usually stays singular, rather than switching to the plural — a feature shared with many African and Asian languages."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ሁለት ልጅ",
                "двоє дітей (буквально: два дитина)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ሶስት መጽሐፍ ገዛሁ።",
                "Я купив три книги."
              ],
              [
                "አምስት ቀን ቀረ።",
                "Лишилось п'ять днів."
              ]
            ]
          }
        ]
      },
      {
        "id": "postpositions-overview",
        "title": "Післяйменники (ላይ/ውስጥ/ጋር) — A2",
        "titleEn": "Postpositions (Lay/Wəst/Gar) — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові відношення часто виражаються післяйменниками, що стоять після іменника: ላይ (на), ውስጥ (в), ጋር (з).",
            "en": {
              "text": "Spatial relations are often expressed with postpositions placed after the noun: ላይ (on), ውስጥ (in), ጋር (with)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ጠረጴዛው ላይ",
                "на столі"
              ],
              [
                "ቤቱ ውስጥ",
                "у домі"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መጽሐፉ ጠረጴዛው ላይ ነው።",
                "Книга на столі."
              ],
              [
                "ከጓደኛዬ ጋር ነኝ።",
                "Я з другом."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV — A1",
        "titleEn": "SOV Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), дієслово завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb (SOV), with the verb always at the end of the sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "እኔ መጽሐፍ አነባለሁ።",
                "Я читаю книгу (буквально: я книгу читаю)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እናቴ ምግብ ታበስላለች።",
                "Моя мама готує їжу."
              ],
              [
                "ተማሪዎቹ ትምህርት ቤት ይሄዳሉ።",
                "Учні йдуть до школи."
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
                "እና",
                "і, та"
              ],
              [
                "ግን",
                "але"
              ],
              [
                "ወይም",
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
                "እኔና አንተ ጓደኛሞች ነን።",
                "Я і ти — друзі."
              ],
              [
                "መሄድ እፈልጋለሁ ግን ጊዜ የለኝም።",
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
                "ስለዚህ",
                "тому"
              ],
              [
                "ምክንያቱም",
                "тому що"
              ],
              [
                "ሲ-/ስ- (префікс)",
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
                "ደስተኛ ነኝ ምክንያቱም መጣህ።",
                "Я радий, тому що ти прийшов."
              ],
              [
                "ስመጣ አየሁህ።",
                "Коли я прийшов, я побачив тебе."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-verbs",
        "title": "Модальні слова (አለበት/ይችላል) — A2",
        "titleEn": "Modal Words (Аläbbät/Yəchlal) — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "መሄድ አለብኝ።",
                "Мені треба йти."
              ],
              [
                "መዋኘት እችላለሁ።",
                "Я вмію плавати."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ማጥናት አለብህ።",
                "Тобі треба вчитися."
              ],
              [
                "መርዳት እፈልጋለሁ።",
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
                "ብዙ",
                "багато"
              ],
              [
                "ትንሽ",
                "мало"
              ],
              [
                "ጥቂት",
                "декілька"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ብዙ መጽሐፍት አለኝ።",
                "У мене багато книг."
              ],
              [
                "ትንሽ ውሃ ስጠኝ።",
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
                "ሰኞ",
                "понеділок"
              ],
              [
                "ቅዳሜ",
                "субота"
              ],
              [
                "እሁድ",
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
                "ዛሬ ሰኞ ነው።",
                "Сьогодні понеділок."
              ],
              [
                "እሁድ አርፋለሁ።",
                "У неділю я відпочиваю."
              ]
            ]
          }
        ]
      },
      {
        "id": "months-ethiopian-calendar",
        "title": "Місяці ефіопського календаря — B1",
        "titleEn": "Months of the Ethiopian Calendar — B1",
        "emoji": "🗓️",
        "sections": [
          {
            "type": "intro",
            "text": "Ефіопія офіційно використовує власний календар із 13 місяцями (12 по 30 днів + короткий 13-й), що відстає від григоріанського на 7-8 років.",
            "en": {
              "text": "Ethiopia officially uses its own calendar with 13 months (12 of 30 days plus a short 13th), running 7-8 years behind the Gregorian calendar."
            }
          },
          {
            "type": "table",
            "title": "Приклади місяців",
            "rows": [
              [
                "መስከረም",
                "перший місяць (вересень)"
              ],
              [
                "ጳጉሜ",
                "тринадцятий, короткий місяць (5-6 днів)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "አዲስ ዓመት በመስከረም ይጀምራል።",
                "Новий рік починається в місяці мескерем."
              ],
              [
                "ጳጉሜ አጭር ወር ናት።",
                "Паґуме — короткий місяць."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Ефіопська система часу — B1",
        "titleEn": "The Ethiopian Time System — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Ефіопський відлік годин починається зі сходу сонця (приблизно 6 ранку за міжнародним часом), тому \"перша година\" за ефіопським часом — це 7 ранку.",
            "en": {
              "text": "The Ethiopian hour count starts at sunrise (roughly 6am international time), so \"hour one\" in Ethiopian time is 7am."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ሰዓቱ ስንት ነው?",
                "Котра година?"
              ],
              [
                "ሁለት ሰዓት ነው። (= 8 ранку)",
                "Друга година (ефіопська)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "በሶስት ሰዓት እንገናኝ።",
                "Зустрінемось о третій годині (ефіопській, = 9 ранку)."
              ],
              [
                "አሁን ስድስት ሰዓት ነው።",
                "Зараз шоста година (ефіопська, = полудень)."
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
                "ሰላም",
                "Привіт"
              ],
              [
                "አመሰግናለሁ",
                "Дякую"
              ],
              [
                "ደህና ሁን",
                "До побачення (до чол.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እንዴት ነህ?",
                "Як ти? (до чол.)"
              ],
              [
                "በጣም አመሰግናለሁ።",
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
                "ፀሐይ ወጥቷል።",
                "Сонячно."
              ],
              [
                "ዝናብ እየዘነበ ነው።",
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
                "ዛሬ ቀዝቃዛ ነው።",
                "Сьогодні холодно."
              ],
              [
                "በጣም ሞቃት ነው።",
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
                "ልቤ ደረሰ",
                "я заспокоївся (буквально: серце дійшло)"
              ],
              [
                "ራስ ምታት",
                "головний біль (і буквально, і про проблему)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ደረስክ ስል ልቤ ደረሰ።",
                "Коли ти прибув, я заспокоївся."
              ],
              [
                "ይህ ችግር ራስ ምታት ሆኖብኛል።",
                "Ця проблема стала для мене головним болем."
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
                "በፍጥነት",
                "швидко"
              ],
              [
                "በቀስታ",
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
                "በፍጥነት ሮጠ።",
                "Він швидко побіг."
              ],
              [
                "በቀስታ ተናገር።",
                "Говори повільніше."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-derivation",
        "title": "Похідні дієслівні форми — B1",
        "titleEn": "Derived Verb Forms — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Від одного кореня можна утворити цілу низку слів (дієслово, іменник, прикметник, іменник-діяч) шляхом зміни голосного \"шаблону\" довкола приголосних кореня.",
            "en": {
              "text": "A whole family of words (verb, noun, adjective, agent noun) can be built from one root by changing the vowel \"pattern\" around the root's consonants."
            }
          },
          {
            "type": "table",
            "title": "Приклади від кореня ም-ህ-ር",
            "rows": [
              [
                "ተማረ",
                "він навчився"
              ],
              [
                "መምህር",
                "вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መምህሩ ጥሩ ነው።",
                "Вчитель хороший."
              ],
              [
                "ትምህርት ቤት ሄደ።",
                "Він пішов до школи."
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
                "እጅ (рука) + ስራ (робота)",
                "እጅ ስራ (ручна робота)"
              ],
              [
                "ትምህርት (навчання) + ቤት (дім)",
                "ትምህርት ቤት (школа)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ትምህርት ቤት ትልቅ ነው።",
                "Школа велика."
              ],
              [
                "እጅ ስራ እወዳለሁ።",
                "Мені подобається рукоділля."
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
                "በጋ",
                "суха/спекотна пора"
              ],
              [
                "ክረምት",
                "сезон дощів"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ክረምት ዝናብ ይዘንባል።",
                "У сезон дощів іде дощ."
              ],
              [
                "በጋ ፀሐያማ ነው።",
                "У суху пору сонячно."
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
                "ስንት ነው?",
                "Скільки коштує?"
              ],
              [
                "አንድ ሺህ ብር ነው።",
                "Тисяча бир."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ይህ መጽሐፍ ሁለት መቶ ብር ነው።",
                "Ця книга коштує двісті бир."
              ],
              [
                "በጣም ውድ ነው።",
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
                "እኔ አስባለሁ...",
                "Я думаю, що..."
              ],
              [
                "በእኔ አስተያየት...",
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
                "ትክክል ነህ ብዬ አስባለሁ።",
                "Я думаю, що ти правий."
              ],
              [
                "በእኔ አስተያየት ጥሩ ሀሳብ ነው።",
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
                "ዛሬ / ነገ / ትናንት",
                "сьогодні / завтра / вчора"
              ],
              [
                "አሁን / በኋላ",
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
                "ነገ እንገናኝ።",
                "Побачимось завтра."
              ],
              [
                "አሁን ስራ ላይ ነኝ።",
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
                "አንድ ሰው",
                "хтось"
              ],
              [
                "አንድ ነገር",
                "щось"
              ],
              [
                "ማንም",
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
                "አንድ ሰው ደወለልኝ።",
                "Хтось мені подзвонив."
              ],
              [
                "አንድ ነገር ሰማሁ።",
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
                "እንዴ!",
                "Ой!"
              ],
              [
                "በጣም ጥሩ!",
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
                "እንዴ፣ በጣም ቆንጆ ነው!",
                "Ой, як гарно!"
              ],
              [
                "በጣም ጥሩ ዜና ነው!",
                "Чудова новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-construction",
        "title": "Конструкція \"є\" (አለ) — A2",
        "titleEn": "Existential \"There Is\" (Аllä) — A2",
        "emoji": "📦",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось виражається дієсловом አለ (є, існує), яке узгоджується з підметом, як звичайне дієслово.",
            "en": {
              "text": "The existence of something is expressed with the verb አለ (there is), which agrees with the subject like a regular verb."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ውሃ አለ።",
                "Є вода."
              ],
              [
                "ጊዜ የለም።",
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
                "እዚህ ብዙ ሰዎች አሉ።",
                "Тут багато людей."
              ],
              [
                "እዚህ ሱቅ የለም።",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "negative-existential",
        "title": "Заперечна екзистенційна форма (የለም) — A2",
        "titleEn": "Negative Existential (Yälläm) — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення \"немає\" — це не звичайна циркумфіксна форма аля, а окреме, нерегулярне слово የለም.",
            "en": {
              "text": "The negation \"there isn't\" is not the regular circumfix form of аlä, but a separate, irregular word የለም."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ገንዘብ የለኝም።",
                "У мене немає грошей."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እዚህ ማንም የለም።",
                "Тут нікого немає."
              ],
              [
                "ችግር የለም።",
                "Немає проблем."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми — B1",
        "titleEn": "Diminutives — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "intro",
            "text": "Пестливість часто виражається зменшувальним словом ትንሽ (маленький) перед іменником або жіночими зменшувальними суфіксами.",
            "en": {
              "text": "Affection is often expressed with the diminutive word ትንሽ (small) before the noun, or with feminine diminutive suffixes."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ትንሽ ልጅ",
                "малятко"
              ],
              [
                "እማዬ",
                "матусю"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ትንሽ ልጅ ይተኛል።",
                "Малятко спить."
              ],
              [
                "እማዬ፣ ና እዚህ!",
                "Матусю, іди сюди!"
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
                "አቶ",
                "пан"
              ],
              [
                "ወይዘሮ",
                "пані (заміжня)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ሰላም አቶ ተስፋዬ።",
                "Вітаю, пане Тесфає."
              ],
              [
                "ወይዘሮ፣ ይቅርታ።",
                "Пані, вибачте."
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
                "ብልህ ከሰው ተምሮ ሞኝ ራሱን ያስተምራል።",
                "Розумний вчиться в інших, а дурень навчає лише себе."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ብዙ እጅ ቀላል ስራ ያደርገዋል።",
                "Багато рук роблять роботу легкою (гуртом легше)."
              ],
              [
                "ውሃ ሲወስድ አሳ ይታያል።",
                "Коли вода спадає, видно рибу (все таємне стає явним)."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-geez-arabic-italian",
        "title": "Запозичення з ге'ез, арабської та італійської — B1",
        "titleEn": "Loanwords from Ge'ez, Arabic & Italian — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Церковна й формальна лексика запозичена з класичної ге'ез (мови Ефіопської церкви), релігійна — частково з арабської, а деякі побутові слова — з італійської (доба окупації 1936-1941).",
            "en": {
              "text": "Church and formal vocabulary is borrowed from classical Ge'ez (the language of the Ethiopian church), religious vocabulary partly from Arabic, and some everyday words from Italian (the 1936-1941 occupation era)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "መኪና (з італ. \"macchina\")",
                "машина"
              ],
              [
                "ፓስታ (з італ. \"pasta\")",
                "паста"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መኪናዬ አዲስ ነው።",
                "Моя машина нова."
              ],
              [
                "ፓስታ እበላለሁ።",
                "Я їм пасту."
              ]
            ]
          }
        ]
      },
      {
        "id": "formal-informal-address",
        "title": "Ввічлива множина замість однини — A2",
        "titleEn": "Polite Plural for Singular Address — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Для ввічливого звертання до однієї поважної людини вживають форму множини (እርስዎ замість አንተ/አንቺ), і дієслово теж узгоджується як з множиною.",
            "en": {
              "text": "For polite address to one respected person, the plural form is used (እርስዎ instead of አንተ/አንቺ), and the verb agrees as if with a plural too."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "እርስዎ እንዴት ነዎት?",
                "Як Ви? (ввічливо)"
              ],
              [
                "አንተ እንዴት ነህ?",
                "Як ти? (неформ., чол.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እርስዎ ከየት ነዎት?",
                "Звідки Ви?"
              ],
              [
                "እባክዎ ይቀመጡ።",
                "Будь ласка, сідайте (ввічливо)."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-derivation-passive-reflexive",
        "title": "Пасивно-зворотний стан (ተ- префікс) — B2",
        "titleEn": "Passive-Reflexive Voice (Tä- Prefix) — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс ተ-, доданий до основи дієслова, утворює пасивний або зворотний стан — одна форма покриває обидва значення залежно від контексту.",
            "en": {
              "text": "The prefix ተ-, added to the verb stem, forms the passive or reflexive voice — one form covers both meanings depending on context."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ሰበረ (він зламав)",
                "ተሰበረ",
                "воно зламалося"
              ],
              [
                "ታጠበ",
                "він помився"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መስታወቱ ተሰበረ።",
                "Дзеркало розбилося."
              ],
              [
                "ልጁ ታጠበ።",
                "Хлопчик помився."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-derivation-causative",
        "title": "Каузативний стан (አ-/አስ- префікс) — B2",
        "titleEn": "Causative Voice (A-/As- Prefix) — B2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний стан (\"змусити зробити\") утворюється префіксом አ- або አስ- перед основою дієслова.",
            "en": {
              "text": "The causative voice (\"to make someone do\") is formed with the prefix አ- or አስ- before the verb stem."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "በላ (він з'їв)",
                "አበላ",
                "він нагодував (змусив їсти)"
              ],
              [
                "ተማረ (він навчився)",
                "አስተማረ",
                "він навчив (когось)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "እናቱ ልጁን አበላችው።",
                "Мама нагодувала дитину."
              ],
              [
                "መምህሩ ተማሪዎችን አስተማረ።",
                "Вчитель навчив учнів."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-derivation-frequentative",
        "title": "Фреквентатив (редуплікація кореня) — B2",
        "titleEn": "Frequentative (Root Reduplication) — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення частини кореня утворює фреквентативну форму дієслова, що виражає повторювану чи розсіяну дію.",
            "en": {
              "text": "Repeating part of the root forms the frequentative verb form, expressing a repeated or scattered action."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ቆረጠ (він відрізав)",
                "ቆራረጠ",
                "він порізав на шматки (повторно)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ወረቀቱን ቆራረጠው።",
                "Він порізав папір на шматочки."
              ],
              [
                "ልጆቹ ተመላለሱ።",
                "Діти ходили туди-сюди."
              ]
            ]
          }
        ]
      },
      {
        "id": "topic-marker-particle",
        "title": "Топікова частка -ማ — B1",
        "titleEn": "Topic Particle -Ma — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -ማ, додана до слова, виносить його як тему речення чи протиставлення — \"а от щодо...\".",
            "en": {
              "text": "The particle -ማ, added to a word, marks it as the sentence's topic or a contrast — \"as for...\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "እኔማ አላውቅም።",
                "А от я — не знаю."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "አንተማ ምን ትላለህ?",
                "А ти що скажеш?"
              ],
              [
                "ዛሬማ ስራ የለም።",
                "А сьогодні — роботи немає."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-comparative",
        "title": "Порівняння через \"ከ...በላይ\" — A2",
        "titleEn": "Comparison via \"Kä...Bälay\" — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Амхарська не має синтетичного вищого ступеня — порівняння виражається конструкцією ከ (від) ... በላይ/ይበልጣል (більше/переважає).",
            "en": {
              "text": "Amharic has no synthetic comparative — comparison is expressed with the construction ከ (from) ... በላይ/ይበልጣል (more/exceeds)."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ከእሱ ይበልጣል።",
                "Він більший за нього."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ይህ ቤት ካንተ ቤት ይበልጣል።",
                "Цей дім більший за твій."
              ],
              [
                "ከሁሉም በላይ ብልህ ናት።",
                "Вона розумніша за всіх."
              ]
            ]
          }
        ]
      },
      {
        "id": "clause-chaining-gerund-deep",
        "title": "Ланцюжки конвербів у складних реченнях — B2",
        "titleEn": "Long Converb Chains in Complex Sentences — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У розповіді може нанизуватись кілька конвербів підряд, кожен з яких описує окрему дію, і лише останнє дієслово в реченні несе повну часову форму.",
            "en": {
              "text": "In a narrative, several converbs can be strung in a row, each describing a separate action, with only the final verb in the sentence carrying a full tense form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ተነስቶ ታጥቦ በልቶ ሄደ።",
                "Він встав, помився, поїв і пішов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "መጽሐፉን ወስዳ አነበበች።",
                "Вона взяла книгу і прочитала."
              ],
              [
                "ልብሱን ለብሶ ወጣ።",
                "Він одягнувся і вийшов."
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
                "አንደኛ",
                "перший"
              ],
              [
                "ሁለተኛ",
                "другий"
              ],
              [
                "ሶስተኛ",
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
                "ይህ የመጀመሪያ መጽሐፌ ነው።",
                "Це моя перша книга."
              ],
              [
                "ሁለተኛ ደረጃ ወሰደች።",
                "Вона зайняла друге місце."
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
        "id": "geez-script-syllabary",
        "title": "Абетка ге'ез (складове письмо) — B1",
        "titleEn": "The Ge'ez Script (Syllabary) — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Амхарська записується не алфавітом, а складовим письмом ге'ез (\"фідел\") — понад 230 знаків, кожен з яких позначає приголосний + голосний одночасно, а не окремі приголосний і голосний.",
            "en": {
              "text": "Amharic is written not with an alphabet but with the Ge'ez syllabary (\"fidel\") — over 230 symbols, each representing a consonant + vowel combination at once, not separate consonant and vowel letters."
            }
          },
          {
            "type": "table",
            "title": "Приклад ряду \"ל\" (l)",
            "rows": [
              [
                "ለ",
                "lə"
              ],
              [
                "ሉ",
                "lu"
              ],
              [
                "ሊ",
                "li"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ልጅ",
                "lij (дитина)"
              ],
              [
                "ሰላም",
                "sälam (мир/привіт)"
              ]
            ]
          }
        ]
      },
      {
        "id": "ejective-consonants",
        "title": "Ежективні (глотталізовані) приголосні — B2",
        "titleEn": "Ejective (Glottalized) Consonants — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Амхарська має ряд \"ежективних\" приголосних (ጥ ጵ ጭ ቅ ጸ), що вимовляються з різким змиканням голосової щілини — звук, якого немає в українській і потребує окремої артикуляційної практики.",
            "en": {
              "text": "Amharic has a set of \"ejective\" consonants (ጥ ጵ ጭ ቅ ጸ), pronounced with a sharp glottal closure — a sound absent from Ukrainian that requires dedicated articulation practice."
            }
          },
          {
            "type": "table",
            "title": "Приклад мінімальної пари",
            "rows": [
              [
                "ጠላ (звичайне t)",
                "ворог"
              ],
              [
                "ጣላ (ежективне tʼ)",
                "він кинув"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "ኳሱን ጣለ።",
                "Він кинув м'яч."
              ],
              [
                "ጠላቱን አላመነም።",
                "Він не довіряв ворогові."
              ]
            ]
          }
        ]
      },
      {
        "id": "ethiopian-calendar-offset",
        "title": "13-місячний ефіопський календар зі зсувом у роках — B1",
        "titleEn": "The 13-Month Ethiopian Calendar with a Year Offset — B1",
        "emoji": "📆",
        "sections": [
          {
            "type": "intro",
            "text": "Ефіопський календар не лише має 13 місяців — він відлічує роки з іншої точки, тому офіційний рік в Ефіопії на 7-8 років менший за григоріанський, а Новий рік припадає на вересень, а не січень.",
            "en": {
              "text": "The Ethiopian calendar doesn't just have 13 months — it counts years from a different reference point, so the official year in Ethiopia runs 7-8 years behind the Gregorian one, and New Year falls in September, not January."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "2026 (григ.)",
                "2018-2019 (ефіоп.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "አዲስ ዓመት በመስከረም ይከበራል።",
                "Новий рік святкують у вересні."
              ],
              [
                "ኢትዮጵያ የራሷ ዘመን አቆጣጠር አላት።",
                "Ефіопія має власний спосіб відліку років."
              ]
            ]
          }
        ]
      }
    ]
  }
];
