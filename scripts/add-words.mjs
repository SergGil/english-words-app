// scripts/add-words.mjs
// Merges NEW_WORDS into data/words.js, deduplicates, sorts alphabetically, writes back.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const wordsPath = join(__dir, '../data/words.js');

// ── New words to add ─────────────────────────────────────────
// Format: [english, ukrainian, example_en, example_ua, ipa]
const NEW_WORDS = [
  ["cut down on","скорочувати, зменшувати","She decided to cut down on sugar and caffeine this month.","Цього місяця вона вирішила скоротити вживання цукру й кофеїну.","/kʌt daʊn ɒn/"],
  ["get along with","ладнати з кимось","He gets along with almost everyone in the office.","Він ладнає майже з усіма в офісі.","/ɡet əˈlɒŋ wɪð/"],
  ["log in","увійти в систему (онлайн)","You need to log in with your email and password.","Тобі потрібно увійти за допомогою електронної пошти та пароля.","/lɒɡ ɪn/"],
  ["warm up","розігріватися, розминатися","Always warm up before you start exercising.","Завжди розминайся перед тим, як почати тренування.","/wɔːrm ʌp/"],
  ["watch out","бути обережним, стерегтися","Watch out — the floor is wet and slippery!","Обережно — підлога мокра і слизька!","/wɒtʃ aʊt/"],
  ["weigh up","зважувати, оцінювати","Let's weigh up the pros and cons before deciding.","Давай зважимо всі за і проти, перш ніж вирішувати.","/weɪ ʌp/"],
  ["break the ice","розрядити обстановку, зав'язати розмову","He told a joke to break the ice at the meeting.","Він розповів жарт, щоб розрядити обстановку на зустрічі.","/breɪk ði aɪs/"],
  ["hit the books","засісти за навчання","I have an exam tomorrow, so I need to hit the books tonight.","У мене завтра іспит, тож сьогодні треба засісти за навчання.","/hɪt ðə bʊks/"],
  ["keep an eye on","наглядати, стежити за","Could you keep an eye on my bag while I get coffee?","Чи не міг би ти наглянути за моєю сумкою, поки я візьму каву?","/kiːp ən aɪ ɒn/"],
  ["let the cat out of the bag","видати секрет, проговоритися","She accidentally let the cat out of the bag about the surprise party.","Вона випадково видала секрет про вечірку-сюрприз.","/let ðə kæt aʊt əv ðə bæɡ/"],
  ["make ends meet","зводити кінці з кінцями","It's hard to make ends meet on such a small salary.","Важко зводити кінці з кінцями на таку маленьку зарплату.","/meɪk endz miːt/"],
  ["on the same page","мати спільне розуміння, бути на одній хвилі","Let's make sure we're all on the same page before we start.","Давайте переконаємося, що всі ми на одній хвилі, перш ніж почати.","/ɒn ðə seɪm peɪdʒ/"],
  ["speak of the devil","про вовка промовка","Speak of the devil — here comes Tom right now!","Про вовка промовка — а ось і Том іде!","/spiːk əv ðə ˈdevl/"],
  ["gate","ворота, хвіртка, вихід (в аеропорту)","Please proceed to gate twelve for boarding.","Будь ласка, пройдіть до виходу номер дванадцять для посадки.","/ɡeɪt/"],
  ["staircase","сходи, сходовий проліт","The old staircase creaked with every step.","Старі сходи скрипіли з кожним кроком.","/ˈsteəkeɪs/"],
  ["hallway","коридор, передпокій","She left her shoes by the door in the hallway.","Вона залишила взуття біля дверей у коридорі.","/ˈhɔːlweɪ/"],
  ["mouse pad","килимок для миші","He bought a new mouse pad with a cat picture on it.","Він купив новий килимок для миші з малюнком кота.","/maʊs pæd/"],
  ["scanner","сканер","We need a scanner to digitise these old documents.","Нам потрібен сканер, щоб оцифрувати ці старі документи.","/ˈskænər/"],
  ["spoonful","повна ложка (кількість)","Add a spoonful of honey to your tea.","Додай ложку меду в свій чай.","/ˈspuːnfʊl/"],
  ["teaspoon","чайна ложка","Stir in one teaspoon of salt.","Розмішай одну чайну ложку солі.","/ˈtiːspuːn/"],
  ["tablespoon","столова ложка","The recipe calls for two tablespoons of olive oil.","Рецепт вимагає двох столових ложок оливкової олії.","/ˈteɪblspuːn/"],
  ["wrapper","обгортка, упаковка","He threw the candy wrapper into the bin.","Він викинув обгортку від цукерки у смітник.","/ˈræpər/"],
  ["blender","блендер","She used a blender to make a fresh fruit smoothie.","Вона скористалася блендером, щоб зробити свіжий фруктовий смузі.","/ˈblendər/"],
  ["toaster","тостер","The bread popped out of the toaster, perfectly golden.","Хліб вискочив із тостера, ідеально підсмажений.","/ˈtəʊstər/"],
  ["overjoyed","надзвичайно радісний, щасливий","She was overjoyed when she heard the good news.","Вона була надзвичайно рада, коли почула гарну новину.","/ˌəʊvərˈdʒɔɪd/"],
  ["heartbroken","убитий горем, з розбитим серцем","He was heartbroken after his best friend moved abroad.","Він був убитий горем, коли його найкращий друг переїхав за кордон.","/ˈhɑːrtbrəʊkən/"],
  ["homesick","той, хто сумує за домом","She felt homesick during her first week at university.","Вона тужила за домом протягом першого тижня в університеті.","/ˈhəʊmsɪk/"],
  ["nostalgic","ностальгійний, той, хто сумує за минулим","Old photographs always make him feel nostalgic.","Старі фотографії завжди викликають у нього ностальгію.","/nɒˈstældʒɪk/"],
  ["envious","заздрісний","She felt a little envious of her sister's new car.","Вона трохи заздрила новій машині своєї сестри.","/ˈenviəs/"],
  ["resentful","обурений, незадоволений","He grew resentful after being passed over for the promotion.","Він зробився обуреним, коли його обійшли з підвищенням.","/rɪˈzentfʊl/"],
  ["apathetic","байдужий, апатичний","Many young people seem apathetic about local elections.","Багато молодих людей здаються байдужими до місцевих виборів.","/ˌæpəˈθetɪk/"],
  ["restless","неспокійний, метушливий","The children grew restless during the long car journey.","Діти стали неспокійними під час довгої поїздки на машині.","/ˈrestləs/"],
  ["grumpy","сварливий, роздратований","Don't mind him — he's always grumpy before breakfast.","Не зважай на нього — він завжди сварливий перед сніданком.","/ˈɡrʌmpi/"],
  ["sociable","товариський, комунікабельний","She's a sociable person who loves meeting new people.","Вона товариська людина, яка любить знайомитися з новими людьми.","/ˈsəʊʃəbl/"],
  ["arrogant","зарозумілий, пихатий","His arrogant attitude annoyed most of his colleagues.","Його зарозуміла поведінка дратувала більшість колег.","/ˈærəɡənt/"],
  ["stingy","скупий, жадібний","He's too stingy to ever buy anyone a coffee.","Він надто скупий, щоб коли-небудь купити комусь каву.","/ˈstɪndʒi/"],
  ["tactful","тактовний, делікатний","She gave tactful feedback so as not to upset him.","Вона дала тактовний відгук, щоб не засмутити його.","/ˈtæktfʊl/"],
  ["blunt","прямий, різкий (про манеру говорити); тупий (про предмет)","He's known for being blunt about what he really thinks.","Він відомий тим, що прямо каже, що насправді думає.","/blʌnt/"],
  ["gullible","довірливий, легковірний","Don't be so gullible — not everything online is true.","Не будь таким довірливим — не все в інтернеті правда.","/ˈɡʌləbl/"],
  ["bookmark","закладка (в браузері або книзі)","I added the article to my bookmarks to read later.","Я додав статтю до закладок, щоб прочитати пізніше.","/ˈbʊkmɑːrk/"],
  ["hyperlink","гіперпосилання","Click the hyperlink to open the full article.","Натисни на гіперпосилання, щоб відкрити повну статтю.","/ˈhaɪpərlɪŋk/"],
  ["spreadsheet","електронна таблиця","She created a spreadsheet to track the monthly budget.","Вона створила електронну таблицю для відстеження місячного бюджету.","/ˈspredʃiːt/"],
  ["cloud storage","хмарне сховище","All our photos are backed up to cloud storage.","Усі наші фотографії резервно зберігаються у хмарному сховищі.","/klaʊd ˈstɔːrɪdʒ/"],
  ["notification","сповіщення, повідомлення","I turned off notifications so I could focus on work.","Я вимкнув сповіщення, щоб зосередитися на роботі.","/ˌnəʊtɪfɪˈkeɪʃn/"],
  ["livestream","пряма трансляція","Thousands of fans watched the concert livestream online.","Тисячі шанувальників дивилися пряму трансляцію концерту онлайн.","/ˈlaɪvstriːm/"],
  ["emoji","емодзі","She replied to the message with a smiling emoji.","Вона відповіла на повідомлення посмішкою-емодзі.","/ɪˈməʊdʒi/"],
  ["meme","мем","He shared a funny meme about Monday mornings.","Він поділився смішним мемом про ранок понеділка.","/miːm/"],
  ["wifi","вай-фай, бездротовий інтернет","Is there free wifi available in this café?","У цьому кафе є безкоштовний вай-фай?","/ˈwaɪfaɪ/"],
  ["webcam","вебкамера","He bought a new webcam for his video calls.","Він купив нову вебкамеру для відеодзвінків.","/ˈwebkæm/"],
  ["touchscreen","сенсорний екран","The new tablet has a large, bright touchscreen.","Новий планшет має великий яскравий сенсорний екран.","/ˈtʌtʃskriːn/"],
  ["passport control","паспортний контроль","We waited almost an hour at passport control.","Ми чекали майже годину на паспортному контролі.","/ˈpɑːspɔːrt kənˈtrəʊl/"],
  ["departure lounge","зала очікування (в аеропорту)","We had a coffee in the departure lounge before the flight.","Ми випили кави в залі очікування перед польотом.","/dɪˈpɑːrtʃər laʊndʒ/"],
  ["currency exchange","обмін валют","You can find a currency exchange office near the station.","Біля вокзалу можна знайти пункт обміну валют.","/ˈkʌrənsi ɪksˈtʃeɪndʒ/"],
  ["recycling","переробка відходів, рециклінг","Our town has introduced a new recycling programme.","Наше місто запровадило нову програму переробки відходів.","/riːˈsaɪklɪŋ/"],
  ["leftovers","залишки їжі","We had the leftovers from dinner for lunch the next day.","Наступного дня ми їли на обід залишки вчорашньої вечері.","/ˈleftəʊvərz/"],
  ["takeaway","їжа на винос","Let's just order a takeaway tonight — I'm too tired to cook.","Давай просто замовимо їжу на винос сьогодні — я надто втомлений готувати.","/ˈteɪkəweɪ/"],
  ["fast food","фастфуд, швидка їжа","Eating fast food too often isn't good for your health.","Часто їсти фастфуд шкідливо для здоров'я.","/fɑːst fuːd/"],
  ["gluten-free","безглютеновий","The bakery now offers a range of gluten-free products.","Пекарня тепер пропонує асортимент безглютенових продуктів.","/ˈɡluːtən friː/"],
  ["nutritious","поживний, корисний","A nutritious breakfast helps you concentrate at school.","Поживний сніданок допомагає зосередитися в школі.","/njuːˈtrɪʃəs/"],
  ["spoiled","зіпсований (про їжу); розпещений (про людину)","Throw out the milk — it's spoiled.","Викинь молоко — воно зіпсувалося.","/spɔɪld/"],
  ["crispy","хрусткий","She loves the crispy skin on roasted chicken.","Вона любить хрустку шкірку на печеній курці.","/ˈkrɪspi/"],
  ["exhausted","виснажений, дуже втомлений","After the marathon, she felt completely exhausted.","Після марафону вона почувалася абсолютно виснаженою.","/ɪɡˈzɔːstɪd/"],
  ["wellbeing","благополуччя, добробут","The company introduced new programmes to support staff wellbeing.","Компанія запровадила нові програми для підтримки благополуччя працівників.","/ˌwelˈbiːɪŋ/"],
  ["paradox","парадокс","It's a paradox that the busiest people often have the most free time.","Це парадокс, що найзайнятіші люди часто мають найбільше вільного часу.","/ˈpærədɒks/"],
  ["tendency","тенденція, схильність","He has a tendency to forget people's names.","У нього є схильність забувати імена людей.","/ˈtendənsi/"],
  ["headteacher","директор школи","The headteacher welcomed the new students at assembly.","Директор школи привітав нових учнів на лінійці.","/ˌhedˈtiːtʃər/"],
  ["classmate","однокласник, одногрупник","She still keeps in touch with her old classmates.","Вона досі підтримує зв'язок зі своїми колишніми однокласниками.","/ˈklɑːsmeɪt/"],
  ["citizen","громадянин","Every citizen has the right to vote in elections.","Кожен громадянин має право голосувати на виборах.","/ˈsɪtɪzən/"],
  ["constituency","виборчий округ","The politician has represented this constituency for ten years.","Цей політик представляє цей виборчий округ упродовж десяти років.","/kənˈstɪtjuənsi/"],
  ["sanctions","санкції","The international community imposed sanctions on the regime.","Міжнародна спільнота запровадила санкції проти режиму.","/ˈsæŋkʃənz/"],
  ["minority","меншість","The committee listened carefully to the views of the minority.","Комітет уважно вислухав думку меншості.","/maɪˈnɒrəti/"],
  ["equality","рівність","The organisation campaigns for gender equality at work.","Організація виступає за гендерну рівність на роботі.","/ɪˈkwɒləti/"],
  ["activism","активізм, громадська активність","Her environmental activism inspired many young people.","Її екологічний активізм надихнув багатьох молодих людей.","/ˈæktɪvɪzəm/"],
  ["newlywed","молодята, новоодружений","The newlyweds spent their honeymoon in Italy.","Молодята провели медовий місяць в Італії.","/ˈnjuːliwed/"],
  ["cashback","повернення частини коштів (кешбек)","This credit card offers two percent cashback on purchases.","Ця кредитна картка пропонує два відсотки кешбеку за покупки.","/ˈkæʃbæk/"],
  ["overcast","похмурий, хмарний (про небо)","The sky was overcast all morning, but it didn't rain.","Небо було хмарним усю ранок, але дощу не було.","/ˌəʊvərˈkɑːst/"],
  ["teammate","товариш по команді","He passed the ball to his teammate at the last second.","Він передав м'яч товаришу по команді в останню секунду.","/ˈtiːmmeɪt/"],
  ["punctual","пунктуальний","Please be punctual — the meeting starts at nine sharp.","Будь ласка, будь пунктуальним — нарада починається рівно о дев'ятій.","/ˈpʌŋktʃuəl/"],
  ["courteous","ввічливий, чемний","The hotel staff were courteous and helpful throughout our stay.","Персонал готелю був ввічливим і люб'язним протягом усього нашого перебування.","/ˈkɜːrtiəs/"],
  ["considerate","уважний до інших, дбайливий","It was considerate of you to call and let us know you'd be late.","З твого боку було дуже уважно подзвонити й попередити, що ти запізнишся.","/kənˈsɪdərət/"],
  ["tolerant","толерантний, терпимий","A good teacher is tolerant of different opinions.","Хороший вчитель толерантний до різних думок.","/ˈtɒlərənt/"],
  ["assertive","упевнений у собі, наполегливий (без агресії)","She learned to be more assertive when negotiating her salary.","Вона навчилася бути більш упевненою у собі, обговорюючи свою зарплату.","/əˈsɜːrtɪv/"],
  ["impulsive","імпульсивний, поривчастий","Buying that car was a rather impulsive decision.","Покупка тієї машини була доволі імпульсивним рішенням.","/ɪmˈpʌlsɪv/"],
  ["thrifty","ощадливий, бережливий","Being thrifty helped them save enough for a house deposit.","Ощадливість допомогла їм накопичити достатньо на завдаток за будинок.","/ˈθrɪfti/"],
  ["frugal","скромний, ощадливий (особливо щодо витрат)","They live a frugal lifestyle so they can travel more.","Вони живуть скромно, щоб мати змогу більше подорожувати.","/ˈfruːɡl/"],
  ["extravagant","екстравагантний, марнотратний","He's known for throwing extravagant birthday parties.","Він відомий тим, що влаштовує екстравагантні дні народження.","/ɪkˈstrævəɡənt/"],
  ["flamboyant","яскравий, показний, екстравагантний","The singer is famous for his flamboyant stage costumes.","Співак відомий своїми яскравими сценічними костюмами.","/flæmˈbɔɪənt/"],
  ["meek","смиренний, лагідний, покірний","She seemed meek at first, but she's actually very determined.","Спочатку вона здавалася лагідною, та насправді вона дуже рішуча.","/miːk/"],
  ["workaround","обхідний шлях, тимчасове рішення","The IT team found a workaround until the system was fixed.","ІТ-команда знайшла тимчасове рішення, поки систему не полагодили.","/ˈwɜːrkəraʊnd/"],
  ["comeback","повернення (до успіху чи популярності)","The band made a surprising comeback after years of silence.","Гурт несподівано повернувся на сцену після років мовчання.","/ˈkʌmbæk/"],
  ["showdown","вирішальне протистояння, розв'язка","Fans are excited about tomorrow's showdown between the two rivals.","Фанати в захваті від завтрашнього вирішального протистояння двох суперників.","/ˈʃəʊdaʊn/"],
  ["byproduct","побічний продукт, побічний наслідок","Increased confidence was a welcome byproduct of the training.","Підвищена впевненість стала приємним побічним наслідком тренування.","/ˈbaɪprɒdʌkt/"],
  ["reflection","відображення; роздум","She caught her reflection in the shop window.","Вона побачила своє відображення у вітрині магазину.","/rɪˈflekʃn/"],
  ["silhouette","силует","We could see the silhouette of the mountains against the sunset.","Ми бачили силует гір на тлі заходу сонця.","/ˌsɪluˈet/"],
  ["flimsy","хисткий, тонкий, неміцний","The shelf was too flimsy to hold all those heavy books.","Полиця була надто хисткою, щоб витримати всі ці важкі книги.","/ˈflɪmzi/"],
  ["bulky","громіздкий, об'ємний","The new sofa is too bulky to fit through the door.","Новий диван занадто громіздкий, щоб пройти через двері.","/ˈbʌlki/"],
  ["disposable","одноразовий","Try to avoid using disposable plastic cups and plates.","Намагайся уникати одноразового пластикового посуду.","/dɪˈspəʊzəbl/"],
  ["reusable","багаторазовий, той, що можна використати повторно","She always carries a reusable water bottle with her.","Вона завжди носить із собою багаторазову пляшку для води.","/riːˈjuːzəbl/"],
  ["routine","звичний порядок, рутина; рутинний","Exercise has become part of her daily routine.","Заняття спортом стали частиною її щоденної рутини.","/ruːˈtiːn/"],
  ["spare time","вільний час","In his spare time, he enjoys painting and hiking.","У вільний час він захоплюється малюванням і туризмом.","/speər taɪm/"],
  ["rumour","чутка, плітка","There's a rumour going around that the office is moving.","Ходить чутка, що офіс переїжджає.","/ˈruːmər/"],
  ["feud","ворожнеча, тривала суперечка","The two families had been involved in a bitter feud for years.","Дві родини роками перебували у запеклій ворожнечі.","/fjuːd/"],
  ["apology","вибачення","He sent her a sincere apology for being late.","Він надіслав їй щирі вибачення за запізнення.","/əˈpɒlədʒi/"],
  ["forgiveness","прощення","Asking for forgiveness takes real courage.","Просити прощення — це справжня мужність.","/fərˈɡɪvnəs/"],
  ["fascinated","зачарований, захоплений","The children were fascinated by the magic show.","Діти були зачаровані шоу фокусів.","/ˈfæsɪneɪtɪd/"],
  ["intrigued","заінтригований","I was intrigued by the strange title of the book.","Мене заінтригувала дивна назва книги.","/ɪnˈtriːɡd/"],
  ["puzzled","спантеличений, збентежений","She looked puzzled when I explained the rules.","Вона виглядала спантеличеною, коли я пояснював правила.","/ˈpʌzld/"],
  ["astonished","вражений, здивований","I was astonished to learn that he'd never tried sushi before.","Я був вражений, дізнавшись, що він ніколи раніше не куштував суші.","/əˈstɒnɪʃt/"],
  ["amazed","здивований, вражений (приємно)","We were amazed by the view from the top of the mountain.","Ми були вражені краєвидом з вершини гори.","/əˈmeɪzd/"],
  ["startled","наляканий, переляканий (раптово)","The loud noise startled the cat, and it ran under the bed.","Гучний звук налякав кота, і він втік під ліжко.","/ˈstɑːrtld/"],
  ["alarmed","стривожений, занепокоєний","She felt alarmed when she couldn't find her passport.","Вона стривожилася, коли не змогла знайти свій паспорт.","/əˈlɑːrmd/"],
  ["terrified","наляканий до смерті, страшенно переляканий","He's absolutely terrified of spiders.","Він страшенно боїться павуків.","/ˈterɪfaɪd/"],
];

// ── Read & parse current words.js ─────────────────────────────
const raw = readFileSync(wordsPath, 'utf8');
// File format: export const W=[...];
const startIdx = raw.indexOf('[');
const endIdx   = raw.lastIndexOf(']') + 1;
const arrStr   = raw.slice(startIdx, endIdx);
const current  = JSON.parse(arrStr);

// ── Merge (deduplicate by lowercase english) ──────────────────
const existingSet = new Set(current.map(w => w[0].toLowerCase()));
const toAdd = NEW_WORDS.filter(w => !existingSet.has(w[0].toLowerCase()));

const merged = [...current, ...toAdd];

// ── Sort alphabetically by english word ───────────────────────
merged.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

// ── Write back ────────────────────────────────────────────────
const prefix = raw.slice(0, startIdx);
const suffix = raw.slice(endIdx);
const newContent = prefix + JSON.stringify(merged) + suffix;
writeFileSync(wordsPath, newContent, 'utf8');

console.log(`✅ Added ${toAdd.length} new words (skipped ${NEW_WORDS.length - toAdd.length} duplicates).`);
console.log(`📚 Total words now: ${merged.length}`);
if (toAdd.length > 0) {
  console.log('New words added:', toAdd.map(w => w[0]).join(', '));
}
