---
template: ComponentPage
title: Checkbox
intro: "Well, as Shakespeare (almost) wrote: \"What's in a name? That which we
  call a checkbox, by any other name would still check a box\". We offer this
  feature in two versions; the web standard and a more adorned versions for
  primary selections."
description: We offer checkboxes in two versions; the web standard and a more
  adorned versions for primary selections.
previewImage: /img/checbox.svg
category: Forms
componentsNavigation:
  - name: Styled checkbox
  - name: Checkbox cards
backgroundColor: "#fff"
tabs:
  - content: >-
      ## How to use


      We have two variations of checkboxes at Länsförsäkringar:


      * Styled checkboxes - your standard web component dressed in a Länsförsäkringar styling.

      * Checkbox cards - a more visually striking version inviting user to interact with them.


      ### Styled checkboxes


      Our checkbox follows standard web behaviour - it is used when the user has to make a choice and isn't limited to only one. Both checkbox and label should be clickable to select/unselect a checkbox.


      Our recommendation is to present your list of checkboxes vertically, with one choice per line. This makes it easier to get an overview of the options and creates a clearer and larger click area. If you use an horizontal layout, make sure that it is coded in such a way that labels don't flow over two rows in responsive modes (one good way is to set a break point when the list becomes vertical).


      Checkboxes should be unchecked by default (unless viewing a representation of previous choices - like having the add-on "Mer" on your car insurance).


      ### Checkbox cards


      The checkbox card is a version of the [radio card for primary choice](radio-buttons#radio-card-for-primary-choice), which allows for multiple items to be selected. Although called a card, it looks more like a button and which visually is dominated by an icon and label explaining the choice, with a small checkbox in the top left corner. The checkbox card was first created for internal systems where to be used for main choices in an input field-heavy flow, to give it an heightened importance compared to normal checkboxes. As possible uses in other contexts (such as filters on a table) could easily be imagined it was integrated into LFDS/LFUI although it at the time of writing wasn't in use any customer facing interface.


      ## Please consider


      If you have more than five options you are probably better off using a [multi-select dropdown](../dropdown#multi-select).


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Checkbox)
    name: Design
  - content: >-
      ## Så skriver vi


      Checkboxar används ofta för val i köptjänster eller som godkännande-texter.


      ### Godkännande i tjänst


      **Exempel från skadeanmälan (ej motor)**\

      Jag intygar att de uppgifter jag angivit är korrekta och att jag inte undanhåller någon information som är av betydelse för bedömningen av skadan. Jag är medveten om att oriktiga eller ofullständiga uppgifter kan göra att försäkringen inte gäller. Jag har också tagit del av Behandling av personuppgifter. 


      **Exempel från skadeanmälan (motor)**\

      Jag intygar att de uppgifter jag angivit är korrekta och att jag inte undanhåller någon information som är av betydelse för bedömningen av skadan. Jag intygar att Länsförsäkringar får ta del av eventuella polisanteckningar. Jag är medveten om att oriktiga eller ofullständiga uppgifter kan göra att försäkringen inte gäller. Jag har också tagit del av Behandling av personuppgifter.


      ### Valideringstext för ej vald obligatorisk checkbox:


      För att \[det man gör i tjänsten] måste du \[verbet som labeln har].


      Exempel: För att köpa bilförsäkring måste du godkänna villkoren.


      ### Valideringstext för ej vald checkbox:


      Välj \[label]\

      Exempel: Välj tilläggsförsäkringar
    name: Copy
  - content: >-
      ## How to use


      Since the default checkbox design is not customizable, we will hide it visually and add a pseudo element which we style with css to get the desired look. By visually, I mean to hide it from the UI and keep it in the DOM for screen reader and keyboard users. You shouldn't need to do anything else then use the code posted below. 


      ```

      <div class="custom-control custom-checkbox mr-1">
        <input type="checkbox" class="custom-control-input" id="checkbox">
        <label class="custom-control-label" for="checkbox">Checkbox</label>
      </div>

      ```




      ## Accessibility


      Remember to always associating the label with the input. Which means `<input>` should always have an ID and this ID should be used as a for attribute for the `<label>` .


      ```

      <input type="checkbox" class="custom-control-input" id="checkbox">

      <label class="custom-control-label" for="checkbox">Checkbox</label>

      ```
    name: Code
---
