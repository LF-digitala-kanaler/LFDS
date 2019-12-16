---
template: ComponentPage
category: forms
title: Radio buttons
intro: >-
  We have several types of radio buttons in LFUI, all with their specific use
  cases. There are LF-styled "normal" radio buttons, button groups and radio
  cards.
description: >-
  There are three types of radio buttons in LFUI; standard radio buttons, button
  groups and radio cards.
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How (and when) to use


      There are several components in LFUI based on radio button behaviour
      (choose one and only one option), all with their specific behaviour:


      * **Styled radio buttons** are used when you want to use radio buttons in
      a context outside a form flow or if you want more/need scaled down radio
      buttons than button group. Typical use cases for this is when there are
      four or more options, or the options need to have long labels.

      * **Button group** is our main way of presenting users with an either
      or-choice in a form. They follow radio button behaviour but have a more
      tabby look to them. They should be your default option if there are three
      or less options to choose from.

      * **Radio cards** exist in two sizes and they are used for presenting the
      user with a primary choice for the whole flow. The larger size is used
      when customers choose between versions of a product and the smaller as a
      filter on large lists (typically lists of funds or stocks).


      ### Styled radio buttons


      Our styled radio buttons are based on a standard radio button look and
      only styled to look and feel more like Länsförsäkringar. They are our
      secondary option for radio button behaviour (with Button group being our
      primary) and should normally only be used if:


      1. There are four or more options to choose from

      2. The label text has to be long (sentences rather than words)

      3. If the radio choice is surrounded by a large amount of text


      ### Button group


      The button group is our primary look for radio buttons. There are two
      versions of button groups, described below. Both follow our standard
      styling and behaviour for form items when it comes to colours, active
      states, validation and more.


      **Please note**: Although we generally discourage from disabled states in
      LFUI, there are disabled states in the button group as prior choices can
      lead to options being unavailable due to business rules. A good example is
      in purchase flows where choosing the payment "Faktura" disables the time
      frequency "Månad".


      #### Standard button group


      All choices should have the same size, based on the size the largest
      choice has after padding has been added. This is the main option when the
      button labels have short copy or if there are only two options.


      #### Stretched button group


      This option fills the whole container it is included in. The various
      options get the same size, but in this case based on an even distribution
      of the total size. Only use the stretched button group if you have three
      options in a larger container (rule of thumb, larger than 260 px).


      In mobile, the options get stacked on top of each other.


      ### Radio cards


      text text text
    name: Design
---

