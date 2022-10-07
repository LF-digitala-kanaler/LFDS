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
componentsNavigation:
  - name: Button Group
  - name: Styled Radio Buttons
  - name: Radio Cards
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      There are several components in LFUI based on standard radio button behaviour (choose one and only one option), all with their specific behaviour:


      * **Button group** is our main way of presenting users with an either or-choice in a form. They follow radio button behaviour but have a more tabby look to them. They should be your default option if there are three or less options to choose from.

      * **Styled radio buttons** are used when you want to use radio buttons in a context outside a form flow or if you need or want toned down radio buttons (in comparison to the button group). Typical use cases for this is when there are four or more options, or the options need to have long labels.

      * **Radio cards** exist in two sizes and they are used for presenting the user with a primary choice for the whole flow. The larger size is used when customers choose between versions of a product and the smaller as a filter on large lists (typically lists of funds or stocks).


      All versions of radion buttons can either have no preselection or one of the options preselected, as is standard in html. Choose which option is right for you based on a balance of user, business and legal perspectives.


      ### Button group


      The button group is our primary look for radio buttons. There are two modifiers of button groups, described below. Both follow our standard styling and behaviour for form items when it comes to colours, active states, validation and more.


      <div class="Callout"><strong class="Callout__title">Please note </strong><p class="Callout__text">Although we generally discourage from disabled states in LFUI, there are disabled states in the button group as prior choices can lead to options being unavailable due to business rules. A good example is in purchase flows where choosing the payment "Faktura" disables the time frequency "Månad".</p></div>


      In responsive view, the options get stacked on top of each other. There is one exemption to this however; if the options are yes and no they are both so short that they can be placed next to each other on even a small screen. This makes the choice clearer for the user and the depth of the page shorter.


      <figure class="Image Image__background "><img src="/img/button-group-yes-and-no.jpg" srcset="/img/button-group-yes-and-no.jpg 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption></figure>


      #### Specific modifiers


      ##### Standard button group


      All choices should get the same size as the naturally largest size gets. This is the main option when the button labels have short copy or if there are only two options.


      ##### Stretched button group


      This option fills the whole container it is included in. The various options get the same size, but in this case based on an even distribution of the total size. Only use the stretched button group if you have three options in a larger container (rule of thumb, larger than 260 px).


      ### Styled radio buttons


      Our styled radio buttons are based on a standard radio button look and only styled to look and feel more like Länsförsäkringar. They are our secondary option for radio button behaviour (with Button group being our primary) and should normally only be used if:


      1. There are four or more options to choose from

      2. The label text has to be long (sentences rather than words)

      3. If the radio choice is surrounded by a large amount of text


      ### Radio cards


      Radio cards are our most visual way of showing options and should only be used once per flow. Like other radio buttons, you need to use several next to each other for them to function as intended.


      #### Specific modifiers


      There are two modifiers for radio card:


      * **Radio cards for selecting products**: The larger of the two, mainly  used in purchase flows to distinguish between versions of an insurance (or other product)

      * **Radio card for primary choice**: A more visually pleasing way of a choice which affects the rest of the flow.


      ##### Radio card for selecting products


      Our original implementation of the radio card is a visual highlight of the main choice a user has to do in a flow. Thus far it has only been used in purchase flows, showing the various versions of the insurance (or other product) which they can choose from. A selected option "grows" a bit in height to become oversized in comparison with the non-selected options.


      In theory the card can be populated as you wish, but in practice a standard has evolved for how it is used in purchase flows. In purchase flows, the card consists of a header with a radio button in front of it, a short description and some of the USPs for that option with a footer consisting of an optional "read more"-button to the left and the the price of that option to the right. The content of the cards should be chosen as to help the user in choosing between the options they have.


      In smaller devices/screens, the boxes are piled on top of each other, spanning across the full width.


      ##### Radio card for primary choice


      A second implementation of the radio card can be seen as a meeting between [landing page shortcuts](../button-and-links/shortcut#landing-page-shortcuts) and the original radio card. This version of the radio card is used for primary choices in a flow, the most common being as a filter in longer lists of funds or stocks (such as [Fondlistan](https://www.lansforsakringar.se/privat/bank/spara/fondkurser/?shortcut=1)). Another implementation is in lists with many options, such as [Skadeanmälan](https://ext-web.lansforsakringar.se/skadeanmalan/).


      Visually the card is dominated by an icon. The icon is complemented by a radio button in the top left corner and a label below the icon.


      ## Please consider


      If you have more than five options you are probably better off using a [dropdown select](./select).
    name: Design
  - content: |-
      ## How to write

      Example copy for button groups

      * Betalsätt
      * Jag vill betala varje
      * Har du barn som bor hemma?

      Example validation copy

      * Välj ett betalsätt
      * Välj ett alternativ
      * Oj, du glömde visst svara
    name: Copy
  - name: Code
    content: >-
      ## How to implement


      There is three different variation of radio buttons in LFUI. Styled radio buttons, Button group and radio cards.


      ### Styled radio buttons


      The "default" radio button built with `<input>` and `<label>` are sibling elements as opposed to Button groups which have `<input>` within a `<label>`


      ```

      <div class="custom-control custom-radio">
        <input id="radio1" name="radio" type="radio" class="custom-control-input">
        <label class="custom-control-label" for="radio1">Radiobutton</label>
      </div>

      ```


      ### Button group


      While the `btn-group` supports different types of elements, it is important that they are *solely used with radio button functionality, never as checkboxes.*


      The Button-group variant is the primary look and feel of our radio buttons, and it is the styling you should use when:


      * The number of choices is less than or equal to three.

      * The choices do not contain longer text.


      If any of these two points are not fulfilled, use styled radio buttons.


      ```

      <div class="btn-group" data-toggle="buttons">
        <label class="btn active" data-text="Radio 1">
          <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio 1
        </label>
        <label class="btn" data-text="Radio 2">
          <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
        </label>
        <label class="btn" data-text="Radio 3">
          <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
        </label>
      </div>

      ```

      Please note the `data-text` attribute. It's being used to allow for bolding text without impact on the width of the element.


      #### Modifiers


      ##### Stretch


      The button group may also stretch to fill its containing element by appending the class `btn-group-stretch`. Consider not stretching the button-group if there are only two btn's (the common example is "Ja / Nej"). This will result in a lot of empty, unused space inside the buttons which does not look right. A rule of thumb would be: **Only use btn-group-stretch when there's more than two btn's, if inside a larger (< 260px) container.**

      Note, the `data-text` attribute is not needed for stretched buttons


      ```

      <div class="btn-group btn-group-stretch" name="button-group" role="group" aria-label="Basic example" data-toggle="buttons">
        <label class="btn active">
          <input type="radio" name="stretch-options" id="stretch-option1" autocomplete="off" checked="">E-faktura
        </label>
        <label class="btn">
          <input type="radio" name="stretch-options" id="stretch-option2" autocomplete="off">Autogiro
        </label>
        <label class="btn">
          <input type="radio" name="stretch-options" id="stretch-option3" autocomplete="off">Faktura
        </label>
      </div>

      ```


      In smaller devices the btn-group should stack on top of each other (try resizing this window). In order to ensure this, add media query rules that sets the following:


      ```

      @media all and (max-width: 767px) {
        .btn-group-stretch {
          flex-direction: column;
        }
        .btn-group-stretch .btn {
          flex-basis: auto;
          margin-left: 0 !important;
        }
      }

      ```


      ### Radio cards


      Functioning as radio buttons, the `.radio-card`'s are a more styled manner of displaying different choices, usually a form's single, "main" choice.


      ## Validation


      Validation in LFUI is done entirely by you, the user, through Javascript. Use the available validation classes `has-valid ` and `has-danger`.*The `has-success` and `has-warning` classes exist in LFUI but have not been entirely implemented, as LFUI discourages use of these.*


      If a field has been filled out and validated, add the `has-valid` class. If a field has been filled out and validated but with errors, add the `has-danger` class.
---
