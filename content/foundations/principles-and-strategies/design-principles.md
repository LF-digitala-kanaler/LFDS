---
template: ArticlePage
category: Principles and strategies
previewImage: /img/design_principer.svg
title: Design principles
intro: Our design principles guide us in what qualities we should strive for in
  our interfaces, whereas our  components and design patterns help us in how to
  reach those qualities.
heroBlock:
  color: "#fcd2d3"
  quote: Hjälp mig göra det jag kom för att göra
  cite: Vår främsta uppgift
  image: ""
priority: "1"
wide: true
lang: true
---
### Principerna

<figure class="Image Image__border ">
<img src="/img/alert.svg" srcset="/img/alert.svg 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption>
</figure>

<section>
<Collapse title="Upplevelsen är utformad för denna kanal">
<div class="content">









Våra kunder <strong>kontaktar oss</strong> på det sätt som de anser passar dem bäst, det innebär att vi måste möta dem enligt de förväntningar som finns på det kontaktsättet. 

Det innebär att våra webblösningar är responsiva, våra appar följer de mönster som finns för det operativssystem som kunden har och att koden följer våra tillgänglighetsriktlinjer.

Om vi inte kan/vill erbjuda den kontaktväg som kunden föredrar behöver vi tydligt visa vilka som finns tillgängliga.</div>

#### Exempel

Nedan tre exempel på hur upplevelsen är anpassad efter hur kunden besöker oss, dels två responsiva exempel från Mina Sidor och dels ett exempel på hur motsvarande vyer har anpassats till Android resp iOS.

<figure class="Image Image__border "><img src="/img/mis-startsida-responsiv.jpg" srcset="/img/mis-startsida-responsiv.jpg 2x" alt="Exempel 1: Mina Sidors startsida i desktop, tablet och mobilläge"><figcaption><div class="Image__caption">Exempel 1: Mina Sidors startsida i desktop, tablet och mobilläge</div></figcaption></figure>

<figure class="Image Image__border "><img src="/img/mis-betala-mvp-responsiv.jpg" srcset="/img/mis-betala-mvp-responsiv.jpg 2x" alt="Exempel 2: Mina Sidors betalaflöde i desktop, table och mobil"><figcaption><div class="Image__caption">Exempel 2: Mina Sidors betalaflöde i desktop, table och mobil</div></figcaption></figure>

<figure class="Image Image__border "><img src="/img/samma-flode-ios-vs-android.jpg" srcset="/img/samma-flode-ios-vs-android.jpg 2x" alt="Exempel 3: Samma vyer ur betalaflödet anpassade till Android resp iOS"><figcaption><div class="Image__caption">Exempel 3: Samma vyer ur betalaflödet anpassade till Android resp iOS</div></figcaption></figure>









</div></Collapse>
<Collapse title="Varje sida har ett primärt syfte">
<div class="content">












Varje sida/vy som designas ska ha ett tydligt syfte – är det svårt att säga vad syftet är så ska det förmodligen delas upp på flera sidor/vyer eller inte finnas alls.











</div></Collapse>
<Collapse title="Handling och funktion före information">
<div class="content">












Visa tydligt upp de primära handlingarna och funktionerna, och ge användaren chans att agera. De flesta vill göra, inte läsa, och det ska vi stötta dem i.

Informationen har sin plats och är ofta viktig, men de som vill ha den kommer hitta den.










</div></Collapse>
<Collapse title="Alla hittar rätt på olika sätt">
<div class="content">









Möjliggör för användarna att hitta fram på det sätt de vill – de flesta klickar sig fram genom sidinnehåll, men vi ska även erbjuda en tydlig meny för de som föredrar den vägen och bra sökfunktioner för de som hittar på det sättet.

Vid implementation är det viktigt att tänka på de som använder olika tillgänglighetslösningar som tangentbordsnavigering och tal.

#### Exempel

För att visa på principen finns nedan exempel på olika sätt att nå skadeanmälan utan att ha loggat in. Notera att via inloggat läge (Mina Sidor, appen) finns ytterligare sätt att hitta till skadeanmälan, så det är inte ens alla vägar som visas här.

<figure class="Image Image__border "><img src="/img/till-skadeanmalan-startsidan.gif" srcset="/img/till-skadeanmalan-startsidan.gif 2x" alt="Exempel 1: Navigering till Skadeanmälan via knapp på startsidan"><figcaption><div class="Image__caption">Exempel 1: Navigering till Skadeanmälan via knapp på startsidan</div></figcaption></figure>



