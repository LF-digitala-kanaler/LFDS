---
template: ComponentPage
title: Select
intro: The select component is an enhancement of the native HTML form element
  select. It provides the user with a list of options from which one or more can
  be selected.
description: An enhanced HTML select element for presenting options.
previewImage: /img/dropdown.svg
category: Forms
componentsNavigation:
  - name: Single
  - name: Multiple
backgroundColor: '#fff'
tabs:
  - name: Design
    content: >-
      ## How to use


      Select is a form element which provides the user with a number of options from which they are to choose one or several, just like [radio buttons](../forms/radio-buttons) and [checkboxes](../forms/checkbox). That means that you as a designer need to decide whether to use a select or radio buttons/checkboxes. As a rule of thumb, use radio buttons/checkboxes if you a have five or fewer options and select if you have six or more. There are however also other considerations which can come into play (here is a good and brief [article on considerations](https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1) you should take into account).


      The select component is an extension of the native HTML form element `select`. The extension allows for custom styling and different behavior depending on the device used. Only when using a pointer device such as a mouse or trackpad is the custom design used. In other cases (i.e. touch based devices) the native `select` element is used.


      The select component has two variations with some common traits:


      * They expand upward if the clicked on when and the dropdown won't fit downwards.

      * You can choose to add (non-selectable) headings to your dropdown, using `optgroup`.

      * The headings can be sued to toggle their respective options.

      * A short secondary text can be added to help the user make their choice (e.g. showing the price for a listed option). This text is in a smaller typeface and grey.


      ### Variations


      #### Select single option


      The standard version, which pretty much follows the common traits. The only thing to add that this version works like a radio button in that it only allows the user to select one option. If you want users to be able to choose several options, please use a multi-select dropbox instead.


      #### Multi-select


      This version allowes for selecting several options, which means it works like checkboxes. Note that the user doesn't have to choose multiple options.


      ### Modifiers


      To further customize the  dropdown to your needs you can use any combination of the vailable modifiers.


      **Secondary text** - Adds a smaller text used to aid the user in selection an option.


      **Option groups** - Group the options to convey a hierarchical categorization.


      **Toggle groups** - Allow for toggling (expanding/collapsing) the option groups for easier navigation.


      ### Device agnostic


      Only on devices with a primary pointing device such as a mouse or trackpad will the custom select list be shown. On devices with touch being the primary pointing device, the native browser `select` element is used which offers better afforances and tighter integrations with the devices operating system.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Dropdown)
  - name: Copy
    content: >-
      ## Så skriver vi


      **Label:** Välj \[label] (till exempel "Välj belopp") alternativt bara \[label]l (till exempel "Belopp")


      **Förvald text i dropdown:** Välj


      Sekundära text i dropdown kan användas för att hjälpa användaren göra sitt val. Kan till exempel visa pris för olika val. Förkortningar ok. Till exempel: 250 kr/år


      Om man kan välja alla alternativ skriver vi: Välj alla


      **Valideringstext vi ej valt:** Välj ett alternativ eller Välj \[label]


      #### Exempel från Bolån


      **Var ligger bostaden?**


      **Valideringstext:** Välj kommun
  - name: Code
    content: >-
      ## How to use


      The select component is imported and  initialized with the given element.


      ```js

      import select from '@lf-digitala-kanaler/lfui-components/select'


      const mySelectElement = document.querySelector('#my-select')


      select(mySelectElement)

      ```


      It is also avalable as an export of the main lfui bundle.


      ```js

      import { select } from '@lf-digitala-kanaler/lfui-components'

      ```

      ### Markup


      The module expects a `div` element wrapping a `select` element with an accompanying `label` element.


      ```html

      <div class="select" id="my-select">
        <label class="select-label" for="timezone">City</label>
        <select class="select-options" name="timezone" id="timezone">
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>


      ```


      ### Default option


      It is common practice to define a default option to not leave a select element completely blank before the user has made a choice.


      The best practice for adding a default option is to add an option element with an empty `value` and the attributes `disabled`, `hidden` and  `selected`. This will display the otion before the user selects another option but prevents the user from selecting the default option.


      ```html

      <option value="" disabled selected hidden>Select something</option>

      ```


      ### Variations


      We have two different variants of the select component. One which lets the user pick one option and one when the user can pick more than one option.


      Using `optgroup` to group the options is supported out of the box and.


      ```

      <optgroup label="Header text">
        <option>Some option</option>
      </optgroup>

      ```


      #### Select one option


      This is the most common type of `select` element, allowing thw user to select on option, just like how radio buttons work.


      ```

      <div class="select" id="my-select">
        <label class="select-label" for="timezone">City</label>
        <select class="select-options" name="timezone" id="timezone">
          <option value="" disabled selected hidden>Select City</option>
          <option>Stockholm</option>
          <option>Göteborg</option>
          <option>Malmö</option>
          <option>Umeå</option>
        </select>
      </div>

      ```


      #### Select multiple options


      Adding the attribute `multiple` to the `select` element will allow for selecting more than one option, much like how checkboxes work.


      ```

      <div class="select">
        <label class="select-label" for="my-multiple-select">Berries</label>
        <select multiple class="select-options" name="berries" id="my-multiple-select">
          <option value="" disabled selected hidden>Select Berries</option>
          <option>Raspberry</option>
          <option>Blueberry</option>
          <option>Blackberry</option>
          <option>Strawberry</option>
          <option>Cranberry</option>
        </select>
      </div>

      ```


      ### Options


      Options can be provided when intializing the element.


      ```js

      import select from '@lf-digitala-kanaler/lfui-components/select'


      const element = document.querySelector('#my-select')

      const options = {
         allLabel: 'All the things',
         groupToggle: true,
         smallPattern: /\((.+?)\)/
      }


      select(element, options)

      ```

      Options may also be declared as inline `data-`-attributes

      ```html

      <div class="select" id="my-select" data-all-label="All the things" data-group-toggle data-small-pattern="\\((.+?)\\)">
        …
      </div>

      ```

      #### `allLabel`


      A `string` which is the label for an option which toggles all the available options.


      <div class="Callout"><strong class="Callout__title">Only for <code>multiple</code></strong><p class="Callout__text">The <code>allLabel</code> is only applicable for <code>select</code> elements with the <code>multiple</code> attribute.</p></div>


      #### `groupToggle`


      A `boolean` which, when `true`, enables toggling of the `optgroup` elements for easier navigaion in a long list of options.


      #### `smallPattern`


      A `RegExp` or `string` with a regexp pattern which will be used to extract a part of the `option` and `optgroup` labels and display it in a smaller font face.


      This is typically used to provide extra information regarding the option, e.g. price.


      In the bellow example, the text in parenthesis will be rended as `small` text in a tinted color.


      ```html

      <div class="select" id="my-select" data-small-pattern="\((.+?)\)">
        <label class="select-label" for="city">City</label>
        <select class="select-options" name="city" id="city">
          <option value="" disabled selected hidden>Select City</option>
          <option>Stockholm (Stockholm)</option>
          <option>Göteborg (Västra Götaland)</option>
          <option>Malmö (Skåne)</option>
          <option>Umeå (Västerbotten)</option>
        </select>
      </div>

      ```
---
