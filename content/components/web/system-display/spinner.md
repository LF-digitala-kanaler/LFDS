---
template: ComponentPage
title: Spinner
intro: The spinner is used to show that the system is loading/fetching data and
  that the response isn't instantaneous.
description: The spinner is used to show that the system is loading/fetching
  data and that the response isn't instantaneous.
previewImage: /img/alert.svg
category: System display
componentsNavigation:
  - name: Default
  - name: Red
tabs:
  - content: >-
      ## How to use


      Use the spinner when you expect that the user will have to wait for all data to be loaded or the server to respond. The spinner is the option to be used when this situation happens in the main page content. Other cases of loading states are:


      * Button with spinner ([primary](/components/web/button-and-links/buttons#primary-buttons) / [secondary](/components/web/button-and-links/buttons#secondary-buttons)) if you want a loading state upon the user submitting data 

      * [Panel with lazy load](../page-content/panel#modifiers) if the data being loaded is in a panel


      ### Variations


      The main variation of the spinner consists of a circle alternating between our blue and red colours on a white background. You should strive towards using this version of the spinner, but be aware that it requires a white background to look good (for code reasons).


      For other backgrounds than white we have a version with the red colour and negative space completing the circle. This version is however rarely used as a stand-alone (but it forms the basis for the spinner inside a button).


      ### Modifiers


      Both versions of the spinner come in three sizes; default, small and extra small. As the naming suggests, default is the standard and the other two should be used only if the default is too large for your context.


      ## Please note


      * The spinner is the loading state to be used in a main field, and there are separate loading state for buttons and panels.
    name: Design
  - content: >-
      ## How to use


      To use the spinner, add a wrapper div where you wish to place the spinner and add the relevant class from the choices below to the wrapper. Then, place the svg code from the examples below inside the wrapper. 


      ### Versions


      There is two versions of of our spinner you can use. Both comes with the same modifiers.


      #### Default


      This is the "default" look of the spinner, and can be easily created by using the class `.lf-spinner` on the wrapping div.


      ```

      <div class="lf-spinner">
        <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
          <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
          <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
          <line class="lf-spinner-back-line" x1="50%" y1="50%" x2="100%" y2="50%"></line>
          <line class="lf-spinner-forward-line" x1="50%" y1="50%" x2="100%" y2="50%"></line>
        </svg>
      </div>

      ```


      ##### Modifiers


      `.lf-spinner-sm` - change size to 40px


      `.lf-spinner-xs` - change size to 25px


      #### Red


      This is the alternative look of the spinner, and can be easily created by using the class`.lf-spinner-neg`on the wrapping div.


      ```

      <div class="lf-spinner-neg">
        <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
          <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
          <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
        </svg>
      </div>

      ```


      ##### Modifiers


      `.lf-spinner-neg-sm` - change size to 40px


      `.lf-spinner-neg-xs` - change size to 25px


      ## Notes


      IE11 and below is unable to animate svgs with css, which is unfortunatley exactly what is going on behind the hull of our Spinner. Our fallback here is to draw out the svg and simply only rotate it, which works well. The biggest issue is the two white divider lines inside the default spinner, which can not be correctly placed in IE... without javascript.


      If you want to ensure a good fallback for all of your users, a script like the one below which detects IE and then adjusts the x2 and y2 attributes on the element is required.


      ```

      // Test to see if navigator agent is IE

      // In that case, manually place the forward white spinner line.

      function msieversion(){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer
          var g = document.querySelectorAll('.lf-spinner-forward-line');
          for(let i = 0; i <= g.length; i++) {
            g[i].setAttribute('x2', '100%');
            g[i].setAttribute('y2', '-30%');
          }
        }
        return false;
      }

      ```
    name: Code
backgroundColor: '#fff'
---
