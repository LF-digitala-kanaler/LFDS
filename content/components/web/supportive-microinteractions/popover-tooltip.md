---
template: ComponentPage
title: Popover Tooltip
intro: Used primarily as an explanation of terms and difficult words in inline
  text. When the user clicks/hovers a word with a popover tooltip a small
  popover appears in which explanatory text is displayed.
description: Used primarily as an explanation of terms and difficult words in
  inline text. When the user clicks/hovers a word with a popover tooltip a small
  popover appears in which explanatory text is displayed.
previewImage: /img/popover-tooltip.svg
category: Supportive Microinteractions
tabs:
  - content: >-
      ## How to use


      If a word (or series of words) has a tooltip on it, it has a grey dotted underline to show the user that it can be interacted with. The underline is designed to not be confused with a normal link.


      If a user hovers the word the tooltip is displayed until the cursor is moved away from the selected area. The user can also click the word which triggers a popover which stays open until the user clicks somewhere else. That is, the user can move the mouse pointer or scroll without the popover disappearing.


      No matter how the popover is triggered it allows for the user to move the cursor over it and interact with the popover without the popover closing. This means that links to even further information can be placed in the popover or that they user can copy text if the wish to do so.


      <div class="Callout"><strong class="Callout__title">Never use the popover-tooltip on a label!  </strong><p class="Callout__text">A popover-tooltip is used on inline text to describe words in the flow of a document without breaking said flow. If you wish to describe words used in label you could eitherPut the word in the input field description and use the popover-tooltip on it thereUse a separate "Läs mer" button in proximity to the input field and move the information there.</p></div>


      ## Vision


      A not yet implemented vision for the component is to have a “dictionary” in a database and an on/off-switch for editors. If the editor turns on the dictionary on a page all words which could need explanation (=are in the dictionary) are automatically given a pop-over tooltip on their first occurrence on the page.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Supportive Microinteractions/Popover/)
    name: Design
  - content: >-
      # How to use


      The popover is triggered on both click and hover.


      Use the `popover-tooltip` to allow the user to toggle explanations to difficult words, or words not considered general knowledge. Works great inline! Also included is an option to link to a dictionary containing all the difficult words gathered from your application within the popover itself.


      The popover-tooltip extends on the [popover](https://lf-digitala-kanaler.github.io/LFUI/650/#/popover) class, and is triggered by wrapping the word needing an explaination in a `popover-tooltip-trigger` class, and also pointing to the toggleable div with `aria-controls="[div id]"`. The `div `should have an id corresponding to the one specified in the aria-controls. Add the `popover-tooltip` to the div, along with any[popover](https://lf-digitala-kanaler.github.io/LFUI/650/#/popover)classes to manipulate its positioning.**Make sure the entire `popover-tooltip` is wrapped in the popover-tooltip-trigger element**.


      Inspect the html below if there are any uncertainties. Note how we use the[card](https://lf-digitala-kanaler.github.io/LFUI/650/#/card)classes to separate our contents, but use the special `popover-title` for our heading.


      Like popovers, we need some simple triggering javascript in order for the popover to appear.


      ```

      $('.popover-tooltip-trigger').on('focus blur', function() {
        $('#' + $(this).attr('aria-controls')).parent().toggleClass('open');
      });

      ```
    name: Code
backgroundColor: "#fff"
---
