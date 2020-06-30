---
template: ComponentPage
title: Dropdown
intro: The dropdown provides the user with given options in a list which expands
  over the webpage when the user clicks on the container.
description: The dropdown provides the user with given options in a list which
  expands over the webpage when the user clicks on the container.
previewImage: /img/dropdown.svg
category: Forms
componentsNavigation:
  - name: select One
  - name: Multi Select
tabs:
  - content: >-
      ## How to use


      A dropdown provides the user with a number of options from which they are to choose one or several, just like [radio buttons](../forms/radio-buttons) and [checkboxes](../forms/checkbox). That means that you as a designer need to decide whether to use a dropdown or radio buttons/checkboxes. As a simple rule of thumb, use radio buttons/checkboxes if you a have five or fewer options and dropdown if you have six or more. There are however also other considerations which can come into play (here is a good and brief [article on considerations](https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1) you should take into account).


      <div class="Callout"><strong class="Callout__title">Never use this component in other devices than desktop </strong><p class="Callout__text">If the user is on a mobile or tablet their devices' native select functionality should be used for accessibility reasons. It is important that the custom select functionality is disabled and instead use the default native select element when the user is not using the desktop application.</p></div>


      We have two main variations of dropdowns, with some common traits:


      * There are versions for both a white backdrop and a grey backdrop.

      * They expand upward if the clicked on when and the dropdown won't fit downwards.

      * The max height is ten items, if there are more a scrollbar is added.

      * You can choose to add (non-selectable) headings to your dropdown, using "option group".

      * A short secondary text can be added to help the user make their choice (this should primarily be used to show price for different options). This text is in a smaller typeface and grey. See picture below for an example:


      ### Variations


      #### Select (only) one option


      The standard version, which pretty much follows the common traits. The only thing to add that this version works like a radio button in that it only allows the user to select one option. If you want users to be able to choose several options, please use a multi-select dropbox instead.


      #### Multi-select


      In this version the user can select several options, which means it works like checkboxes. Note that the user doesn't have to choose multiple options. 


      ##### Modifiers


      To further customize the  dropdown to your needs you can use one (or both) of the modifiers:


      **Select all** - Adds an option with select all on top of the actual options.


      **Two levels** - Gives you the option to indent some of the options in such a way that you create a hierarchy. If the user selects an option on the top level all items below are selected as well.


      This image gives an example of both select all and two levels added to a multi-select dropdown:


      ## Please consider


      Never use this component in other devices than desktop. We really mean it.


      ## Styling


      The LFUI-styling of the dropdown goes beyond standard styling, which makes it technically complex and your developer friends need to code the dropdown in a somewhat different manner than they are used to.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Dropdown)
    name: Design
  - content: >-
      ## Så skriver vi


      **Label:** Välj \[label] (till exempel "Välj belopp") alternativt bara \[label]l (till exempel "Belopp")


      **Förvald text i dropdown:** Välj


      Sekundära text i dropdown kan användas för att hjälpa användaren göra sitt val. Kan till exempel visa pris för olika val. Förkortningar ok. Till exempel: 250 kr/år


      Om man kan välja alla alternativ skriver vi: Välj alla


      **Valideringstext vi ej valt:** Välj ett alternativ eller Välj \[label]


      #### Exempel från Bolån


      **Var ligger bostaden?**


      **Valideringstext:** Välj kommun
    name: Copy
  - name: Code
    content: >-
      ## How to use


      The dropdown can be included with `import CustomSelect from 'custom-select';` and be used in your own javascript.


      ```

      var customSelect = new CustomSelect( $('#dropdown') , options);

      ```


      or you can instantiate it the jQuery way with a selector.


      ```

      $('#dropdown').customSelect(options);

      ```


      Here is the options you can use when instantiating the custom select.


      ```

      {
        onSelect: function(event) {
          // This function is called when you click on options in the dropdown. 
        }
      }

      ```


      The default option should *always* be "Välj", and should also in the same respect be disabled.


      <div class="Callout"><strong class="Callout__title">Never use this component in other devices than desktop </strong><p class="Callout__text">It is important that you disable this custom select functionality and revert to the default native select element when the user is not using the desktop application.</p></div>


      ### Variations


      We have two different variants of dropdown. One which let the user pick one option and one when the user can pick more than one option. 


      Both have the option to change color to grey. Add the `.gray-bg` class to `.custom-select-dd`, to change the colors of the dropdown - in this element, as well as hierarchically subsequent elements.


      For option grouping we added a class called `dropdown-group-header`. This class should be added on a `h6` element. 


      ```

      <h6 class="dropdown-group-header">Header text</h6>

      ```


      #### Select (only) one option


      This is the most common dropdown. Since we don't use the regular `<select>` elements for our dropdown there is both keyboard navigation and search functionality built in to both variants.


      ```

      <div class="form-group">
        <div class="dropdown" id="custom-select" tabindex="0">
          <div type="text" class="custom-select-dd" id="customSelect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Välj</span>
          </div>
          <div class="dropdown-menu custom-dropdown" aria-labelledby="customSelect">
            <a class="dropdown-item" tabindex="0">Nordea</a>
            <a class="dropdown-item" tabindex="0">Länsförsäkringar</a>
            <a class="dropdown-item" tabindex="0">Handelsbanken</a>
            <a class="dropdown-item" tabindex="0">Swedbank</a>
          </div>
        </div>
      </div>

      ```


      #### Multi-select


      We also added a custom multi-select dropdown. Create the custom dropdown  but instead of regular `a` items add [checkboxes](/components/web/forms/checkbox). To use this dropdown component you need to be sure to add `.custom-multi-select` to your dropdown menu.


      ```

      <div class="dropdown" id="custom-multi-select-1" tabindex="0">
        <div type="text" class="custom-select-dd" id="customMultiSelect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Choose</span>
        </div>
        <div class="dropdown-menu custom-dropdown custom-multi-select" aria-labelledby="customMultiSelect">
          <div class="dropdown-item custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-1-checkbox2">
            <label class="custom-control-label" for="custom-multi-select-1-checkbox2">Stockholm</label>
          </div>
          <div class="dropdown-item custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-1-checkbox3">
            <label class="custom-control-label" for="custom-multi-select-1-checkbox3">Göteborg</label>
          </div>
          <div class="dropdown-item custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-1-checkbox4">
            <label class="custom-control-label" for="custom-multi-select-1-checkbox4">Paris</label>
          </div>
        </div>
      </div>

      ```


      ##### Modifiers


      Multi-select have two specific modifiers. 


      ###### Select all


      It's possible to have one checkbox to toggle all checkboxes by adding `data-select-all="true"` on **one** of the options in the dropdown.


      ```

      <div class="dropdown" id="custom-multi-select-2" tabindex="0">
        <div type="text" class="custom-select-dd" id="customMultiSelect-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Välj</span>
        </div>
        <div class="dropdown-menu custom-dropdown custom-multi-select" aria-labelledby="customMultiSelect-2">
          <div class="dropdown-item custom-control custom-checkbox" data-select-all="true">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-2-checkbox1">
            <label class="custom-control-label" for="custom-multi-select-2-checkbox1">Välj alla</label>
          </div>
          <div class="dropdown-item dropdown-item-sub custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-2-checkbox2">
            <label class="custom-control-label" for="custom-multi-select-2-checkbox2">Stockholm</label>
          </div>
        </div>
      </div>

      ```


      ###### Two levels


      Create a custom multi-select dropdown as above, but add `.dropdown-item-sub` to each`.dropdown-item` that should have indentation.


      ```

      <div class="dropdown" id="custom-multi-select-4" tabindex="0">
        <div type="text" class="custom-select-dd" id="customMultiSelect-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span>Välj</span>
        </div>
        <div class="dropdown-menu custom-dropdown custom-multi-select" aria-labelledby="customMultiSelect-4">
          <div class="dropdown-item dropdown-item-sub custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-4-checkbox2">
            <label class="custom-control-label" for="custom-multi-select-4-checkbox2">Stockholm</label>
          </div>
          <div class="dropdown-item dropdown-item-sub custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-4-checkbox3">
            <label class="custom-control-label" for="custom-multi-select-4-checkbox3">Göteborg</label>
          </div>
          <div class="dropdown-item custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="custom-multi-select-4-checkbox4">
            <label class="custom-control-label" for="custom-multi-select-4-checkbox4">Malmö</label>
          </div>
        </div>
      </div>

      ```


      ## Please Note


      Since this dropdown is not meant to be used on mobile/tablets you can  use a `<select>` which is only visible on narrow breakpoint it could look something like this: 


      ```

      <select id="id"class="custom-select d-lg-none"></select>

      ```


      There is more options to solve this but at the moment be do not have any built-in option for this.
backgroundColor: "#fff"
---
