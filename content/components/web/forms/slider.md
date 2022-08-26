---
template: ComponentPage
title: Slider
intro: A slider provides a visual way of providing a value and should preferably
  be used in conjunction with other content which is dynamically changed based
  on the value provided through the slider.
description: A slider provides a visual way of providing a value.
previewImage: /img/slider.svg
category: Forms
componentsNavigation:
  - name: Value
  - name: Intervall
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      A slider lets the user use a visual aid in choosing a value.


      ### Variations


      There are two different variations of the slider:


      * **Default slider**: lets the user choose one value

      * **Interval slider**: lets the user choose two values to create an interval between them


      #### Default slider


      The default slidershould be used as a controller of sorts, where changes in the slider should affect something else (for example, in a housing loan application an increased price affects the size of the down payment needed). If you only need a value which doesn't affect other parts of the value a regular [input field](../forms/input-field) is most likely a better option.


      #### Interval slider


      If you need the user the select an interval rather than a specific value this is the variation for you. Instead of having one slider it has two, and the value between the sliders is what is in focus and highlighted designwise. A possible use case for this is in planning when to withdraw money from a pension, and to see how the available amount changes depending on the number of years a withdrawal is done for.


      ### Modifiers


      There are three modifiers available for the sliders, and they work for both variations.


      #### Adjacent input field


      Adds an input field above the slider which shows the current selected value in numbers. The user can choose whether to use slider or the input field, and a change in either will make the corresponding change in the other. **The use of an adjacent input field is for accessibility reasons as close to mandatory anything can be without being mandatory** (for technical reasons it can't be included by default). The input field can be styled like an ordinary [input field](../forms/input-field) with a suffix if needed.


      #### Labels


      In many cases you might want to add labels next to your slider, for example to indicate minimum and maximal values which can be chosen from. This modifier does that for you! You can even choose to add a label on only one side if that is your best option.


      If you're tight on space the **distribution label** might be your main option. It adds the values over the top of the slider with arrows pointing to the start and end of the slider.


      #### Slider on different background colours


      The default slider only works on a white background, but there is a version for a grey background as well. If needed, the code section also includes instructions on how to create versions for other background colours.


      ## Please consider


      Although a great component when used correctly, there are more accessibility challenges than with most other web components, so don't overuse it! And please use the adjacent input field!
    name: Design
  - content: >-
      ## How to use


      LFUI has restyled the HTML5-element `input[type="range"]` which is useable in all modern browsers. The `input[type="range"]`, or Slider, is a tool to control a value by adjusting the thumb along its track. The value range of the track is assigned by `min` and `max` html attributes, and the `step` attribute is used to control how big leaps the slider value takes for each movement.


      Browsers have varying support for styling the slider track so in order to get the proper visual effect one has to set the custom property `--progress` on the element. When the value changes, one has to update the custom property on the element. This functionality is not built in and needs to be handled in your code base.


      ```html

      <input type="range" class="lf-slider" value="50" min="0" max="100" style="--progress: 50;">

      ```


      ```javascript

      for (const slider of document.querySelectorAll('.lf-slider')) {
        slider.addEventListener('input', () => {
          const percent = Math.ceil(((slider.value - slider.min) / (slider.max - slider.min)) * 100);
          slider.style.setProperty('--progress', percent);
        });
      }

      ```


      ### Variations


      There is two different variations of the slider, one which let the user select an intervall and one which let the user select a single value.


      #### Value


      The slider is created by using the `<input type="range">` element together with the `.lf-slider` class. Note that this slider *only works on white backgrounds*.


      ```html

      <div class="row">
        <label for="lf-slider" class="col-12">Ange procent av lön</label>
        <div class="input-group col-3">
          <input type="text" class="form-control text-right" id="lf-slider-value" value="50">
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mt-1">
          <input id="lf-slider-1" type="range" name="lf-slider" class="lf-slider" value="50" min="0" max="100">
        </div>
      </div>

      ```


      ### Interval


      The native `input[type="range"]` HTML element unfortunately does not support the ability to have more than one range-thumb (the button you move back and forth). Use-cases have begun appearing where such a feature is requested in order for a user to select a span inside the range. To achieve this, we have created a custom element which is a wrapper around the native `input[type="range"]` element.


      The `interval` function can be imported from `@lf-digitala-kanaler/lfui-components` and takes a range input element as its only argument. The range input element will be extended with the custom properties `valueLow` and `valueHigh` which can be used to get and set the values of the range input. The `value` property is a comma delimited string with the low and high values.


      ```javascript

      import { interval } from '@lf-digitala-kanaler/lfui-components'


      const low = document.getElementById('my-slider-low')

      const high = document.getElementById('my-slider-high')

      const mySlider = document.getElementById('my-slider')


      interval(mySlider)


      mySlider.addEventListener('input', () => {
        low.value = mySlider.valueLow
        high.value = mySlider.valueHigh
      });

      ```


      #### Modifiers


      ##### Labels


      Labels can be added for better understanding of the range at disposal.


      Create a `.slider-wrapper` wrapping element, with a `.slider-label-left` and `.slider-label-right` element on each corresponding side of the slider. The wrapper will add a padding of`60px`of either side of the component and then absolute-position the labels in the padding gap. Should your labels require increased space (with really large numbers, etc), simply overwrite the padding on the `.slider-wrapper` with a custom padding and increase the width of the `slider-label-*` to match.


      ```html

      <div class="row">
        <label for="lf-slider" class="col-12">Ange procent av lön</label>
        <div class="input-group col-3">
          <input type="text" class="form-control text-right" id="lf-slider-value-3" value="50">
          <span class="input-group-append">%</span>
        </div>
      </div>

      <div class="row">
        <div class="col-12 mt-1 slider-wrapper">
          <div class="slider-label-left">0 %</div>
          <input id="lf-slider-3" type="range" name="lf-slider" class="lf-slider" value="50" min="0" max="100">
          <div class="slider-label-right">100 %</div>
        </div>
      </div>

      ```


      ##### Distribution label

      ```html

      <div class="distribution-label slider-label-left">0 %</div>

      <input id="lf-slider-4" type="range" name="lf-slider" class="lf-slider" value="50" min="0" max="100">

      <div class="distribution-label slider-label-right">100 %</div>

      ```


      ##### On different backgrounds


      If you want to place the slider on grey background you can change `.lf-slider` to `.lf-slider-gray`.


      ```html

      <input id="lf-slider-2" type="range" name="lf-slider" class="lf-slider-gray" value="500000" min="0" max="10">

      ```
    name: Code
---
