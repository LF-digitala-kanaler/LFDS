---
template: ComponentPage
category: System Display
title: Timeline
intro: >-
  The timeline component is an interactive way for the user to follow the
  progress of an (ongoing) errand, such as a damage claim or loan application.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      The timeline typically displays an errand from start to finish (although a
      reversed timeline for "latest activity in your account" can easily be
      imagined). Each activity in the timeline can be expanded to read more
      about what has/will happened/happen in that step.


      Each step can have one of the following three states, each with their own
      visual style; done, current and upcoming. On entering the detail view, the
      current step is expanded (backend should provide which step which is
      current, and of course there can only be one current step). The rest are
      collapsed.


      To expand a card you can click anywhere on the card. To collapse a card
      you can click on the part above the divider line (or also on Stäng in
      mobile view). Interacting with one card won’t affect any of the
      surrounding cards (that is, a user can have all cards expanded at once if
      they wish to).


      In some cases all future states of the timeline might not be known, in
      that case you can add a wavy line in the timeline with a help text to
      inform the user that the following steps below are dependent on things
      which aren't known yet (such as choices made by the user or the results of
      an investigation).
    name: Design
---

