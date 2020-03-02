---
template: ComponentPage
category: Button and Links
title: Buttons
description: >-
  Buttons are used as a part of a flow, and is the component which the user
  clicks to make progress in said flow.
intro: >-
  Buttons are used as a part of a flow, and is the component which the user
  clicks to make progress in said flow.
tabs:
  - content: >-
      ## How to use


      Buttons are in their essence a form of link which helps the user through a
      specific flow, typical examples are progressing to the next page or
      submitting something. They are also used as a way of entering a specific
      flow. Through their visual presence they give the users queues on what
      expected actions exist.


      The responsive rules for our buttons transform them the full row-width in
      smaller screens. This should be your default design, but feel free to put
      two buttons next to each other even in smaller screens if the context
      makes it a better choice. 


      <figure class="Image Image__background"><img
      src="/img/responsive-button.jpg" alt="Example of button in desktop and
      responsive web-states"><figcaption><div class="Example of button in
      desktop and responsive web-states"></div></figcaption></figure>


      Button copy should make it clear what happens after clicking it, meaning
      copy like "Next" or "Proceed" shouldn't be used. Read more under the
      [copy-tab](?Copy).


      <div class="Callout"><div class="Callout__icon"></div><p
      class="Callout__text"><strong>Don't use disabled buttons! </strong>For
      accessibility reasons LFUI strongly discourages from using disabled
      buttons. Please read more in "Design rationale" at the bottom of the page
      to learn more.</p></div>


      ### Versions


      We have three main versions of buttons, but other versions exist as part
      of another component (such as in
      [alerts](../system-display/alert#alert-with-button)):


      * Primary button

      * Secondary button

      * Log in button


      #### Primary buttons


      As their name suggests, primary buttons are used to identify the most
      likely action the user might take in a specific view. As nothing is
      primary if several things are primary you should limit the use to one per
      section (even better if you can keep it to one per page) - make any other
      buttons secondary.


      ##### Modifier for primary buttons


      On top of the general modifiers for buttons, the primary button has two
      distinct modifiers not available for the other types of buttons: two-rowed
      button and with BankID-icon. 


      **The two-rowed button** is used in flows where the user buys/signs up for
      something (_köptjänster_). The two-rowed button is used to continue
      between pages. Both rows have text in them, with the first one being in a
      larger font. The first row signals what will happen ("Gå vidare",
      "Godkänn") and the second gives more detail ("Ange uppgifter", "Köp
      försäkring").


      **With BankID-icon** is used as part of our [pattern for using
      BankID](https://lfui-beta-aedd0a.netlify.com/patterns/general-patterns).
      The modifier adds a white BankID-icon to the left of the text in the
      button. Note that the pattern states that you also should add an
      explanatory text on why we need BankID next to the button.


      #### Secondary buttons


      Perhaps the secondary button would be better named as "standard button".
      This is the button to use when you want a button and it isn't primary. You
      may use how many secondary buttons as you wish in a view (in theory you
      can even combine them with a primary button, although this only has been
      applied in internal systems thus far).


      ##### Modifier for secondary buttons


      On top of the general modifiers for buttons, the secondary button has a
      distinct modifier not available for the other types of buttons: **button
      with icon**. The icon is added to the left of the button text. Typical
      examples of use of this modifier in line with web standards) are with a
      clip for attaching files or a plus for adding items (like another fund or
      employee), but it has also been used for a more decorative purposes (like
      after selecting items in
      [Fondkurser](https://www.lansforsakringar.se/stockholm/privat/bank/spara/fondkurser/?shortcut=1&ids=F00000VHUM)).


      #### Log in button


      To support the user in easily finding their way into Mina Sidor (and not
      having several primary buttons on a page) our log-in button has a unique
      colour (#007DB0) which is only used for logging in-purposes. The button is
      used for directing users to our log-in page as well as doing the actual
      logging in on the log-in page. It is also used for logging out in Mina
      Sidor.


      The log-in button is always available in the top right corner of pur
      public web pages, but can also be repeated in page if relevant (one good
      example is "Återbäring" which has content on how to retrieve it on public
      pages, but the user has to do actions in Mina Sidor (which many
      insurance-customer don't visit). The copy should however always only by
      "Logga in" (or "Logga ut" if in a logged in-view).


      <div class="Callout"><div class="Callout__icon"></div><p
      class="Callout__text"><strong>Only for logging in/out! </strong>This
      button should never be used for any other purposes than signing in or
      out-purposes!</p></div>


      ### Modifiers


      On top of the specific modifiers for primary and secondary buttons there
      are three modifiers which are available for all three types of buttons:


      * Size variations

      * With an arrow

      * With loading state


      #### Size variations


      Our buttons come in three sizes: default, smaller and larger. 


      * The default is as the name suggests the default version.

      * The smaller button is used where space is more limited, as in forms or
      in the [radio
      card](../forms/radio-buttons#radio-card-for-selecting-products).

      * The larger is used when we want to give extra attention to the button,
      like in campaigns.


      <figure class="Image Image__background"><img src="/img/button-sizes.png"
      alt="Image showing the three sizes of buttons in LFUI"><figcaption><div
      class="Image__caption">Image showing the three sizes of buttons in
      LFUI</div></figcaption></figure>


      #### With an arrow


      If the user enters a new service (which normally renders a change in the
      visual framework) this is conveyed by using a version of our buttons with
      an arrow appended on the right side of the button and text of the button
      is aligned to the left.


      #### With loading state


      A modifier which we wish we didn't need to have. Add a loading state to
      your button if you expect that the user might have to wait for a response
      (like the next page) after clicking on the button. The loading state is
      our [spinner ](../system-display/spinner)adapted to buttons.


      ## Please consider


      We don't use buttons which are disabled by default in LFUI. However rare
      use cases exist in which the user's choices lead to options being
      unavailable which can be identified by the selection (usually not a
      button) becoming disabled. Read more on why in Design rationale.


      ## Design rationale


      \- disabled buttons




      Instead of a disabled button, make the button clickable and give the user
      a message on why it does not function, and what the user is needed to do
      in order to make it function. If the button is never intended to function,
      do not include the button at all to begin with.
    name: Design
  - content: Funkade länken?
    name: Copy
---

