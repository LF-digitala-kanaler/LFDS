---
template: ComponentPage
title: Upload
intro: Use this component if you want to let your user upload a file to us, for
  example as part of an injury claim or a secure message.
description: Use this component if you want to let your user upload a file to us.
previewImage: /img/upload.svg
category: Forms
tabs:
  - content: >-
      ## How to use


      Our Upload-component is the only LFUI-component where parts of it don't appear until the user has taken action. The user flow when using the Upload-component is:


      1. The user is presented with a [secondary button ](/components/web/button-and-links/buttons#secondary-buttons)with an attachment icon and the copy "Bifoga fil".

      2. When the user clicks the button a system dialog for selecting a file appears. If the user wants (and knows how to) they can select several files by default (if needed, ask your developer to disable the multiple-select).

      3. When the user submits their file(s) to us one or several fields appear above the button. The file name is presented in the main field and cannot be edited. The basic styling follows the look of other form items, but adds two additional details:

         * To the left of the text a visual display of the file uploaded is displayed. In its default look a small preview of the image is shown (without consideration of image dimensions). If the file is either a pdf or word-document a corresponding icon is shown. If the file type is neither an image nor pdf/word a grey box appears.
         * In the far right of the field an "x" is shown. An alt text appears on hover informing the user that a click will remove the file. 

      ### Modifier


      If you are expecting large files or a slow receiving server you can add a loading state during the upload phase. The upload state fills the filename-field from left to right with a colour change from our "unvalidated" to our "validated and ok"-colours.


      #### EPI-version


      There exists an old version of the upload component, which still is available in EPI-forms. New forms should use the new version of the component described on this page, with one exception: if you're grouping several different upload fields as part of a form, it looks better to use the old design. This should only be done in cases like in the example image where you want to present the user with categories of files which they can upload files in. If you don't provide (and use in our systems) categories, you should use the standard version of the upload component.


      <figure class="Image Image__border "><img src="/img/upload-oldgrouped.png" srcset="/img/upload-oldgrouped.png 2x" alt="Alternative (older) version of upload component with several fields grouped together."><figcaption><div class="Image__caption">Alternative (older) version of upload component with several fields grouped together.</div></figcaption></figure>




      ## Please note


      * Unfortunately the handling of the error messages can't be built technically as we would prefer, which means that if the user needs to change a file which has an error they need to remove it and try to upload it again - rather than clicking the filename and getting the system dialog that way. This should be made clear in the copy of the error message.

        * If there is something wrong with the file, this is always needed.
        * If the error is on our part, with the actual upload failing it depends on the implementation if the user needs to remove and re-add the file or if they can just try to submit it again. Work with your developers and copy to find the right error messages to display for your specific case.

      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Upload)
    name: Design
  - content: |-
      ## Så skriver vi

      **Text:** Bifoga fil
    name: Copy
  - content: >-
      ## How to use


      LFUI's upload components contains HTML and CSS to help you build a a file upload component. It does not contain any javascript functionality to handle the uploaded file or display the preview pane. 


      But let's have a look how you can use this component to build your own upload functionality. 


      In the example above we only allow an image to be uploaded and we only allow one at the time. If you need to support multiple uploads the functionality should work the same, just add the multiple attribute to the input.


      Let's get started!


      ### Html Structure


      The base HTML structure is nothing new. It's a secondary button with an icon. Don't forget to add a for-attribute to the label that's equal to the id attribute of the input.


      Note the empty `.upload-placeholder` this is where our preview panes will be places. 


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


      The functionality to add the preview pane and validation is not included in LFUI.  


      ### Template preview


      This is the preview template we use to display each uploaded file with.  In our example we use the File reader API to get the file name and the image src. It's advisable to resize the the thumbnail image to 35x35 and not just scale it down. 


      We will  use this template for each uploaded file and place it inside the `.upload-placeholder.`  


      Note, if you are uploading anything that's not an image change remove the `<img>` element and replace it with `<div class="upload-image mr-05"></div>`


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


      Notice the `${validation}` above.  In our example we will do validation as soon as a file is selected and add either `.has-valid` or `.has-danger` depending on the validation status of the file. If you want to validate your file when for example  a form is posting you can add these classes then instead.  


      #### Thumbnails


      If the file is an image it should be possible to hover over the image to show a larger version of it. This is should only be added if the file is an image. 


      So if the file is an image we want to replace `${popover}` in the template preview section above with a popover template. Again don't just scale the image done, if possible resize the image on the server before adding it. 


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


      If you are building a service that will handle file's like .pdf or .doc you should show an icon associated with that file type instead. Use our 32px icons like pdf-doc-32 for pdf and document-32 for general documents.


      ### Loading state


      If you are going to process large files or you want to save the files to the server on form submit you can add  a progress element shown in  the example at the top. You will have to add `.loading` to `.upload-preview` and change `translateX` for `.upload-progress-bar` to match how much of the file that's been uploaded in procent .


      ##### Example javascript implementation of loading state


      ```javascript

      reader.onprogress = (event) => {
        if (event.lengthComputable)
          {
            let value = (event.loaded / event.total) * 100;
            progress.style.transform = 'translateX(-' + value + '%)';
            ;
          }
      };

      ```
    name: Code
backgroundColor: '#fff'
---
