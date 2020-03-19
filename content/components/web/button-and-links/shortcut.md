---
template: ComponentPage
category: Button and Links
title: Shortcut
description: >-
  The shortcut is preferably used at the top of a page to draw the users
  attention to another page or section.
previewImage: /img/shortcut.svg
intro: >-
  The shortcut is preferably used at the top of a page to draw the users
  attention to another page or section.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Shortcuts are used to highlight alternative actions from the current flow
      which we think are important for the user. They are either of a more
      alerting nature or navigational, and each design only corresponds to one
      of these two uses. For both use cases the shortcut takes the user into
      another flow than the one they came from. To highlight this all versions
      of shortcuts include a right-aligned forward pointing arrow.


      Shortcuts are normally spanning the whole row, except for multiple-lined
      shortcuts which may have two next to each other. They also feature a 2px
      shadow on the bottom to highlight their clickability.


      ## Versions


      There are three main versions of the shortcut:


      * **Alerting** (more known as "**Glasspinne**"), which are used to
      highlight important actions which the user needs to act on.

      * **Navigational** shortcuts exist in two different styles, but all with
      the main purpose of highlighting alternative ways forward from the current
      view.

      * **Landing page** shortcuts are only used on landing pages and are used
      for helping users find the most common tasks/pages.


      #### Glasspinne


      "Glasspinne" is the shortcut we use when we want to alert users to an
      action they need/are recommended to take (but probably isn't not why they
      arrived at the page). They use the same colors with the same meaning as
      regular [alerts](../system-display/alert), meaning that they are available
      in all four colours - however it is (almost) exclusively the blue neutral
      one which is in use. "Glasspinnar" are always just one row high, meaning
      the text should be kept short and snappy. The text is written in bold.


      The main usage of the "glasspinne" is on the landning page of Mina Sidor
      where we use it for things like asking the customer to fill out our their
      "kundkännedomsfrågor" and providing relevant offers ("your car turns 3
      years old, you might want to change type of insurance").


      _Trivia: The name comes from the need for a name to describe them with and
      someone thinking they resembled ice cream sticks (which is what
      "glasspinne" means in Swedish)._ 


      #### Navigational shortcuts


      The are two different types of navigational shortcuts, but these types are
      mainly aesthetic as they both do the same thing - they help the user to
      navigate in alternative patterns than the main purpose of the page they
      are on. The main difference between the types are how many rows they span,
      and how the design has been adapted for this.


      ##### One-lined shortcut


      The default one-lined shortcut is used for navigational purposes and is
      white with blue bold text. It's relative size is somewhat bigger than the
      other versions.


      ##### Multiple-lined shortcut


      Multiple-lined shortcuts consists of a header row (larger type, bold)
      which communicates the main action and a textarea below to give more
      detail. The textarea can span one or several row and has two possible
      layouts:


      * **Blue text in Intro Cond**; used when you wish to add extra details in
      short form, e.g. the organisational number in the company switcher in Mina
      Sidor (with the company name being the header).

      * **Black text in Arial**; used when you want to add an descriptive text




      The two-lined version of the shortcut features has a header row and a
      second row with smaller, regular, text.


      Det finns en tvåradig variation av shortcut. Används med en regular text
      under den feta texten. Har använts i val av företag i inloggat, även i
      inloggat på översikter som pensionssidan.


      Två elelr flera rader, rubrik. brödtexten kan vara blå intro cond eller
      svart arial


      #### Modifiers


      ##### 


      ##### With icon


      If you wish to you can add an icon to your shortcut


      ##### Navigation page shortcuts




      Note that in all variations of the shortcut the text is always bold. 


      Shortcuts har en 2 pixlar skugga i underkant för att ge den en klickbar
      känsla.


      ### 


      ### With icon


      Shortcuts kan användas med ikon till vänster om texten förutom den
      obligatoriska pilen till vänster. Gäller alla variationer.


      ### Two row with icon


      Det finns en tvåradig variation av shortcut. Används med en regular text
      under den feta texten. Har använts i val av företag i inloggat, även i
      inloggat på översikter som pensionssidan.


      ## Den nya från ÖS
    name: Design
  - content: >-
      ## Så skriver vi


      Det första ordet i glasspinnen är ofta i fetstil följt av "-" och sedan
      texten. Avsluta med punkt. 


      **Text (exempel):** Kundkännedom - Vänligen vara på frågorna för att kunna
      fortsätta använda appen. (ta exempel från Mina sidor)
    name: Copy
  - content: >-
      ## How to use


      Används mestadels i inloggade sidor för att lyfta fram kundens främsta
      frustrationer. Vad ska kunden göra här nest som "vi kunde inte dra en
      räkning", "du måste fylla i frågorna i kundkännedom" till "ett erbjudande
      om helförsäkring när vagnskadegaranti löpt ut". En typ av snabblänk direkt
      till området det gäller.


      ### Default white


      The default shortcut is somewhat bigger than its variations, and always
      white. Note that in all variations of the shortcut the text is always
      bold. 


      ### Modifier "important" / also known as Glasspinnar


      With the modifier shortcut-important the shortcut is decorated with a
      background color to make it stand out. These are also called "glasspinnar"
      by LF terminology. The variations come in the same styles as Alerts but
      not striped and are used by appending the class, for example,
      .shortcut-info-ice.


      ### With icon


      Add .shortcut-icon and properly insert an icon (recommended to do so via
      the Icon <use>) inside the anchor. Works for both standard .shortcut as
      well as with .shortcut-important.


      ### Två radig med ikon
    name: Code
---

