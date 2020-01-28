---
template: ComponentPage
category: Forms
title: Slider
description: A slider provides a visual way of providing a value.
previewImage: /img/slider.svg
intro: >-
  A slider provides a more visual way of providing a value and should preferably
  be used in conjunction with other content which is dynamically changed based
  on the value provided through the slider.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      A slider lets the user use a visual aid in choosing a value. The
      slider-component should be used as a controller of sorts, where changes in
      the slider should affect something else (for example, in a housing loan
      application an increased price affects the size of the down payment
      needed). If you only need a value which doesn't affect other parts of the
      value a regular [input field](../input-field) is most likely a better
      option.


      ### Modifiers


      There are three modifiers available for the slider (they also work for the
      interval variation of the slider):


      #### Adjacent input field 


      Adds an input field above the slider which shows the current selected
      value in numbers. The user can choose whether to use slider or the input
      field, and a change in either will make the corresponding change in the
      other. **The use of an adjacent input field is for accessibility reasons
      as close to mandatory anything can be without being mandatory** (for
      technical reasons it can't be included by default). The input field can be
      styled like an ordinary [input field](../input-field) with a suffix if
      needed.


      #### Labels


      In many cases you might want to add labels next to your slider, for
      example to indicate minimum and maximal values which can be chosen from.
      This modifier does that for you! You can even choose to add a label on
      only one side if that is your best option.


      If you're tight on space the **distribution label** might be your main
      option. It adds the values over the top of the slider with arrows pointing
      to the start and end of the slider.


      #### Slider on different background colours


      The default slider only works on a white background, but there is a
      version for a grey background as well. If needed, the code section also
      includes instructions on how to create versions for other background
      colours.


      ### Variation: Interval slider


      If you need the user the select an interval rather than a specific value
      this is the variation for you. Instead of having one slider it has two,
      and the value between is what is in focus and highlighted designwise. A
      possible use case for this is in planning when to withdraw money from a
      pension, and to see how the available amount changes depending on the
      number of years a withdrawal is done for.


      All modifiers available for the regular slider are also available for the
      interval slider.


      ## Please consider


      Although a great component when used correctly, there are more
      accessibility challenges than with most other web components, so don't
      overuse it! And please use the adjacent input field!
    name: Design
  - content: |-
      content code


      ## heading
    name: Code
  - content: content code
    name: Code
---

