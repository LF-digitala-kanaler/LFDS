---
template: ComponentPage
category: Forms
title: Slider
description: A slider provides a visual way of providing a value.
previewImage: ''
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


      There are four modifiers available for the slider (they also work for the
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


      In many cases you might want to add labels to your slider which indicate
      minimum and maximal values which can be chosen from. This


      två varianter: \

      ett intervall


      modifiers: med inputruta (starkt rekommenderat)


      labels


      pointer-labels


      grå bakgrund
    name: Design
  - content: |-
      content code


      ## heading
    name: Code
  - content: content code
    name: Code
---

