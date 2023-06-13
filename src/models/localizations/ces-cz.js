// ISO 639-2/T (ces)

const facts = [
  "V roce 1987 se v Americe staly kočky domácím mazlíčkem a překonaly tak psy.",
  "Kočky, které žijí společně, se občas otírají hlavami aby ukázaly že nemají v plánu bojovat. Častěji to dělají mladé kočky, zvlášť když jsou vzrušené.",
  "Kočičí matky učí svá mláďata používat záchod.",
  "Způsob s jakým se s mladými koťaty zachází během ranných chvil jejich života se projeví v osobnostních vlastnostech později v životě.",
  "Navzdory častému přesvědčení jsou kočky sociální zvířata. Kočka žijící v domácnosti poslouchá a odpovídá, a užívá si lidskou přítomnost.",
  "Kočka se může dožít až dvaceti let, ale průměrná domácí kočka se dožívá zhruba čtrnácti roků.",
  "Kastrace kočky prodlužuje její život o dva až tři roky.",
  "Kočky, a zvláště starší kočky, mohou dostat rakovinu. Onemocnění je však možné úspěšně vyléčit.",
  "Kočky necítí sladkou chuť.",
  "Kočky musí mít ve své potravě tuky, protože si je jejich těla neumí vytvářet.",
  "Některé domácí rostliny jsou pro kočky jedovaté: břečťan, kosatec, jmelí, filodendron, tis.",
  "Paracetamol i čokoláda jsou pro kočky jedovaté.",
  "Mnoho koček neumí strávit kravské mléko. Mléko a mléčné produkty u nich způsobují průjmy.",
  "Průměrné kočičí jídlo je hrubým ekvivalentem pěti myší.",
  "Kočky které loví a žerou mouchy mohou dostat tasemnici. Tito ploštěnci žijí v kočičím těle navždy, nebo dokud nejsou odebráni. Jsou hermafroditní, rozmnožit se mohou rekombinací dvou článků těla. Vajíčka se z těla se dostávají spolu s trusem, jsou snězena larvami much a cyklus se opakuje. Lidé mohou tasemnici dostat také, ale pouze pokud sní infikovanou mouchu. Kočky mohou být odčerveny veterinářem.",
  "Kočky mohou chytit tasemnici od myší. Pokud vaše kočka myš chytí, je nejlepší jí úlovek sebrat.",
  "Existuje forma AIDS kterou se kočky mohou nakazit.",
  "Barva srsti Siamských koček je spojena s teplem: chladnější oblasti jsou tmavší.",
  "Siamské kočky se rodí bílé, protože v děloze je teplota všude stejná. To chlupům zabraňuje v tmavnutí.",
  "Lidé kteří jsou alergičtí na kočky jsou ve skutečnosti alergičtí na jejich sliny nebo srst. Domácí kočka, která je často umývána, by měla být pro alergiky méně agresivní.",
  "Studie ukázaly že kočičí alergeny souvisí s jejich pachovými žlázami. Kočky mají pachové žlázy v obličeji a u kořene ocasu. Více pachu vytváří kocouři. Lidé, alergičtí na tento alergen, lépe tolerují kastrované kočky.",
  "Kočky si nemyslí že jsou malí lidé, myslí si že my jsme velké kočky. To ve spoustě aspektech ovlivňuje jejich chování.",
  "Kočky mohou trpět záněty dásní a zubními kazy. Jednou ročně by jejich zuby měl zkontrolovat a vyčistit veterinář.",
  "Mnoho lidí se bojí  že od koček chytí Toxoplasmózu, prvokové onemocnění. Tato nemoc může způsobit příznaky, ale převážně může ovlivnit vývoj lidského plodu. Toxoplasmóza je běžné onemocnění, někdy šířené kočičími exkrementy, spíše se ale lidé nakazí ze syrového nebo nepropečeného hovězího masa. Těhotné ženy a lidé s oslabenou imunitou by se neměly dotýkat kočičích záchodů. Mimo ně není důvod proč se kočkám vyhýbat.",
  "Předkem všech domácích koček je Africká Divoká kočka, která existuje dodnes.",
  "Ve starém Egyptě bylo zabití kočky trestný čin trestaný smrtí.",
  "Ve starém Egyptě byly z koček vytvářeny mumie, a balzamované myši byly přikládány do jejich hrobů. V jednom starobylém městě bylo nalezeno přes třicet tisíc kočičích mumií.",
  "Ve středověku byly během slavností svatého Jana kočky zavírány do hranic a upáleny.",
  "První kočičí show proběhla v roce 1871 v Krystalovém paláci v Londýně.",
  "Dnes existuje zhruba sto různých plemen kočky domácí.",
  "Kočky, stejně jako ptáci, mají schopnost vrátit se domů, k čemuž používají kombinaci svých biologických hodin, úhlu slunce, a magnetického pole Země. Kočky odvezené daleko od domova se umí vrátit, ale pokud změní své bydliště jejich vlastík, najít je nedokážou.",
  "Kočky zahrabávají své výtrusy aby skryly svou stopu před predátory.",
  "Kočky spí šestnáct až osmnáct hodin denně. I když spí, dávají pozor na své okolí, a na dotyk budou reagovat.",
  "Krom čichání nosem umí kočky použít tzv. Jacobsonův orgán, který mají na vrchním patře tlamy.",
  "Chlor ve vodě z kohoutku dráždí jemné části kočičího nosu. Kohoutkovou vodu před nalitím kočce nechávejte den odstát.",
  "Abraham Lincoln miloval kočky. V Bílém domě měl čtyři.",
  "Julius Cesar, Jindřich II., Karel XI. i Napoleon se koček báli.",
  "Kočky mají průměrně 24 vousků, umístěných ve čtyřech řadách na každé straně.",
  "Slovo 'kočka' v různých jazycích: francouzština: chat; němčina: katze; italština: gatto; španělština/portugalština: gato; jidiš: kats; maltština: qattus; švédština/norština: katt; holandština: kat; islandština: kottur; řečtina: catta; hindi: katas; japonština: neko; polština: kot; ukrajinština: kotuk; havajština: popoki; ruština: koshka; latina: cattus; egyptštnia: mau; turečtina: kedi; arménština: gatz; čínština: mao; arabština: biss; indonéština: kucing; bularština: kotka; malajština: kucing; thajština/vietnamština: meo; rumunština: pisica; litevština: katinas; angličtina: cat; slovenština: macka; arménština: gatz; baskitština: catua; estonština: kass; finština: kissa; svahilština: paka.",
  "Statistiky ukazují, že se v posledních letech kočky stávají oblíbenějším domácím mazlíčkem než psi.",
  "Kočky se mohou naučit chodit na vodítku, ale vyžaduje to hodně času a trpělivosti. Tento proces je jednodušší s mladšími kočkami.",
  "Předení neznamená vždy radost. Například při porodu předení vyjadřuje veliké bolesti. Malá koťata předou při kojení, aby matce oznámila že mají dostatek mléka. Ale nebojte, když kočka přede zatímco jí hladíte nebo ji držíte blízko sebe -- to je šťastná kočka!",
  "Předení je proces nadechování a vydechování, obvykle prováděný se zavřenou pusou.",
  "Šanta kočičí obsahuje olej nepetalakton, který na kočky působí podobně jako na člověka marihuana. Nereagují na ni všechny kočky; ty, které ano, vstupují do stavu tranzu. Kočka šantu čichá, líže, kouše, válí se v ní, a u toho přede a mňouká.",
  "Kočka domácí je jediná z rodu koček která umí držet svůj ocas při chůzi vzhůru nahoru. Všechny ostatní druhy koček drží ocas vodorovně nebo ho schovávají mezi nohama.",
  "Štastná kočka drží svůj ocas pevně vzhůru.",
  "Téměř deset procent všech kostí kočičí kostry je v jejich ocasu. Ten používají k udržování rovnováhy.",
  "Kočky si nejčastěji hrají ve dvojici. Pokud je to možné, očky a koťata by měly být pořizovány v párech.",
  "Čokoláda na pečení je pro kočky ze všech čokolád nejnebezpečnější.",
  "Kočičí tep lze nahmatat na vnitřní straně stehen, blízko těla. Normální tep koček je 110 až 170 úderů za minutu.",
  "Jaguáři jsou jediné velké kočky které neřvou.",
  "Zorný úhel koček je zhruba 185 stupňů.",
  "Kočky mají individualizované preference pro škrábací povrchy a úhly. Některé rády škrábou vodorovné povrchy, jiné vertikální.",
  "Mainská mývalí kočka je jediná dlouhosrstá americká kočka.",
  "Mainská mývalí kočka je čtyři- až pětkrát větší než Singapura, nejmenší kočičí plemeno.",
  "Mourovaté kočky dostaly své anglické jméno (Tabby cats) podle Attabu, čtvrti v Bagdádu, nyní hlavního města Íráku.",
  "Zatahovací drápy jsou vlastnost kterou nemají žádná jiná zvířata. Pouze gepardi své drápy zatahovat neumí.",
  "Ne každá kočka reaguje na šantu kočičí. Jestli bude kočka reagovat záleží na recesivním genu: žádný gen, žádná zábava.",
  "Kočka dokáže běžet rychlostí až padesát kilometrů za hodinu.",
  "Ve starověkém Egyptě si všichni členové rodiny při smrti své kočky oholili obočí. Dávali tak najevo svůj smutek.",
  "Kočky žijí s lidmi proti psům polovinu času.",
  "Kočičí fousky fungují jako radar, který kočkce pomáhá odhadnout zda se vejde do mezery nebo škvíry.",
  "Kočka může péčí o svou srst strávit i více než pět hodin denně.",
  "Kočky mají tři typy dlouhé srsti citlivé na dotyk -- fousky, obočí, a srst na packách.",
  "Lidí i kočky mají v mozku stejné oblasti zodpovědné za emoce.",
  "Kočičí mozek je podobnější lidskému než psímu.",
  "Kočky mají více kostí než lidé: člověk má 206, kočka 230.",
  "Kočky mají třicet obratlů -- o pět více než lidé.",
  "Kočky jsou v USA populárnější než psi: 88 milionů koček proti 74 milionům psů.",
  "Kočky mají v uších přes dvacet svalů.",
  "Skupině koček se v angličtině říká clowder: mrak.",
  "Některé kočky mohou přežít pád na beton z výšky až 320 metrů.",
  "Kočky prospí sedmdesát procent svého života.",
  "Starostou města Talkeetna na Aljašce je kočka, již patnáct let. Jmenuje se Stubbs.",
  "V roce 2013 se kočka hlásila na pozici starosty Mexico City.",
  "Tygři mají prostředek jazyka pokrytý trny, což jim pomáhá při uchopování potravy.",
  "Když se kočky šklebí, čichají. Jacobsonův orgán umístěný v tlamě umožňuje kočkám chutnat vzduch.",
  "Kočka v domácnosti může snížit riziko mrtvice a infarktu až o třetinu.",
  "Největší kočka na světě měřila metr a čtvrt: https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "Nálezy naznačují že domácí kočky žily s lidmi už v roce 3600 př. n. l., dva tisíce let před Egyptskými faraony.",
  "Kočičí předení může být forma sebeléčení. Může se ním projevovat nervozita i spokojenost.",
  "Dospělé kočky mňoukají pouze při komunikaci s člověkem.",
  "Nejbohatší kočka na světě má třináct milionů dolarů, které zdědila po svém člověku.",
  "Kočka rozumí vašemu hlasu, ale nestojíte jí za reakci.",
  "Kočky dokážou vyskočit do výšky šestinásobku jejich vzdálenosti.",
  "Kočky napomohly k vymření třiceti tří živočišných druhů.",
  "Kočky v přírodě mohou pít mořskou vodu.",
];

const langName = "Czech",
  langISO = "ces", // ISO 639-2/T (ces) Čeština
  langLocale = "cz",
  langLocaleName = "Czech";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};
