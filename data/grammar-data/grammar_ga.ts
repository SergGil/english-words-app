// Vymova — data/grammar-data/grammar_ga.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Forainmneacha Pearsanta — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській дієслово зазвичай стоїть на першому місці в реченні (порядок VSO), перед займенником-підметом.",
            "en": {
              "text": "In Irish, the verb usually comes first in the sentence (VSO word order), before the pronoun subject."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mé"
              ],
              [
                "ти",
                "tú"
              ],
              [
                "він",
                "sé"
              ],
              [
                "вона",
                "sí"
              ],
              [
                "ми",
                "muid"
              ],
              [
                "ви",
                "sibh"
              ],
              [
                "вони",
                "siad"
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
        "id": "ta-vs-is",
        "title": "Tá vs Is — два дієслова \"бути\" — A1",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській два різних дієслова \"бути\": \"tá\" для стану, місця й тимчасових ознак, і \"is\" (копула) для тотожності й класифікації — фундаментальна риса кельтських мов.",
            "en": {
              "text": "Irish has two different verbs \"to be\": \"tá\" for state, location, and temporary qualities, and \"is\" (the copula) for identity and classification — a fundamental trait of the Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "tá (стан) vs is (тотожність)",
            "rows": [
              [
                "Tá mé tuirseach.",
                "Я втомлений. (стан, tá)"
              ],
              [
                "Is múinteoir mé.",
                "Я вчитель. (тотожність, is)"
              ]
            ],
            "en": {
              "title": "tá (state) vs is (identity)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá sé anseo.",
                "Він тут."
              ],
              [
                "Is Éireannach í.",
                "Вона ірландка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tá vs Is — Two Verbs \"to Be\" — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення з ní — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою \"ní\" перед дієсловом \"tá\", яка ще й спричиняє леницію (пом'якшення) першого приголосного дієслова.",
            "en": {
              "text": "Negation is formed with the particle \"ní\" before the verb \"tá\", which also triggers lenition (softening) of the verb's first consonant."
            }
          },
          {
            "type": "formula",
            "title": "Стверджувальна форма → заперечна форма",
            "rows": [
              [
                "Tá mé anseo.",
                "Níl mé anseo.",
                "Я тут → я не тут (tá+ní = níl)"
              ],
              [
                "Is múinteoir mé.",
                "Ní múinteoir mé.",
                "Я вчитель → я не вчитель"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Níl mé tuirseach.",
                "Я не втомлений."
              ],
              [
                "Ní labhraíonn sí Gaeilge.",
                "Вона не розмовляє ірландською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation with ní — A1"
      },
      {
        "id": "questions-no-yes-no",
        "title": "Питання без слів \"так/ні\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській немає окремих слів для \"так\" і \"ні\": на загальне питання відповідають повторенням дієслова у стверджувальній або заперечній формі.",
            "en": {
              "text": "Irish has no separate words for \"yes\" and \"no\": a yes/no question is answered by repeating the verb in the affirmative or negative form."
            }
          },
          {
            "type": "table",
            "title": "Питання й відповідь",
            "rows": [
              [
                "An bhfuil tú tuirseach?",
                "Ти втомлений?"
              ],
              [
                "Tá. / Níl.",
                "Так. / Ні. (букв. \"є\" / \"немає\")"
              ]
            ],
            "en": {
              "title": "Question and Answer"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "An maith leat é? — Is maith.",
                "Тобі подобається це? — Так."
              ],
              [
                "Cad is ainm duit?",
                "Як тебе звати?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Questions without Words for \"Yes/No\" — A1"
      },
      {
        "id": "initial-mutations-intro",
        "title": "Початкові мутації: леніція й еклипсис — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Найвизначніша риса ірландської граматики: перший приголосний слова регулярно змінюється (\"мутує\") залежно від граматичного контексту — це не виняток, а системне правило, спільне для всіх кельтських мов.",
            "en": {
              "text": "The most defining trait of Irish grammar: a word's initial consonant regularly changes (\"mutates\") depending on the grammatical context — this is not an exception but a systematic rule shared by all Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "Леніція (séimhiú) й еклипсис (urú)",
            "rows": [
              [
                "cat (кіт)",
                "mo chat",
                "мій кіт (леніція: c→ch)"
              ],
              [
                "cat (кіт)",
                "ár gcat",
                "наш кіт (еклипсис: c→gc)"
              ]
            ],
            "en": {
              "title": "Lenition (séimhiú) and Eclipsis (urú)"
            }
          }
        ],
        "titleEn": "Initial Mutations: Lenition and Eclipsis — A2"
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
        "id": "present-regular",
        "title": "Теперішній час правильних дієслів — A1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово завжди стоїть першим у реченні (VSO), перед підметом; закінчення додається до основи.",
            "en": {
              "text": "The verb always stands first in the sentence (VSO), before the subject; the ending is added to the stem."
            }
          },
          {
            "type": "table",
            "title": "labhair (говорити) — теперішній час",
            "rows": [
              [
                "Labhraím Gaeilge.",
                "Я говорю ірландською."
              ],
              [
                "Labhraíonn sé Gaeilge.",
                "Він говорить ірландською."
              ]
            ],
            "en": {
              "title": "labhair (to speak) — Present Tense"
            }
          }
        ],
        "titleEn": "Present Tense of Regular Verbs — A1"
      },
      {
        "id": "habitual-present",
        "title": "Звичний теперішній час (bíonn) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса ірландської видової системи: окрема форма \"bíonn\" (від tá) виражає звичну, регулярну дію, окремо від разового теперішнього стану.",
            "en": {
              "text": "A unique feature of the Irish aspect system: a separate form \"bíonn\" (from tá) expresses a habitual, regular action, distinct from a one-time present state."
            }
          },
          {
            "type": "formula",
            "title": "Разовий стан vs звична дія",
            "rows": [
              [
                "Tá mé sa bhaile.",
                "Bím sa bhaile ar an Domhnach.",
                "Я вдома (зараз) → Я зазвичай вдома по неділях (bím)"
              ]
            ]
          }
        ],
        "titleEn": "Habitual Present Tense (bíonn) — B1"
      },
      {
        "id": "past-regular",
        "title": "Минулий час правильних дієслів — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час позначається леніцією першого приголосного дієслова (якщо це можливо), без окремого закінчення в 3-й особі однини.",
            "en": {
              "text": "The past tense is marked by lenition of the verb's first consonant (where possible), with no separate ending in the 3rd person singular."
            }
          },
          {
            "type": "table",
            "title": "labhair → labhair (мин.)",
            "rows": [
              [
                "Labhair sé Gaeilge.",
                "Він говорив ірландською. (леніція l→l, тут без зміни, приклад моделі)"
              ],
              [
                "Cheannaigh mé é.",
                "Я купив це. (c→ch леніція)"
              ]
            ],
            "en": {
              "title": "labhair → labhair (past)"
            }
          }
        ],
        "titleEn": "Past Tense of Regular Verbs — A2"
      },
      {
        "id": "habitual-past",
        "title": "Звичний минулий час (bhíodh) — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Так само, як для теперішнього, існує окрема форма для звичної дії в минулому — \"bhíodh\" (звичайно бував).",
            "en": {
              "text": "Just as for the present, there's a separate form for a habitual action in the past — \"bhíodh\" (used to be)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bhíodh sí ann gach lá.",
                "Вона зазвичай там бувала щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past Tense (bhíodh) — B1"
      },
      {
        "id": "future-tense",
        "title": "Майбутній час — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється власним закінченням (-faidh/-fidh), доданим до основи дієслова.",
            "en": {
              "text": "The future tense is formed with its own ending (-faidh/-fidh) added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Labhróidh mé leat amárach.",
                "Я поговорю з тобою завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense — A2"
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється закінченням -fadh/-eadh, і водночас спричиняє леніцію дієслова.",
            "en": {
              "text": "The conditional is formed with the ending -fadh/-eadh, and also triggers lenition of the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Labhróinn leat dá mbeadh am agam.",
                "Я поговорив би з тобою, якби мав час."
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
            "text": "Наказова форма 2 ос. одн. — гола основа дієслова; для множини додається -igí.",
            "en": {
              "text": "The 2nd person singular imperative is the bare verb stem; the plural adds -igí."
            }
          },
          {
            "type": "table",
            "title": "Наказовий спосіб",
            "rows": [
              [
                "Labhair!",
                "Говори!"
              ],
              [
                "Labhraigí!",
                "Говоріть! (мн.)"
              ]
            ],
            "en": {
              "title": "Imperative"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "dependent-independent-forms",
        "title": "Залежні й незалежні форми дієслова — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса ірландської: деякі дієслова мають дві різні форми теперішнього/минулого часу — незалежну (у стверджувальному реченні) і залежну (після часток ní/an/go), причому вони різняться нерегулярно.",
            "en": {
              "text": "A unique Irish feature: some verbs have two different present/past forms — an independent one (in affirmative statements) and a dependent one (after particles ní/an/go), and they differ irregularly."
            }
          },
          {
            "type": "table",
            "title": "Незалежна vs залежна форма",
            "rows": [
              [
                "Chonaic mé é.",
                "Bhfaca tú é?",
                "Я побачив це (незалежна) → Чи ти побачив це? (залежна після an)"
              ]
            ]
          }
        ],
        "titleEn": "Dependent and Independent Verb Forms — B2"
      },
      {
        "id": "autonomous-form",
        "title": "Автономна (безособова) форма — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого пасивного стану ірландська використовує автономну форму дієслова, яка не вказує на конкретного виконавця дії — приблизно \"когось зробили/роблять\".",
            "en": {
              "text": "Instead of a separate passive voice, Irish uses the autonomous verb form, which doesn't specify a particular doer — roughly \"someone did/does\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Osclaíodh an doras.",
                "Двері відчинили. (невідомо ким)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Autonomous (Impersonal) Form — B1"
      },
      {
        "id": "verbal-noun",
        "title": "Віддієслівний іменник замість інфінітива — B1",
        "emoji": "📛",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській немає окремого інфінітива: його роль виконує віддієслівний іменник (ainm briathartha), утворений непередбачувано для кожного дієслова.",
            "en": {
              "text": "Irish has no separate infinitive: its role is filled by the verbal noun (ainm briathartha), formed unpredictably for each verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ba mhaith liom labhairt leat.",
                "Я хотів би поговорити з тобою. (labhairt = віддієслівний ім. від labhair)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verbal Noun instead of the Infinitive — B1"
      },
      {
        "id": "recent-perfect-tar-eis",
        "title": "Недавній перфект (tar éis) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "\"Дію, яку щойно завершено\", виражають конструкцією \"tá + підмет + tar éis + віддієслівний іменник\", буквально \"бути після робити\".",
            "en": {
              "text": "\"An action just completed\" is expressed with the construction \"tá + subject + tar éis + verbal noun\", literally \"to be after doing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá mé tar éis an obair a chríochnú.",
                "Я щойно закінчив роботу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Recent Perfect (tar éis) — B1"
      },
      {
        "id": "subjunctive-fixed",
        "title": "Умовний спосіб у застиглих виразах — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Синтетичний підрядний спосіб майже зник із живої мови, але зберігся в побажаннях і благословеннях.",
            "en": {
              "text": "The synthetic subjunctive has nearly vanished from living speech, but survives in wishes and blessings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Go raibh maith agat!",
                "Дякую! (букв. \"хай буде добро в тебе\", підрядний спосіб)"
              ],
              [
                "Go dté tú slán!",
                "Щасливої дороги!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Subjunctive in Fixed Expressions — B2"
      },
      {
        "id": "copula-past-conditional",
        "title": "Копула в минулому/умовному (ba) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Копула \"is\" у минулому й умовному часі приймає окрему форму \"ba\", яка також спричиняє леніцію наступного слова.",
            "en": {
              "text": "The copula \"is\" in the past and conditional takes the separate form \"ba\", which also triggers lenition of the following word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ba mhúinteoir í.",
                "Вона була вчителькою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Copula in the Past/Conditional (ba) — B1"
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
        "id": "case-genitive",
        "title": "Родовий відмінок — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від інших кельтських мов, ірландська зберегла продуктивний родовий відмінок, який часто змінює саму форму іменника, не лише додає закінчення.",
            "en": {
              "text": "Unlike the other Celtic languages, Irish has retained a productive genitive case, which often changes the noun's very shape, not just adds an ending."
            }
          },
          {
            "type": "table",
            "title": "Родовий відмінок",
            "rows": [
              [
                "bean an tí (наз. teach)",
                "жінка дому/господиня"
              ],
              [
                "clár na scoile (наз. scoil)",
                "розклад школи"
              ]
            ],
            "en": {
              "title": "Genitive Case"
            }
          }
        ],
        "titleEn": "The Genitive Case — A2"
      },
      {
        "id": "case-vocative",
        "title": "Кличний відмінок — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Кличний відмінок вводиться часткою \"a\" перед іменем і спричиняє леніцію першого приголосного, як і в українській кличний відмінок має власне закінчення.",
            "en": {
              "text": "The vocative case is introduced with the particle \"a\" before the name and triggers lenition of the first consonant, just as Ukrainian's vocative has its own ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "A Sheáin!",
                "Шоне! (Seán → a Sheáin, леніція S→Sh)"
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
        "id": "definite-article-mutation",
        "title": "Означений артикль і мутації — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль \"an\" спричиняє леніцію іменників жіночого роду й еклипсис іменників у родовому відмінку множини.",
            "en": {
              "text": "The definite article \"an\" triggers lenition of feminine nouns and eclipsis of nouns in the genitive plural."
            }
          },
          {
            "type": "table",
            "title": "an + леніція/еклипсис",
            "rows": [
              [
                "bean → an bhean",
                "жінка → та жінка (леніція, ж.р.)"
              ],
              [
                "cait → na gcat",
                "коти → котів (еклипсис, родов. мн.)"
              ]
            ],
            "en": {
              "title": "an + lenition/eclipsis"
            }
          }
        ],
        "titleEn": "The Definite Article and Mutation — A2"
      },
      {
        "id": "lenition-triggers",
        "title": "Тригери леніції — B1",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "Крім артикля, леніцію спричиняють присвійні \"mo/do/a\" (мій/твій/його), частка заперечення \"ní\", і багато інших граматичних слів — список слід запам'ятати.",
            "en": {
              "text": "Besides the article, lenition is triggered by the possessives \"mo/do/a\" (my/your/his), the negation particle \"ní\", and many other grammatical words — a list to be memorized."
            }
          },
          {
            "type": "table",
            "title": "mo + леніція",
            "rows": [
              [
                "cóta (пальто) → mo chóta",
                "моє пальто"
              ],
              [
                "carr (авто) → do charr",
                "твоє авто"
              ]
            ],
            "en": {
              "title": "mo + lenition"
            }
          }
        ],
        "titleEn": "Lenition Triggers — B1"
      },
      {
        "id": "eclipsis-triggers",
        "title": "Тригери еклипсису — B1",
        "emoji": "🌑",
        "sections": [
          {
            "type": "intro",
            "text": "Еклипсис спричиняють числівники 7-10, присвійні \"ár/bhur/a\" (наш/ваш/їхній) і прийменник \"i\" (в) — окремий набір тригерів від леніції.",
            "en": {
              "text": "Eclipsis is triggered by the numbers 7-10, the possessives \"ár/bhur/a\" (our/your/their), and the preposition \"i\" (in) — a separate trigger set from lenition."
            }
          },
          {
            "type": "table",
            "title": "ár + еклипсис",
            "rows": [
              [
                "carr (авто) → ár gcarr",
                "наше авто"
              ],
              [
                "i mBaile Átha Cliath",
                "у Дубліні (i + еклипсис)"
              ]
            ],
            "en": {
              "title": "ár + eclipsis"
            }
          }
        ],
        "titleEn": "Eclipsis Triggers — B1"
      },
      {
        "id": "broad-slender-consonants",
        "title": "Широкі й вузькі приголосні — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Правило правопису \"caol le caol, leathan le leathan\" (вузьке з вузьким, широке з широким) вимагає, щоб голосні по обидва боки приголосного узгоджувалися за \"широкістю\" (a,o,u) чи \"вузькістю\" (e,i) — це визначає вимову й відмінювання.",
            "en": {
              "text": "The spelling rule \"caol le caol, leathan le leathan\" (slender with slender, broad with broad) requires the vowels on either side of a consonant to agree in being \"broad\" (a,o,u) or \"slender\" (e,i) — this determines pronunciation and declension."
            }
          },
          {
            "type": "table",
            "title": "Приклад правила",
            "rows": [
              [
                "bád (широкий)",
                "báid (вузький, родов./мн.)"
              ]
            ],
            "en": {
              "title": "Example of the Rule"
            }
          }
        ],
        "titleEn": "Broad and Slender Consonants — B1"
      },
      {
        "id": "prepositional-pronouns",
        "title": "Прийменникові займенники — A2",
        "emoji": "🧬",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і особовий займенник зливаються в одну відмінювану форму — унікальна риса, спільна для всіх кельтських мов.",
            "en": {
              "text": "A preposition and personal pronoun fuse into a single inflected form — a unique trait shared by all the Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "ag (у/при) + займенник",
            "rows": [
              [
                "agam",
                "у мене"
              ],
              [
                "agat",
                "у тебе"
              ],
              [
                "aige",
                "у нього"
              ]
            ],
            "en": {
              "title": "ag (at) + pronoun"
            }
          }
        ],
        "titleEn": "Prepositional Pronouns — A2"
      },
      {
        "id": "possession-ta-ag",
        "title": "Присвійність через tá...ag — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "В ірландській немає дієслова \"мати\": володіння виражається конструкцією \"tá X ag Y\" — буквально \"X є при Y\".",
            "en": {
              "text": "Irish has no verb \"to have\": possession is expressed with \"tá X ag Y\" — literally \"X is at Y\"."
            }
          },
          {
            "type": "formula",
            "title": "tá X agam = я маю X",
            "rows": [
              [
                "Tá madra agam.",
                "У мене є собака.",
                "tá + madra (X) + agam (у мене)"
              ]
            ]
          }
        ],
        "titleEn": "Possession via tá...ag — A1"
      },
      {
        "id": "plural-formation",
        "title": "Утворення множини — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома способами: закінченнями (-í, -anna, -acha) або зміною внутрішнього голосного (як bád → báid).",
            "en": {
              "text": "The plural is formed in several ways: endings (-í, -anna, -acha) or an internal vowel change (as in bád → báid)."
            }
          },
          {
            "type": "table",
            "title": "Приклади множини",
            "rows": [
              [
                "cat → cait",
                "коти"
              ],
              [
                "bord → boird",
                "столи"
              ],
              [
                "carr → carranna",
                "автомобілі"
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
        "id": "adjective-agreement-position",
        "title": "Прикметник після іменника — A1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник стоїть після іменника й узгоджується з ним у роді, числі й відмінку, часто отримуючи леніцію після іменника жіночого роду.",
            "en": {
              "text": "The adjective follows the noun and agrees with it in gender, number, and case, often taking lenition after a feminine noun."
            }
          },
          {
            "type": "table",
            "title": "cat mór, bean mhór",
            "rows": [
              [
                "cat mór (ч.р.)",
                "великий кіт"
              ],
              [
                "bean mhór (ж.р., леніція)",
                "велика жінка"
              ]
            ],
            "en": {
              "title": "cat mór, bean mhór"
            }
          }
        ],
        "titleEn": "The Adjective after the Noun — A1"
      },
      {
        "id": "comparative-degree",
        "title": "Порівняльний ступінь (níos) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється словом \"níos\" перед спеціальною порівняльною формою прикметника.",
            "en": {
              "text": "The comparative is formed with the word \"níos\" before a special comparative form of the adjective."
            }
          },
          {
            "type": "table",
            "title": "mór → níos mó",
            "rows": [
              [
                "mór (великий) → níos mó",
                "більший"
              ],
              [
                "beag (малий) → níos lú",
                "менший"
              ]
            ],
            "en": {
              "title": "mór → níos mó"
            }
          }
        ],
        "titleEn": "The Comparative Degree (níos) — A2"
      },
      {
        "id": "superlative-degree",
        "title": "Найвищий ступінь (is) — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється тією ж порівняльною формою, але з копулою \"is\" замість \"níos\".",
            "en": {
              "text": "The superlative is formed with the same comparative form, but with the copula \"is\" instead of \"níos\"."
            }
          },
          {
            "type": "table",
            "title": "is mó",
            "rows": [
              [
                "is mó",
                "найбільший"
              ],
              [
                "is lú",
                "найменший"
              ]
            ],
            "en": {
              "title": "is mó"
            }
          }
        ],
        "titleEn": "The Superlative Degree (is) — A2"
      },
      {
        "id": "emphatic-pronouns",
        "title": "Емфатичні форми займенників — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Додавання суфікса (-se/-sa/-san) до займенника або дієслівного закінчення підкреслює контраст — \"саме я\", а не хтось інший.",
            "en": {
              "text": "Adding a suffix (-se/-sa/-san) to a pronoun or verb ending emphasizes a contrast — \"I, specifically\", not someone else."
            }
          },
          {
            "type": "table",
            "title": "mé → mise",
            "rows": [
              [
                "mé → mise",
                "саме я"
              ],
              [
                "tú → tusa",
                "саме ти"
              ]
            ],
            "en": {
              "title": "mé → mise"
            }
          }
        ],
        "titleEn": "Emphatic Pronoun Forms — B1"
      },
      {
        "id": "counting-people",
        "title": "Лічба людей — B1",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса: людей рахують окремими особовими числівниками (duine, beirt, triúr...), відмінними від звичайних числівників для предметів.",
            "en": {
              "text": "A unique feature: people are counted with special personal numerals (duine, beirt, triúr...), distinct from ordinary numerals for objects."
            }
          },
          {
            "type": "table",
            "title": "Особові числівники",
            "rows": [
              [
                "duine amháin",
                "одна людина"
              ],
              [
                "beirt",
                "двоє людей"
              ],
              [
                "triúr",
                "троє людей"
              ]
            ],
            "en": {
              "title": "Personal Numerals"
            }
          }
        ],
        "titleEn": "Counting People — B1"
      },
      {
        "id": "counting-things",
        "title": "Лічба предметів — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Для предметів вживають окремий ряд числівників, що починається з \"a\" (напр. a haon, a dó) при самостійному рахуванні.",
            "en": {
              "text": "For objects, a separate series of numerals starting with \"a\" (e.g. a haon, a dó) is used when counting in isolation."
            }
          },
          {
            "type": "table",
            "title": "a haon, a dó, a trí",
            "rows": [
              [
                "a haon",
                "один (при рахуванні)"
              ],
              [
                "a dó",
                "два"
              ],
              [
                "a trí",
                "три"
              ]
            ],
            "en": {
              "title": "a haon, a dó, a trí"
            }
          }
        ],
        "titleEn": "Counting Objects — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "\"Seo\" (це) вказує на близьке, \"sin\" (те) — на середню відстань, \"siúd\" — на дуже віддалене; усі йдуть після іменника з артиклем.",
            "en": {
              "text": "\"Seo\" (this) points to something near, \"sin\" (that) to a middle distance, \"siúd\" to something very far; all follow the noun with the article."
            }
          },
          {
            "type": "table",
            "title": "an leabhar seo/sin/siúd",
            "rows": [
              [
                "an leabhar seo",
                "ця книга"
              ],
              [
                "an leabhar sin",
                "та книга"
              ]
            ],
            "en": {
              "title": "an leabhar seo/sin/siúd"
            }
          }
        ],
        "titleEn": "Demonstrative Pronouns — A1"
      },
      {
        "id": "relative-clauses-direct-indirect",
        "title": "Прямі й непрямі відносні речення — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ірландська розрізняє два типи відносних часток (обидві звучать \"a\", але спричиняють різну мутацію): пряму, коли антецедент — підмет/додаток, і непряму, коли він у прийменниковій позиції.",
            "en": {
              "text": "Irish distinguishes two types of relative particle (both sound \"a\" but trigger different mutations): direct, when the antecedent is the subject/object, and indirect, when it's in a prepositional position."
            }
          },
          {
            "type": "formula",
            "title": "Пряме vs непряме відносне",
            "rows": [
              [
                "an fear a chonaic mé",
                "an fear a bhfaca mé a mhac",
                "чоловік, якого я бачив (пряме) → чоловік, чийого сина я бачив (непряме)"
              ]
            ]
          }
        ],
        "titleEn": "Direct and Indirect Relative Clauses — B2"
      },
      {
        "id": "possessive-adjectives-mutation",
        "title": "Присвійні прикметники й мутація — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен присвійний займенник спричиняє свою мутацію: mo/do — леніцію, a (його) — леніцію, a (її) — жодної, ár/bhur/a (їхній) — еклипсис.",
            "en": {
              "text": "Each possessive triggers its own mutation: mo/do — lenition, a (his) — lenition, a (her) — none, ár/bhur/a (their) — eclipsis."
            }
          },
          {
            "type": "table",
            "title": "a chóta vs a cóta",
            "rows": [
              [
                "a chóta (його пальто, леніція)",
                "його пальто"
              ],
              [
                "a cóta (її пальто, без мутації)",
                "її пальто"
              ]
            ],
            "en": {
              "title": "a chóta vs a cóta"
            }
          }
        ],
        "titleEn": "Possessive Adjectives and Mutation — A2"
      },
      {
        "id": "word-order-vso-details",
        "title": "Деталі порядку VSO — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки дієслово завжди перше, для акценту на іншому елементі використовують копульну розщеплену конструкцію \"is X a...\" замість зміни звичайного порядку.",
            "en": {
              "text": "Since the verb is always first, emphasizing another element requires a copular cleft construction \"is X a...\" rather than reordering the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Is mise a rinne é.",
                "Це саме я це зробив. (розщеплена конструкція для акценту)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Details of VSO Word Order — A2"
      },
      {
        "id": "reflexive-fein",
        "title": "Зворотність через féin — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність і підсилення виражають словом \"féin\" (сам/себе) після займенника чи іменника — без окремого зворотного займенника.",
            "en": {
              "text": "Reflexivity and emphasis are expressed with the word \"féin\" (self) after a pronoun or noun — with no separate reflexive pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rinne mé féin é.",
                "Я зробив це сам."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexivity via féin — B1"
      },
      {
        "id": "adverbs-of-place",
        "title": "Прислівники місця — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники місця розрізняють перебування, рух до й рух від — трояка система, подібна до інших кельтських мов.",
            "en": {
              "text": "Place adverbs distinguish location, motion towards, and motion from — a three-way system similar to other Celtic languages."
            }
          },
          {
            "type": "table",
            "title": "anseo / ann / as seo",
            "rows": [
              [
                "anseo",
                "тут"
              ],
              [
                "ann",
                "там"
              ],
              [
                "abhaile",
                "додому (рух)"
              ]
            ],
            "en": {
              "title": "anseo / ann / as seo"
            }
          }
        ],
        "titleEn": "Adverbs of Place — A2"
      },
      {
        "id": "interrogative-pronouns",
        "title": "Питальні займенники — A1",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Cé\" (хто) вживається для людей, \"cad/céard\" (що) — для предметів, обидва часто поєднуються з копулою \"is\".",
            "en": {
              "text": "\"Cé\" (who) is used for people, \"cad/céard\" (what) for things, both often combined with the copula \"is\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cé hé sin?",
                "Хто це?"
              ],
              [
                "Cad é seo?",
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
        "id": "conjunctions",
        "title": "Сполучники — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядний сполучник \"go\" вимагає еклипсису наступного дієслова.",
            "en": {
              "text": "The subordinating conjunction \"go\" requires eclipsis of the following verb."
            }
          },
          {
            "type": "table",
            "title": "agus / ach / go",
            "rows": [
              [
                "agus",
                "і"
              ],
              [
                "ach",
                "але"
              ],
              [
                "go",
                "що (+ еклипсис)"
              ]
            ],
            "en": {
              "title": "agus / ach / go"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "prepositions-simple",
        "title": "Прості прийменники — A1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Прості прийменники часто самі спричиняють мутацію наступного слова — окремий набір правил для кожного прийменника.",
            "en": {
              "text": "Simple prepositions often themselves trigger mutation of the following word — a distinct rule set for each preposition."
            }
          },
          {
            "type": "table",
            "title": "ar, i, faoi",
            "rows": [
              [
                "ar an mbord (еклипсис)",
                "на столі"
              ],
              [
                "i mBaile Átha Cliath",
                "у Дубліні"
              ]
            ],
            "en": {
              "title": "ar, i, faoi"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A1"
      },
      {
        "id": "compound-words",
        "title": "Складні слова — A2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова часто поєднують прикметник-префікс з іменником, причому префікс спричиняє леніцію.",
            "en": {
              "text": "Compound words often join a prefixed adjective with a noun, with the prefix triggering lenition."
            }
          },
          {
            "type": "table",
            "title": "sean + bhean",
            "rows": [
              [
                "sean (старий) + bean (жінка) = seanbhean",
                "стара жінка (леніція b→bh)"
              ]
            ],
            "en": {
              "title": "sean + bhean"
            }
          }
        ],
        "titleEn": "Compound Words — A2"
      },
      {
        "id": "exclamations",
        "title": "Вигуки — A2",
        "emoji": "😮",
        "sections": [
          {
            "type": "intro",
            "text": "Вигуки виражають емоційну реакцію незалежно від структури речення, деякі містять релігійні відлуння через історичну роль церкви.",
            "en": {
              "text": "Interjections express an emotional reaction independent of sentence structure; some carry religious echoes reflecting the church's historical role."
            }
          },
          {
            "type": "table",
            "title": "Поширені вигуки",
            "rows": [
              [
                "Dar fia!",
                "Овва!/Оце так!"
              ],
              [
                "Go raibh maith agat!",
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
        "id": "days-week",
        "title": "Дні тижня — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Дні тижня переважно пов'язані з церковними назвами, а не з планетами чи богами, на відміну від більшості європейських мов.",
            "en": {
              "text": "The days of the week are mostly connected to church names rather than planets or gods, unlike most European languages."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "Dé Luain",
                "понеділок"
              ],
              [
                "Dé Céadaoin",
                "середа"
              ],
              [
                "Dé hAoine",
                "п'ятниця"
              ],
              [
                "Dé Domhnaigh",
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
            "text": "На відміну від багатьох мов, ірландські назви місяців — питомі кельтські слова, не запозичення з латині.",
            "en": {
              "text": "Unlike many languages, Irish month names are native Celtic words, not Latin borrowings."
            }
          },
          {
            "type": "table",
            "title": "Місяці",
            "rows": [
              [
                "Eanáir",
                "січень"
              ],
              [
                "Bealtaine",
                "травень"
              ],
              [
                "Lúnasa",
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
            "text": "Час запитують \"Cén t-am é?\", а хвилини рахують до/після повної години.",
            "en": {
              "text": "Time is asked with \"Cén t-am é?\" and minutes are counted before/after the hour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá sé a trí a chlog.",
                "Зараз третя година."
              ],
              [
                "Buailfimid le chéile ag a cúig.",
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
        "id": "colors",
        "title": "Кольори — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Кольори — звичайні прикметники, що стоять після іменника й можуть отримувати леніцію.",
            "en": {
              "text": "Colors are ordinary adjectives that follow the noun and can take lenition."
            }
          },
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "bán",
                "білий"
              ],
              [
                "dubh",
                "чорний"
              ],
              [
                "dearg",
                "червоний"
              ],
              [
                "gorm",
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
            "text": "Родинні терміни часто відмінюються в родовому й вимагають леніції після присвійних займенників.",
            "en": {
              "text": "Kinship terms often decline in the genitive and take lenition after possessives."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "máthair",
                "мати"
              ],
              [
                "athair",
                "батько"
              ],
              [
                "deirfiúr",
                "сестра"
              ],
              [
                "deartháir",
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
            "text": "\"Dia duit\" (буквально \"Бог тобі\") — стандартне привітання, на яке відповідають \"Dia is Muire duit\" (Бог і Марія тобі).",
            "en": {
              "text": "\"Dia duit\" (literally \"God to you\") is the standard greeting, answered with \"Dia is Muire duit\" (God and Mary to you)."
            }
          },
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Dia duit!",
                "Привіт!"
              ],
              [
                "Slán!",
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
        "id": "weather-ta-ag",
        "title": "Погода через tá...ag — A1",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "intro",
            "text": "Погоду часто описують тією ж конструкцією \"tá...ag\", що й дію, буквально \"дощ є при небі\".",
            "en": {
              "text": "Weather is often described with the same \"tá...ag\" construction used for action, literally \"rain is at the sky\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá sé ag cur báistí.",
                "Йде дощ."
              ],
              [
                "Tá sé fuar amuigh.",
                "Надворі холодно."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Weather via tá...ag — A1"
      },
      {
        "id": "body-parts",
        "title": "Частини тіла — A1",
        "emoji": "🫀",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла часто мають жіночий рід і вимагають леніції після присвійного \"mo\".",
            "en": {
              "text": "Body parts are often feminine and take lenition after the possessive \"mo\"."
            }
          },
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "lámh",
                "рука"
              ],
              [
                "ceann",
                "голова"
              ],
              [
                "cos",
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
            "text": "Вік виражають конструкцією \"tá X bliain d'aois\", буквально \"X років віку\".",
            "en": {
              "text": "Age is expressed with \"tá X bliain d'aois\", literally \"X years of age\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá mé fiche bliain d'aois.",
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
        "id": "dialectal-variation",
        "title": "Діалектна різноманітність — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Три основні діалекти (Мюнстер, Коннахт, Ольстер) розрізняються вимовою, лексикою й навіть деякими закінченнями настільки, що офіційний стандарт (An Caighdeán Oifigiúil) — це компроміс, не природний діалект.",
            "en": {
              "text": "The three main dialects (Munster, Connacht, Ulster) differ in pronunciation, vocabulary, and even some endings enough that the official standard (An Caighdeán Oifigiúil) is a compromise, not a natural dialect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Наголос падає на різний склад залежно від діалекту.",
                "Мюнстер часто наголошує другий склад, Коннахт/Ольстер — перший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialectal Variation — B2"
      },
      {
        "id": "diminutives",
        "title": "Демінутив -ín — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -ín додає відтінок ніжності чи малого розміру й перетворює слово в чоловічий рід.",
            "en": {
              "text": "The diminutive suffix -ín adds tenderness or smallness and shifts the word to masculine gender."
            }
          },
          {
            "type": "table",
            "title": "cailín, fear → firín",
            "rows": [
              [
                "cailín (від caile) — дівчинка",
                "з демінутивом -ín"
              ],
              [
                "fear → firín",
                "чоловічок"
              ]
            ],
            "en": {
              "title": "cailín, fear → firín"
            }
          }
        ],
        "titleEn": "The Diminutive Suffix -ín — B1"
      },
      {
        "id": "politeness",
        "title": "Ввічливість — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "\"Le do thoil\" (будь ласка) буквально означає \"з твоєю волею\", підкреслюючи ввічливість через непряму конструкцію.",
            "en": {
              "text": "\"Le do thoil\" (please) literally means \"with your will\", emphasizing politeness through an indirect construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cupán tae, le do thoil.",
                "Чашку чаю, будь ласка."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness — A2"
      },
      {
        "id": "common-idioms",
        "title": "Поширені ідіоми — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Ірландські ідіоми часто спираються на непрямі конструкції з дієсловами стану, а не прямі твердження.",
            "en": {
              "text": "Irish idioms often rely on indirect constructions with verbs of state rather than direct statements."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Tá sé ina chodladh.",
                "Він спить. (букв. \"він у своєму спанні\")"
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
        "id": "loanword-adaptation",
        "title": "Адаптація запозичень — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Запозичення з англійської адаптуються до правила \"caol le caol, leathan le leathan\" і фонетично переписуються.",
            "en": {
              "text": "Loanwords from English are adapted to the \"caol le caol, leathan le leathan\" rule and respelled phonetically."
            }
          },
          {
            "type": "table",
            "title": "Запозичення",
            "rows": [
              [
                "teilifís (від television)",
                "телебачення"
              ],
              [
                "seomra (від chamber?)",
                "кімната"
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
        "id": "hiberno-english",
        "title": "Вплив на гіберно-англійську — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Ірландська синтаксична структура вплинула на англійську мову Ірландії: конструкції типу \"I do be tired\" відображають ірландську звичну видову форму.",
            "en": {
              "text": "Irish syntax has influenced Irish English: constructions like \"I do be tired\" reflect the Irish habitual aspect form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "\"I'm after eating.\" — калька з ірландського tar éis-перфекта.",
                "риса гіберно-англійської, що прямо перекладає ірландську граматику"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Influence on Hiberno-English — B2"
      },
      {
        "id": "address-forms",
        "title": "Форми звертання — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від деяких кельтських мов, сучасна ірландська не має окремої ввічливої форми \"ви\" на противагу \"ти\" — вживають \"tú\" до всіх.",
            "en": {
              "text": "Unlike some Celtic languages, modern Irish has no separate polite \"you\" form opposed to informal \"you\" — \"tú\" is used with everyone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Conas atá tú?",
                "Як справи? (до будь-кого)"
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
        "id": "purpose-clause-le",
        "title": "Цільове підрядне (le) — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "\"Le\" + віддієслівний іменник вводить цільове підрядне \"щоб\".",
            "en": {
              "text": "\"Le\" + verbal noun introduces a purpose clause \"in order to\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "D'fhoghlaim mé Gaeilge le labhairt le mo sheanmháthair.",
                "Я вивчив ірландську, щоб розмовляти з бабусею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Purpose Clause with le — B1"
      },
      {
        "id": "causal-clause",
        "title": "Причинове підрядне (mar/toisc) — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "\"Mar\" або \"toisc\" (тому що) вводять причинове підрядне речення.",
            "en": {
              "text": "\"Mar\" or \"toisc\" (because) introduce a causal clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bhí mé déanach mar chaill mé an bus.",
                "Я запізнився, тому що пропустив автобус."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Causal Clause (mar/toisc) — B1"
      },
      {
        "id": "conditional-clause-da",
        "title": "Умовне підрядне (dá) — B1",
        "emoji": "🤔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Dá\" (якби) вводить нереальну умову й спричиняє еклипсис наступного дієслова.",
            "en": {
              "text": "\"Dá\" (if) introduces an unreal condition and triggers eclipsis of the following verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dá mbeadh am agam, rachainn ann.",
                "Якби я мав час, я б туди поїхав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Conditional Clause dá — B1"
      },
      {
        "id": "indefinite-pronouns",
        "title": "Неозначені займенники — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "\"Duine éigin\" (хтось) і \"rud éigin\" (щось) — базові неозначені займенники, буквально \"якась людина/річ\".",
            "en": {
              "text": "\"Duine éigin\" (someone) and \"rud éigin\" (something) are the basic indefinite pronouns, literally \"some person/thing\"."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ghlaoigh duine éigin.",
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
            "text": "\"Duine ar bith\" (ніхто) і \"rud ar bith\" (нічого) вживаються лише в заперечному контексті — буквально \"будь-яка людина/річ\" під запереченням.",
            "en": {
              "text": "\"Duine ar bith\" (no one) and \"rud ar bith\" (nothing) are used only in negative contexts — literally \"any person/thing\" under negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ní raibh duine ar bith ann.",
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
        "id": "tag-question-nach-ea",
        "title": "Розділове питання (nach ea?) — B1",
        "emoji": "🤨",
        "sections": [
          {
            "type": "intro",
            "text": "Розділове питання \"nach ea?\" (чи не так?) додається в кінці твердження з копулою.",
            "en": {
              "text": "The tag question \"nach ea?\" (isn't that so?) is added at the end of a copula statement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Is deas an lá é, nach ea?",
                "Гарний день, чи не так?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tag Question nach ea? — B1"
      },
      {
        "id": "surname-system",
        "title": "Система прізвищ Ó/Mac — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Ірландські прізвища часто містять \"Ó\" (онук/нащадок) або \"Mac\" (син), причому жіноча форма прізвища відрізняється від чоловічої мутацією.",
            "en": {
              "text": "Irish surnames often contain \"Ó\" (grandson/descendant) or \"Mac\" (son), with the female form of the surname differing from the male by mutation."
            }
          },
          {
            "type": "table",
            "title": "Ó Conaill / Ní Chonaill",
            "rows": [
              [
                "Seán Ó Conaill (чол.)",
                "Шон О'Коннел"
              ],
              [
                "Máire Ní Chonaill (жін.)",
                "Марі Ні Хоннел"
              ]
            ],
            "en": {
              "title": "Ó Conaill / Ní Chonaill"
            }
          }
        ],
        "titleEn": "The Ó/Mac Surname System — B1"
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
        "id": "irregular-verbs-eleven",
        "title": "Одинадцять неправильних дієслів — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "На противагу регулярним дієсловам, лише 11 дієслів (bí, abair, feic, ith, tabhair, téigh, faigh, déan, beir, clois, tar) відмінюються нерегулярно й мають окремі незалежні/залежні форми для кожного часу.",
            "en": {
              "text": "Unlike regular verbs, only 11 verbs (bí, abair, feic, ith, tabhair, téigh, faigh, déan, beir, clois, tar) conjugate irregularly and have distinct independent/dependent forms for every tense."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "téigh (йти) → chuaigh",
                "минулий час не за жодним регулярним правилом"
              ],
              [
                "feic (бачити) → chonaic / bhfaca",
                "різні незалежна/залежна форми"
              ]
            ],
            "en": {
              "title": "Irregular Forms"
            }
          }
        ],
        "titleEn": "The Eleven Irregular Verbs — B2"
      },
      {
        "id": "mutation-exceptions",
        "title": "Винятки в мутаціях — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Приголосні d, t, s не завжди мутують за загальним правилом після означеного артикля жіночого роду — деякі комбінації блокують леніцію з історичних фонетичних причин.",
            "en": {
              "text": "The consonants d, t, s don't always mutate by the general rule after the feminine definite article — certain combinations block lenition for historical phonetic reasons."
            }
          },
          {
            "type": "table",
            "title": "Блокування леніції",
            "rows": [
              [
                "an sean- (старий)",
                "an tsean-",
                "s блокує звичайну леніцію в певних сполученнях, натомість t- додається"
              ]
            ]
          }
        ],
        "titleEn": "Exceptions in Mutation Rules — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Застиглі ідіоматичні вирази — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Деякі поширені формули зберігають архаїчні відмінкові форми або порядок слів, що вийшли із загального вжитку в сучасній граматиці.",
            "en": {
              "text": "Some common formulas preserve archaic case forms or word order that have fallen out of general use in modern grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Éire go Brách!",
                "Ірландія навіки! (архаїчна конструкція)"
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
