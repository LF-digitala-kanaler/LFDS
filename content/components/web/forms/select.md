---
template: ComponentPage
title: Dropdown select
intro:
  The dropdown select provides the user with given options in a list which expands
  over the webpage when the user interacts with it.
description:
  The dropdown select provides the user with given options in a list which
  expands over the webpage when the user interacts with it.
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

      The Dropdown select is a form element that provides the user with a number of options from which they are to choose one or several, just like [radio buttons](../forms/radio-buttons) and [checkboxes](../forms/checkbox). That means that you as a designer need to decide whether to use a dropdown or radio buttons/checkboxes. As a rule of thumb, use radio buttons/checkboxes if you have five or fewer options, and a dropdown if you have six or more. There are however also other considerations that can come into play (here is a good and brief [article on considerations](https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1) you should take into account).


      The dropdown select component is an extension of the native HTML form element `select`. The extension allows for custom styling and different behavior depending on the device used. Only when using a pointer device, such as a mouse or trackpad, is the custom-designed dropdown list visible. In other cases, i.e. touch-based devices, the native `select` element is used that often displays as a native menu.


      The select component has **two variations** that both share the bellow traits:


      * They expand upward instead of downward if the dropdown won't fit downwards on the screen.


      * The dropdown list will be scrollable if more than 10 items are in the list, or when the screen sizes is particularly short.


      * You can choose to add headings to your dropdown to group options. These are (non-selectable) and rely on the `optgroup` element.


      * The headings can optionally also work as toggles, for expanding/collapsing respective groups of options.


      * A short secondary text can be added to help the user make their choice (e.g. showing the price for a listed option). This text is in a smaller typeface and grey.


      ### Variations


      #### Select single option


      The standard alternative pretty much follows the common traits. It's a select one and only one option setup, much like a radio button.


      #### Select multiple options


      This multi-select alternative allows for selecting one or several options, which means it works like checkboxes.


      ### Modifiers


      To further customize the dropdown to your needs, you can use any combination of the available modifiers.


      **Secondary text:** Adds a smaller text used to aid the user in selecting an option.


      **Option groups:** Group the options to convey a hierarchical categorization.


      **Toggle groups:** Allow for toggling (expanding/collapsing) the option groups for easier navigation.


      ### Device agnostic


      Only on devices with a primary pointing device such as a mouse or trackpad will the custom select list be shown. On devices with touch being the primary pointing device, the native browser `select` element is used which offers better affordances and tighter integrations with the device operating system.


      **This switch now happens automatically**, unlike the old dropdown component.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Dropdown)
  - name: Copy
    content: >-
      ## How to write


      **Label:** "Välj \[label]", for example "Välj belopp". Alternatvly the simpler "\[label]", for example "Belopp"


      **Placeholder:** "Välj"


      **Validation text, no option selected:** "Välj ett alternativ" or "Välj \[label]"


      **Secondary smaller text**:


      Used as a guide for users. For example, showing the prices for each option. Here, abbreviations are fine to use, for example "250 kr/år".


      **Select all buttons:** "Välj alla"


      #### Example from Bolån


      **Label:** "Var ligger bostaden?"


      **Validation text:** "Välj kommun"
  - name: Code
    content: >-
      ## How to implement


      The select component is imported and initialized with a given element.


      ```js

      import select from '@lf-digitala-kanaler/lfui-components/select'

      const mySelectElement = document.querySelector('#my-select')


      select(mySelectElement)

      ```


      It is also available as an export of the main js bundle.


      ```js

      import { select } from '@lf-digitala-kanaler/lfui-components'

      ```

      ### Markup


      The module expects a `div` element that is wrapping a `select` element, with an accompanying `label` element.


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


      ### Placeholder


      We don't want to leave the dropdown completely blank before the user has made a choice.  The best practice is adding a default option element with an empty `value` and the attributes `disabled`, `hidden`, and `selected`. This will work as a placeholder but prevents the user from selecting it as an option.


      ```html

      <option value="" disabled selected hidden>Select something</option>

      ```


      ### Variations


      We have two different variants of the select component. One which lets the user pick one option and one when the user can pick more than one option.


      #### Single select


      This is the most common type of `select` element, allowing the user to select only one option, much like radio buttons.


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


      #### Multiple select


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


      ### Grouping options


      The `optgroup` element  is supported out of the box.


      ```

      <optgroup label="Header text">
        <option>Some option</option>
        <option>Another option</option>
      </optgroup>

      ```


      ### Options


      Options can be provided when initializing the element.


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


      #### Select all


      `allLabel`


      String that enables the select all actions and sets the text for the button.


      <div class="Callout"><strong class="Callout__title">Only for multiple select</strong><p class="Callout__text">The <code>allLabel</code> is only applicable for <code>select</code> elements with the <code>multiple</code> attribute.</p></div>


      #### Expandable groups


      `groupToggle`


      Boolean that when `true` enables toggling of the `optgroup` elements for easier navigation in a long list of options.


      #### Gray labels


      `smallPattern`


      RegExp, or string with a regexp pattern, to be used to extract a part of the `option` and `optgroup` labels and display it in a smaller font face.


      This is typically used to provide extra information regarding the option, e.g. price.


      In the below example, the text in parenthesis will be displayed as `small` text in a muted color.


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


      #### Label inside


      The label can also be placed *inside* the select element, taking the place of the currently selected value(s).


      <div class="Callout"><strong class="Callout__title">Use with caution</strong><p class="Callout__text">Only use the inside label when the number of selected options can sufficiently convey semantic meaning.</p></div>

      Placing the label inside the select only has a function impact for <code>select</code> elements with the <code>multiple</code> attribute. For regular selects, the `inside` class simply makes the option that might be selected by default ("Select Berries" in below example) mimic the design of a label.


      ````

      <div class="form-group">
        <div class="select inside">
          <label class="select-label" for="my-select">Berries</label>
          <select multiple class="select-options" name="berries" id="my-select">
            <option value="" disabled selected hidden>Select Berries</option>
            <option>Raspberry</option>
            <option>Blueberry</option>
            <option>Blackberry</option>
            <option>Strawberry</option>
            <option>Cranberry</option>
          </select>
        </div>
      </div>

      ````


      ### API


      There is no programmatic API for interacting with the select, instead, **we rely on regular DOM events** which work just as you'd expect with any `select` element.


      The standard [`onchange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange) event handler can be used to listen for any selections made by the user.


      If there is a need to programmatically update the options on an already initialized element, make sure to trigger the `change` event afterward so that the DOM is updated. A react example is provided below but the same applies to any framework.


      ```js

      import React from 'react'

      import { select } from '@lf-digitala-kanaler/lfui-components/select'


      export function MyList () {
        const ref = useRef()
        const [items, setItems] = useState(['Red', 'Yellow', 'Green', 'Blue'])

        const reverse = () => {
          setItems(items.slice().reverse())
        }

        useEffect(() => select(ref.current))

        useEffect(() => {
          ref.current.dispatchEvent(new window.Event('change'))
        }, items)

        return (
          <form>
            <div class="select" ref={ref}>
              <label class="select-label" for="colors">Colors</label>
              <select class="select-options" name="colors" id="colors" onChange={onChange}>
                {items.map((color) => <option key={color}>{color}</option>)}
              </select>
            </div>
            <button type="button" onClick={reverse}>Reverse</button>
          </form>
        )
      }

      ```
---
