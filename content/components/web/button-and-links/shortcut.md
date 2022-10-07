---
template: ComponentPage
title: Shortcuts
intro: Shortcuts are as a way of providing a quick and easy way to access
  popular pages. They are usually placed in the main view of a newly loaded
  page.
description: Shortcuts are as a way of providing a quick and easy way to access
  popular pages.
previewImage: /img/shortcut.svg
category: Button and links
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use

      Shortcuts are used to highlight alternative actions from the current flow which we think are important for the user. They are either of a more alerting nature or navigational, and each design only corresponds to one of these two uses. For both use cases the shortcut takes the user into another flow than the one they came from.

      Shortcuts are normally spanning the whole row, except for [multiple-lined shortcuts](#multiple-lined-shortcut) which may have two next to each other. They also feature a 2px shadow on the bottom to highlight that they can be clicked.

      ## Variations


      There are three main variations of the shortcut:


      * **Alerting** (more known as "**Glasspinne**"), which are used to highlight important actions which the user needs to act on.

      * **Navigational** shortcuts exist in two different styles, but all with the main purpose of highlighting alternative ways forward from the current view.

      * **Landing page** shortcuts are only used on landing pages and are used for helping users find the most common tasks/pages.


      #### Alerting (Glasspinne)


      "Glasspinne" is the shortcut we use when we want to make users aware of an action they need/are recommended to take, but probably isn't not why they arrived at the page (in contrast, alerts are for when we want to broadcast something to the user but they do not need to take any action). "Glasspinnar" use the same colors with the same meaning as regular [alerts](../system-display/alert), meaning that they are available in all four colours - however it is (almost) exclusively the blue neutral one which is in use. "Glasspinnar" are always just one row high, meaning the text should be kept short and snappy. The text is written in bold.


      The most prominent usage of the "glasspinne" is on the landing page of Mina Sidor where we use it for things like asking the customer to fill out our their "kundkännedomsfrågor" (KYC, Know Your Customer) and providing relevant offers ("your car turns 3 years old, you might want to change type of insurance"). It is however used on several other pages within Mina Sidor as well, such as product pages.


      <div class="Callout"><strong class="Callout__title">Trivia </strong><p class="Callout__text">The name comes from the need for a name to describe them with and someone thinking they resembled ice cream sticks (which is what "glasspinne" means in Swedish).</p></div>


      #### Navigational shortcuts


      There are two different types of navigational shortcuts, but these types are mainly aesthetic as they both do the same thing - they help the user to navigate in alternative patterns than the main purpose of the page they are on. The main difference between the types are how many rows they span, and how the design has been adapted for this.


      ##### One-lined shortcut


      The one-lined shortcut is used for navigational purposes and is white with blue bold text. Its relative size is somewhat bigger than the other versions.


      ##### Multiple-lined shortcut


      Multiple-lined shortcuts consists of a header row (larger type, bold) which communicates the main action and a textarea below to give more detail in. The textarea can span one or several rows andea you need to choose between one of the two modifiers for the styling:


      * **Blue text in Intro Cond**; used when you wish to add extra details in short form, e.g. the organisational number in the company switcher in Mina Sidor (with the company name being the header).

      * **Black text in Arial**; used when you want to add a descriptive text. An example of this in use is on navigational pages on lansforsakringar.se ([example](https://www.lansforsakringar.se/stockholm/privat/forsakring/fordonsforsakring/)).


      #### Landing page shortcuts


      Our landing pages often feature a special version of the shortcut which in its desktop-mode looks more like a large button than the other shortcuts (in its responsive mode it is very similar to the [one-lined shortcut](#one-lined-shortcut) however). The main area of the shortcut features a large icon, and below the icon a few (preferably only one) words describe what the shortcut leads to.


      This is used on the landing pages of [lansforsakringar.se](https://www.lansforsakringar.se/) and Mina Sidor as well as the [Om oss](https://www.lansforsakringar.se/privat/om-oss/) (about us)-section of lansforsakringar.se.


      ### Modifier


      One modifier exists for shortcuts and it is available for "glasspinnar" and navigational shortcuts; you can opt to put an icon in your shortcut. If so it is placed to the left of the text in the shortcut. Just make sure that you're consistent if you have several shortcuts grouped together.
    name: Design
  - content: >-
      ## Så skriver vi


      Glasspinnar är bara en rad och skrivs i fet. Texten måste därför vara kort och koncis.
    name: Copy
  - content: >-

      Shortcuts are highly flexible. They can go with our without icons, and contain pretty much any type of content – such as a paragraph in above examples.

      ### Configuration

      Three options, with their default values.


      ```css

      --shortcut-text-color: var(--color-body);

      --shortcut-border-color: var(--smoke);

      --shortcut-border-accent-color: var(--blue);

      ```


      ### Modifiers

      You can build landing page shortcuts by adding `.shortcut-box` to your shortcut. See the example below.


      ```html

      <a href="#" class="shortcut shortcut-box">
        <svg class="icon" width="40" height="40">
          <use xlink:href="/lf-icons/sprite/40/icons.svg#house-40"></use>
        </svg>
        <strong class="shortcut-title">Loans</strong>
      </a>

      ```

      If you would like for the box shortcuts to go horizontal and stacked on narrow viewpoints, consider the `shortcut-md-box` modifier instead. In this case, icon size needs to be taken into account. Since LFUI dosen't scale icons, two different icons will need to be defined. The visibility of the icons can then be controlled with [bootstraps display classes ](https://getbootstrap.com/docs/5.2/utilities/display/).

      Use a 24px icon for small screens and a 40px icon for larger screens.


      ```html

      <a href="#" onclick="return false" class="shortcut shortcut-md-box">
        <svg class="icon d-md-none" width="24" height="24">
          <use xlink:href="lf-icons/sprite/24/icons.svg#house-24"></use>
        </svg>
        <svg class="icon d-none d-md-block mb-05" width="40" height="40">
          <use xlink:href="lf-icons/sprite/40/icons.svg#house-40"></use>
        </svg>
        <strong class="shortcut-title">Loans</strong>
      </a>

      ```

    name: Code
---
