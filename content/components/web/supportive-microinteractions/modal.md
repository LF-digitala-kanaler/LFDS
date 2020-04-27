---
template: ComponentPage
title: Modal
intro: Modals are triggered by the user clicking a button. They have two use
  cases; in a “Read more”-context and signing stuff.
description: Modals are triggered by the user clicking a button. They have two
  use cases; in a “Read more”-context and signing stuff.
previewImage: /img/modal.svg
category: Supportive Microinteractions
tabs:
  - content: >-
      ## How to use


      Modals are used mainly in document flows where the user needs additional information, but you don't want to break or exit the flow to mediate this information. Typical examples include "Läs mer"-buttons containing more details on a specific function/choice that is seen as relevant, but secondary, to the user in order to make this choice. An example use for this would be to display a visual comparison between different alternatives, for example what's included in different alternatives of an insurance.


      Modals can also work in a more functional-oriented way: To sign and apply a flow with the help of BankID uses a Modal (instead of taking up a separate page in a form, hence not worrying the user that the information they have applied so far isn't lost); the "Tyck till" dialogue box which wants to prompt the user to send in information without the perceived hassle of having to leave the current page the user is standing on; etc.


      A modal is not intended to take up the full width and height of a page, even less so forcing the user to scroll to read its entirety. In that case, a separate page might be a better choice. 


      Modals can be closed by pressing outside the modal (on the shadowy background), using the X in top right corner or by pressing ESC on the keyboard.


      ## Please consider


      Modals are great in a desktop or tablet-context but can easily become troublesome in a mobile context. As mobile usage has increased, the use of modals in our designs for “[read more](../)” has decreased. Take expected mobile usage into consideration when choosing whether to use a modal or another solution for “read more”.
    name: Design
  - content: >-
      ## How to use


      LFUI uses bootstraps and it's API to create modals. If there is any functionality you need and we haven't documented here head over to their site since we support all the included options. 


      But let's have a look at the basics. 


      ### Template


      Every Modal share the same base template. In this example we have added the optional .modal-footer which is a where you but you buttons and other actions. 


      ```html

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close close-large" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 class="modal-title">So long farewell</h4>
            </div>
            <div class="modal-body">
               {content}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-link" data-dismiss="modal">Avbryt</button>
              <button type="button" class="btn btn-primary btn-arrow">Take me there</button>
            </div>
          </div>
        </div>
      ```


      ### Trigger


      How do you trigger a modal you might ask. Easiest way is to use to built in data-attribute from Bootstrap. 


      Notice the `data-toggle="modal"` and `data-target="exampleModal"` in the code snippet below. 


      * `data-toggle="modal"` opens the modal window

      * `data-target="#myModal"` points to the id of the modal


      ```html

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>

      ```


      The parent `<div>` of the modal must have an ID that is the same as the value of the data-target attribute used to trigger the modal ("exampleModal").


      Notice the `data-dismiss="modal"` in the first example. This will close the modal and can be used on more than one element. 


      That's it!


      ### Options


      By default autofocus will not work in a modal so you will have to do it yourself. We always want to add focus to an element in the modal when we open it. If there is no input you might focus the close button. 


      You can achieve this by using a built in event. 


      ```

      $('#exampleModal').on('shown.bs.modal', function () {
        $('#SomeElementToPutFocusOn').trigger('focus')
      })

      ```


      And when we close the modal focus should go back to the element that triggered it. 


      ## Accessibility


      Be sure to add `role="dialog"` and `aria-labelledby="..."`, referencing the modal title, to `.modal` , and `role="document` `"`to the`.modal-dialog` itself. Additionally, you may give a description of your modal dialog with`aria-describedby`on`.modal`.
    name: Code
backgroundColor: "#fff"
---
