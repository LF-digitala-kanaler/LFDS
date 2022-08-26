---
template: ComponentPage
title: Modal
intro: Modals are triggered by the user clicking a button. They have two use
  cases; in a “Read more”-context and identification/signing as part of a flow.
description: 'Modals are triggered by the user clicking a button. They have two
  use cases; in a “Read more”-context and identification/signing as part of a
  flow. '
previewImage: /img/modal.svg
category: Supportive microinteractions
tabs:
  - content: >-
      ## How to use


      A modal takes over the view and pops up a box with content on top of the normal page. The rest of the page becomes unavailable until the modal is closed, and this is shown by adding an a blur outside the modal-content. A modal is not intended to take up the full width and height of a page, even less so forcing the user to scroll to read its entirety. In that case, a separate page might be a better choice.


      Modals can be closed by pressing outside the modal (on the shadowy background), using the X in top right corner or by pressing ESC on the keyboard.


      Modals are used in two ways at Länsförsäkringar:


      * As a form of read more

      * When an identification/signing is needed as a secondary action as part of a flow


      ### As a form of read more


      Modals are one of our recommended ways of designing a "[read more](/patterns/general-patterns/read-more)"-functionality. When used in a read more-manner, modals provides a focused view on the additional information with an easy way back to the main flow. It should be used when you expect that some user types will want that information but not all.


      A typical use case of such functionality is "Läs mer"-buttons containing more details on a specific function/choice that is seen as relevant, but secondary, to the user in order to make this choice. An example use for this would be to display a visual comparison between different alternatives, for example what's included in different alternatives of an insurance.


      ### Identification/signing as part of a flow


      As more and more of our services require identification as part of the flows, the modal has come into use as a way of handling the identification/signing (usually with BankID) in flows where the identification/signing is a secondary task to complete the main task (in comparison, just logging in is the main task and is handled in the main flow).


      ## Please consider


      Modals are great in a desktop or tablet-context but can easily become troublesome in a mobile context. As mobile usage has increased, the use of modals in our designs for “[read more](/patterns/general-patterns/read-more)” has decreased. Take expected mobile usage into consideration when choosing whether to use a modal or another solution for “read more”.
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


      Notice the `data-bs-toggle="modal"` and `data-bs-target="exampleModal"` in the code snippet below.


      * `data-bs-toggle="modal"` opens the modal window

      * `data-bs-target="#myModal"` points to the id of the modal


      ```html

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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


      Be sure to add `role="dialog"` and `aria-labelledby="..."`, referencing the modal title, to `.modal` , and `role="document"` to the `.modal-dialog` itself. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`
    name: Code
verticalResize: yes
backgroundColor: '#fff'
---