<figure class="Image Image__border "><img src="/img/till-skadeanmalan-meny.gif" srcset="/img/till-skadeanmalan-meny.gif 2x" alt="Exmpel 2: Navigering till Skadeanmälan via menyne"><figcaption><div class="Image__caption">Exempel 2: Navigering till Skadeanmälan via menyn</div></figcaption></figure>

<figure class="Image Image__border "><img src="/img/till-skadeanmalan-kontakta-oss.gif" srcset="/img/till-skadeanmalan-kontakta-oss.gif 2x" alt="Exempel 3: Navigering till Skadeanmälan via Kontakta oss"><figcaption><div class="Image__caption">Exempel 3: Navigering till Skadeanmälan via Kontakta oss</div></figcaption></figure>

<figure class="Image Image__border "><img src="/img/till-skadeanmalan-internsok.gif" srcset="/img/till-skadeanmalan-internsok.gif 2x" alt="Exempel 4: Navigering till Skadeanmälan via internetsökning"><figcaption><div class="Image__caption">Exempel 4: Navigering till Skadeanmälan via internsök</div></figcaption></figure>

<figure class="Image Image__border "><img src="/img/till-skadeanmalan-google.gif" srcset="/img/till-skadeanmalan-google.gif 2x" alt="Exempel 5: Navigering till Skadeanmälan via Google"><figcaption><div class="Image__caption">Exempel 5: Navigering till Skadeanmälan via Google</div></figcaption></figure>









</div></Collapse>
<Collapse title="Styrkan i det personliga och lokala återspeglas i det digitala">
<div class="content">










En av Länsförsäkringars stora fördelar är att vi finns lokalt på många orter och har rådgivare på plats – folk känner 'Kim på Länsförsäkringar'. Den närheten till Länsförsäkringar vill vi ta med in i det digitala där det går och passar.










</div></Collapse>
<Collapse title="Relevanta, men få, erbjudanden i en naturlig kontext">
<div class="content">













Internet svällar över av annonser och banner blindness är etablerat fenomen – om något ser ut och känns som en annons sorterar folk bort det (o)medvetet. Samtidigt vet vi att våra kunder är öppna för att ta emot vad tycker är relevanta erbjudanden kopplat till sitt innehav. Här blir det viktigt att balansera de två och ha en 'less is more'-inställning till de erbjudanden vi vill visa upp.<










</div></Collapse>
<Collapse title="Kunden möts utifrån det Länsförsäkringar vet, eller borde veta, om kunden">
<div class="content">















Vi vet en hel del om kunden, och kunden förutsätter att det de berättat för Länsförsäkringar vet Länsförsäkringar. Vi bör därför ge kunden möjlighet att identifiera sig istället för att fylla i kontaktuppgifter igen och kunna få eventuella rabatter avdragna där det är möjligt.

*(Tyvärr kommer banksekretess och andra regelverk ofta hindra oss från att dela fritt mellan juridiska enheter)*











</div></Collapse>
<Collapse title="Personalisering är alltid kundens val">
<div class="content">














Personalisering ska vara en möjliggörare inte en förstörare. Det innebär att vi där det går erbjuder en personalisering (både aktiv från kunden och servad från oss), men det måste utgå från vad kunden vill – kunden väljer personalisering (opt-in), vi tvingar inte på det (opt-out).

Vi ser att många kunder efterfrågar personalisering men många andra inte är det minsta intresserade, och vi behöver respektera och stötta båda typer.<











</div></Collapse>
<Collapse title="Det ska kännas Länsförsäkringar">
<div class="content">












När kunderna och medarbetarna använder våra system ska de känna att de är på Länsförsäkringar. Vi har våra generella designkomponenter, men de måste förstås tolkas utifrån situationen de används i. Det viktigaste är att det känns som Länsförsäkringar rakt igenom. Våra designmönster för olika typ av handlingar (t.ex. köpa något) är en viktig del i att skapa den känslan. Igenkänning är en viktig faktor.

När vi samarbetar med tredjepart och inte kan påverka utseendet fullt ut så gäller det att göra det tydligt för kunden att de går från Länsförsäkringar till en samarbetspartner. I vissa fall kan det vara bättre att inte anpassa utseendet alls än att anpassa det halvdant.










</div></Collapse>
</section>