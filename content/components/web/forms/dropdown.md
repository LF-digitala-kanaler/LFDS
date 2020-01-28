---
template: ComponentPage
category: Forms
title: Dropdown
description: >-
  The dropdown provides the user with given options in a list which expands over
  the webpage when the user clicks on the container.
previewImage: /img/dropdown.svg
intro: >-
  The dropdown provides the user with given options in a list which expands over
  the webpage when the user clicks on the container.
tabs:
  - content: >-
      ## How to use


      A dropdown provides the user with a number of options from which they are
      to choose one or several, just like [radio buttons](../radio-buttons) and
      [checkboxes](../checkbox). That means that you as a designer need to
      decide whether to use a dropdown or radio buttons/checkboxes. As a simple
      rule of thumb, use radio buttons/checkboxes if you a have five or fewer
      options and dropdown if you have six or more. There are however also other
      considerations which can come into play (here is a good and brief [article
      on
      considerations](https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1)
      you should take into account).


      We have two main variations of dropdowns, with some common traits:


      * There are versions for both a white backdrop and a grey backdrop.

      * They expand upward if the clicked on when and the dropdown won't fit
      downwards.

      * The max height is ten items, if there are more a scrollbar is added.

      * You can choose to add (non-selectable) headings to your dropdown, using
      "option group".

      * A short secondary text can be added to help the user make their choice
      (this should primarily be used to show price for different options). This
      text is in a smaller typeface and grey. See picture below for an example:


      ![Example of a dropdown with price added as secondary
      text](/img/dropdown-secondary-text.png "Example of a dropdown with price
      added as secondary text")


      ### Variations


      #### Select (only) one option


      The standard version, which pretty much follows the common traits. The
      only thing to add that this version works like a radio button in that it
      only allows the user to select one option. If you want users to be able to
      choose several options, please use a multi-select dropbox instead.


      #### Multi-select 


      In this version the user can select several options, which means it works
      like checkboxes. Note that the user doesn't have to choose multiple
      options. 


      ##### Modifiers


      To further customize the  dropdown to your needs you can use one (or both)
      of the modifiers:


      **Select all** - Adds an option with select all on top of the actual
      options.


      **Two levels** - Gives you the option to indent some of the options in
      such a way that you create a hierarchy. If the user selects an option on
      the top level all items below are selected as well.


      This image gives an example of both select all and two levels added to a
      multi-select dropdown:


      ![Multi-select dropdown with both modifiers
      active](/img/dropdown-select-all-and-subheadings.png "Multi-select
      dropdown with both modifiers active")


      ## Please consider


      **Never use this component in other devices than desktop**.  If the user
      is on a mobile or tablet their devices' native select functionality should
      be used for accessibility reasons. It is important that the custom select
      functionality is disabled and instead use the default native select
      element when the user is not using the desktop application. 


      ## Styling


      The LFUI-styling of the dropdown goes beyond standard styling, which makes
      it technically complex and your developer friends need to code the
      dropdown in a somewhat different manner than they are used to.
    name: Design
---

