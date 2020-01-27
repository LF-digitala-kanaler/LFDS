---
template: ComponentPage
category: Forms
title: Upload
description: Use this component if you want to let your user upload a file to us.
previewImage: ''
intro: >-
  Use this component if you want to let your user upload a file to us, for
  example as part of an injury claim or a secure message.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Our Upload-component is somewhat unique, as it is the only LFUI-component
      where parts of it don't appear until the user has taken action. The user
      flow when using the Upload-component is:


      1. The user is presented with a secondary button with an attachment icon
      and the copy "Bifoga fil".

      2. When the user clicks the button a system dialog for selecting a file
      appears. If the user wants (and knows how to) they can select several
      files by default (if needed, ask your developer to disable the
      multiple-select).

      3. When the user submits their file(s) to us one or several fields appear
      above the button. The file name is presented in the main field and cannot
      be edited. The basic styling follows the look of other form items, but
      adds two additional details:\
         * To the left of the text a visual display of the file uploaded is displayed. In its default look a small preview of the image is shown (without consideration of image dimensions). If the file is either a pdf or word-document a corresponding icon is shown. If the file type is neither an image nor pdf/word a grey box appears.\
         * In the far right of the field an "x" is shown. An alt text appears on hover informing the user that a click will remove the file. 

      ### Modifier


      If you are expecting large files or a slow receiving server you can add a
      loading state during the upload phase. The upload state fills the
      filename-field from left to right with a colour change from our
      "unvalidated" to our "validated and ok"-colours.


      ### Please note


      * Unfortunately the handling of the error messages can't be built
      technically as we would prefer, which means that if the user needs to
      change a file which has an error they need to remove it and try to upload
      it again - rather than clicking the filename and getting the system dialog
      that way. This should be made clear in the copy of the error message.\
        * If there is something wrong with the file, this is always needed.\
        * If the error is on our part, with the actual upload failing it depends on the implementation if the user needs to remove and re-add the file or if they can just try to submit it again. Work with your developers and copy to find the right error messages to display for your specific case.
      * There exists an old version of the upload component, which still is
      available in EPI-forms. New forms should use the pattern described on this
      page, but for reference here is an image of the old version:
    name: Design
  - content: content code
    name: Code
  - content: content code
    name: Code
---

