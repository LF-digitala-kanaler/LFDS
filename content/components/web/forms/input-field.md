---
template: ComponentPage
title: Input field
intro: Input fields are fields in which the user can enter text of some type (be
  it letters or numbers). This section describes the styling of input fields and
  the various versions which exist.
description: Input fields are fields in which the user can enter text of some
  type (be it letters or numbers).
previewImage: /img/input.svg
category: Forms
componentsNavigation:
  - name: One lined
  - name: Several lines
backgroundColor: "#fff"
tabs:
  - content: >-
      ## How to use


      Use an input field when you want the user to enter some information freely (use another [form](../forms/) option if they only can select from a set number of options). The input field has two companion elements, the label and help text (see the [form element grouping pattern](/patterns/form-patterns/form-element-grouping) for a description of them).


      ### Variations


      There are two mains variations of input fields, the one-lined and the one spanning over several lines/rows. The one-lined in addition can be modified in a number of ways.


      #### One-lined text input


      The one-lined text input field is the most commonly used input type and is used when you want a specific input from the user (such as e-mail, a value or subject). Depending on context and amount of space available you can put either one or two one-lined input fields on a row by using [the grid](/visual-identity/design-dimensions). If you place two input fields on the same row they should have the same size. See images below for an example.


      A one-lined text input field on a row


      <figure class="Image Image__background "><img src="/img/one-lined-input-field.png" srcset="/img/one-lined-input-field.png 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption></figure>


      Two one-lined text input fields on a row


      <figure class="Image Image__background "><img src="/img/two-one-lined-on-a-row.png" srcset="/img/two-one-lined-on-a-row.png 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption></figure>


      #### Modifiers


      The one-lined text input has several modifiers, all described below.


      ##### Datepicker


      Although a form of input field as well from a user perspective, the datepicker is treated as a separate component. [Go here](../forms/datepicker) to read about it.


      ##### Password


      If an input field contains a password or other sensitive data, please use the password modifier. It follows web standards and translates characters into asterisks as they are entered.


      ##### Prefix


      If you need to put a label of sorts prior to the actual input area you can add the modifier "prefix". It might be usable in a context where the user has to enter a twitter handle or URL, but no actual uses of prefix with text are known at time of writing. It is however a technical prerequisite for the more common "prefix as image". 


      ##### Prefix as image


      A version of prefix where the text has been replaced with an image. The most common usage is relation to motor insurances and when users are asked to provide the number plate of the vehicle they want to insure/make a claim on.


      ##### Suffix


      Adds a label to the end of the input field, most commonly the unit (e.g. "kr", "years" and "m²"). 


      #### Text input with several lines (Textarea)


      If you need a text input field which spans several rows you should use the textarea-component. It is typically (perhaps exclusively) used for message text when the user can write a message to us. Although we set a height when the textarea the user can change the height of the textarea within its column as is web standard - we have however disabled horisontal resizing.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Input/ and Form/Input set/)
    name: Design
  - content: >-
      ## Så skriver vi


      Vi skriver kort och skriver inte ut det som är uppenbart. Skriv inte ut onödiga ord som inte behövs för att förstå vad som ska fyllas i. "Ange" skriver vi inte ut i labels eftersom designen visar att användaren ska fylla i något. 


      Dock kan fler ord användas om det behövs för att undvika en för hård tonalitet, det ska fortfarande vara personligt. Hjälptexter under fältet används bara om det inte går att beskriva enkelt nog i labeln vad som ska fyllas i. Placeholder-text behöver bara användas om formatet är hårt styrt och det är stor risk att  användaren fyller i fel. 


      Copy för fältvalidering finns under respektive fält. Tänk på att du ibland kan använda dig av glimten i ögat där det passar, och för att lätta upp.


      ### Vanliga labels


      #### Personnummer


      Placeholder: ååååmmdd-nnnn\

      Hjälptext (Länk): Så behandlar vi personuppgifter


      Valideringstext: Fyll i personnummer


      #### Namn


      Valideringstext: Fyll i namn


      #### Telefonnummer/Mobilnummer


      Använd rätt begrepp beroende på vad som tillåts. För alla nummer, skriv Telefonnummer. För enbart mobilnummer, skriv Mobilnummer. 


      Placeholder (om det måste skrivas med ett speciellt format): 070-xxxxxxx


      Valideringstext: Fyll i telefonnummer


      #### E-post


      Placeholder: namn@mejladress.se


      Valideringstext: Fyll i e-postadressen


      ##### Bekräfta e-post


      Placeholder: namn@mejladress.se


      Valideringstext: Bekräfta e-postadressen


      #### Adress


      Placeholder: Kungsgatan 1


      Valideringstext: Fyll i gatuadressen


      #### Person-/organisationsnummer


      Placeholder: ååååmmdd-nnnn eller xxxxxx-xxxx


      Valideringstext: Fyll i person- eller organisationsnummer


      #### Företag/organisation


      Valideringstext: Företags- eller organisationsnamn


      #### Registreringsnummer


      Placeholder: ABC123


      Valideringstext tomt: Fyll i regnr. Ring oss om fordonet saknar svenskt regnr.


      Valideringstext fel format: Skriv regnr i format XXXNNN eller XXXNNX. Ring oss om fordonet saknar svenskt regnr.


      ### Skicka e-fakturan till


      Valideringstext: Fyll i faktureringsadress


      ### Fyll i kontaktuppgifter


      Valideringstext: Fyll i kontaktuppgifterna


      ## Bolån


      ### Pris på bostaden


      Valideringstext: Fyll i priset på bostaden


      ### Månadsinkomst innan skatt


      Valideringstext: Fyll i inkomst per månad innan skatt


      ### Tänkt bostadspris


      Valideringstext: Fyll i det tänkta priset för bostaden


      Placeholder: 1 000 000


      ### Kontantinsats


      Valideringstext: Fyll i beloppet för kontantinsatsen


      ### Uppskattad driftskostnad per månad


      Valideringstext: Fyll i den uppskattade driftkostnaden


      Placeholder: 10 000


      ### Månadsinkomst innan skatt


      Valideringstext: Fyll i din inkomst innan skatt


      ### Inkomst i utländsk valuta


      Valideringstext: Fyll i din inkomst i utlänsk valuta


      ### Typ av konto


      Valideringstext: Välj typ av konto
    name: Copy
  - content: >-
      ## How to use


      All Input elements are "rebooted" by [Bootstrap reboot](https://getbootstrap.com/docs/4.0/content/reboot/#forms) for a more unified look. Using the class `.form-control` one can extend on those base styles.


      The form control is only intended to be used with textual inputs such as email, textarea or passwords. 


      We will only focus on the `<input>` here but remember to always have a label with a for attribute that's  equal to the id attribute of the related element to bind them together. This will give screen reader users a better experience. 

       

      <div class="Callout"><strong class="Callout__title">Your design friend don't want a label? </strong><p class="Callout__text">If you add an input of any sort you need a label to bind them together. However it is possible to hide it visually but still have it available for screen readers. Since LFUI is based on Bootstrap we have their helper class available for this. `.sr-only` will hide the element but keep it for screen readers to use.</p></div>


      ### Variations


      There are two main variations of input fields, the one-lined input and textarea. 


      #### One-lined text input


      All one-lined inputs needs  share the same base seen below. 


      ```

      <input type="*" class="form-control" />


      ```


      ##### Attributes


      Depending on your needs there is a couple of different attribute you can add to your input. First every input should have a **type** attribute. The type attribute specifies the type of `<input>` element to display.  As an example, if you add an input to be used to enter a password, use type **password.**


      ```

      <input type="password" class="form-control" />

      ```


      You can see all available type's [here](https://www.w3schools.com/tags/att_input_type.asp).


      To give users a hint of what to enter in an input  it's always a good idea to att a **placeholder** attribute.


      Placeholder text disappears after the user begins entering data into the Input and should not contain crucial information. 


      ```
        <input type="text" class="form-control" placeholder="ååååmmdd-nnnn">

      ```


      #### Modifiers


      The one-lined text input has several modifiers, all described below. Read more when to use them under the design tab. You can see all of these modifiers above in the example pane. 


      ##### Prefix


      (Note, the prefix does not respond to the state of the input field without the help of JS. Which is not included in LFUI at the moment. )


      ```

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">@</span>
        </div>
        <input type="text" required class="form-control" placeholder="username" >
      </div>

      ```


      ##### Prefix as Image


      ```

      <div class="input-group">
        <span class="input-group-prepend-reg"></span>
        <input type="text" required class="form-control" placeholder="ABC123">
      </div>

      ```


      ##### Suffix


      ```

      <div class="input-group">
        <input type="text" required="" class="form-control">
        <div class="input-group-append">
          <span class="input-group-text">kr</span>
        </div>
      </div>

      ```


      ### Textarea


      The `<textarea>` tag defines a multi-line text input control.  The size of a text area can be specified by the cols and rows attributes.


      ```

      <textarea class="form-control" rows="3"></textarea>

      ```


      ## Validation


      **LFUI does not include any validation  functionality, thats something you will have to build yourself**. However we do provide helper class for validation styling. Use the available validation classes `has-valid ` and `has-danger.`


      If a field has been filled out and validated, add the `has-valid` to it's parent class. If a field has been filled out and validated but with errors, add the `has-danger` class. There is a more detailed example of this TODO add link to patterns.
    name: Code
---
