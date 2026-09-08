// Vymova — data/grammar-data/grammar_cy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Rhagenwau Personol — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У валлійській займенник \"chi\" водночас служить і ввічливим звертанням до однієї людини, і звичайною формою множини \"ви\".",
            "en": {
              "text": "In Welsh, the pronoun \"chi\" serves both as a polite form of address to one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "fi / i"
              ],
              [
                "ти (звичайно / ввічливо)",
                "ti / chi"
              ],
              [
                "він",
                "fe / fo"
              ],
              [
                "вона",
                "hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "chi"
              ],
              [
                "вони",
                "nhw"
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
        "id": "to-be-bod-periphrastic",
        "title": "Дієслово \"bod\" (бути) — основа всієї системи часів — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості мов, майже всі часи у валлійській будуються перифрастично: відмінюване bod (бути) + частка 'n + незмінна \"дієслівна форма\" (verbnoun) — не окрема відмінювана дієслівна форма для кожного дієслова.",
            "en": {
              "text": "Unlike most languages, almost every tense in Welsh is built periphrastically: the conjugated bod (to be) + the particle 'n + an invariant \"verbnoun\" — not a separate conjugated verb form for every verb."
            }
          },
          {
            "type": "formula",
            "title": "bod + 'n + дієслівна форма",
            "rows": [
              [
                "Dw i",
                "'n mynd.",
                "Я йду (буквально: є я в-йти)."
              ],
              [
                "Mae hi",
                "'n darllen.",
                "Вона читає."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Maen nhw'n gweithio.",
                "Вони працюють."
              ]
            ]
          }
        ],
        "titleEn": "The Verb Bod (To Be) — the Backbone of the Tense System — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"ddim\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою ddim, яка ставиться після відмінюваного bod, а форма самого bod теж змінюється на заперечну.",
            "en": {
              "text": "Negation is formed with the particle ddim, placed after the conjugated bod, whose own form also shifts to a negative one."
            }
          },
          {
            "type": "formula",
            "title": "заперечне bod + ddim + 'n",
            "rows": [
              [
                "Dw i'n mynd.",
                "Dw i ddim yn mynd.",
                "Я йду. → Я не йду."
              ],
              [
                "Mae e'n dod.",
                "Dyw e ddim yn dod.",
                "Він приходить. → Він не приходить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i ddim yn deall.",
                "Я не розумію."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Ddim — A1"
      },
      {
        "id": "questions",
        "title": "Питання без окремого слова \"так/ні\" — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюються зміною форми bod на питальну (Ydy? Ydw?), а відповідь \"так/ні\" не має окремого слова — треба повторити (\"луна\") те саме дієслово.",
            "en": {
              "text": "Yes/no questions are formed by shifting bod to its question form (Ydy? Ydw?), and there's no single word for \"yes/no\" — you must \"echo\" the same verb back as the answer."
            }
          },
          {
            "type": "formula",
            "title": "Питальна форма bod?",
            "rows": [
              [
                "Wyt ti wedi blino?",
                "Ydw. / Nac ydw.",
                "Ти втомлений? → Так. / Ні."
              ],
              [
                "Ydy hi'n dod?",
                "Ydy. / Nac ydy.",
                "Вона прийде? → Так. / Ні."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Oes bwyd 'da ti?",
                "У тебе є їжа?"
              ]
            ]
          }
        ],
        "titleEn": "Questions Without a Word for \"Yes/No\" — A1"
      },
      {
        "id": "initial-consonant-mutation-overview",
        "title": "Мутації початкового приголосного — три типи — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Як у бретонській чи ірландській, перший приголосний слова в валлійській систематично змінюється залежно від граматичного контексту — але валлійська розрізняє три типи мутації (м'яку, носову, придихову), кожен з власним набором тригерів.",
            "en": {
              "text": "As in Breton or Irish, a word's first consonant systematically changes depending on grammatical context — but Welsh distinguishes three mutation types (soft, nasal, aspirate), each with its own set of triggers."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ci (собака, вихідна форма)",
                "fy nghi (мій собака, носова мутація c→ngh)"
              ],
              [
                "tŷ (дім)",
                "fy nhŷ (мій дім, носова мутація t→nh)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n mynd i Gaerdydd.",
                "Я їду до Кардіффа (Caerdydd → Gaerdydd, м'яка мутація)."
              ]
            ]
          }
        ],
        "titleEn": "Initial Consonant Mutations — Three Types — A2"
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
        "id": "present-tense-bod-yn",
        "title": "Теперішній час (bod + 'n) — A1",
        "titleEn": "Present Tense (Bod + 'N) — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час — це відмінюване bod у теперішній формі плюс частка 'n перед незмінною дієслівною формою (verbnoun).",
            "en": {
              "text": "The present tense is the conjugated bod in its present form plus the particle 'n before the invariant verbnoun."
            }
          },
          {
            "type": "formula",
            "title": "bod (теп.) + 'n + verbnoun",
            "rows": [
              [
                "Dw i",
                "'n darllen.",
                "я читаю"
              ],
              [
                "Rwyt ti",
                "'n darllen.",
                "ти читаєш"
              ],
              [
                "Mae e",
                "'n darllen.",
                "він читає"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rydyn ni'n bwyta.",
                "Ми їмо."
              ],
              [
                "Maen nhw'n gweithio'n galed.",
                "Вони багато працюють."
              ]
            ]
          }
        ]
      },
      {
        "id": "past-tense-bod-wedi",
        "title": "Перфект (bod + wedi) — A2",
        "titleEn": "Perfect Tense (Bod + Wedi) — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект — це той самий каркас bod + verbnoun, але з часткою wedi (\"вже\") замість 'n.",
            "en": {
              "text": "The perfect is the same bod + verbnoun frame, but with the particle wedi (\"already\") instead of 'n."
            }
          },
          {
            "type": "formula",
            "title": "bod + wedi + verbnoun",
            "rows": [
              [
                "Dw i",
                "wedi bwyta.",
                "я вже поїв"
              ],
              [
                "Mae hi",
                "wedi mynd.",
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
                "Dyn ni wedi gorffen.",
                "Ми вже закінчили."
              ],
              [
                "Maen nhw wedi cyrraedd.",
                "Вони вже прибули."
              ]
            ]
          }
        ]
      },
      {
        "id": "imperfect-past-oeddwn",
        "title": "Минулий незавершений час (oeddwn) — A2",
        "titleEn": "Imperfect Past (Oeddwn) — A2",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий незавершений час — це той самий каркас, але з bod у формі минулого часу (oeddwn, oeddet тощо).",
            "en": {
              "text": "The imperfect past is the same frame, but with bod in its past-tense form (oeddwn, oeddet, etc.)."
            }
          },
          {
            "type": "formula",
            "title": "bod (мин.) + 'n + verbnoun",
            "rows": [
              [
                "Roeddwn i",
                "'n darllen.",
                "я читав (тривало)"
              ],
              [
                "Roedd hi",
                "'n canu.",
                "вона співала"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Roeddwn i'n byw yng Nghymru.",
                "Я жив у Уельсі."
              ],
              [
                "Roedden nhw'n chwarae.",
                "Вони гралися."
              ]
            ]
          }
        ]
      },
      {
        "id": "future-tense-bod-fydd",
        "title": "Майбутній час (bydd) — A2",
        "titleEn": "Future Tense (Bydd) — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час — це той самий каркас, з bod у майбутній формі (bydda, byddi, bydd тощо).",
            "en": {
              "text": "The future tense is the same frame, with bod in its future form (bydda, byddi, bydd, etc.)."
            }
          },
          {
            "type": "formula",
            "title": "bod (майб.) + 'n + verbnoun",
            "rows": [
              [
                "Bydda i",
                "'n mynd.",
                "я піду"
              ],
              [
                "Bydd hi",
                "'n canu.",
                "вона співатиме"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Byddwn ni'n cyrraedd yfory.",
                "Ми прибудемо завтра."
              ],
              [
                "Byddan nhw'n aros.",
                "Вони залишаться."
              ]
            ]
          }
        ]
      },
      {
        "id": "simple-past-synthetic",
        "title": "Синтетичний минулий (для окремих дієслів) — B1",
        "titleEn": "Synthetic Simple Past (For Certain Verbs) — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від перифрастичних часів, кілька дуже вживаних дієслів (мати простий минулий час без bod: gwneud, mynd, dod, cael) утворюють коротку, синтетичну форму минулого часу.",
            "en": {
              "text": "Unlike the periphrastic tenses, a handful of very common verbs (gwneud, mynd, dod, cael) form a short, synthetic simple past without bod."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Es i.",
                "Я пішов (синтетична форма mynd, без bod)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gwnes i weithio.",
                "Я попрацював."
              ],
              [
                "Daeth hi adref.",
                "Вона прийшла додому."
              ]
            ]
          }
        ]
      },
      {
        "id": "conditional-mood",
        "title": "Умовний спосіб — B1",
        "titleEn": "Conditional Mood — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб теж вживає форму bod (baswn, byddwn) плюс verbnoun.",
            "en": {
              "text": "The conditional also uses a form of bod (baswn, byddwn) plus the verbnoun."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Baswn i'n hoffi dod.",
                "Я б хотів прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Byddwn i'n helpu petawn i'n gallu.",
                "Я б допоміг, якби міг."
              ],
              [
                "Baset ti'n hapus.",
                "Ти був би щасливий."
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
            "text": "Наказовий спосіб — одне з небагатьох місць, де дієслово не потребує bod; для 2-ї особи однини часто це просто основа, множина/ввічлива форма додає -wch.",
            "en": {
              "text": "The imperative is one of the few places where the verb needs no bod; for the 2nd person singular it's often just the stem, the plural/polite form adding -wch."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Dere!",
                "Приходь!"
              ],
              [
                "Dewch!",
                "Приходьте!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Eisteddwch, os gwelwch yn dda.",
                "Сідайте, будь ласка."
              ],
              [
                "Agor y drws!",
                "Відчини двері!"
              ]
            ]
          }
        ]
      },
      {
        "id": "subjunctive-remnants",
        "title": "Залишки кон'юнктива — B2",
        "titleEn": "Subjunctive Remnants — B2",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "Архаїчний кон'юнктив зберігся лише в застиглих формулах побажання й у деяких офіційних текстах.",
            "en": {
              "text": "The archaic subjunctive survives only in fixed wish formulas and some formal texts."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Duw a'ch bendithio.",
                "Хай Бог вас благословить."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Byw fo Cymru!",
                "Хай живе Уельс!"
              ],
              [
                "Naed dy ewyllys.",
                "Хай буде воля твоя."
              ]
            ]
          }
        ]
      },
      {
        "id": "echo-answers-yes-no",
        "title": "Відповіді-луна замість \"так/ні\" — детально — A2",
        "titleEn": "Echo Answers Instead of \"Yes/No\" — In Depth — A2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен допоміжний чи модальний дієслівний ряд має свою власну пару \"так/ні\", узгоджену з тим самим дієсловом, що й у питанні, — універсального слова \"так\" не існує.",
            "en": {
              "text": "Every auxiliary or modal verb series has its own \"yes/no\" pair, matching whatever verb was used in the question — there's no universal word for \"yes\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Wyt ti'n dod? — Ydw/Nac ydw.",
                "Ти прийдеш? — Так/Ні."
              ],
              [
                "Oes amser 'da ti? — Oes/Nac oes.",
                "У тебе є час? — Так/Ні."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Gest ti amser da? — Do/Naddo.",
                "Ти гарно провів час? — Так/Ні."
              ],
              [
                "Fyddi di'n dod? — Byddaf/Na fyddaf.",
                "Ти прийдеш? — Так/Ні."
              ]
            ]
          }
        ]
      },
      {
        "id": "habitual-present-arferol",
        "title": "Звичайна дія (arfer) — B1",
        "titleEn": "Habitual Aspect (Arfer) — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична, повторювана дія в минулому виражається дієсловом arfer (\"мати звичку\") плюс verbnoun головного дієслова.",
            "en": {
              "text": "A habitual, repeated past action is expressed with the verb arfer (\"to be used to\") plus the verbnoun of the main verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Roeddwn i'n arfer chwarae pêl-droed.",
                "Я раніше грав у футбол (звично)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Roedd hi'n arfer canu.",
                "Вона раніше співала (звично)."
              ],
              [
                "Roedden nhw'n arfer byw yma.",
                "Вони раніше тут жили (звично)."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-noun-usage-deep",
        "title": "Дієслівна форма (verbnoun) — центр усієї системи — B1",
        "titleEn": "The Verbnoun — the Core of the Whole System — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "\"Дієслівна форма\" (verbnoun) — це не інфінітив у звичному сенсі, а водночас іменник і базова форма дієслова, яка сама по собі не має ні часу, ні особи, — усе часове значення несе bod навколо неї.",
            "en": {
              "text": "The \"verbnoun\" isn't an infinitive in the usual sense but simultaneously a noun and the base verb form, carrying no tense or person on its own — all tense meaning is carried by the surrounding bod."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "canu (спів/співати)",
                "функціонує і як \"спів\" (іменник), і як \"співати\" (з bod)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae canu'n bwysig.",
                "Спів важливий (іменникове вживання)."
              ],
              [
                "Dw i'n hoffi canu.",
                "Мені подобається співати."
              ]
            ]
          }
        ]
      },
      {
        "id": "passive-impersonal-form",
        "title": "Пасивно-безособова форма (-ir/-wyd) — B2",
        "titleEn": "Passive-Impersonal Form (-Ir/-Wyd) — B2",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен час має окрему безособову форму дієслова (закінчення -ir у теперішньому, -wyd у минулому), що виражає дію без вказаного виконавця.",
            "en": {
              "text": "Every tense has a separate impersonal verb form (ending -ir in the present, -wyd in the past), expressing an action with no specified doer."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Siaredir Cymraeg yma.",
                "Тут говорять валлійською (безособово)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Adeiladwyd y tŷ llynedd.",
                "Дім було збудовано минулого року."
              ],
              [
                "Gwerthir bara yma.",
                "Тут продають хліб."
              ]
            ]
          }
        ]
      },
      {
        "id": "modal-gallu-medru",
        "title": "Модальне дієслово gallu/medru (могти) — A2",
        "titleEn": "Modal Verb Gallu/Medru (Can) — A2",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Модальне gallu (могти) відмінюється як звичайне дієслово в тому самому bod-каркасі, плюс verbnoun головного дієслова.",
            "en": {
              "text": "The modal gallu (can) conjugates as a regular verb in the same bod frame, plus the verbnoun of the main verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dw i'n gallu nofio.",
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
                "Alli di fy helpu i?",
                "Ти можеш мені допомогти?"
              ],
              [
                "Fedra i ddim dod.",
                "Я не можу прийти."
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
        "id": "soft-mutation",
        "title": "М'яка мутація — B1",
        "titleEn": "Soft Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "М'яка мутація — найпоширеніший тип, при якому глухі приголосні стають дзвінкими (c→g, p→b, t→d), вживається після означеного артикля з іменниками жіночого роду й у багатьох інших контекстах.",
            "en": {
              "text": "The soft mutation is the most common type, where voiceless consonants become voiced (c→g, p→b, t→d), used after the definite article with feminine nouns and in many other contexts."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cath (кіт)",
                "y gath",
                "цей кіт (ж.р., c→g)"
              ],
              [
                "merch (дівчина)",
                "dwy ferch",
                "дві дівчини (m→f)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r gath yn fawr.",
                "Кіт великий."
              ],
              [
                "Dw i'n mynd i Gymru.",
                "Я їду в Уельс (Cymru→Gymru)."
              ]
            ]
          }
        ]
      },
      {
        "id": "nasal-mutation",
        "title": "Носова мутація — B1",
        "titleEn": "Nasal Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Носова мутація перетворює c/p/t на ngh/mh/nh, вживається переважно після присвійного \"мій\" (fy) та прийменника \"у\" (yn).",
            "en": {
              "text": "The nasal mutation turns c/p/t into ngh/mh/nh, used mostly after the possessive \"my\" (fy) and the preposition \"in\" (yn)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "car (машина)",
                "fy nghar",
                "моя машина (c→ngh)"
              ],
              [
                "Caerdydd",
                "yng Nghaerdydd",
                "у Кардіффі (C→Ngh)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fy mrawd yw e.",
                "Це мій брат (b→m)."
              ],
              [
                "Dw i'n byw yng Nghymru.",
                "Я живу в Уельсі."
              ]
            ]
          }
        ]
      },
      {
        "id": "aspirate-mutation",
        "title": "Придихова мутація — B1",
        "titleEn": "Aspirate Mutation — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Придихова мутація перетворює c/p/t на ch/ph/th, вживається переважно після числівника \"три\" (тільки для жіночих слів) і сполучника \"a\" (і).",
            "en": {
              "text": "The aspirate mutation turns c/p/t into ch/ph/th, used mostly after the numeral \"three\" (feminine words only) and the conjunction \"a\" (and)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cath (кіт)",
                "tair cath",
                "три коти (без мутації тут для порівняння)"
              ],
              [
                "te",
                "coffi a the",
                "кава і чай (t→th)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae hi a chi'n ffrindiau.",
                "Вона і ти — друзі (c→ch)."
              ],
              [
                "Bara a phaned.",
                "Хліб і чашка (чаю) (p→ph)."
              ]
            ]
          }
        ]
      },
      {
        "id": "mutation-triggers-overview",
        "title": "Огляд тригерів мутації — B2",
        "titleEn": "Overview of Mutation Triggers — B2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "table",
            "title": "Приклади тригерів",
            "rows": [
              [
                "y/'r + ж.р. однини",
                "м'яка мутація"
              ],
              [
                "fy (мій)",
                "носова мутація"
              ],
              [
                "a (і), tri/tair (три)",
                "придихова мутація"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Y ferch a'r bachgen.",
                "Дівчина і хлопчик."
              ],
              [
                "Fy nhad a'm mam.",
                "Мій тато і моя мама."
              ]
            ]
          }
        ]
      },
      {
        "id": "definite-article-y-yr-r",
        "title": "Означений артикль y/yr/'r — A1",
        "titleEn": "Definite Article Y/Yr/'R — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль має три форми (y, yr, 'r), обрані за звуком попереднього й наступного слова.",
            "en": {
              "text": "The definite article has three forms (y, yr, 'r), chosen by the surrounding sounds."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "y ci (собака)",
                "цей собака"
              ],
              [
                "yr afal (яблуко)",
                "це яблуко (перед голосною)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r llyfr yn dda.",
                "Книга гарна."
              ],
              [
                "Dw i'n hoffi'r haf.",
                "Мені подобається літо."
              ]
            ]
          }
        ]
      },
      {
        "id": "no-indefinite-article",
        "title": "Відсутність неозначеного артикля — A1",
        "titleEn": "No Indefinite Article — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Валлійська взагалі не має неозначеного артикля — гола форма іменника вже означає \"якийсь\".",
            "en": {
              "text": "Welsh has no indefinite article at all — the bare noun form already means \"a/some\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ci",
                "собака / якийсь собака (без артикля)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae ci gyda fi.",
                "У мене є собака."
              ],
              [
                "Gwelais i fachgen.",
                "Я побачив хлопчика."
              ]
            ]
          }
        ]
      },
      {
        "id": "plural-formation-irregular",
        "title": "Множина — багато різних суфіксів — A2",
        "titleEn": "Plural Formation — Many Different Suffixes — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома різними суфіксами (-au, -iau, -od, -ed) чи навіть зміною внутрішнього голосного, залежно від конкретного іменника, а не одним універсальним правилом.",
            "en": {
              "text": "The plural is formed with several different suffixes (-au, -iau, -od, -ed) or even an internal vowel change, depending on the specific noun, rather than one universal rule."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "llyfr (книга)",
                "llyfrau",
                "книги"
              ],
              [
                "dyn (людина)",
                "dynion",
                "люди"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r llyfrau'n drwm.",
                "Книги важкі."
              ],
              [
                "Roedd dynion yn gweithio.",
                "Люди працювали."
              ]
            ]
          }
        ]
      },
      {
        "id": "grammatical-gender-two-way",
        "title": "Два роди: чоловічий/жіночий — A1",
        "titleEn": "Two Genders: Masculine/Feminine — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід (без середнього) — рід невидимий на самому іменнику, але видимий через мутацію після артикля.",
            "en": {
              "text": "Nouns are masculine or feminine (no neuter) — gender is invisible on the noun itself, but visible through mutation after the article."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "y ci (ч.р., без мутації)",
                "собака"
              ],
              [
                "y gath (ж.р., з мутацією)",
                "кіт"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r ci'n fawr.",
                "Собака великий."
              ],
              [
                "Mae'r gath yn fach.",
                "Кіт маленький."
              ]
            ]
          }
        ]
      },
      {
        "id": "conjugated-prepositions",
        "title": "Прийменники, що відмінюються за особою — B1",
        "titleEn": "Prepositions That Conjugate by Person — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники (gyda \"з\", i \"до\", ar \"на\") відмінюються за особою, як дієслова, — коли додаток займенниковий, він зливається в одне слово з прийменником.",
            "en": {
              "text": "Prepositions (gyda \"with\", i \"to\", ar \"on\") conjugate by person like verbs — when the object is a pronoun, it fuses into one word with the preposition."
            }
          },
          {
            "type": "table",
            "title": "Приклади \"i\" (до)",
            "rows": [
              [
                "i mi",
                "мені"
              ],
              [
                "i ti",
                "тобі"
              ],
              [
                "iddo fe",
                "йому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rhoddodd hi lyfr i mi.",
                "Вона дала мені книгу."
              ],
              [
                "Mae ganddo fe gar.",
                "У нього є машина."
              ]
            ]
          }
        ]
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Вказівні займенники (hwn/hon/hyn) — A1",
        "titleEn": "Demonstratives (Hwn/Hon/Hyn) — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "y llyfr hwn",
                "ця книга (ч.р.)"
              ],
              [
                "y gadair hon",
                "цей стілець (ж.р.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fi biau hwn.",
                "Це моє."
              ],
              [
                "Mae'r mynydd hwnnw'n uchel.",
                "Та гора висока."
              ]
            ]
          }
        ]
      },
      {
        "id": "possessive-mutation-trigger",
        "title": "Присвійні займенники (тригери мутації) — A2",
        "titleEn": "Possessives (Mutation Triggers) — A2",
        "emoji": "🗝️",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники стоять перед іменником і кожен викликає свій тип мутації — fy (мій) носову, dy (твій) м'яку.",
            "en": {
              "text": "Possessives stand before the noun and each triggers its own mutation type — fy (my) nasal, dy (your) soft."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "fy nhŷ (мій дім, носова)",
                "dy dŷ (твій дім, м'яка)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Fy nghath i yw hon.",
                "Це мій кіт."
              ],
              [
                "Dy gar di yw e?",
                "Це твоя машина?"
              ]
            ]
          }
        ]
      },
      {
        "id": "relative-pronoun-a-y",
        "title": "Відносне слово (a/y) — B1",
        "titleEn": "Relative Particle (A/Y) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне означальне речення вводиться часткою a (для підмета/прямого додатка) чи y (для непрямих зв'язків) замість окремого слова \"який/що\".",
            "en": {
              "text": "A relative clause is introduced with the particle a (for subject/direct object) or y (for oblique links), rather than a separate word for \"who/which\"."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "y dyn a ddaeth ddoe",
                "людина, яка прийшла вчора"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Y llyfr dw i'n ei ddarllen sy'n dda.",
                "Книга, яку я читаю, гарна."
              ],
              [
                "Y tŷ y byddaf i'n byw ynddo.",
                "Дім, у якому я житиму."
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
                "pwy",
                "хто"
              ],
              [
                "beth",
                "що"
              ],
              [
                "ble",
                "де"
              ],
              [
                "pryd",
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
                "Beth yw dy enw di?",
                "Як тебе звати?"
              ],
              [
                "Ble wyt ti'n byw?",
                "Де ти живеш?"
              ]
            ]
          }
        ]
      },
      {
        "id": "reflexive-construction",
        "title": "Зворотна конструкція (fy hun) — B1",
        "titleEn": "Reflexive Construction (Fy Hun) — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотне значення \"себе\" виражається присвійним займенником плюс hun (\"сам\").",
            "en": {
              "text": "The reflexive meaning \"self\" is expressed with a possessive plus hun (\"self\")."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "fy hun",
                "я сам/себе"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n gweld fy hun yn y drych.",
                "Я бачу себе в дзеркалі."
              ],
              [
                "Wnaeth e frifo ei hun.",
                "Він поранив себе."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-cardinal-traditional-vigesimal",
        "title": "Традиційна двадцяткова система рахунку — B1",
        "titleEn": "Traditional Vigesimal (Base-20) System — B1",
        "emoji": "🧮",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційна система числівників будується на основі 20 (ugain), подібно до французької чи бретонської: 40 буквально \"два-двадцять\".",
            "en": {
              "text": "The traditional numeral system is built on a base of 20 (ugain), similar to French or Breton: 40 is literally \"two-twenty\"."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "ugain",
                "20"
              ],
              [
                "deugain",
                "40 (2×20)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n ddeugain oed.",
                "Мені сорок років."
              ],
              [
                "Trigain o bunnoedd.",
                "Шістдесят фунтів."
              ]
            ]
          }
        ]
      },
      {
        "id": "numerals-decimal-modern",
        "title": "Сучасна десяткова система — A2",
        "titleEn": "Modern Decimal System — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "intro",
            "text": "Поряд з традиційною двадцятковою системою в сучасному вжитку (математика, телефони) паралельно існує проста десяткова система числівників.",
            "en": {
              "text": "Alongside the traditional vigesimal system, a simple decimal numeral system exists in parallel for modern use (math, phone numbers)."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "un deg (10, десятк.)",
                "деc ugain (20, традиц.) — те саме число"
              ],
              [
                "pedwar deg (40, десятк.)",
                "deugain (40, традиц.) — обидва вживаються"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Rhif ffôn: dau, tri, pedwar.",
                "Номер телефону: два, три, чотири."
              ],
              [
                "Pedwar deg mlynedd.",
                "Сорок років (сучасна форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "numeral-noun-agreement",
        "title": "Однина іменника після числівника — A2",
        "titleEn": "Singular Noun After Numerals — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Після числівника іменник зазвичай залишається в однині, а не переходить у множину.",
            "en": {
              "text": "After a numeral the noun usually stays singular, rather than switching to the plural."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "dau gi",
                "два собаки (буквально: два собака)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Tri llyfr sydd 'da fi.",
                "У мене три книги."
              ],
              [
                "Pum mlynedd yn ôl.",
                "П'ять років тому."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-order-vso-strict",
        "title": "Строгий порядок слів VSO — A1",
        "titleEn": "Strict VSO Word Order — A1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок — присудок-підмет-додаток (VSO), дотримується жорсткіше, ніж у бретонській, — дієслово майже завжди на першому місці.",
            "en": {
              "text": "The basic order is verb-subject-object (VSO), maintained more strictly than in Breton — the verb is almost always first."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Mae'r bachgen yn darllen llyfr.",
                "Хлопчик читає книгу (буквально: є хлопчик у-читанні книги)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r fam yn coginio bwyd.",
                "Мама готує їжу."
              ],
              [
                "Aeth y plant i'r ysgol.",
                "Діти пішли до школи."
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
                "a/ac",
                "і, та"
              ],
              [
                "ond",
                "але"
              ],
              [
                "neu",
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
                "Fi a ti yw ffrindiau.",
                "Я і ти — друзі."
              ],
              [
                "Dw i eisiau mynd, ond does dim amser 'da fi.",
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
                "achos",
                "тому що"
              ],
              [
                "os",
                "якщо"
              ],
              [
                "pan",
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
                "Dw i'n hapus achos dest ti.",
                "Я радий, тому що ти прийшов."
              ],
              [
                "Pan fydda i'n rhydd, ffonia i.",
                "Коли буду вільний, подзвоню."
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
                "llawer",
                "багато"
              ],
              [
                "ychydig",
                "мало"
              ],
              [
                "rhai",
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
                "Mae llawer o lyfrau 'da fi.",
                "У мене багато книг."
              ],
              [
                "Rho ychydig o ddŵr i mi.",
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
                "dydd Llun",
                "понеділок"
              ],
              [
                "dydd Sadwrn",
                "субота"
              ],
              [
                "dydd Sul",
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
                "Heddiw yw dydd Llun.",
                "Сьогодні понеділок."
              ],
              [
                "Dw i'n gorffwys ar ddydd Sul.",
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
                "Ionawr",
                "січень"
              ],
              [
                "Mai",
                "травень"
              ],
              [
                "Rhagfyr",
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
                "Mae fy mhen-blwydd i ym mis Mai.",
                "Мій день народження в травні."
              ],
              [
                "Heddiw yw'r degfed o Ionawr.",
                "Сьогодні десяте січня."
              ]
            ]
          }
        ]
      },
      {
        "id": "telling-time",
        "title": "Час — A2",
        "titleEn": "Telling Time — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Faint o'r gloch yw hi?",
                "Котра година?"
              ],
              [
                "Mae'n dri o'r gloch.",
                "Третя година."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Wela i di am chwech o'r gloch.",
                "Зустрінемось о шостій."
              ],
              [
                "Mae'n hanner dydd nawr.",
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
                "Helo",
                "Привіт"
              ],
              [
                "Diolch",
                "Дякую"
              ],
              [
                "Hwyl fawr",
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
                "Sut wyt ti?",
                "Як справи?"
              ],
              [
                "Diolch yn fawr.",
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
                "Mae hi'n heulog.",
                "Сонячно."
              ],
              [
                "Mae hi'n bwrw glaw.",
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
                "Mae hi'n oer heddiw.",
                "Сьогодні холодно."
              ],
              [
                "Mae hi'n boeth iawn.",
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
                "torri dy galon",
                "розбити серце"
              ],
              [
                "cael y llaw uchaf",
                "здобути перевагу (буквально: отримати вищу руку)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Torrodd fy nghalon.",
                "Це розбило моє серце."
              ],
              [
                "Cafodd y llaw uchaf yn y drafodaeth.",
                "Він здобув перевагу в дискусії."
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
                "yn gyflym",
                "швидко"
              ],
              [
                "yn araf",
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
                "Mae e'n rhedeg yn gyflym.",
                "Він швидко бігає."
              ],
              [
                "Siarada'n arafach, os gwelwch yn dda.",
                "Говоріть повільніше, будь ласка."
              ]
            ]
          }
        ]
      },
      {
        "id": "word-formation-suffixes",
        "title": "Словотвірні суфікси — B1",
        "titleEn": "Word-Formation Suffixes — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "-deb/-der",
                "утворює абстрактні іменники (rhydd→rhyddid, вільний→свобода)"
              ],
              [
                "-wr/-ydd",
                "утворює назви професій (dysgu→athro, навчати→вчитель)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae rhyddid yn bwysig.",
                "Свобода важлива."
              ],
              [
                "Mae e'n athro.",
                "Він учитель."
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
                "llaw (рука) + oriawr (годинник)",
                "llawriau (наручний годинник, розм.)"
              ],
              [
                "ysgol (школа) + prif (головний)",
                "prifysgol (університет)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n mynd i'r brifysgol.",
                "Я йду в університет."
              ],
              [
                "Mae'r oriawr yn newydd.",
                "Годинник новий."
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
                "gwanwyn",
                "весна"
              ],
              [
                "haf",
                "літо"
              ],
              [
                "hydref",
                "осінь"
              ],
              [
                "gaeaf",
                "зима"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'n boeth yn yr haf.",
                "Влітку жарко."
              ],
              [
                "Dw i'n hoffi'r hydref.",
                "Мені подобається осінь."
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
                "Faint yw e?",
                "Скільки коштує?"
              ],
              [
                "Mil o bunnoedd.",
                "Тисяча фунтів."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r llyfr hwn yn ugain punt.",
                "Ця книга коштує двадцять фунтів."
              ],
              [
                "Mae'n ddrud iawn.",
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
                "Dw i'n meddwl bod...",
                "Я думаю, що..."
              ],
              [
                "Yn fy marn i...",
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
                "Dw i'n meddwl dy fod ti'n iawn.",
                "Я думаю, що ти правий."
              ],
              [
                "Yn fy marn i, mae'n syniad da.",
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
                "heddiw / yfory / ddoe",
                "сьогодні / завтра / вчора"
              ],
              [
                "nawr / wedyn",
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
                "Wela i di yfory.",
                "Побачимось завтра."
              ],
              [
                "Dw i'n brysur nawr.",
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
                "rhywun",
                "хтось"
              ],
              [
                "rhywbeth",
                "щось"
              ],
              [
                "neb",
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
                "Ffoniodd rhywun fi.",
                "Хтось мені подзвонив."
              ],
              [
                "Clywais i rywbeth.",
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
                "O na!",
                "Ой!"
              ],
              [
                "Bendigedig!",
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
                "O, mae'n hyfryd!",
                "Ой, як гарно!"
              ],
              [
                "Bendigedig, newyddion da!",
                "Чудово, гарна новина!"
              ]
            ]
          }
        ]
      },
      {
        "id": "existential-mae",
        "title": "Конструкція \"є/немає\" (mae/does dim) — A1",
        "titleEn": "Existential \"There Is/Isn't\" (Mae/Does Dim) — A1",
        "emoji": "📦",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mae dŵr 'na.",
                "Є вода."
              ],
              [
                "Does dim amser.",
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
                "Mae llawer o bobl yma.",
                "Тут багато людей."
              ],
              [
                "Does dim siop yma.",
                "Тут немає магазину."
              ]
            ]
          }
        ]
      },
      {
        "id": "diminutives",
        "title": "Пестливі форми (-yn/-en) — B1",
        "titleEn": "Diminutives (-Yn/-En) — B1",
        "emoji": "🥰",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "merch (дівчина)",
                "merchen",
                "дівчинка (ласк.)"
              ],
              [
                "ci (собака)",
                "cippyn",
                "собачка (ласк.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae hi'n ferchen fach neis.",
                "Вона мила маленька дівчинка."
              ],
              [
                "Mae'r cippyn yn annwyl.",
                "Собачка милий."
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
                "Mr",
                "пан"
              ],
              [
                "Mrs",
                "пані"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Bore da, Mr Jones.",
                "Доброго ранку, пане Джонс."
              ],
              [
                "Esgusodwch fi, Mrs Evans.",
                "Вибачте, пані Еванс."
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
                "A fo ben, bid bont.",
                "Хто хоче бути головним, хай стане мостом (лідерство — це служіння)."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Nid aur popeth melyn.",
                "Не все золото, що блищить."
              ],
              [
                "Mewn undod mae nerth.",
                "У єдності сила."
              ]
            ]
          }
        ]
      },
      {
        "id": "loanwords-english",
        "title": "Запозичення з англійської — B1",
        "titleEn": "English Loanwords — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Через тривале англійське панування й повсякденний білінгвізм у сучасну валлійську потрапила чимала кількість слів з англійської, часто адаптованих до валлійської орфографії.",
            "en": {
              "text": "Due to long English rule and everyday bilingualism, a fair number of English words have entered modern Welsh, often adapted to Welsh spelling."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tacsi (з англ. \"taxi\")",
                "таксі"
              ],
              [
                "ffôn (з англ. \"phone\")",
                "телефон"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i angen ffonio tacsi.",
                "Мені треба викликати таксі."
              ],
              [
                "Ble mae fy ffôn i?",
                "Де мій телефон?"
              ]
            ]
          }
        ]
      },
      {
        "id": "adjective-order",
        "title": "Прикметник після іменника — A1",
        "titleEn": "Adjective After the Noun — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть ПІСЛЯ іменника, на відміну від української.",
            "en": {
              "text": "The adjective usually stands AFTER the noun, unlike Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "tŷ mawr",
                "великий дім"
              ],
              [
                "merch bert",
                "гарна дівчина"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae ci bach 'da fi.",
                "У мене маленький собака."
              ],
              [
                "Mae'r ferch bert yn canu.",
                "Гарна дівчина співає."
              ]
            ]
          }
        ]
      },
      {
        "id": "comparative-superlative",
        "title": "Ступені порівняння (-ach/-af) — A2",
        "titleEn": "Comparative & Superlative (-Ach/-Af) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється суфіксом -ach, найвищий — суфіксом -af.",
            "en": {
              "text": "The comparative is formed with the suffix -ach, the superlative with -af."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "mawr (великий)",
                "mwy",
                "більший (нерегулярно)"
              ],
              [
                "mawr (великий)",
                "mwyaf",
                "найбільший (нерегулярно)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r tŷ hwn yn fwy.",
                "Цей дім більший."
              ],
              [
                "Hi yw'r glyfaraf yn y dosbarth.",
                "Вона найрозумніша в класі."
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
                "cyntaf",
                "перший"
              ],
              [
                "ail",
                "другий"
              ],
              [
                "trydydd",
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
                "Dyma fy llyfr cyntaf.",
                "Це моя перша книга."
              ],
              [
                "Enillodd yr ail wobr.",
                "Він виграв другий приз."
              ]
            ]
          }
        ]
      },
      {
        "id": "vocative-particle",
        "title": "Кличне звертання — A2",
        "titleEn": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "Mam!",
                "Мамо!"
              ],
              [
                "Gwranda, Sion!",
                "Слухай, Сіоне!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mam, dere yma!",
                "Мамо, іди сюди!"
              ],
              [
                "Syr, helpwch fi.",
                "Пане, допоможіть мені."
              ]
            ]
          }
        ]
      },
      {
        "id": "north-south-dialect-vocabulary",
        "title": "Північний і південний діалекти — лексика — B1",
        "titleEn": "North & South Dialects — Vocabulary — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Північний і південний Уельс мають різні повсякденні слова для тих самих понять — наприклад, \"зараз\" північна форма і південна форма помітно різняться, хоча обидві широко зрозумілі.",
            "en": {
              "text": "North and South Wales have different everyday words for the same concepts — for instance, \"now\" has a distinct northern and southern form, though both are widely understood."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Північ: rŵan",
                "зараз"
              ],
              [
                "Південь: nawr",
                "зараз"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n mynd rŵan.",
                "Я йду зараз (північний варіант)."
              ],
              [
                "Dw i'n mynd nawr.",
                "Я йду зараз (південний варіант)."
              ]
            ]
          }
        ]
      },
      {
        "id": "focus-fronting-emphasis",
        "title": "Винесення елемента на початок для наголосу — B1",
        "titleEn": "Fronting for Emphasis — B1",
        "emoji": "🔝",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча базовий порядок VSO, елемент, на якому робиться наголос, можна винести на найперше місце речення, часто зі спеціальною формою \"це\".",
            "en": {
              "text": "Although the base order is VSO, the emphasized element can be fronted to the very start of the sentence, often with a special \"it is\" form."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Fi sy'n mynd.",
                "Це я йду (наголос на \"я\")."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Y llyfr dw i'n ei ddarllen.",
                "Книгу — я читаю."
              ],
              [
                "Heddiw mae hi'n dod.",
                "Сьогодні вона приходить."
              ]
            ]
          }
        ]
      },
      {
        "id": "object-pronoun-position",
        "title": "Позиція займенникового додатка — B1",
        "titleEn": "Object Pronoun Position — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Займенниковий додаток при verbnoun часто ставиться перед ним у формі присвійного (\"його читання\" = \"читати його\"), а не після дієслова.",
            "en": {
              "text": "A pronoun object with a verbnoun is often placed before it in possessive form (\"his reading\" = \"reading him\"), rather than after the verb."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "ei ddarllen e",
                "читати це (буквально: його читання)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Dw i'n ei weld e.",
                "Я його бачу."
              ],
              [
                "Maen nhw'n ei charu hi.",
                "Вони люблять її."
              ]
            ]
          }
        ]
      },
      {
        "id": "verb-noun-vs-finite-verb-distinction",
        "title": "Дієслівна форма проти синтетичного дієслова — B2",
        "titleEn": "Verbnoun vs. Synthetic Verb Distinction — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча більшість часів перифрастичні, кожне дієслово все ще має повну синтетичну парадигму (як gwneud, mynd), яка вживається у формальному чи літературному стилі замість bod-конструкції.",
            "en": {
              "text": "Although most tenses are periphrastic, every verb still has a full synthetic paradigm (like gwneud, mynd), used in formal or literary style instead of the bod construction."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Dw i'n mynd. (розмовна)",
                "Af i. (літературна, синтетична)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Cerddaf i'r ysgol.",
                "Я йду до школи (літературно)."
              ],
              [
                "Ysgrifennaf lythyr.",
                "Я пишу листа (літературно)."
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
        "id": "full-mutation-consonant-table",
        "title": "Повна таблиця дев'яти мутовних приголосних — B2",
        "titleEn": "The Full Table of Nine Mutable Consonants — B2",
        "emoji": "🗂️",
        "sections": [
          {
            "type": "intro",
            "text": "Дев'ять приголосних (c, p, t, b, d, g, m, ll, rh) мають власний, часто унікальний набір із трьох мутованих форм — це не просте \"пом'якшення\", а система, яку потрібно заучувати цілком, оскільки правила не завжди симетричні (наприклад, ll і rh мутуються лише в м'якому типі).",
            "en": {
              "text": "Nine consonants (c, p, t, b, d, g, m, ll, rh) each have their own, often unique set of three mutated forms — this isn't simple \"softening\" but a system that must be memorized in full, since the rules aren't always symmetrical (e.g. ll and rh mutate only in the soft type)."
            }
          },
          {
            "type": "table",
            "title": "Приклад асиметрії",
            "rows": [
              [
                "ll → l (лише м'яка)",
                "llong (корабель) → y long"
              ],
              [
                "c → g/ngh/ch (усі три)",
                "cath (кіт) → усі три форми існують"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r long yn fawr.",
                "Корабель великий (ll→l)."
              ],
              [
                "Fy nghath i yw hon.",
                "Це мій кіт (c→ngh)."
              ]
            ]
          }
        ]
      },
      {
        "id": "north-south-welsh-divergence-deep",
        "title": "Глибша розбіжність між північним і південним варіантами — B2",
        "titleEn": "Deeper North-South Welsh Divergence — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Розбіжність між північним і південним Уельсом торкається не лише окремих слів, а й вимови голосних та навіть деяких закінчень дієслова \"бути\" — носії часто одразу впізнають регіон співрозмовника з першого речення.",
            "en": {
              "text": "The divergence between North and South Wales touches not just individual words but vowel pronunciation and even some \"to be\" verb endings — speakers often instantly recognize a conversation partner's region from the first sentence."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "Північ: 'da fi → gyda fi (менш стягнене)",
                "у мене є"
              ],
              [
                "Південь: 'da fi (стягнена форма)",
                "у мене є"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae car gyda fi.",
                "У мене є машина (північна форма)."
              ],
              [
                "Mae car 'da fi.",
                "У мене є машина (південна форма)."
              ]
            ]
          }
        ]
      },
      {
        "id": "welsh-official-status-revival-success",
        "title": "Офіційний статус і успіх відродження мови — B1",
        "titleEn": "Official Status & Revival Success — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від бретонської, корсиканської чи чаморро, валлійська має повний офіційний статус в Уельсі (Акт про валлійську мову), обов'язкове вивчення в школах до 16 років і активне державне мовлення — приклад однієї з найуспішніших ревіталізацій кельтської мови у світі.",
            "en": {
              "text": "Unlike Breton, Corsican, or Chamorro, Welsh has full official status in Wales (the Welsh Language Act), mandatory teaching in schools up to age 16, and active state broadcasting — a rare example of one of the most successful Celtic-language revitalizations in the world."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "S4C",
                "телеканал повністю валлійською мовою"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "Mae'r Gymraeg yn iaith swyddogol.",
                "Валлійська — офіційна мова."
              ],
              [
                "Mae plant yn dysgu Cymraeg yn yr ysgol.",
                "Діти вчать валлійську в школі."
              ]
            ]
          }
        ]
      }
    ]
  }
];
