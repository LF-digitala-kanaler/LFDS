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
    name: Design
  - content: content code
    name: Code
  - content: content code
    name: Code
backgroundColor: "#fff"
---
