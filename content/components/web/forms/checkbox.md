---
template: ComponentPage
category: Forms
title: Checkbox
description: Your standard web component dressed in a Länsförsäkringar styling.
previewImage: /img/checbox.svg
intro: >-
  Well, as Shakespeare (almost) wrote: "What's in a name? That which we call a
  checkbox, by any other name would still check a box". Your standard web
  component dressed in a Länsförsäkringar styling.
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      Our checkbox follows standard web behaviour - it is used when the user has
      do to a choice and isn't limited to only one. Not much more to say
      designwise.


      Checkboxes are used when there is a list of options and the user may
      select any number of choices, including zero, one, or several. In other
      words, each checkbox is independent of all other checkboxes in the list,
      and checking one box doesn’t uncheck the others.


      Try to present your lists vertically, with one choice per line. If you
      must use a horizontal layout with multiple options per line you have to
      think about the mobile layout, we don't want the answers to 


      ## Please consider


      If you have more than five options you are probably better off using a
      [multi-select dropdown](../dropdown).
    name: Design
  - content: |-
      ## Så skriver vi

      Vanligtvis godkännande-texter.

      Exempel (@Lollo skriv standardtext för godkännande här)

      Valideringstext för ej vald obligatorisk checkbox:

      För att \[det man gör i tjänsten] måste du \[verbet som labeln har].

      Till exempel: För att köpa bilförsäkring måste du godkänna villkoren.
    name: Copy
  - content: >-
      ## How to use


      Since the default checkbox design is not customizable, we will hide it
      visually and add a pseudo element which we style with css to get the
      desired look. By visually, I mean to hide it from the UI and keep it in
      the DOM for screen reader and keyboard users. You shouldn't need to do
      anything else then use the code posted below. 


      ```

      <div class="custom-control custom-checkbox mr-1">
        <input type="checkbox" class="custom-control-input" id="checkbox">
        <label class="custom-control-label" for="checkbox">Checkbox</label>
      </div>

      ```




      ## Accessibility


      Remember to always associating the label with the input. Which means
      `<input>` should always have an ID and this ID should be used as a for
      attribute for the `<label>` .


      ```

      <input type="checkbox" class="custom-control-input" id="checkbox">

      <label class="custom-control-label" for="checkbox">Checkbox</label>

      ```
    name: Code
---

