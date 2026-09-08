// Vymova — data/grammar-data/grammar_eu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_EU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izenordain pertsonalak — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Баскська — мовний ізолят, не споріднений із жодною іншою мовою світу, тому її займенники не схожі на сусідні романські мови.",
            "en": {
              "text": "Basque is a language isolate, unrelated to any other language in the world, so its pronouns don't resemble those of neighboring Romance languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ni"
              ],
              [
                "ти",
                "zu"
              ],
              [
                "він / вона / воно",
                "hura"
              ],
              [
                "ми",
                "gu"
              ],
              [
                "ви",
                "zuek"
              ],
              [
                "вони",
                "haiek"
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
        "id": "verb-izan",
        "title": "Izan — дієслово \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "\"Izan\" (бути) — одне з двох базових допоміжних дієслів баскської (поряд з \"*edun\" — мати); саме допоміжні дієслова несуть узгодження з особою, а не смислове дієслово.",
            "en": {
              "text": "\"Izan\" (to be) is one of the two core auxiliary verbs of Basque (alongside \"*edun\" — to have); it's the auxiliary, not the main verb, that carries person agreement."
            }
          },
          {
            "type": "table",
            "title": "Теперішній час izan",
            "rows": [
              [
                "ni naiz",
                "я є"
              ],
              [
                "zu zara",
                "ти є"
              ],
              [
                "hura da",
                "він/вона є"
              ],
              [
                "gu gara",
                "ми є"
              ],
              [
                "zuek zarete",
                "ви є"
              ],
              [
                "haiek dira",
                "вони є"
              ]
            ],
            "en": {
              "title": "Present Tense of izan"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ni irakaslea naiz.",
                "Я вчитель."
              ],
              [
                "Hura Euskal Herrikoa da.",
                "Він/вона з Країни Басків."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Izan — the Verb \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ez — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"ez\" перед дієсловом; у складному присудку \"ez\" ставиться перед допоміжним дієсловом, яке ще й переміщується перед смисловим.",
            "en": {
              "text": "Negation is formed with the particle \"ez\" before the verb; in a compound predicate \"ez\" precedes the auxiliary, which also moves in front of the main verb."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Ni naiz.",
                "Ni ez naiz.",
                "Я є → я не є"
              ],
              [
                "Etorri da.",
                "Ez da etorri.",
                "Він прийшов → він не прийшов"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez naiz nekatuta.",
                "Я не втомлений."
              ],
              [
                "Ez du euskaraz hitz egiten.",
                "Він/вона не розмовляє баскською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ez — A1"
      },
      {
        "id": "questions",
        "title": "Питальні речення — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Загальні питання часто позначають часткою \"al\" перед допоміжним дієсловом (у південних діалектах); спеціальні питання використовують питальні слова, які завжди стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Yes/no questions are often marked with the particle \"al\" before the auxiliary (in southern dialects); wh-questions use question words, which always sit right before the verb."
            }
          },
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "nor",
                "хто"
              ],
              [
                "zer",
                "що"
              ],
              [
                "non",
                "де"
              ],
              [
                "noiz",
                "коли"
              ],
              [
                "zergatik",
                "чому"
              ],
              [
                "nola",
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
                "Euskalduna al zara?",
                "Ти баск(-иня)?"
              ],
              [
                "Non bizi zara?",
                "Де ти живеш?"
              ],
              [
                "Zergatik negar egiten duzu?",
                "Чому ти плачеш?"
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
        "id": "ergative-absolutive",
        "title": "Ергативна конструкція — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса баскської: ергативно-абсолютивна побудова речення. Підмет неперехідного дієслова й прямий додаток перехідного стоять в абсолютиві (без закінчення), а підмет перехідного дієслова отримує ергативний суфікс -k.",
            "en": {
              "text": "Basque's most defining trait: ergative-absolutive alignment. The subject of an intransitive verb and the direct object of a transitive verb both stand in the unmarked absolutive, while the subject of a transitive verb takes the ergative suffix -k."
            }
          },
          {
            "type": "table",
            "title": "Абсолютив vs ергатив",
            "rows": [
              [
                "Gizona etorri da.",
                "Чоловік прийшов. (абсолютив — неперех.)"
              ],
              [
                "Gizonak liburua irakurri du.",
                "Чоловік прочитав книгу. (ергатив gizonak + абсолютив liburua)"
              ]
            ],
            "en": {
              "title": "Absolutive vs Ergative"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umea jolasten da.",
                "Дитина грається."
              ],
              [
                "Umeak pilota jaurti du.",
                "Дитина кинула м'яч."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ergative-Absolutive Alignment — A2"
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
        "id": "present-edun",
        "title": "Теперішній час *edun (перехідні дієслова) — A2",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Перехідні дієслова вживають допоміжне \"*edun\" (мати), яке узгоджується одразу з підметом (ергатив) і прямим додатком (абсолютив).",
            "en": {
              "text": "Transitive verbs use the auxiliary \"*edun\" (to have), which agrees simultaneously with the subject (ergative) and the direct object (absolutive)."
            }
          },
          {
            "type": "table",
            "title": "*edun з додатком од. 3 ос.",
            "rows": [
              [
                "nik dut",
                "я маю/роблю"
              ],
              [
                "zuk duzu",
                "ти маєш/робиш"
              ],
              [
                "hark du",
                "він/вона має/робить"
              ]
            ],
            "en": {
              "title": "*edun with a 3rd-person singular object"
            }
          }
        ],
        "titleEn": "Present Tense of *edun (Transitive) — A2"
      },
      {
        "id": "past-izan",
        "title": "Минулий час izan — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час izan (неперехідні дієслова) утворюється власною відмінюваною формою nintzen, zinen, zen тощо.",
            "en": {
              "text": "The past tense of izan (intransitive verbs) has its own conjugated forms: nintzen, zinen, zen, and so on."
            }
          },
          {
            "type": "table",
            "title": "izan — lehenaldia",
            "rows": [
              [
                "ni nintzen",
                "я був(ла)"
              ],
              [
                "zu zinen",
                "ти був(ла)"
              ],
              [
                "hura zen",
                "він/вона був(ла)"
              ]
            ],
            "en": {
              "title": "izan — Simple Past"
            }
          }
        ],
        "titleEn": "Past Tense of izan — A2"
      },
      {
        "id": "past-edun",
        "title": "Минулий час *edun — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час *edun (nuen, zenuen, zuen...) також узгоджується з підметом і додатком одночасно.",
            "en": {
              "text": "The past tense of *edun (nuen, zenuen, zuen...) also agrees with both subject and object at once."
            }
          },
          {
            "type": "table",
            "title": "*edun — lehenaldia",
            "rows": [
              [
                "nik nuen",
                "я мав(ла)"
              ],
              [
                "zuk zenuen",
                "ти мав(ла)"
              ],
              [
                "hark zuen",
                "він/вона мав(ла)"
              ]
            ],
            "en": {
              "title": "*edun — Simple Past"
            }
          }
        ],
        "titleEn": "Past Tense of *edun — A2"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час (-ko/-en) — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутнє утворюється суфіксом -ko (або -en після приголосного) на дієприкметнику + допоміжне дієслово в теперішньому часі.",
            "en": {
              "text": "The future is formed with the suffix -ko (or -en after a consonant) on the participle + the auxiliary in the present tense."
            }
          },
          {
            "type": "formula",
            "title": "Дієприкметник + ko + допоміжне",
            "rows": [
              [
                "etorri",
                "etorriko naiz",
                "прийти → я прийду"
              ],
              [
                "ikusi",
                "ikusiko dut",
                "побачити → я побачу"
              ]
            ]
          }
        ],
        "titleEn": "Future Tense (-ko/-en) — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб виражається спеціальними формами допоміжного дієслова (nintzateke, litzateke...) разом з умовним сполучником \"balitz\" (якби).",
            "en": {
              "text": "The conditional is expressed with special auxiliary forms (nintzateke, litzateke...) together with the conditional conjunction \"balitz\" (if it were)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Denbora banu, etorriko nintzateke.",
                "Якби я мав час, я б прийшов."
              ],
              [
                "Hori litzateke onena.",
                "Це було б найкраще."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Наказовий спосіб — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має власні форми допоміжного дієслова (hadi, zaitez, zaitezte); заперечний наказ — окрема конструкція з \"ez + subjunctive\".",
            "en": {
              "text": "The imperative has its own auxiliary forms (hadi, zaitez, zaitezte); the negative imperative is a separate construction with \"ez + subjunctive\"."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб izan",
            "rows": [
              [
                "Zaitez isilik!",
                "Мовчи! (ввічл. одн.)"
              ],
              [
                "Ez zaitez joan!",
                "Не йди!"
              ]
            ],
            "en": {
              "title": "Imperative of izan"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "perfect-tense",
        "title": "Перфект — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект = дієприкметник минулого часу (на -tu/-i/-n) + допоміжне дієслово в теперішньому часі. Дія, наслідок якої відчутний зараз.",
            "en": {
              "text": "The perfect = the past participle (ending -tu/-i/-n) + the auxiliary in the present tense. An action whose result is relevant now."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Liburua irakurri dut.",
                "Я прочитав книгу."
              ],
              [
                "Etorri da.",
                "Він/вона прийшов(ла)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — A2"
      },
      {
        "id": "pluperfect-tense",
        "title": "Плюсквамперфект — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект = дієприкметник минулого часу + допоміжне дієслово в минулому часі (nuen, zen).",
            "en": {
              "text": "The pluperfect = the past participle + the auxiliary in the past tense (nuen, zen)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Liburua irakurria nuen.",
                "Я вже прочитав книгу (до того моменту)."
              ],
              [
                "Ordurako alde egina zen.",
                "На той час він уже пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B1"
      },
      {
        "id": "potential-mood",
        "title": "Потенційний спосіб (-ke) — B1",
        "emoji": "🎲",
        "sections": [
          {
            "type": "intro",
            "text": "Потенційний спосіб (\"могти\") виражається суфіксом -ke на допоміжному дієслові, окремо від дієслова \"ahal\" (спроможність).",
            "en": {
              "text": "The potential mood (\"can/may\") is expressed with the suffix -ke on the auxiliary, distinct from the verb \"ahal\" (ability)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Etor liteke.",
                "Він/вона може прийти."
              ],
              [
                "Euria egin dezake.",
                "Може піти дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential Mood (-ke) — B1"
      },
      {
        "id": "habitual-ohi",
        "title": "Звичний час (ohi) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Частка \"ohi\" перед допоміжним дієсловом позначає звичну, повторювану дію — окрема від простого теперішнього часу видова конструкція.",
            "en": {
              "text": "The particle \"ohi\" before the auxiliary marks a habitual, repeated action — a separate aspectual construction from the simple present."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Goizean kafea hartu ohi dut.",
                "Я зазвичай п'ю каву вранці."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect (ohi) — B1"
      },
      {
        "id": "polypersonal-agreement",
        "title": "Поліперсональне узгодження — B2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжне дієслово може узгоджуватися одночасно з підметом, прямим і непрямим додатком (до трьох осіб в одній дієслівній формі) — рідкісна риса серед мов Європи.",
            "en": {
              "text": "The auxiliary can agree simultaneously with the subject, direct object, and indirect object (up to three persons in a single verb form) — a rare trait among European languages."
            }
          },
          {
            "type": "table",
            "title": "diot — три особи в одній формі",
            "rows": [
              [
                "nik dizut",
                "я даю тобі (nik=я, -zu-=тобі)"
              ],
              [
                "nik diot",
                "я даю йому (nik=я, -o-=йому)"
              ]
            ],
            "en": {
              "title": "diot — Three Persons in One Form"
            }
          }
        ],
        "titleEn": "Polypersonal Agreement — B2"
      },
      {
        "id": "allocutive-forms",
        "title": "Аллокутивні форми (hika) — C1",
        "emoji": "🎙️",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса баскської: у фамільярному регістрі (hika) дієслово змінюється залежно від статі співрозмовника, навіть якщо той не є граматичним аргументом речення.",
            "en": {
              "text": "A unique Basque feature: in the familiar register (hika) the verb changes according to the addressee's gender, even when the addressee is not a grammatical argument of the sentence."
            }
          },
          {
            "type": "table",
            "title": "hika: до чоловіка / до жінки",
            "rows": [
              [
                "Etorri duk.",
                "Etorri dun.",
                "Він прийшов. (сказано чоловікові / сказано жінці)"
              ]
            ]
          }
        ],
        "titleEn": "Allocutive Forms (hika) — C1"
      },
      {
        "id": "verbal-noun",
        "title": "Віддієслівний іменник (-tze) — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tze/-te перетворює дієслово на іменник дії, який далі відмінюється як звичайний іменник — базова форма для герундія та багатьох підрядних конструкцій.",
            "en": {
              "text": "The suffix -tze/-te turns a verb into an action noun, which then declines like a normal noun — the base form for the gerund and many subordinate constructions."
            }
          },
          {
            "type": "table",
            "title": "irakurri → irakurtze",
            "rows": [
              [
                "irakurri (читати) → irakurtze",
                "читання"
              ],
              [
                "irakurtzen ari naiz",
                "я (зараз) читаю (буквально: у читанні)"
              ]
            ],
            "en": {
              "title": "irakurri → irakurtze"
            }
          }
        ],
        "titleEn": "The Verbal Noun (-tze) — B1"
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
        "id": "indeterminate-noun",
        "title": "Бездетермінантна форма іменника — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Крім означеної (-a) і неозначеної (bat, \"один\"), є третя, \"нульова\" бездетермінантна форма іменника — без артикля й без числа, що вживається після заперечення, у запитаннях про кількість і в застиглих виразах.",
            "en": {
              "text": "Besides the definite (-a) and indefinite (bat, \"a/one\") forms, there's a third, \"zero\" indeterminate noun form — without article or number — used after negation, in quantity questions, and in fixed expressions."
            }
          },
          {
            "type": "table",
            "title": "etxe vs etxea vs etxe bat",
            "rows": [
              [
                "etxe (бездетерм.)",
                "Ez dut etxerik.",
                "У мене немає дому. (бездетерм. + -rik)"
              ],
              [
                "etxea (означ.)",
                "Etxea polita da.",
                "Дім гарний. (конкретний)"
              ]
            ]
          }
        ],
        "titleEn": "The Indeterminate Noun Form — B1"
      },
      {
        "id": "definite-article-suffix",
        "title": "Означений артикль-суфікс -a — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від європейських мов, означений артикль у баскській — не окреме слово, а суфікс -a, приєднаний в кінці останнього слова іменникової групи.",
            "en": {
              "text": "Unlike European languages, the definite article in Basque is not a separate word but the suffix -a attached to the end of the last word of the noun phrase."
            }
          },
          {
            "type": "table",
            "title": "etxe → etxea",
            "rows": [
              [
                "etxe (дім, безартикльово)",
                "дім"
              ],
              [
                "etxea (дім + -a)",
                "цей/той дім"
              ]
            ],
            "en": {
              "title": "etxe → etxea"
            }
          }
        ],
        "titleEn": "The Suffixal Definite Article -a — A1"
      },
      {
        "id": "case-genitive",
        "title": "Родовий відмінок -en/-ren — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок присвійності (-en після приголосного, -ren після голосного) ставиться перед означуваним іменником, а не після нього.",
            "en": {
              "text": "The possessive genitive (-en after a consonant, -ren after a vowel) precedes the noun it modifies, not follows it."
            }
          },
          {
            "type": "table",
            "title": "gizon → gizonaren",
            "rows": [
              [
                "gizonaren etxea",
                "дім чоловіка"
              ],
              [
                "Anaren liburua",
                "книга Ани"
              ]
            ],
            "en": {
              "title": "gizon → gizonaren"
            }
          }
        ],
        "titleEn": "Genitive Case -en/-ren — A2"
      },
      {
        "id": "case-dative",
        "title": "Давальний відмінок -i — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Давальний відмінок (-i) позначає непрямий додаток — кому/чому адресована дія.",
            "en": {
              "text": "The dative case (-i) marks the indirect object — to/for whom the action is directed."
            }
          },
          {
            "type": "table",
            "title": "Amaiari eman dio",
            "rows": [
              [
                "Amaiari liburua eman diot.",
                "Я дав Амаї книгу."
              ]
            ],
            "en": {
              "title": "Amaiari eman dio"
            }
          }
        ],
        "titleEn": "Dative Case -i — A2"
      },
      {
        "id": "case-instrumental",
        "title": "Інструменталіс -z — B1",
        "emoji": "🔨",
        "sections": [
          {
            "type": "intro",
            "text": "Інструментальний відмінок (-z) позначає засіб дії або тему розмови (\"про щось\").",
            "en": {
              "text": "The instrumental case (-z) marks the means of an action, or the topic of conversation (\"about something\")."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Arkatzez idatzi dut.",
                "Я написав олівцем."
              ],
              [
                "Zutaz hitz egin dugu.",
                "Ми говорили про тебе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrumental Case -z — B1"
      },
      {
        "id": "case-comitative",
        "title": "Комітатив -ekin — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Комітативний відмінок (-ekin) виражає \"разом з\", замінюючи прийменник.",
            "en": {
              "text": "The comitative case (-ekin) expresses \"together with\", replacing a preposition."
            }
          },
          {
            "type": "table",
            "title": "lagunekin",
            "rows": [
              [
                "lagunekin joan naiz.",
                "Я пішов з другом."
              ]
            ],
            "en": {
              "title": "lagunekin"
            }
          }
        ],
        "titleEn": "Comitative Case -ekin — A2"
      },
      {
        "id": "case-benefactive",
        "title": "Бенефактив -entzat — B1",
        "emoji": "🎀",
        "sections": [
          {
            "type": "intro",
            "text": "Бенефактивний відмінок (-entzat/-tzat) виражає \"для кого/для чого\", на відміну від давального, що позначає адресата дії.",
            "en": {
              "text": "The benefactive case (-entzat/-tzat) expresses \"for whom/for what\", distinct from the dative which marks the recipient of the action."
            }
          },
          {
            "type": "table",
            "title": "zuretzat",
            "rows": [
              [
                "Hau zuretzat da.",
                "Це для тебе."
              ]
            ],
            "en": {
              "title": "zuretzat"
            }
          }
        ],
        "titleEn": "Benefactive Case -entzat — B1"
      },
      {
        "id": "case-inessive",
        "title": "Інессив -n (\"в/на\") — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Локативний відмінок -n позначає перебування в місці або часі — \"де/коли\".",
            "en": {
              "text": "The locative case -n marks being in a place or time — \"where/when\"."
            }
          },
          {
            "type": "table",
            "title": "etxean",
            "rows": [
              [
                "Etxean nago.",
                "Я вдома."
              ],
              [
                "Udan joango gara.",
                "Ми поїдемо влітку."
              ]
            ],
            "en": {
              "title": "etxean"
            }
          }
        ],
        "titleEn": "Inessive Case -n (\"in/at\") — A2"
      },
      {
        "id": "case-adlative",
        "title": "Адлатив -ra (\"до\") — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Адлативний відмінок -ra позначає рух до місця.",
            "en": {
              "text": "The adlative case -ra marks motion towards a place."
            }
          },
          {
            "type": "table",
            "title": "etxera",
            "rows": [
              [
                "Etxera noa.",
                "Я йду додому."
              ]
            ],
            "en": {
              "title": "etxera"
            }
          }
        ],
        "titleEn": "Adlative Case -ra (\"to\") — A2"
      },
      {
        "id": "case-ablative",
        "title": "Аблатив -tik (\"з\") — A2",
        "emoji": "⬅️",
        "sections": [
          {
            "type": "intro",
            "text": "Аблативний відмінок -tik позначає рух від/із місця.",
            "en": {
              "text": "The ablative case -tik marks motion away from/out of a place."
            }
          },
          {
            "type": "table",
            "title": "etxetik",
            "rows": [
              [
                "Etxetik nator.",
                "Я йду з дому."
              ]
            ],
            "en": {
              "title": "etxetik"
            }
          }
        ],
        "titleEn": "Ablative Case -tik (\"from\") — A2"
      },
      {
        "id": "case-destinative",
        "title": "Дестинатив -tzat — B1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Дестинативний відмінок -tzat виражає \"вважати кимось/чимось\" або \"призначений як\".",
            "en": {
              "text": "The destinative case -tzat expresses \"to consider as\" or \"intended as\"."
            }
          },
          {
            "type": "table",
            "title": "adiskidetzat",
            "rows": [
              [
                "Adiskidetzat hartu dut.",
                "Я вважаю його другом."
              ]
            ],
            "en": {
              "title": "adiskidetzat"
            }
          }
        ],
        "titleEn": "Destinative Case -tzat — B1"
      },
      {
        "id": "plural-marking",
        "title": "Множина: -ak / -ek — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Означена множина абсолютива утворюється -ak, а множина ергатива — -ek; невизначена (бездетермінантна) форма іменника взагалі не має закінчення множини.",
            "en": {
              "text": "The definite absolutive plural is formed with -ak, and the ergative plural with -ek; the indeterminate (bare) form of the noun has no plural marking at all."
            }
          },
          {
            "type": "formula",
            "title": "Одн. → множ.",
            "rows": [
              [
                "etxea (дім, абс.)",
                "etxeak (доми, абс. мн.)",
                "означ. одн. → означ. мн."
              ],
              [
                "gizonak (чоловік, ерг.)",
                "gizonek (чоловіки, ерг. мн.)",
                "ергатив одн. → ергатив мн."
              ]
            ]
          }
        ],
        "titleEn": "Plural Marking: -ak / -ek — A2"
      },
      {
        "id": "postpositions",
        "title": "Післяйменники — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Баскська, як і естонська, послідовно використовує післяйменники, а не прийменники: вони йдуть після іменника в родовому відмінку.",
            "en": {
              "text": "Basque, like Estonian, consistently uses postpositions rather than prepositions: they follow the noun in the genitive."
            }
          },
          {
            "type": "table",
            "title": "Поширені післяйменники",
            "rows": [
              [
                "mahaiaren gainean",
                "на столі (букв. \"стола поверх-на\")"
              ],
              [
                "etxearen atzean",
                "за домом"
              ]
            ],
            "en": {
              "title": "Common Postpositions"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "adjective-placement",
        "title": "Позиція прикметника після іменника — A1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості європейських мов, прикметник у баскській стоїть ПІСЛЯ іменника, і саме прикметник, а не іменник, отримує суфікс-артикль.",
            "en": {
              "text": "Unlike most European languages, the adjective in Basque stands AFTER the noun, and it is the adjective, not the noun, that carries the suffixal article."
            }
          },
          {
            "type": "table",
            "title": "etxe zuria",
            "rows": [
              [
                "etxe zuria",
                "білий дім (букв. \"дім білий-той\")"
              ],
              [
                "gizon altua",
                "високий чоловік"
              ]
            ],
            "en": {
              "title": "etxe zuria"
            }
          }
        ],
        "titleEn": "Adjective after the Noun — A1"
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -ago, найвищий — -en, обидва додаються до основи прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -ago, the superlative with -en, both added to the adjective stem."
            }
          },
          {
            "type": "table",
            "title": "handi → handiago → handien",
            "rows": [
              [
                "handi (великий)",
                "handiago (більший)",
                "handien (найбільший)"
              ]
            ]
          }
        ],
        "titleEn": "Comparative and Superlative — A2"
      },
      {
        "id": "vicesimal-numbers",
        "title": "Двадцяткова система чисел — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Як і французька частково, баскська рахує великими числами на основі 20 (hogei), а не 10: 40 = \"два двадцятки\", 60 = \"три двадцятки\".",
            "en": {
              "text": "Like French partially does, Basque counts large numbers on a base of 20 (hogei), not 10: 40 = \"two twenties\", 60 = \"three twenties\"."
            }
          },
          {
            "type": "table",
            "title": "hogei-система",
            "rows": [
              [
                "hogei (20)",
                "20"
              ],
              [
                "berrogei (2×20=40)",
                "40"
              ],
              [
                "hirurogei (3×20=60)",
                "60"
              ]
            ],
            "en": {
              "title": "The hogei (20) System"
            }
          }
        ],
        "titleEn": "The Vigesimal Number System — B1"
      },
      {
        "id": "word-order-sov",
        "title": "Порядок слів SOV і фокус — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — підмет-додаток-присудок (SOV), але елемент, що стоїть безпосередньо перед дієсловом, отримує логічний наголос (фокус).",
            "en": {
              "text": "The basic order is subject-object-verb (SOV), but the element placed directly before the verb receives the logical focus."
            }
          },
          {
            "type": "table",
            "title": "Нейтральний vs фокусований порядок",
            "rows": [
              [
                "Nik liburua irakurri dut.",
                "Я прочитав книгу. (нейтрально)"
              ],
              [
                "Nik LIBURUA irakurri dut.",
                "Я прочитав саме КНИГУ. (фокус на додатку)"
              ]
            ],
            "en": {
              "title": "Neutral vs Focused Order"
            }
          }
        ],
        "titleEn": "SOV Word Order and Focus — A2"
      },
      {
        "id": "relative-clauses",
        "title": "Відносні речення без займенника — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "У баскській немає окремого відносного займенника \"який\": підрядне речення ставиться перед іменником і закінчується суфіксом -en на дієслові.",
            "en": {
              "text": "Basque has no separate relative pronoun \"which\": the subordinate clause precedes the noun and ends with the suffix -en on the verb."
            }
          },
          {
            "type": "table",
            "title": "irakurri dudan liburua",
            "rows": [
              [
                "irakurri dudan liburua",
                "книга, яку я прочитав (букв. \"я-прочитав-ту книга\")"
              ]
            ]
          }
        ],
        "titleEn": "Relative Clauses without a Pronoun — B2"
      },
      {
        "id": "complementizer-ela",
        "title": "Сполучник -ela (\"що\") — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -ela, доданий до дієслова, вводить підрядне з'ясувальне речення (\"що\"), відповідник англійського \"that\".",
            "en": {
              "text": "The suffix -ela, attached to the verb, introduces a subordinate declarative clause (\"that\"), corresponding to English \"that\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Uste dut etorriko dela.",
                "Я думаю, що він прийде."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Complementizer -ela (\"that\") — B1"
      },
      {
        "id": "reflexive-buru",
        "title": "Зворотність через \"buru\" (голова) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "У баскській немає окремого зворотного займенника: зворотність виражають словом \"buru\" (голова) з присвійним суфіксом — буквально \"свою голову\".",
            "en": {
              "text": "Basque has no separate reflexive pronoun: reflexivity is expressed with the word \"buru\" (head) plus a possessive suffix — literally \"one's own head\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bere burua ikusi du ispiluan.",
                "Він побачив себе в дзеркалі (букв. \"свою голову\")."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via \"buru\" (head) — B1"
      },
      {
        "id": "reciprocal-elkar",
        "title": "Взаємність через \"elkar\" — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємну дію (\"один одного\") виражають словом \"elkar\", яке відмінюється як звичайний іменник.",
            "en": {
              "text": "Reciprocal action (\"each other\") is expressed with the word \"elkar\", which declines like a regular noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elkar ikusi dute.",
                "Вони побачили одне одного."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocity via \"elkar\" — B1"
      },
      {
        "id": "possessive-pronouns",
        "title": "Присвійні займенники — A1",
        "emoji": "👐",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники — це родовий відмінок особових займенників, узгоджений з тими самими правилами, що й будь-який родовий -en.",
            "en": {
              "text": "Possessive pronouns are simply the genitive case of the personal pronouns, following the same -en rules as any genitive."
            }
          },
          {
            "type": "table",
            "title": "nire, zure, bere",
            "rows": [
              [
                "nire etxea",
                "мій дім"
              ],
              [
                "zure liburua",
                "твоя книга"
              ],
              [
                "bere autoa",
                "його/її авто"
              ]
            ],
            "en": {
              "title": "nire, zure, bere"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "demonstratives-three-way",
        "title": "Три ступені вказівності — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості (як в іспанській): hau (близько), hori (середньо, біля співрозмовника), hura (далеко).",
            "en": {
              "text": "Demonstratives have three degrees of distance (as in Spanish): hau (near speaker), hori (near listener), hura (far from both)."
            }
          },
          {
            "type": "table",
            "title": "hau / hori / hura",
            "rows": [
              [
                "hau (це, близько)",
                "цей/ця/це"
              ],
              [
                "hori (те, біля тебе)",
                "той/та/те"
              ],
              [
                "hura (те, далеко)",
                "он той/та/те"
              ]
            ],
            "en": {
              "title": "hau / hori / hura"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — A2"
      },
      {
        "id": "interrogative-declension",
        "title": "Відмінювання питальних займенників — B1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні займенники nor (хто) і zer (що) відмінюються за тими самими відмінками, що й іменники: nork (ерг.), nori (дав.), noren (родов.).",
            "en": {
              "text": "The interrogative pronouns nor (who) and zer (what) decline through the same cases as nouns: nork (erg.), nori (dat.), noren (gen.)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nork egin du?",
                "Хто це зробив? (ергатив)"
              ],
              [
                "Noren liburua da?",
                "Чия це книга?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension of Interrogative Pronouns — B1"
      },
      {
        "id": "negative-polarity",
        "title": "Слова заперечної полярності — B1",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "Слова на кшталт \"inor\" (хтось/ніхто), \"ezer\" (щось/нічого) змінюють значення залежно від присутності \"ez\": лише в запереченні вони набувають значення \"ніхто/нічого\".",
            "en": {
              "text": "Words like \"inor\" (anyone/no one), \"ezer\" (anything/nothing) shift meaning depending on the presence of \"ez\": only under negation do they mean \"no one/nothing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Inor ez da etorri.",
                "Ніхто не прийшов."
              ],
              [
                "Norbait etorri al da?",
                "Хтось прийшов?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Polarity Items — B1"
      },
      {
        "id": "ergative-agreement-shift",
        "title": "Ергативність у складних дієсловах — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Складені дієслова з допоміжним *edun (напр. \"lan egin\" — працювати, букв. \"роботу робити\") поводяться перехідно й вимагають ергативного підмета, навіть якщо на перший погляд здаються неперехідними англійськими еквівалентами.",
            "en": {
              "text": "Compound verbs with the auxiliary *edun (e.g. \"lan egin\" — to work, literally \"to do work\") behave transitively and require an ergative subject, even though their English equivalents look intransitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nik lan egiten dut.",
                "Я працюю. (ерг. nik, хоча \"працювати\" в укр. неперех.)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ergativity in Compound Verbs — B2"
      },
      {
        "id": "nahi-izan",
        "title": "\"Nahi izan\" — хотіти — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "\"Хотіти\" виражається конструкцією \"nahi izan\" (буквально \"мати бажання\") + основна форма дієслова, а не окремим модальним дієсловом.",
            "en": {
              "text": "\"To want\" is expressed with the construction \"nahi izan\" (literally \"to have a wish\") + the base verb form, not a separate modal verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jan nahi dut.",
                "Я хочу їсти."
              ],
              [
                "Etxera joan nahi du.",
                "Він хоче йти додому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "\"Nahi izan\" — to Want — A2"
      },
      {
        "id": "behar-izan",
        "title": "\"Behar izan\" — потрібно/мусити — A2",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Обов'язок виражається конструкцією \"behar izan\" (буквально \"мати потребу\") + основна форма дієслова.",
            "en": {
              "text": "Obligation is expressed with the construction \"behar izan\" (literally \"to have need\") + the base verb form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lan egin behar dut.",
                "Мені треба працювати."
              ],
              [
                "Joan behar duzu.",
                "Тобі треба йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "\"Behar izan\" — Must/Need — A2"
      },
      {
        "id": "suffix-tasun",
        "title": "Суфікс -tasun (абстрактні іменники) — B1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tasun перетворює прикметник на абстрактний іменник якості, подібно до українського \"-ість\".",
            "en": {
              "text": "The suffix -tasun turns an adjective into an abstract noun of quality, similar to English \"-ness\"."
            }
          },
          {
            "type": "table",
            "title": "eder → edertasun",
            "rows": [
              [
                "eder (красивий) → edertasun",
                "краса"
              ],
              [
                "libre (вільний) → libretasun",
                "свобода"
              ]
            ],
            "en": {
              "title": "eder → edertasun"
            }
          }
        ],
        "titleEn": "The Suffix -tasun (Abstract Nouns) — B1"
      },
      {
        "id": "suffix-le",
        "title": "Суфікс -le (виконавець дії) — B1",
        "emoji": "👷",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -le, доданий до основи дієслова, утворює іменник-виконавця дії, подібно до українського \"-ач/-ник\".",
            "en": {
              "text": "The suffix -le, added to the verb stem, forms an agent noun, similar to English \"-er\"."
            }
          },
          {
            "type": "table",
            "title": "irakatsi → irakasle",
            "rows": [
              [
                "irakatsi (навчати) → irakasle",
                "вчитель"
              ],
              [
                "idatzi (писати) → idazle",
                "письменник"
              ]
            ],
            "en": {
              "title": "irakatsi → irakasle"
            }
          }
        ],
        "titleEn": "The Agent Suffix -le — B1"
      },
      {
        "id": "diminutive-txo",
        "title": "Демінутив -txo/-tto — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -txo (або -tto після сонорних) додає відтінок ніжності чи малого розміру.",
            "en": {
              "text": "The diminutive suffix -txo (or -tto after sonorants) adds a nuance of tenderness or smallness."
            }
          },
          {
            "type": "table",
            "title": "etxe → etxetxo",
            "rows": [
              [
                "etxe (дім) → etxetxo",
                "будиночок"
              ],
              [
                "katu (кіт) → katutxo",
                "котик"
              ]
            ],
            "en": {
              "title": "etxe → etxetxo"
            }
          }
        ],
        "titleEn": "The Diminutive Suffix -txo/-tto — B1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто утворюються поєднанням двох іменників без сполучного голосного, другий елемент несе основне значення.",
            "en": {
              "text": "Compound words often join two nouns with no linking vowel; the second element carries the core meaning."
            }
          },
          {
            "type": "table",
            "title": "eguzki + lore",
            "rows": [
              [
                "eguzki (сонце) + lore (квітка) = eguzki-lore",
                "соняшник"
              ],
              [
                "ordu (година) + tegi (місце) = ordutegi",
                "розклад"
              ]
            ],
            "en": {
              "title": "eguzki + lore"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "telling-time",
        "title": "Називання часу — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Час запитують \"Zer ordu da?\", а хвилини рахують до/після повної години специфічною конструкцією.",
            "en": {
              "text": "Time is asked with \"Zer ordu da?\" and minutes are counted before/after the hour with a specific construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Hirurak dira.",
                "Зараз третя година."
              ],
              [
                "Bostetan elkartuko gara.",
                "Ми зустрінемось о п'ятій."
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
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Назви днів тижня в баскській не походять від латинських назв планет, як у більшості європейських мов, а мають власну автохтонну етимологію.",
            "en": {
              "text": "The names of the days of the week in Basque don't derive from Latin planet names as in most European languages, but have their own indigenous etymology."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "astelehen",
                "понеділок"
              ],
              [
                "asteazken",
                "середа"
              ],
              [
                "ostiral",
                "п'ятниця"
              ],
              [
                "igande",
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
        "id": "colors",
        "title": "Кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кольори — звичайні прикметники, тому стоять після іменника й можуть отримувати артикль.",
            "en": {
              "text": "Colors are ordinary adjectives, so they follow the noun and can take the article."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "zuri",
                "білий"
              ],
              [
                "beltz",
                "чорний"
              ],
              [
                "gorri",
                "червоний"
              ],
              [
                "urdin",
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
            "text": "Родинні терміни відмінюються родовим суфіксом як звичайні іменники, присвійність передається так само, як і скрізь.",
            "en": {
              "text": "Kinship terms decline with the genitive suffix like ordinary nouns; possession works the same way as elsewhere."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "ama",
                "мати"
              ],
              [
                "aita",
                "батько"
              ],
              [
                "arreba",
                "сестра (брата)"
              ],
              [
                "anaia",
                "брат (брата)"
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
            "text": "Привітання часто відрізняються від романських мов, оскільки не мають спільного кореня з жодною сусідньою мовою.",
            "en": {
              "text": "Greetings often look completely different from Romance-language ones, since Basque shares no root with any neighboring language."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Kaixo!",
                "Привіт!"
              ],
              [
                "Egun on!",
                "Доброго ранку!"
              ],
              [
                "Agur!",
                "Прощавай!"
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
        "id": "postposition-gabe",
        "title": "Післяйменник gabe (\"без\") — A2",
        "emoji": "🚷",
        "sections": [
          {
            "type": "intro",
            "text": "\"Gabe\" (без) — післяйменник, що керує бездетермінантною формою іменника без окремого відмінкового закінчення.",
            "en": {
              "text": "\"Gabe\" (without) is a postposition governing the indeterminate noun form with no separate case ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Diru gabe nago.",
                "Я без грошей."
              ],
              [
                "Kafea gabe ezin dut bizi.",
                "Я не можу жити без кави."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Postposition gabe (\"without\") — A2"
      },
      {
        "id": "adverbs-formation",
        "title": "Утворення прислівників — A2",
        "emoji": "🎈",
        "sections": [
          {
            "type": "intro",
            "text": "Багато прислівників способу дії утворюються суфіксом -ki, доданим до прикметника.",
            "en": {
              "text": "Many manner adverbs are formed with the suffix -ki added to the adjective."
            }
          },
          {
            "type": "table",
            "title": "azkar → azkarki",
            "rows": [
              [
                "azkar (швидкий) → azkarki / azkar",
                "швидко"
              ],
              [
                "ongi",
                "добре"
              ]
            ],
            "en": {
              "title": "azkar → azkarki"
            }
          }
        ],
        "titleEn": "Forming Adverbs — A2"
      },
      {
        "id": "zu-vs-hi",
        "title": "Zu та hi — рівні звертання — B1",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Zu\" — нейтральне звертання (історично ввічливе), \"hi\" — дуже фамільярне звертання, що вимагає аллокутивного узгодження дієслова за статтю співрозмовника.",
            "en": {
              "text": "\"Zu\" is the neutral (historically polite) form of address, \"hi\" is very familiar and requires allocutive verb agreement matching the addressee's gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Zu nora zoaz?",
                "Куди ти йдеш? (нейтрально)"
              ],
              [
                "Hi nora hoa?",
                "Куди ти йдеш? (дуже фамільярно, hika)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Zu and hi — Address Levels — B1"
      },
      {
        "id": "temporal-clause-nean",
        "title": "Часове підрядне -nean (\"коли\") — B1",
        "emoji": "⏰",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -nean, доданий до дієслова в означеній формі, вводить часове підрядне речення \"коли\".",
            "en": {
              "text": "The suffix -nean, added to the definite verb form, introduces a temporal clause \"when\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Etxera iristean, telefonoa jo zuen.",
                "Коли він прийшов додому, задзвонив телефон."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Temporal Clause -nean (\"when\") — B1"
      },
      {
        "id": "causal-clause-lako",
        "title": "Причинове підрядне -lako (\"тому що\") — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -lako, доданий до дієслова, вводить причинове підрядне речення \"тому що\".",
            "en": {
              "text": "The suffix -lako, added to the verb, introduces a causal clause \"because\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Berandu iritsi naiz, autobusa galdu dudalako.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause -lako (\"because\") — B1"
      },
      {
        "id": "purpose-clause-tzeko",
        "title": "Цільове підрядне -tzeko (\"щоб\") — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tzeko, доданий до дієслівного іменника, вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "The suffix -tzeko, added to the verbal noun, introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Euskara ikasi dut lan egiteko.",
                "Я вивчив баскську, щоб працювати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause -tzeko (\"in order to\") — B1"
      },
      {
        "id": "conditional-clause-ba",
        "title": "Умовне підрядне ba- (\"якщо\") — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний префікс \"ba-\" додається безпосередньо до допоміжного дієслова на початку умовного речення, без окремого слова \"якщо\".",
            "en": {
              "text": "The conditional prefix \"ba-\" is attached directly to the auxiliary at the start of the conditional clause, with no separate word for \"if\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Euria bada, ez naiz aterako.",
                "Якщо йде дощ, я не вийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause ba- (\"if\") — B1"
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від граматичної структури речення.",
            "en": {
              "text": "Interjections express an emotional reaction independent of the sentence's grammatical structure."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "A zer nolakoa!",
                "Оце так!"
              ],
              [
                "Ai ene!",
                "Ой леле!"
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
            "text": "Запозичення з іспанської та французької адаптуються до баскської фонології та легко приймають відмінкові суфікси.",
            "en": {
              "text": "Loanwords from Spanish and French are adapted to Basque phonology and readily take case suffixes."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "telefono",
                "телефон"
              ],
              [
                "auto",
                "авто"
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
            "text": "Баскські ідіоми часто спираються на сільське життя гір і не мають прямого відповідника в інших мовах.",
            "en": {
              "text": "Basque idioms often draw on rural mountain life and have no direct equivalent in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ez du bi hitzik behar.",
                "Він не потребує двох слів (розуміє з півслова)."
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
        "id": "batua-vs-dialects",
        "title": "Euskara Batua vs діалекти — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Через гірську ізоляцію баскська мала кілька дуже різних діалектів; \"Euskara Batua\" (\"об'єднана баскська\") — стандартизована форма, створена 1968 р. для освіти й медіа.",
            "en": {
              "text": "Due to mountain isolation, Basque had several very different dialects; \"Euskara Batua\" (\"Unified Basque\") is the standardized form created in 1968 for education and media."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Diákuzu (bizk.) vs duzu (batua)",
                "форма \"маєш\" відрізняється між діалектом і стандартом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Euskara Batua vs Dialects — B2"
      },
      {
        "id": "borrowed-numbers-euro",
        "title": "Європейська числівникова термінологія — A2",
        "emoji": "💶",
        "sections": [
          {
            "type": "intro",
            "text": "Попри двадцяткову базову систему, баскська зберігає окремі власні слова для десятків 70/90 у нестандартному вигляді, різному в діалектах.",
            "en": {
              "text": "Despite the base-20 system, Basque retains its own distinct words for 70/90 in a non-standard form that varies across dialects."
            }
          },
          {
            "type": "table",
            "title": "70 / 90",
            "rows": [
              [
                "hirurogeita hamar (60+10)",
                "сімдесят"
              ],
              [
                "laurogeita hamar (80+10)",
                "дев'яносто"
              ]
            ],
            "en": {
              "title": "70 / 90"
            }
          }
        ],
        "titleEn": "Basque Tens above 60 — A2"
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
        "id": "synthetic-verbs",
        "title": "Синтетичні дієслова — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Лише близько десяти дієслів (izan, *edun, egon, ibili, etorri, joan, eduki, jakin, esan) можуть відмінюватись самостійно, без допоміжного дієслова; решта завжди потребує допоміжного izan/*edun.",
            "en": {
              "text": "Only about ten verbs (izan, *edun, egon, ibili, etorri, joan, eduki, jakin, esan) can conjugate on their own without an auxiliary; every other verb always needs the auxiliary izan/*edun."
            }
          },
          {
            "type": "table",
            "title": "Синтетичне vs аналітичне дієслово",
            "rows": [
              [
                "dakit (я знаю, синтетично)",
                "jakin — саме дієслово несе особу"
              ],
              [
                "irakurtzen dut (я читаю, аналітично)",
                "irakurri + допоміжне dut"
              ]
            ]
          }
        ],
        "titleEn": "Synthetic Verbs — B2"
      },
      {
        "id": "dialectal-verb-variation",
        "title": "Діалектні варіанти дієслівних форм — C1",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Форми допоміжного дієслова сильно варіюються між діалектами (bizkaiera, gipuzkera, lapurtera...); стандарт Batua обрав одну форму з багатьох, тому розмовна мова часто відхиляється від підручника.",
            "en": {
              "text": "Auxiliary verb forms vary strongly across dialects (bizkaiera, gipuzkera, lapurtera...); the Batua standard picked one form out of many, so spoken language often diverges from the textbook."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dot (bizk.) vs dut (batua)",
                "\"я маю\" — форма відрізняється діалектом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialectal Verb Form Variation — C1"
      },
      {
        "id": "fixed-case-idioms",
        "title": "Застиглі відмінкові вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені вирази закріпили історично конкретний відмінок і не підкоряються загальним правилам вибору відмінка для сучасного мовця.",
            "en": {
              "text": "Some common expressions have historically fixed a specific case and don't follow the general case-selection rules for the modern speaker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Agur t'erdi!",
                "Дуже привіт! (букв. \"привіт і половина\" — застигла форма)"
              ],
              [
                "Ondo izan!",
                "Бувай здоровий! (застигла форма прощання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Case Idioms — B2"
      }
    ]
  }
];
