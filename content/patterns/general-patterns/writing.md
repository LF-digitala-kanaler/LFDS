---
template: ArticlePage
category: General patterns
title: Felmeddelanden
intro: "Här kan du läsa om hur vi generellt skriver felmeddelanden i tjänster
  och informationstexter vid till exempel incidenter eller systemunderhåll. "
description: ""
contentTop: >-
  Ett felmeddelande ska hjälpa användaren att göra rätt eller vägleda. Vad har
  hänt? Och vad kan användaren göra nu? Guida, hjälp och tipsa! Tonen är viktig,
  var vänlig och framförallt när det är vårt fel – var ödmjuk.


  Felmeddelanden visas ofta i form av text under det aktuella fältet när det kommer till validering, eller som ett modalfönster (även kallat dialologruta eller pop-up) vid andra fel. Inloggat så visas de ofta som så kallade [Alerts](https://lf-digitala-kanaler.github.io/components/web/system-display/alert?copy).


  ### Validering av fält


  Valideringsmeddelanden kan visas när användaren missat att fylla i ett fält, skriver fel format eller något annat gör att man inte kan gå vidare. 


  Copy för fältvalidering ligger under respektive komponent under [Forms](https://lf-digitala-kanaler.github.io/components/web/forms).


  ### Tekniskt fel


  Olika felmeddelanden visas på olika sätt. Ibland är det en modal och då behövs både rubrik, brödtext och knapp.


  #### **Exempel:**


  **Felet ligger hos oss:**


  **Tekniken är inte med oss just nu**\

  Vi är ledsna för det och jobbar med att lösa felet. Kom gärna tillbaka lite senare.\

  Knapp: Okej, stäng


  **Felet ligger hos användaren – inget internet:**


  **Inget internet?**\

  Det verkar som du saknar internet just nu. Kolla uppkopplingen och försök igen. \

  Knapp: Okej, stäng


  **Okänt fel:**


  **Vi är ledsna men något gick fel**\

  Det gick inte att \[göra det man skulle göra]. Försök gärna igen, eller testa senare.\

  Knapp: Okej, stäng


  ### BankID


  Felmeddelnaden för BankID finns under [BankID](https://lf-digitala-kanaler.github.io/patterns/general-patterns/bank-id).


  ## Incident eller systemunderhåll


  Denna typ av text ska uppmärksamma kunden på något som tillfälligt inte fungerar eller går att använda som vanligt. Meddelandet skrivs ofta i komponenten [Alert](https://lf-digitala-kanaler.github.io/components/web/system-display/alert). Det som på öppna sidor i Episerver heter Viktigt meddelande under Arkiv för startsidan eller på respektive produktsida. 


  #### Vad bör finnas med i felmeddelandet?


  * När sker det? "Just nu kan du inte" eller "Fram till 6.00 kan du inte" (om meddelande publiceras när det sker) eller "På lördag 18-24" (om det publiceras efter)

  * Vad är det kunden inte kan göra eller se? "se dina försäkringar"

  * Varför? (om relevant för kunden) "pga systemunderhåll"

  * Är det kanalspecifikt eller kan de göra det i någon annan kanal? 

  * När fungerar det igen? 


  #### Antal tecken


  Observera att 100 tecken är max i appen. Samma meddelande kan användas på Mina sidor. \

  På öppna sidorna kan 120 tecken användas. Där är Rubriken alltid Viktigt meddelande.


  #### Exempel på felmeddelanden vi använt


  ##### Vissa störningar:


  "Just nu är det systemunderhåll i appen och det kan därför upplevas lite svajigt, 7.00 är vi klara!"


  ##### Kanal helt stängd:


  "På söndag morgon uppdaterar vi våra system – då är appen avstängd i ungefär en timme."


  ##### Tjänst ligger nere:


  ”Fram till midnatt kan du inte se eller ändra din fordonsförsäkring, pga systemunderhåll.”


  "På fredag kväll har vi systemunderhåll, då kan företagstjänster vara lite sega. Klart lördag kl. 7."


  ##### Telefoni nere, öppna sidor:


  "Just nu kan telefonköerna vara långa, pga tekniska problem. Vi jobbar för fullt med att lösa problemet."
wide: false
lang: false
---
