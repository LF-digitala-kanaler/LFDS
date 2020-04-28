---
template: ComponentPage
title: Avatar
intro: Avatars are used to give a visual representations of the various parties
  involved in a conversation.
description: Avatars are used to give a visual representations of the various
  parties involved in a conversation.
previewImage: /img/avatar.svg
category: System Display
tabs:
  - content: >-
      ## How to use


      Use the avatar to identify a user or other person-like object (i.e. business or service desk). The avatar may feature an image or just the users initials. Länsförsäkringar are identified by the symbol in logo.


      ## Please consider


      * Avatars are currently only in use in secure messages.

      * A similar function are used as shortcuts in the app for the startpage to come.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (System Display/Avatar)
    name: Design
  - content: content
    name: Copy
  - content: >-
      ## Versions


      Avatar comes in 2 different versions which all share the same base html and modifiers.


      ```html

      <div class="avatar avatar-blue avatar-inline *">*</div>

      ```


      ### Image


      ```

      <div class="avatar avatar-blue avatar-inline has-image">
        <img class="avatar-image p-03" src="https://via.placeholder.com/30" alt="Jane Doe">
      </div>

      ```


      ### Initials


      Depending on your needs there is two different versions of this one. One with a background color and one with only a border. 


      ```

      <div class="avatar avatar-inverted avatar-blue avatar-inline" data-initials="JD">Jane Doe</div>

      <div class="avatar avatar-blue avatar-inline" data-initials="JD">Jane Doe</div>

      ```


      #### Modifiers
    name: Code
backgroundColor: "#fff"
---
