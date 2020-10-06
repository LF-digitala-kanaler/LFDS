---
template: ArticlePage
title: Webbtillgänglighet förklaringar checklistan
intro: Här går vi igenom punkt för punkt vad de betyder, för Länsförsäkringar,
  att följa checklistorna.
description: Här går vi igenom punkt för punkt vad de betyder för
  Länsförsäkringar att följa checklistorna.
category: Accessibility
previewImage: /img/accessibility_nobg.svg

lang: true
---
* [Layout och bilder](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#layout-och-bilder)
* [Text/innehåll](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#textinnehåll)
* [Klickbara ytor - knappar och länkar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#klickbara-ytor---knappar-och-länkar)
* [Formulär](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#formulär)
* [Video & animering](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#video--animering)
* [Listor](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#listor)
* [Kod & script](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#kod--script)
* [Appar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#Appar)

## Layout och bilder

### 1.01\
Placera innehållet i en meningsfull och tydlig hierarki

Tänk på att placera innehållet i en logisk ordning och följd så att användaren får lätt att följa flödet. Försök inte fylla alla ytor. Se till att det finns en tydlig hierarki där element inte tävlar om uppmärksamhet så att användaren kan lätt scanna igenom innehållet och naturligt dras till viktig information och interaktioner. Undvik att sprida ut innehållet över hela sidan.

Läs mer:

https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/

### 1.02\
Var konsekvent i navigation, struktur och utformning

Tänk på att följa en struktur för hur sidorna ska vara uppbyggda. Alla sidor behöver inte se likadana ut men det är bra om dem följer samma struktur. Liknande funktioner ska utföras på samma sätt oavsett var på webbplatsen man befinner sig. En del användare memorerar strukturen för att förstå innehållet och hur funktioner fungerar. Samma gäller för benämning på knappar. Inte Skicka på en sida och Sänd på en annan sida. Eller att en spara-ikon ska se likadan ut på hela webbplatsen.

Undvik att strukturen på innehåll förändras från sida till sida, eller att en funktion fungerar olika på olika delar av webbplatsen. Detta kan leda till att vissa av våra användare kan få svårt att hänga med i strukturen och tolka innehållet. 

Läs mer:

https://webbriktlinjer.se/riktlinjer/29-var-konsekvent-i-navigation-struktur-och-utformning/

### 1.03 - Se till att allt innehåll presenteras rätt oavsett skärmens riktning

För designers

Alla människor har inte möjlighet att vrida på sin skärm. Vissa måste välja ett läge (stående eller liggande) och alltid använda detta, exempelvis med skärmen fast monterad på en rullstol. Skapa därför en design så att innehåll och funktioner är tillgängliga oavsett skärmens riktning. Då kan var och en välja det läge de föredrar

Hur man testar.

Testa läsordningen genom att granska en sida av varje sidtyp med några skärmar i olika storlek och genom att lyssna igenom innehållet med en skärmläsare.

Se till och testa även att läsordningen är logisk i dokument som inte är html (pdf, word med mera) . Se även 2.08

Läs mer: https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/#utdrag-fran-wcag-standarden

### 1.04 - All viktig information ska vara tillgänglig för alla användare

Att gömma viktig information i en pdf skapar sämre sökbarhet och gör att användaren får svårt att få en överblick. Hitta en balans mellan vad du måste visa på webben och vad man ska kunna ladda ner för att skriva ut.

Det är bra om så mycket som möjligt av texten finns på webben att läsa men se till att dela upp det i relevanta sidor.

Undvik endast lägga text i nedladdningsbara filer.

### 1.05 - Skapa en flexibel layout som fungerar vid förstoring eller liten skärm

En skärm eller ett fönster ska kunna vara så smal som 320 pixlar utan att innehållet behöver scrollas i sidled.

* Undvik horisontell scrollning ner till 320 pixlars bredd
* Använd i första hand responsiv design
* Gör en anpassad mobilversion om responsiv design är inte är möjligt
* Även dokument som inte är webbsidor bör kunna presenteras i begränsad bred

Läs mer: https://webbriktlinjer.se/riktlinjer/91-skapa-en-flexibel-layout/

### 1.06 - Erbjud flera kontaktvägar

Ge användarna friheten att själv välja en kontaktväg de är bekväma med. Alla kanske kan inte ringa, medan andra kanske har svårt att skriva. Ha alltid med telefon, och e-postadress i kontaktrutor så långt som det är möjligt. I vissa speciella fall där endast ett kontaktsätt är möjligt, fundera på hur du kan lösa kontaktbehovet på annat sätt. Till exempel besvara på de allra vanligaste frågorna. 

Undvik till exempel att  bara ha telefonnummer. 

### 1.07 - Designen ska klara kontrast nivå 5.0

Kontrast varierar beroende på storlek på texter eller ikoner. Gör design som går att zooma för dem som behöver se ännu bättre. Våra bibliotek ska följa dessa rekommendationer, om inte så kontakta ansvarig LFUI.

* För att kontrollera kontrast så finns det hjälpmedel, se länkar.
* Finns undantag som kan vara kluriga se här:
* Lita inte blint på automatisk granskning av kontraster
* Överträffa gärna gränsvärdena för kontrast

Testa kontrasten: https://webaim.org/resources/contrastchecker/

### 1.08 - Var försiktig med starka färger, spara på den röda

Färger är mycket användbara för att förhöja användbarhet och estetik. Men vissa användare kan inte uppfatta färgskillnader, till exempel på grund av färgblindhet eller för att de använder en monokrom skärm eller skärmläsare. Använd gärna färger, men låt inte färgskillnader vara det enda sättet att urskilja information utan komplettera med exempelvis text, mönster eller någon annan visuell indikation. Starka färgen kan även ta fokus från det.

### 1.09. Popup-funktioner ska kunna hanteras och stängas av alla

Innehåll, till exempel popup-rutor, som dyker upp vid tangentbordsfokus eller när användaren svävar med muspekaren över ett visst objekt ska kunna uppfattas och hanteras av alla – även av användare som har förstorat sidan eller tar längre tid på sig att komma till innehållet. Det är särskilt viktigt att innehållet enkelt kan tas bort eller stängas.

Det kan till exempel gälla undermenyer, inforutor (tooltips) och icke-modala popup-fönster. 

Läs mer: https://webbriktlinjer.se/riktlinjer/158-popup-funktioner-ska-kunna-hanteras-och-stangas-av-alla/

### 1.10. Hjälp användaren hitta rätt vid sökningar

Underlätta för användarna genom att ge dem förslag på sökord när de utför en sökning på en webbplats. Funktionen ger bättre sökträffar, underlättar för vissa personer med skrivsvårigheter samt kan spara tid och förenkla för alla användare. Ge förslagen dynamiskt om möjligt.

Av effektivitets- och prestandaskäl är det ofta bra att vänta tills användaren matat in två-tre tecken eller har slutat skriva innan förslagen på sökord presenteras.

Läs mer:

 https://webbriktlinjer.se/riktlinjer/112-ordforslag/

### 1.11. Undvik text i bilder

Om det används, ha samma alt-text som text i bilden. Skärmläsare kan inte läsa upp texter som finns i en bild.

Läs mer:

https://webbriktlinjer.se/riktlinjer/128-anvand-text-inte-bilder-for-att-visa-text/

### 1.12. Använd alt-text på bilder som har ett syfte

Alla bilder som existerar för mer än bara dekoration behöver ha en alternativ text. Ett exempel på det kan vara grafer eller diagram. Ett tips är att beskriva texten som i ett telefonsamtal.

Om användaren av någon anledning inte kan se bilden till exempel på grund av dålig anslutning, fel i länken till bilden eller att man använder en skärmläsare ska man fortfarande kunna förstå vad bilden vill förmedla.

Om ett CMS används går det att underlätta för redaktörerna genom att göra alternativ textfältet för bilden obligatoriskt. 

### 1.13. Dekorativa bilder behöver ingen alt-text

Dekorativa bilder behöver inte ha någon alternativ text då de enbart existerar för dekoration och inte för att förmedla någonting till användaren. För att sidan fortfarande ska validera krävs dock en alt-tagg på bilden. Dock är det okej att lämna den tom.  

### 1.14. Om bilden är länkad, beskriv vart länken går som alt-text

Om bilden eller ikonen är länkad ska bilden kompletteras med en beskrivning i alt-text.

### 1.15. Låt användarna navigera på det sätt som den är mest bekväm med

Erbjud flera olika navigeringsstöd på webbplatsen.

Utgå från användarnas behov och webbplatsens komplexitet när ni väljer navigeringsstöd.

Erbjud en sökfunktion. Huvudmeny, in-page-navigering, stöd för tabb-navigering och navigera vidare i sidan. Vissa stödfunktioner navigerar endast via länkar eller rubriker, kan vara bra att tänka på. Stöd att navigera till innehållet efter sökning eller navigering om jag tabbar så jag slipper tabba igenom menyn

### 1.16. Använd inte enbart färg för att förmedla information

Komplettera färgskillnader:

* i text med understrykning, ram, fetstil, kursivering eller annat teckensnitt.
* med ikoner.
* med mönster i diagram och kartor för att särskilja ytmarkeringar.
* med beskrivning i text.
* med semantisk kodning.

Var särskilt försiktig med färgerna grön, röd och brun. Många personer med färgblindhet har svårt att särskilja dessa.

Läs mer:

https://webbriktlinjer.se/riktlinjer/124-inte-bara-farg/

### 1.17. Använd tillräckliga kontraster i komponenter och grafik

Säkerställ att komponenter i gränssnittet och informationsbärande grafik har tillräckliga kontraster. Använd god kontrast för informationsbärande delas av illustrationer och annat grafiskt innehåll, så långt det är rimligt.

Kontrastvärdet ska vara minst 3:1.

### 1.18. Markera tydligt vilket fält eller element som är i fokus

Den som navigerar med till exempel tab-tangenten behöver få veta var tangentbordets fokus ligger. Standard markeringen är ofta en tunn streckad linje som är svår att se, särskilt om omgivningen är spräcklig eller på annat sätt gör den streckade linjen mindre uppenbar.

Gör markeringen tydlig, till exempel med en CSS-regel. 

Läs mer:

https://webbriktlinjer.se/riktlinjer/140-markera-element-i-fokus/

### 1.19. Utför inga oväntade förändringar vid fokusering

Utför ändringar när användaren har anledning att förvänta sig dem. Till exempel, användaren klickar på en länk till en extern sida och en ny tabb med länken öppnas i browsern.

Läs mer:

https://webbriktlinjer.se/riktlinjer/143-utfor-inga-ovantade-forandringar-vid-fokusering/

### 1.20. Erbjud alternativ till mer komplexa fingerrörelser

Alla personer kan inte hantera komplexa rörelser på en pekskärm. Detta gäller till exempel att svajpa (swipe) och gester som kräver flera fingrar (multi-touch) såsom dra isär och nyp ihop. Det kan bero på motoriska eller kognitiva begränsningar, vilket hjälpmedel en användare har eller användarens brist på kunskap om gränssnittet. Komplettera därför alltid sådana med enklare interaktion såsom klick, dubbelklick eller tryck, såvida inte rörelsen är avgörande för funktionaliteten.

Läs mer:

https://webbriktlinjer.se/riktlinjer/160-erbjud-alternativ-till-komplexa-fingerrorelser/

### 1.21 - Erbjud flera olika sätt att navigera

Användare har många olika strategier för att navigera i digitala system. En person med synnedsättning kanske föredrar en sökfunktion, medan en person med en kognitiv funktionsnedsättning föredrar en innehållsförteckning eller ett alfabetiskt index.

Erbjud därför fler sätt att navigera. 

Läs mer:

https://webbriktlinjer.se/riktlinjer/32-erbjud-besokaren-alternativa-orienteringsstod/

### 1.22 - Gör det enkelt att tabba igenom och förstå tabeller

Tabeller kan vara svåra att tolka – både för användare med skärmläsare och för andra. Låt html-koden uttrycka vad tabellens olika delar innehåller, och hur de hänger ihop. På så vis blir tabellen tillgänglig för alla. Använd till exempel th-element för att ange vilka celler som är rad- och kolumnrubriker.

En explicit koppling mellan rubrikceller och dataceller gör att skärmläsare kan läsa upp den tillhörande rubriken före innehållet i varje datacell. På så sätt slipper användarna memorera tabellstrukturen. Detta är särskilt bra för tabeller med många kolumner, eller med flera rubriknivåer. Attributet scope på ett th-element anger för vilka dataceller rubriken gäller.

Läs mer: 

https://webbriktlinjer.se/riktlinjer/98-anvand-tabellrubriker-for-att-hjalpa-anvandaren/

https://webaim.org/techniques/tables/data

Tips och tricks: https://www.w3.org/WAI/tutorials/tables/tips/

### 1.23 - Testa att ikoner förklaras??

## Text/innehåll

### 2.01 - Skriv enkel, kort och tydlig text

Text ska skrivas enkelt, kort och tydligt. Texten ska förstås av alla. Vänsterställ text, bryt av med grafiska element som grafer eller ikoner och komplettera gärna med bilder.

Men fördel kan du skapa en checklista eller punktlista eller tabell för att bryta upp texten.

Använd mellanrubriker och citat för att locka användaren vidare.

Undvik:

* Textväggar
* För mycket information
* Kursiv text
* Centrerad text
* Versaler

### 2.02 - Vänsterställ text som är brödtext

Låt alltid löptexten vara vänsterjusterad, det vill säga texten ska ha en rak och jämn vänsterkant och en ojämn högerkant. Det underlättar läsningen. Undvik att avstava ord annat än för mycket långa uttryck som ger svårlästa radbrytningar.

Vänsterställ även texten i vänstermenyer eller andra vertikala menyer. Då blir det lättare för användarna att skumma igenom menyposterna, eftersom blicken kan vandra längs menyns vänsterkant

### 2.03 - Bryt av stora textstycken med grafiska element, grafer, ikoner och bilder

### 2.04 - Bryt av stora textstycken med en checklista, punktlista eller tabell

### 2.05 - Använd mellanrubriker och citat för att dela upp innehåll och locka användaren vidare

Undvik versala rubriker. Om de måste användas så ska de vara ett-två ord max. Helt versala rubriker och texter försämrar läsbarheten helt enkelt för att vi inte är vana vid det (utom när det används för speciella syften, till exempel för varningstext som ”SVAG IS” eller i förkortningar som ”CIO” och ”EU”).

### 2.06 - Skriv en titel (page title) som speglar rubriken på sidan

### 2.07 - Använd rätt H-element och hierarki för att organisera innehåll

Rubriker kommunicerar hur innehållet är uppbyggt på en sida. Browsers, plugins och hjälpmedel använder dem till att navigera. Strukturera rubriker efter deras nivå. Den viktigaste rubriken är en H1 och den minst viktiga är en H6. Att hoppa över en nivå kan vara missledande för vissa hjälpmedel så se till att en H1 följs av en H2 och inte en H4 till exempel. Det är okej att hoppa över en nivå då en sida är indelad i sektioner(se bild). 

Copr/red:

### 2.08 - Undvik beskriva riktningar för att hänvisa användare

### 2.09 - Undvik beskriva färger för att hänvisa användare

### 2.10 - Använd kortare ord undvik sammansatta ord och när det är möjligt

### 2.11 - Markera ord sparsamt

I vårt grafiska maner kan man markera rubriken i H1an med något enstaka rött ord. Lyft fram det ord som ger mest mening. Använd inte röda markeringar någon annanstans 

Man kan även markera något ord i text som man vill highlighta, då använder du samma text färg som övriga texten men använder fetstil för att markera nyckelord i en text. 

Undvik kursiv text

Stryk aldrig under text som inte är länkad, eftersom det kan leda användarna att felaktigt tro att texten är en länk.

### 2.12 - Se till att det går att öka avstånd mellan tecken, rader,

stycken och ord

Många användare, till exempel dyslektiker och personer med nedsatt syn, behöver kunna påverka avståndet mellan stycken, rader, ord och tecken för att lättare kunna läsa. Gör det därför möjligt för användaren att påverka avstånden utan att innehåll eller funktionalitet krockar eller gömmer sig bakom annat innehåll.

Användaren ska ha möjlighet att öka avstånd åtminstone upp till följande relativa gränsvärden:

Radavstånd ska kunna ökas minst 1,5 gånger teckensnittets storlek.

Teckenavstånd ska kunna ökas minst 0,12 gånger teckensnittets storlek.

Avståndet mellan ord ska kunna ökas minst 0,16 gånger teckensnittets storlek.

Avståndet mellan stycken ska kunna ökas minst 2 gånger teckensnittets storlek.

Läs mer: https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/

### 2.13 - Använd tillräcklig kontrast mellan text och bakgrund

Bra kontrast mellan text och bakgrund är viktigt för läsbarheten, särskilt för personer med nedsatt synförmåga.  De flesta kan läsa brödtext på skärm om skillnaden i ljusintensitet mellan förgrund och bakgrund har förhållandet 4,5:1.

Kontrastvärdet kan mätas med hjälp av programvara.

### 2.14 - Se till att text går att förstora 200% utan problem

Många personer med nedsatt syn behöver kunna förstora text för att kunna läsa den. Därför ska det vara möjligt att förstora texten till åtminstone dubbel höjd och bredd utan att nya problem uppstår, till exempel att delar av texten hamnar bakom en bild eller krockar med annan text.

Det finns några “best practise” att tänka på: 

Använd relativa enheter. Undvik px för texter

Använd inte små textstorlekar

Skapa generöst med avstånd mellan kolumner

Läs mer: 

https://webbriktlinjer.se/riktlinjer/127-se-till-att-text-gar-att-forstora-utan-problem/

### 2.15 - Se till att nedladdningsbara dokument har tydliga filnamn

Se till att dokument du länkar till har så tydliga filnamn att man förstår av filnamnet vad dokumentet innehåller. Använd inte interna arbetsnamn som filnamn. Undvik att döpa dokument efter artikelnummer, diarienummer, blankettnummer eller liknande. Om artikel- eller blankettnumren är kända hos användarna bör de dock vara en del av filnamnet.

Läs mer här:

https://webbriktlinjer.se/riktlinjer/9-ge-dokument-tydliga-filnamn/

### 2.16 - Se till att nedladdningsbara dokument är taggade och har korrekt struktur

När du skapar en tillgänglig pdf bör du göra så mycket som möjligt i originaldokumentet, till exempel i Microsoft Word eller Adobe Indesign, i annat fall måste du komplettera med inställningar i Acrobat Professional. Här är några grundläggande riktlinjer:

Filen ska vara försedd med kodade taggar i ett taggträd . I Word gör du det genom att välja ”Visa taggar för dokumentstruktur”. Du kan göra det efter konverteringen genom att välja ”Lägg till taggar i dokumentet” i Acrobat.

Tagga rubriker med rubriknivåer (H1, H2), tabeller (table), tabellrubriker (TH), kolumner (TR), punktlistor (L) och innehållsförteckning (TOC).

Förse bilder, diagram och bildbaserade figurer med alternativtexter.

Definiera läsordningen. Normalt ska den vara inställd på ”Använd dokumentstruktur”.

Ange dokumenttitel och författare. Det gör du under ”Dokumentegenskaper”. Där definierar du även språket dokumentet är skrivet i. Insprängd text på andra språk ska ges egen språkkodning.

Gör en innehållsförteckning i längre dokument, gärna presenterad som bokmärken i PDF:en. Klicka på bokmärkessymbolen till vänster i programfönstret för att redigera bokmärkena i Acrobat.

Se till att kopiering av dokumentet är tillåtet. Det gör du under säkerhetsinställningar i Acrobat. Vill du ändå låsa dokumentet kan du kryssa i att göra det tillgängligt för skärmläsare.

Om filen blivit onödigt stor efter de tillagda inställningarna, kan du välja att komprimera den senare

Läs mer: 

https://webbriktlinjer.se/riktlinjer/88-publicera-i-forsta-hand-dokument-i-html/

## Klickbara ytor - knappar och länkar

### 3.01 - Använd enbart aktiva knappar

Använd aktiva/klickbara knappar och komplettera med felmeddelande som förtydligar vad användaren behöver göra/fylla i. Se till att användaren inte missar obligatoriska fält genom att automatiskt scrolla till det första fältet som behöver rättas. 

Använd inte utgråade/ej klickbara knappar när det kan vara svårt att få användaren att förstå varför knappen inte går att klicka på.

Undantag då en oaktiv knapp kan användas är då den oaktiva knappen presenteras tillsammans med aktiva knappar. Ett exempel är valet av faktura som betalsätt i en köptjänst. Knappen för “Månadsvis” är inte valbart men är fortfarande synlig eftersom knappen går att välja om användaren väljer “Autogiro”. 

### 3.02 - Sätt knappar i sitt sammanhang

Sätt knappen i nära relation till dess kontext, så att användaren förstår relationen mellan informationen och knappen. 

Visa exempel

Primärt betende formulär till höger

Ibland efter fältet om bara ett fält

Ibland till vänster om inget formulär.

### 3.03 - Framhäv länkarna grafiskt

Användarna måste enkelt kunna skilja en textlänk från text som inte är länkad. Se därför till att länkar skiljer sig grafiskt från övrig text, till exempel genom understrykning, placering, färg eller storlek. Aktiva länkar kan göras tydligare till exempel genom ändrad bakgrundsfärg.

Undvik att visualisera en länk enbart med färg i en textmassa då den blir svår att urskilja om om man är färgblind.

Framhäv länkarna grafiskt så att användarna förstår vad som är länkad text.

### 3.04 - Länken ska kunna stå ensam och beskriva vart länken leder

Komplettera alltid exempelvis "Visa fler"- länkar eller knappar med vad man visar fler av. Exempelvis "Visa fler fonder" 

Undvik att enbart skriva "Läs mer" i länkar/knappar. Vid användning av skärmläsare blir det svårt att förstå vart man hamnar om man klickar på länken/knappen.

Använd inte sidans URL som länktext. 

### 3.05 - Kombinera färg, form och text gäller även ikoner och länkar

Använd gärna färger, men låt inte färgskillnader vara det enda sättet att urskilja information utan komplettera med exempelvis text, mönster eller någon annan visuell indikation. (se över hur vi gör med "universala" ikoner som kryss för stäng och i för info)

### 3.06 - Länknamn kan vara maximalt 100 tecken långa

Gör inrw länktexter eller knapp texter för långa. Knappar ska max innehålla 2-3 ord. Det finns även en dubbelradig knapp som kan användas vid behöv.. Men att föredra är att föra om ux/texten innan så det fungerar skriva kortare. Exempel: ”Så renoverar du ditt badrum med rätt tätskikt”. (45 tecken)

### 3.07 -  Gör länkar, klickbara ytor och menyer användbara för alla

Användarna behöver lätt kunna förstå vad som är klickbart. Se därför till att markera samma typ av länkar på samma sätt över hela webbplatsen. 

Tänk på att:

* Placera inte länkar för nära varandra.
* Förstora den klickbara ytan genom att inkludera ett område runt det som är länkat
* Gör en enda länk (ett A-element) av ikon och text i en sammansatt länk
* Gör ikoner som är en del av navigeringen klickbara. När du kombinerar text och bildelement i till exempel menyalternativ bör både texten och bilden vara klickbar.

Läs mer: https://webbriktlinjer.se/riktlinjer/34-gor-lankar-och-klickbara-ytor-enkla-att-anvanda-for-alla/

### 3.08 - Se till att text på knappar och kontroller överensstämmer med maskinläsbara etiketter

Se till att text som är synlig på knappar och andra gränssnittskontroller också finns i, och överensstämmer med, den maskinläsbara etikett som representerar kontrollen i exempelvis program för röststyrning.

Den som använder röststyrning säger vanligtvis det som står på en knapp för att använda knappen. Detta fungerar om det som står på knappen motsvarar den maskinläsbara texten. Upplevelsen för seende som använder skärmläsare blir också bättre om uppläst text matchar det som visas på skärmen.

Läs mer: https://webbriktlinjer.se/riktlinjer/162-mojliggor-roststyrning-av-knappar-och-kontroller/

### 3.09 - Gör det möjligt att ångra klick

Möjligheten att ångra ett påbörjat klick är värdefull därför att den minskar risken för att aktivera funktioner av misstag. Vem som helst kan råka trycka vid fel plats eller tillfälle, och det är extra lätt hänt för personer med vissa funktionsnedsättningar (exempelvis begränsad motorisk kontroll eller synnedsättning).

Läs mer: 

https://webbriktlinjer.se/riktlinjer/161-gor-det-mojligt-att-angra-klick/

### 3.10 - Gör oväntade interaktioner lätta att upptäcka

När användaren interagerar med en knapp som leder till att en ny interaktion visas, placera alltid den nya interaktionen nedanför eller bredvid den ursprungliga interaktionen. Den ny interaktionen bör direkt följa tidigare interaktionen i tabbordningen. 

   Exempel, svar “ja” på en fråga i formuläret leder till att ett fritextfält visas. Fritextfältet bör då placeras i kontext med “ja” knappen och efter den i tabbordningen.

## Formulär

### 4.01 - Skriv tydliga, korta labels till varje fält

Skriv tydliga och informativa fältetiketter.  Koppla ihop fältetiketten och inmatningsfältet så att även etiketten blir klickbar. Placera fältetiketterna där användarna lätt ser dem. Skriv utförliga instruktioner före formuläret, när sådana behövs. Undvik att göra lösningen beroende av title-attribut och placeholder-texter.

Varje fält ska ha en label. Om designen inte innehåller en label får utvecklaren lägga till en dold label som skärmläsare kan läsa. 

Läs mer: 

https://webbriktlinjer.se/riktlinjer/61-skriv-tydliga-och-berattande-rubriker/

### 4.02 - Skriv tydliga felmeddelanden

När användaren inte fyller i fält såsom vi önskar eller glömmer att fylla i ett fält, ska vi påminna eller vägleda dem med en enkel, positiv, konstruktiv validering. 

Exempel:

Användaren fyller i 9 siffror för ett personnummer, validera med “Personnumret behöver innehålla 10 eller 12 siffror”.

Användaren glömmer att fylla i telefonnummer. Validera med “Vänligen ange ett telefonnummer”

### 4.03 - Skapa stora, klickbara ytor

Tänk på att skapa en större klickyta för att förenkla för användaren att klicka på exempelvis en checkruta eller radioknapp. Ett medelmått för pekfingret är 44 x 44 px. Undvik att begära finmotorik. 

Vid användning av till exempel checkboxes eller radioboxes ska man kunna klicka på hela ytan inte bara funktionen. Ge tillräckligt med yta så man kan klicka på objektet även med pekfinger.

Undvik att tränga ihop ifyllbara fält med klickbara ytor. 

### 4.04 - Ge möjlighet att ångra, korrigera eller bekräfta viktiga transaktioner

Vid viktiga transaktioner som till exempel gäller juridik, ekonomi eller hälsa kan konsekvenserna av fel bli stora och besvärliga för alla inblandade. Därför behöver system som används för viktiga transaktioner hjälpa användare att undvika och rätta till misstag.

Undvik att skapa interaktioner där användaren inte kan ångra, korrigera eller bekräfta klick.

Läs mer: https://webbriktlinjer.se/riktlinjer/150-ge-mojlighet-att-angra-korrigera-eller-bekrafta-viktiga-transaktioner/

### 4.05 - Klustra - ha stora mellanrum runt ifyllbara fält och klickbara ytor

Se till att fältetikett och hjälptext är närmare varandra än till andra fält eller texter.

Undvik att tränga ihop ifyllbara fält med klickbara ytor. 

### 4.06 - Godkänn fler formateringar i inputfält

Om vi vet att det finns flera sätt att skriva samma sak, godkänna många olika format. Till exempel personnummer ska kunna skrivas med 12 siffror, 10 siffror, med bindestreck eller utan bindestreck.

Undvik att prata om 10 eller 12 siffror. Visa istället med formateringen ååååmmdd-nnnn hur man ska skriva.

### 4.07 - Gör en logisk tabbordning

Användaren ska kunna navigera logiskt via alla interaktiva element på en sida, från vänster till höger, uppifrån och ner. Det är viktigt att fokus-ordningen är logisk i förhållande till hur innehållet presenteras på skärm eller i skärmläsare. Om fokus flyttar till ett oväntat element kan det vara mycket förvirrande, och orsaka fel. Tänk på att ha en logisk och korrekt html-struktur. Undvik att använda tabindex större än 1 i koden. 

Läs mer: https://webbriktlinjer.se/riktlinjer/136-gor-en-logisk-tab-ordning/

### 4.08 - Märk upp vanliga formulärfält i koden

Hjälp dina användare att fylla i inmatningsfält genom att i koden ange vilken typ av innehåll som förväntas. Då kan webbläsare eller hjälpmedel ibland automatiskt föreslå inmatning (baserat på till exempel tidigare inmatning i fält av samma typ) i vanliga formulärfält (såsom gatu- och postadress). Systemet kan också ytterligare hjälpa användaren genom att presentera fältet på ett sätt (till exempel med en symbol) som användaren känner igen.

Det är bra för alla användare, men kanske framför allt för personer med vissa kognitiva och motoriska funktionsnedsättningar. Det underlättar också för användare som inte behärskar språket så bra. Använd även attributet autocomplete på inmatningsfält.

Läs mer: https://webbriktlinjer.se/riktlinjer/154-mark-upp-vanliga-formularfalt-i-koden/

### 4.09 - Visa vart och beskriv fel i formulär tydligt, uppge vad som saknas

Hjälp dina användare när det blir fel. Det måste vara tydligt för användaren var felet finns och felet behöver beskrivas med text. Välformulerade felmeddelanden ger användarna möjlighet att fylla i så felfria data som möjligt i formulären. De minskar också risken för att användarna ska bli irriterade när systemet inte förstår eller kan tolka den felaktigt inmatade informationen.

Skriv inte  att fältet är obligatoriskt, förklara istället vad som behövs i fältet för att göra klart fältet.

Sammanfatta felen och använd en layout som tydligt separerar felmeddelanden från resten av webbplatsens design.

Skriv välformulerade felmeddelanden så ökar chansen att användarna gör rätt från början.

Markera fel och felmeddelanden med WAI-ARIA så att de uppfattas tydligt av användare med hjälpmedel.

Spara det som inte är fel.

Felmeddelande ska vara vid fältet och vi scrollar upp användaren till första felmeddelandet som har en avvikande färg.

Läs mer: https://webbriktlinjer.se/riktlinjer/2-ge-begripliga-felmeddelanden/

## Video & animering

5.01 - Komplettera alltid text med videos och rörligt material

Komplettera text med videos och rörligt material för dem som har svårt att läsa text. Glöm inte att använda ljud för dem som inte ser. Texta alla filmer för icke hörande men även för personer i miljöer där ljud inte passar.

5.02 - Ge användaren möjlighet att pausa, stänga av eller sänka ljud

Det ska alltid vara möjligt att pausa, stoppa eller sänka sådant ljud som spelas upp automatiskt. Användare som lyssnar på en sida med hjälp av skärmläsare kanske inte kan uppfatta innehållet alls om det samtidigt spelas upp andra ljud. Användare med nedsatt förmåga att fokusera eller filtrera bort intryck kan också få svårt att använda en tjänst om det inte går att stänga av ljud. Därför ska det alltid vara möjligt att pausa, stoppa eller sänka sådant ljud som spelas upp automatiskt.

Undvik att spela upp ljud eller video automatiskt.

Användare som använder sig av skärmläsare eller har nedsatt förmåga att fokusera eller filtrera bort intryck. 

https://webbriktlinjer.se/riktlinjer/125-kunna-pausa-ljud/

5.03 - Använd animationer sparsamt 

Innan du skapar en animation, bör du ha ett tydligt syfte för vad den ska användas till. Animationen kan till exempel användas för att vägleda användaren, leda blicken till information eller ge feedback. Generellt bör animationerna vara korta. De ska inte loopa, då detta kan upplevas förvirrande och störande för till exempel personer med ADHD. Eftersom animationerna inte ska loopa bör de inte heller vara kritiska till funktionaliteten.

## Listor

6.01 - Använd den formatering som finns för att göra listorna. 

6.02 - Använd punkter när ordningen inte spelar någon roll och siffror när det spelar roll. 

6.03 - Undvik att använda punktlistor om innehållet inte är en punktlista

6.04 - Sätt punkt efter sista punkten om punktlistan är en uppräkning.

## Kod & script

7.01 - Skapa kortkommandon med varsamhet

Kortkommandon kan göra att det går snabbare att navigera på webbplatsen, men de bör användas med försiktighet. 

Det finns en risk att webbplatsens kortkommandon förväxlas med kortkommandon som användarens webbläsare, operativsystem eller hjälpmedel erbjuder. Kortkommandon som bara består av ett tecken kan dessutom orsaka problem för personer som använder röststyrning eller råkar klicka på fel tangent, exempelvis på grund av skakningar i händerna.

Använd kortkommandon sparsamt.

Använd vedertagna tangentkombinationer om sådana finns.

Informera om vilka kortkommandon ni erbjuder.

Gör det möjligt att stänga av eller byta ut kortkommandon som bara består av ett tecken.

Läs mer: https://webbriktlinjer.se/riktlinjer/68-skapa-snabbkommandon-for-viktiga-funktioner/

7.02 - Erbjud möjlighet att hoppa förbi återkommande innehåll

För användare som lyssnar igenom en sida med skärmläsare, eller som tabbar sig fram med tangentbord eller någon typ av hjälpmedel tar det lång tid att komma förbi till exempel en meny. När samma innehåll dessutom upprepas på flera sidor kräver navigationen betydande ansträngning, och för vissa användare även smärta, om samma rörelse måste upprepas om och om igen. Därför ska det alltid finnas möjlighet att hoppa förbi sådant upprepat innehåll.

Skapa genvägar för att hoppa över delar i strukturen till exempel menyn, för att komma direkt till sidans innehåll.

Skapa rubriker med h-element, eftersom skärmläsare låter användarna snabbnavigera med hjälp av sidans rubriker.

Använd WAI-ARIA landmark roles, till exempel main, search, navigation, banner, contentinfo och så vidare. Det gör att användare med exempelvis skärmläsare kan navigera mellan sidans olika delar på ett standardiserat sätt.

Använd strukturelement som main, aside, header, footer och nav för att definiera vilken roll varje del av sidan har.

R68. Skapa snabbkommandon vid behov.

Läs mer: https://webbriktlinjer.se/riktlinjer/75-gruppera-och-skapa-mojlighet-att-hoppa-forbi-delar-pa-sidorna/

### 7.03 - Erbjud möjlighet att backa

Tillbakaknappen ska alltid fungera. Gör du SPA-app får detta lösas programmatiskt. 

### 7.04 - Följ standarder

Struktur är allt när man presenterar innehåll genom hjälpmedel. Giltig och semantisk HTML gör organisationen av innehållet presentabel på ett meningsfullt sätt. CSS, skriven för tillgänglighet, gör webbplatsens innehåll lättare att konsumera för alla. Korrekt CSS kan också användas för att tillhandahålla extra information för skärmläsare som inte syns på webbsidan.

Använd HTML5.

Validera koden vid förändringar, se R84. Se till att koden validerar.

För presentation och layout med stilmallar, använd CSS. Se R82. Separera innehåll från design – använd externa stilmallar för att styra presentation och layout.

För prenumerationstjänster, använd RSS eller Atom. Se R87. Gör det möjligt att prenumerera på information.

R105. Skapa   med h-element

R104. Använd rätt html-element när ni gör listor

Namnge formulärfält med kopplade label-element. Se R55. Skapa tydliga och klickbara fältetiketter.

R98. Skriv rubriker till tabeller

R101. Markera obligatoriska fält i formulär

Betona innehåll med elementet em och inte bara kursivering, eftersom det inte går att kursivera skärmläsarens tal.

Använd WAI-ARIA för sådant som inte går att uttrycka med vanlig html.

### 7.05 - Se till att koden validerar

För att underlätta för utvecklare att följa standarder finns det olika hjälpmedel som kan vara bra att känna till. 

Validering av kod

Att validera koden hjälper dig att hitta fel som kan vara svåra att hitta själv. Det kan handla om att det finns ID’n med värden som inte är unika, fält som saknar labels, fel i html-koden.

Här kan du validera din sida via url. Om du vill validera en lokal sida kan du alltid klistra in kod alternativt ladda ner ett plugin i browsern som kan göra detta

https://validator.w3.org/

Validera tillgänglighet

Chrome har inbyggt validering för tillgänglighet i sitt utvecklingsverktyg. Vill man gå lite djupare kan man ladda ner ett tillägg som Axe till Chrome för att få en utförligare resultat. 

Kontrollera att era mallar för funktioner, tjänster och stilmallar validerar i enlighet med HTML5 standard.

Försök att automatisera en regelbunden kod validering, eller gör validering till en rutinåtgärd vid all förändring av webbplatsens kod. Det är lätt hänt att tidigare korrekt kod går sönder. Det kan till exempel hända när ni uppdaterar ett tilläggsprogram, när ni infogar en videospelare i ett blogginlägg eller när någon gör ett inlägg i ett kommentarssystem.

Läs mer: https://webbriktlinjer.se/riktlinjer/84-se-till-att-koden-validerar/

### 7.06 - Se till att page speed är bra

En del av användbarheten är ju att sidan fungerar som den ska. Att kunderna förväntar sig att sidan laddat in inom 3 sekunder så den fungerar att navigera på. Vissa bilder kan laddas in allt efter som men i det stora hela blir det svårt för användaren om innehållet ständigt förändras för att mer och mer innehåll laddas in allteftersom och de klick jag planerat klicka på byter plats.

Extra svårt blir det för de personer med synskada, då jag redan har svårt att se och jag kanske inte förstår att innehållet inte har laddats in.

Riktlinjer för pagespeed är xxxx sekunder

Vad är tillräckligt bra prestanda?

Forskning har visat att användare av datorsystem tappar koncentrationen om de får vänta för länge. Nielsen-Norman har redovisat följande konsekvenser av väntetider på webben:

0,1 sekunders svarstid slutar uppleva att svaret är omedelbart.

1 sekunds svarstid börjar tankeflödet hindras av en upplevd väntan.

10 sekunders svarstid har användaren svårt att vara uppmärksam och vill göra något annat under tiden.

Testa din sida här:

Pagespeed insights: https://developers.google.com/speed/pagespeed/insights/

https://developers.google.com/speed/pagespeed/insights/?hl=sv&url=lf.se

https://webbriktlinjer.se/riktlinjer/54-optimera-webbplatsen-for-basta-prestanda/

### 7.07 - Utveckla systemet så att det går att hantera med enbart tangentbordet

Se till att det går att hantera all funktionalitet med enbart tangentbord, eftersom många hjälpmedel i praktiken fungerar som tangentbord.

Den som bara kan eller vill använda tangentbordet (eller hjälpmedel som kopplas till tangentbordskommandon) är beroende av att systemet inte förutsätter att användaren har till exempel mus eller pekskärm.

### 7.08 - Ange sidans språk i koden

För att till exempel underlätta korrekt avstavning, automatisk översättning och förbättra möjligheten för skärmläsare att presentera innehållet korrekt, ska aktuellt språk anges i html-koden. Detta görs med hjälp av lang-attribut och språkkod.

### 7.09 - Se till att hjälpmedel kan presentera meddelanden som inte är i fokus

Se till att de som använder tekniska hjälpmedel som exempelvis skärmläsare och förstoringsprogram kan göras uppmärksamma på viktiga meddelanden även om de presenteras utanför det område på sidan som användaren har i fokus.

Ange med hjälp av attributen role eller aria-live var viktiga meddelanden kan förekomma, så får hjälpmedel kännedom om dessa och kan presentera dem för användaren vid ett lämpligt tillfälle.

Berörda användare riskerar annars att missa varningar, upplysningar och felmeddelanden.

Läs mer: 

https://webbriktlinjer.se/riktlinjer/164-meddelanden-som-inte-ar-fokus/

## Appar

### 8.01 - Grundläggande rekommendationer för appar

Följ de webbriktlinjer som är tillämpbara även i appar

Följ respektive plattforms egna riktlinjer för tillgänglighet

Guidlines för iOS: https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/

Guidelines för Android:

https://developer.android.com/guide/topics/ui/accessibility

Regressionstest tillgänglighet

Funktionen i sig

Hela vägen till funktionen

Från Sök till funktion

In page navigation - till funktion

Via navigering till funktion

Med mobil

Desktop

Hoppa till innehåll-funktion