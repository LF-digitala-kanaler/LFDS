---
template: ComponentPage
category: Forms
title: Upload
description: Use this component if you want to let your user upload a file to us.
previewImage: /img/upload.svg
intro: Use this component if you want to let your user upload a file to us, for
  example as part of an injury claim or a secure message.
backgroundColor: "#fff"
tabs:
  - content: >-
      

      ## How to use


      Our Upload-component is somewhat unique, as it is the only LFUI-component where parts of it don't appear until the user has taken action. The user flow when using the Upload-component is:


      1. The user is presented with a [secondary button ](../../button-and-links/secondary-button/)with an attachment icon and the copy "Bifoga fil".

      2. When the user clicks the button a system dialog for selecting a file appears. If the user wants (and knows how to) they can select several files by default (if needed, ask your developer to disable the multiple-select).

      3. When the user submits their file(s) to us one or several fields appear above the button. The file name is presented in the main field and cannot be edited. The basic styling follows the look of other form items, but adds two additional details:

         * To the left of the text a visual display of the file uploaded is displayed. In its default look a small preview of the image is shown (without consideration of image dimensions). If the file is either a pdf or word-document a corresponding icon is shown. If the file type is neither an image nor pdf/word a grey box appears.
         * In the far right of the field an "x" is shown. An alt text appears on hover informing the user that a click will remove the file. 

      ### Modifier


      If you are expecting large files or a slow receiving server you can add a loading state during the upload phase. The upload state fills the filename-field from left to right with a colour change from our "unvalidated" to our "validated and ok"-colours.


      ## Please note


      * Unfortunately the handling of the error messages can't be built technically as we would prefer, which means that if the user needs to change a file which has an error they need to remove it and try to upload it again - rather than clicking the filename and getting the system dialog that way. This should be made clear in the copy of the error message.

        * If there is something wrong with the file, this is always needed.
        * If the error is on our part, with the actual upload failing it depends on the implementation if the user needs to remove and re-add the file or if they can just try to submit it again. Work with your developers and copy to find the right error messages to display for your specific case.
      * There exists an old version of the upload component, which still is available in EPI-forms. New forms should use the pattern described on this page, but for reference here is an image of the old version: ![Image of older version of file upload still available in EPI](/img/old-file-upload.png "Image of older version of file upload still available in EPI")
    name: Design
  - content: |-
      ## Så skriver vi

      **Text:** Bifoga fil
    name: Copy
  - content: >-
      ## How to use


      LFUI's upload components contains HTML and CSS to help you build a a file upload component. It does not contain any javascript functionality to handle the uploaded file or display the preview pane. 


      But let's have a look how you can use this component to build your own upload functionality. 


      In the example above we only allow an image to be uploaded and we only allow one at the time. If you need to support multiple upload at once the functionality should work the same.


      Let's get started!


      ### Html Structure


      The base HTML structure is nothing new. It's a secondary button with an icon. Don't forget to add a for-attribute to the label that's equal to the id attribute of the input.


      Note the empty `.upload-placeholder`, this is where our preview panes will be places. 


      ```

      <div class="upload w-100">
        <div class="upload-placeholder"></div>
        <input class="upload-input" type="file" name="filename" id="upload">
        <label class="upload-label btn btn-secondary  mt-1 px-1" for="upload">
          <svg focusable="false" aria-hidden="true" class="icon mr-025" width="20" height="20"><use xlink:href="#icon-attach-20"></use></svg>
          Bifoga fil
        </label>
      </div>

      ```


      After the user clicks on the button and have chosen a file we want to show a preview pane containing a smaller version of the image, file name and the possibility for the user to hover over the image to see a larger version of it. 


      ### Template preview 


      This is the preview template we use to display each uploaded file with.  In our example we use the File reader API to get the file name and the image src. It's advisable to resize the the thumbnail image to 35x35 and not just scale it down. We will need to use this templet for each image and place it inside the `.upload-placeholder.`  


      ```

      <div class="upload-preview ${validation} mb-05">
          <div class="upload-body">
            <img class="upload-image" alt="" src=${data.src} width="35" height="35" />
            ${popover}
            <span class="upload-name">${file.name}</span>
            <button type="button" class="close ml-auto upload-remove">
              Close
            </button>
          </div>
           
        </div>
      </div>

      ```


      #### Validation


      Notice the `${validation}` above.  In our example we will do validation as soon as a file is selected and add either `.has-valid` or `.has-danger` depending on the validation status of the file. If you want to validate your file when say a form is posting you can add these classes then instead.  


      Popover


      ```

      <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
        <p class="popover-title">Preview</p>
        <div class="popover-content">
          <div class="card">
            <div class="card-block">
              <img class="img-fluid w-100" src=${data.src} alt=""  />
            </div>
          </div>
        </div>
      </div>

      ```
    name: Code
---
