---
template: ComponentPage
category: System Display
title: Spinner
description: >-
  The spinner is used to show that the system is loading/fetching data and that
  the response isn't instantaneous.
previewImage: /img/alert.svg
intro: >-
  The spinner is used to show that the system is loading/fetching data and that
  the response isn't instantaneous.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Use the spinner when you expect that the user will have to wait for all
      data to be loaded or the server to respond. The spinner is the option to
      be used when this situation happens in the main page content. Please look
      at button with spinner ([primary](../button-and-links/buttons) /
      [secondary](../button-and-links/secondary-button)) if you want a loading
      state upon the user submitting data or [panel with lazy
      load](../page-content/panel) if the data being loaded is in a panel. 


      ### Versions


      The main version of the spinner consists of a circle alternating between
      our blue and red colours on a white background. You should strive towards
      using this version of the spinner, but be aware that it requires a white
      background to look good (for code reasons).


      For other backgrounds than white we have a version with the red colour and
      negative space completing the circle. This version is however rarely used
      as a stand-alone (but it forms the basis for spinner in a button).


      ### Modifiers


      Both versions of the spinner come in three sizes; default, small and extra
      small. As the naming suggests, default is the standard and the other two
      should be used only if the default is too large for your context.


      ## Please note


      * The spinner is the loader to be used in a main field, and there are
      loader versions for buttons and panels.
    name: Design
  - content: content code
    name: Code
---

