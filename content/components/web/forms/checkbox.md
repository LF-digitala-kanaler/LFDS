---
template: ComponentPage
title: Checkbox
intro: "Well, as Shakespeare (almost) wrote: \"What's in a name? That which we
  call a checkbox, by any other name would still check a box\". Your standard
  web component dressed in a Länsförsäkringar styling."
description: Your standard web component dressed in a Länsförsäkringar styling.
previewImage: /img/checbox.svg
category: Forms
tabs:
  - content: >-
      ## How to use


      Our checkbox follows standard web behaviour - it is used when the user has to make a choice and isn't limited to only one. Both checkbox and label should be clickable to select/unselect a checkbox.


      Our recommendation is to present your list of checkboxes vertically, with one choice per line. This makes it easier to get an overview of the options and creates a clearer and larger click area. If you use an horizontal layout, make sure that it is coded in such a way that labels don't flow over two rows in responsive modes (one good way is to set a break point when the list becomes vertical).


      Checkboxes should be unchecked by default (unless viewing a representation of previous choices - like having the add-on "Mer" on your car insurance).


      ## Please consider


      If you have more than five options you are probably better off using a [multi-select dropdown](/components/web/forms/dropdown#multi-select).


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Checkbox)
    name: Design
  - content: |-
      ## Så skriver vi

      Vanligtvis godkännande-texter.

      Exempel (@Lollo skriv standardtext för godkännande här)

      ### Valideringstext för ej vald obligatorisk checkbox:

      För att \[det man gör i tjänsten] måste du \[verbet som labeln har].

      Till exempel: För att köpa bilförsäkring måste du godkänna villkoren.
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
backgroundColor: "#fff"
---
