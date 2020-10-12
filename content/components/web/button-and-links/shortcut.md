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
componentsNavigation:
  - name: Alerting
  - name: Navigational
  - name: Landing page
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


      The main usage of the "glasspinne" is on the landing page of Mina Sidor where we use it for things like asking the customer to fill out our their "kundkännedomsfrågor" (KYC, Know Your Customer) and providing relevant offers ("your car turns 3 years old, you might want to change type of insurance"). 


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


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Button and Links/Shortcut)
    name: Design
  - content: >-
      ## Så skriver vi


      Glasspinnar är bara en rad och skrivs i fet. Texten måste därför vara kort och koncis.
    name: Copy
  - content: >-
      ## Alerting 


      With the modifier `.shortcut-important` the shortcut is decorated with a background colour to make it stand out. These are also called "glasspinnar" by LF terminology. The variations come in the same styles as [Alerts](/components/web/system-display/alert) and are used by appending the class, for example, `.shortcut-info-ice`.


      ```

      <a href="#foo" class="shortcut shortcut-important shortcut-info-ice">Info</a>

      <a href="#foo" class="shortcut shortcut-important shortcut-success-ice">Success</a>

      <a href="#foo" class="shortcut shortcut-important shortcut-warning-ice">Warning</a>

      <a href="#foo" class="shortcut shortcut-important shortcut-danger-ice">Danger</a>

      <a href="#foo" class="shortcut shortcut-important shortcut-ice-ice-baby">Cool</a>

      ```


      ### Modifier


      There is only one modifier available  and that's to add an icon. Simple add `.shortcut-icon` and properly insert a 20px icon.


      ```

      <a href="#foo" class="shortcut shortcut-icon shortcut-important shortcut-success-ice">
        <svg class="icon" width="20" height="20">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-20"></use>
        </svg>Good job!
      </a>

      ```


      ## Navigational shortcuts


      The navigational shortcut is somewhat bigger than alerting and it's always white. Note that in all variations of the `.shortcut` the text is always bold.


      There is two  different variations of navigational shortcut included in LFUI. 


      ### One-lined shortcut


      This is the default navigational shortcut. 


      ```

      <a href="#foo" class="shortcut">Digital guide</a>


      ```


      ### Modifier 


      You have the option to add an icon to the one-lined shortcut as well. Simple add `.shortcut-icon` and properly insert a 20px icon.


      ### Multiple-lined shortcut


      There is also an option to extend the shortcut to add more content if you need. As seen in the examples below you can add `.shortcut-two-lines` or `.shortcut-multi-lines` to create a shortcut with more content. If you use the later one, beware it changes icons between breakpoints so you will have to define two icons. 


      ```

      <a href="#foo" class="shortcut shortcut-two-lines shortcut-icon shortcut-important shortcut-ice-ice-baby">
        <svg class="icon" width="20" height="20">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user-20"></use>
        </svg>
        <div>
          <div class="text-lg">Company AB</div>
          <div class="text-sm font-weight-normal">89276289-5279</div>
        </div>
      </a>


      <a href="#foo" class="shortcut shortcut-multi-lines">
        <svg class="icon d-md-none" width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-contract-24"></use></svg>
        <svg class="icon d-none d-md-block" width="40" height="40"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-contract-40"></use></svg>
        <div>
          <h3 class="shortcut-title">För det nystartade småföretaget</h3>
          <p class="font-weight-normal font-base text-body d-none d-md-block">Har du nyligen startat eget? Du får en företagsförsäkring med fast pris som.</p>
        </div>
      </a>

      ```


      ## Landing page shortcuts


      You can build landing page shortcuts by adding `.shortcut-landing-page` to your shortcut. See the example below.


      Since LFUI dosen't scale icons Landing page shortcut will need two icons defined, one for screens smaller than 768px and one for screens larger than 768px. Which one that will be display is controlled with [bootstraps display classes ](https://getbootstrap.com/docs/4.0/utilities/display/).  


      Use a 24px icon for small screens and a 40px icon for larger screens. 


      ```

      <a href="#foo" class="shortcut shortcut-landing-page">
        <svg class="icon d-md-none" width="24" height="24"><use xlink:href="#icon-wallet-24"></use></svg>
        <svg class="icon d-none d-md-block mx-auto mb-05" width="40" height="40"><use xlink:href="#icon-wallet-40"></use></svg>
        Account 
      </a>

      ```


      <div class="Callout"><strong class="Callout__title">Equal height shortcuts </strong><p class="Callout__text">If your shortcuts contains words that might break into 2 lines you should consider adding `.h-100` to each `shortcut-landing-page` to create equal height shortcuts.</p></div>
    name: Code
backgroundColor: "#f3f3f3"
---
