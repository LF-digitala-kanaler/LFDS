---
template: ComponentPage
title: Timeline
intro: The timeline component is an interactive way for the user to follow the
  progress of an (ongoing) errand, such as a damage claim or loan application.
description: The timeline component is an interactive way for the user to follow
  the progress of an (ongoing) errand, such as a damage claim or loan
  application.
previewImage: /img/timeline.svg
category: Page content
tabs:
  - content: >-
      ## How to use


      The timeline typically displays an errand from start to finish (although a reversed timeline for "latest activity in your account" can easily be imagined). Each activity in the timeline can be expanded to read more about what has happened/will happen in that step.


      Each step can have one of the following three states, each with their own visual style; **done**, **current** and **upcoming**. On entering the detail view, the current step is expanded (backend should provide which step which is current, and of course there can only be one current step). The rest are collapsed.


      To expand a card you can click anywhere on the card. To collapse a card you can click on the part above the divider line (or also on "Stäng" in responsive mode). Interacting with one card won’t affect any of the surrounding cards (that is, a user can have all cards expanded at once if they wish to).


      In some cases all future states of the timeline might not be known, in that case you can add a wavy line in the timeline with a help text to inform the user that the following steps below are dependent on things which aren't known yet (such as choices made by the user or the results of an investigation).
    name: Design
  - name: Code
    content: >-
      # How to use


      Our Timeline uses the [collapse](/components/web/supportive-microinteractions/collapse?code) functionality to handle show and hide states of each timeline item. Read more how to implement that [here]([collapse](/components/web/supportive-microinteractions/collapse?code)).


      Make sure you use the the same markup as in the example above since thee css is kind of complex and the markup needs to be correct to get the desired design. 


      On entering the detail view, only the active step will be expanded. The rest is collapsed. To expand a card you can click anywhere on the card. To collapse a card you can click on the part above the divider line (or also on Stäng in mobile view). Interacting with one card won’t affect any of the surrounding card state-wise. E.g. You could open all cards if you wish.


      You can put whatever you want inside `.timeline-content` but don't forget to add the close button in the end.


      ### States


      A timeline item may have one of three states: 


      * Upcoming - standard state no class needed.

      * Ongoing - `.timeline-spacing` should have a class `.is-ongoing` which will make the icon larger in that item.

      * Done - `.timeline-icon` should have the class `.is-done`.
backgroundColor: '#f3f3f3'
---
