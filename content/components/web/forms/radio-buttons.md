---
template: ComponentPage
title: Radio buttons
intro: We have several types of radio buttons in LFUI, all with their specific
  use cases. There are LF-styled "normal" radio buttons, button groups and radio
  cards.
description: There are three types of radio buttons in LFUI; standard radio
  buttons, button groups and radio cards.
previewImage: /img/radio-button.svg
category: Forms
tabs:
  - content: >-
      ## How (and when) to use


      There are several components in LFUI based on standard radio button behaviour (choose one and only one option), all with their specific behaviour:


      * **Styled radio buttons** are used when you want to use radio buttons in a context outside a form flow or if you want more/need scaled down radio buttons than button group. Typical use cases for this is when there are four or more options, or the options need to have long labels.

      * **Button group** is our main way of presenting users with an either or-choice in a form. They follow radio button behaviour but have a more tabby look to them. They should be your default option if there are three or less options to choose from.

      * **Radio cards** exist in two sizes and they are used for presenting the user with a primary choice for the whole flow. The larger size is used when customers choose between versions of a product and the smaller as a filter on large lists (typically lists of funds or stocks).


      ### Styled radio buttons


      Our styled radio buttons are based on a standard radio button look and only styled to look and feel more like Länsförsäkringar. They are our secondary option for radio button behaviour (with Button group being our primary) and should normally only be used if:


      1. There are four or more options to choose from

      2. The label text has to be long (sentences rather than words)

      3. If the radio choice is surrounded by a large amount of text


      ### Button group


      The button group is our primary look for radio buttons. There are two versions of button groups, described below. Both follow our standard styling and behaviour for form items when it comes to colours, active states, validation and more.


      **Please note**: Although we generally discourage from disabled states in LFUI, there are disabled states in the button group as prior choices can lead to options being unavailable due to business rules. A good example is in purchase flows where choosing the payment "Faktura" disables the time frequency "Månad".


      #### Standard button group


      All choices should have the same size, based on the size the largest choice has after padding has been added. This is the main option when the button labels have short copy or if there are only two options.


      #### Stretched button group


      This option fills the whole container it is included in. The various options get the same size, but in this case based on an even distribution of the total size. Only use the stretched button group if you have three options in a larger container (rule of thumb, larger than 260 px).


      In mobile, the options get stacked on top of each other.


      ### Radio cards


      Radio cards are our most visual way of showing options and should only be used once per flow.  There are two main versions of radio cards, with one (the larger one) being used in purchase flows to distinguish between versions of the insurance (or other product) and the other one as a more visually pleasing way of a choice which affects the rest of the flow.


      #### Radio card for selecting products


      Our original implementation of the radio card is a visual highlight of the primary choice a user has to do in a flow. Thus far it has only been used in purchase flows, showing the various versions of the insurance (or other product) which they can choose from. A selected option "grows" a bit in height to become oversized in comparison with the not-selected options.


      In theory the card can be populated as you wish, but in practice a standard has evolved for how it is used in purchase flows. In purchase flows, the card consists of a header with a radio button in front of it, a short description and some of the USPs for that option with a footer consisting of an optional "read more"-button to the left and the the price of that option to the right. The content of the cards should be chosen as to help the user in choosing between the options they have.


      In smaller devices/screens, the boxes are piled on top of each other, spanning across the full width. 


      #### Radio card for primary choice


      A second implementation of the radio card has evolved which can be seen as a meeting between visual shortcuts and the original radio card. This version of the radio card is used for primary choices in a flow, the most common being as a filter in longer lists of funds or stocks (such as [Fondlistan](https://www.lansforsakringar.se/privat/bank/spara/fondkurser/?shortcut=1)). Another implementation is in lists with many options, such as [Skadeanmälan](https://ext-web.lansforsakringar.se/skadeanmalan/).


      Visually the card is dominated by an icon. The icon is complemented by a radio button in the top left corner and a label below the icon.


      ## Please consider


      If you have more than five options you are probably better off using a [dropdown](../dropdown).
    name: Design
  - content: |-
      ## Så skriver vi

      Exempel på copy för Button group

      ### Betalsätt

      Valideringstext: Välj ett betalsätt

      ### Jag vill betala varje

      Valideringstext: Välj ett alternativ

      ### Har du barn som bor hemma?

      Valideringstext: 

      - - -
    name: Copy
  - name: Code
    content: >-
      ## How to use


      Radio button's in LFUI are based on Bootstraps custom forms.


      ### Variations


      **Styled radio buttons**


      The "default" radio button built with `<input>` and`<label>` are sibling elements as opposed to Button groups which have `<input>`within a`<label>`


      ```

      <div class="custom-control custom-radio">
        <input id="radio1" name="radio" type="radio" class="custom-control-input">
        <label class="custom-control-label" for="radio1">Radiobutton</label>
      </div>

      ```


      **Button group**


      Only the plain`btn`is supported by the`btn-group`. Other than that, no changes has been made to the default [Bootstrap button group](https://getbootstrap.com/docs/4.0/components/button-group/).


      The btn-group supports different types of functionality, although in LFUI it is important that they are *solely used with radio button functionality, never as checkboxes.*


      The Button-group variant is the primary look and feel of our radio buttons, and it is the styling you should use when:


      * The number of choices is less than or equal to three.

      * The choices do not contain longer text.


      If any of these two points are not fulfilled, use styled radio buttons.


      ```

      <div class="btn-group" data-toggle="buttons">
        <label class="btn active">
          <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio 1
        </label>
        <label class="btn">
          <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
        </label>
        <label class="btn">
          <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
        </label>
      </div>

      ```


      ##### Modifiers


      The button group may also stretch to fill its containing element by appending the class `btn-group-stretch`. Consider not stretching the button-group if there are only two btns (the common example is "Ja / Nej"). This will result in a lot of empty, unused space inside the buttons which does not look right. A rule of thumb would be: **Only use btn-group-stretch when there's more than two btns, if inside a larger (< 260px) container.**


      In smaller devices the btn-group should stack on top of each other (try resizing this window). In order to ensure this, add media query rules that sets the following:




      **Radio cards**


      Functioning as radio buttons, the `.radio-card`s are a more stylized manner of displaying different choices, usually a form's single, "main" choice. Earlier examples of use include which type of insurance level the users wish to choose: Big, Medium or Small. The three choices all share a subject, and inside the boxes themselves they can be compared to each other (through the use of the list).


      The markup is somewhat restricted, as the component is a radio button and contained within its`<label>`, which results in some non-standard css and html.


      Because of this, the radio button state (:checked) is unable to affect the parent container through basic css restrictions. Hence, some javacsript is required to properly toggle the visual feedback by adding the `.active `class to the `.radio-card`when the radio is checked.


      Feel free to add whatever content you see fit inside the card itself, but make sure to double-check the result as all possible variants of elements have not been tested inside the component yet.
backgroundColor: "#fff"
---
