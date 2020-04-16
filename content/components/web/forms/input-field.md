---
template: ComponentPage
category: Forms
title: Input field
description: Input fields are fields in which the user can enter text of some
  type (be it letters or numbers).
previewImage: /img/input.svg
intro: Input fields are fields in which the user can enter text of some type (be
  it letters or numbers). This section describes the styling of input fields and
  the various versions which exist.
backgroundColor: "#fff"
tabs:
  - content: >-
      ## How to use


      Use an input field when you want the user to enter some information freely (use another [form](../) option if they only can select from a set number of options). The input field has two companion elements, the label and help text (see the [forms landing page](../) for a description of them).


      ### Variations


      There are two mains variations of input fields, the one-lined and the one spanning over several lines/rows. The one-lined in addition can be modified in a number of ways.


      #### One-lined text input


      The one-lined text input field is the most commonly used input type and is used when you want a specific input from the user (such as e-mail, a value or subject). Depending on context and amount of space available you can put either one or two one-lined input fields on a row by using _**the grid**_. If you place two input fields on the same row they should have the same size. See images below for an example.


      A one-lined text input field on a row


      ![Example of an input field](/img/one-lined-input-field.png "A one-lined input field")


      Two one-lined text input fields on a row


      ![Two one-lined input fields on a row with extra content](/img/two-one-lined-on-a-row.png "Two one-lined input fields on a row")


      #### Modifiers


      The one-lined text input has several modifiers, all described below.

      ##### Datepicker

      Although a form of input field as well from a user perspective, the datepicker is treated as a separate component. [Go here](../forms/datepicker) to read about it.

      ##### Password

      If an input field contains a password or other sensitive data the please use the password modifier. It follows web standards and translates characters into asterisks as they are entered.

      ##### Prefix

      If you need to put a label of sorts prior to the actual input area you can add the modifier "prefix". It might be usable in a context where the user has to enter a twitter handle or URL, but no actual uses of prefix with text are known at time of writing. It is however a technical prerequisite for the more common "prefix as image". 

      ##### Prefix as image

      A version of prefix where the text has been replaced with an image. The most common usage is relation to motor insurances and when users are asked to provide the number plate of the vehicle they want to insure/make a claim on.

      ##### Suffix

      Adds a label to the end of the input field, most commonly the unit (e.g. "kr", "years" and "m²"). 


      #### Text input with several lines (Textarea)


      If you need a text input field which spans several rows you should use the textarea-component. It is typically (perhaps exclusively) used for message text when the user can write a message to us. Although we set a height when the textarea the user can change the height of the textarea within its column as is web standard - we have however disabled horisontal resizing.
    name: Design
  - content: >-
      ## How to use


      All Input elements are "rebooted" by [Bootstrap reboot](https://getbootstrap.com/docs/4.0/content/reboot/#forms) for a more unified look. Using the class `.form-control` one can extend on those base styles.


      The form control is only intended to be used with textual inputs such as email, textarea or passwords. 


      We will only focus on the `<input>` here but remember to always have a label with a for attribute that's  equal to the id attribute of the related element to bind them together. If we do this we will give screen reader users a better experience. 

       

      <div class="Callout"><strong class="Callout__title">Your design friend don't want a label? </strong><p class="Callout__text">If you add an input of any sort you need a label to bind them together. However it is possible to hide it visually but still have it available for screen readers. Since LFUI is based on Bootstrap we have their helper class available for this. `.sr-only` will hide the element but keep it for screen readers to use.</p></div>


      ### Variations


      There are two main variations of input fields, the one-lined input and textarea. They both share the same base functionality and design. 




      #### One-lined text input




      Two one-lined text input fields on a row




      #### Modifiers


      The one-lined text input has several modifiers, all described below.


      ##### Datepicker


      Although a form of input field as well from a user perspective, the datepicker is treated as a separate component. [Go here](../datepicker) to read about it.


      ##### Password


      If an input field contains a password or other sensitive data the please use the password modifier. It follows web standards and translates characters into asterisks as they are entered.


      ##### Prefix


      If you need to put a label of sorts prior to the actual input area you can add the modifier "prefix". It might be usable in a context where the user has to enter a twitter handle or URL, but no actual uses of prefix with text are known at time of writing. It is however a technical prerequisite for the more common "prefix as image". 


      ##### Prefix as image


      A version of prefix where the text has been replaced with an image. The most common usage is relation to motor insurances and when users are asked to provide the number plate of the vehicle they want to insure/make a claim on.


      ##### Suffix


      Adds a label to the end of the input field, most commonly the unit (e.g. "kr", "years" and "m²"). 


      #### Text input with several lines (Textarea)


      If you need a text input field which spans several rows you should use the textarea-component. It is typically (perhaps exclusively) used for message text when the user can write a message to us. Although we set a height when the textarea the user can change the height of the textarea within its column as is web standard - we have however disabled horisontal resizing.
    name: Code
  - content: >-
      ## Så skriver vi


      Vi skriver så kort som möjligt och skriver inte ut det som är uppenbart. Skriv inte ut onödiga ord som inte behövs för att förstå vad som ska fyllas i. Hjälptext används bara om det inte går att beskriva enkelt nog i labeln. 


      #### Vanliga labels


      ##### Personnummer


      <figure class="Image Image__background"><img src="/img/skärmavbild-2020-03-19-kl.-09.29.20.png" srcset="/img/skärmavbild-2020-03-19-kl.-09.29.20.png 2x" alt="Exempel på ett korrekt formaterat personnummersfält (inklusive länk till info om personuppgifter)"><figcaption><div class="Image__caption"></div></figcaption></figure>


      Placeholder: ÅÅMMDD-NNNN (visst är det så?)\

      Hjälptext (Länk): Så behandlar vi personuppgifter


      Valideringstext: Fyll i personnummer


      ###### Namn


      Valideringstext: Fyll i namn


      **Text:** Telefonnummer


      Placeholder: 070-1231234


      Valideringstext: Fyll i telefonnummer


      **Text:** E-post


      Placeholder: namn@mejladress.se


      Valideringstext: Fyll i e-posadressen


      **Text:** Bekräfta e-post\

      Placeholder: namn@mejladress.se


      Valideringstext: Bekräfta e-postadressen


      **Text:** Adress\

      Placeholder: Kungsgatan 1


      Valideringstext: Fyll i gatuadressen


      **Text:** Betalsätt


      Valideringstext: Välj betalsätt


      **Text:** Jag vill betala varje


      Valideringstext: Välj ett alternativ


      **Text:** Person-/organisationsnummer


      Placeholder: 19800101-0101


      Valideringstext: Fyll i person- eller organisationsnummer


      **Text:** Företag/organisation


      Valideringstext: Företags- eller organisationsnamn


      **Text:** Registreringsnummer


      Placeholder: ABC123


      Valideringstext: Fyll i registreringsnummer


      **Text:** Betalsätt


      Valideringstext: Välj ett betalsätt


      **Text:** Skicka e-fakturan till


      Valideringstext: Fyll i faktureringsadress


      **Text:** Jag vill betala varje


      Valideringstext: Välj ett alternativ


      **Text:** Fyll i kontaktuppgifter


      Valideringstext: Fyll i kontaktuppgifterna


      **Text:** Pris på bostaden


      Valideringstext: Fyll i priset på bostaden


      **Text:** Månadsinkomst innan skatt


      Valideringstext: Fyll i inkomst per månad innan skatt


      **Text:** Tänkt bostadspris


      Valideringstext: Fyll i det tänkta priset för bostaden


      Placeholder: 1 000 000


      **Text:** Kontantinsats


      Valideringstext: Fyll i beloppet för kontantinsatsen


      **Text:** Uppskattad driftskostnad per månad


      Valideringstext: Fyll i den uppskattade driftkostnaden


      Placeholder: 10 000


      **Text:** Var ligger bostaden


      Valideringstext: Fyll i postadress för bostaden (eller är det län, kommun?)


      Placeholder: postadress (om det är det?)


      **Text:** Månadsinkomst innan skatt


      Valideringstext: Fyll i din inkomst innan skatt


      **Text:** Inkomst i utlänsk valuta


      Valideringstext: Fyll i din inkomst i utlänsk valuta


      **Text:** Har du barn som bor hemma?


      **Text:** Typ av konto


      Valideringstext: Fyll i typ av konto
    name: Copy
---
