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


      <figure class="Image Image--background"><img
      src="/img/responsive-button.jpg" alt="Example of button in desktop and
      responsive web-states"><figcaption><div class="Example of button in
      desktop and responsive web-states"></div></figcaption></figure>


      Button copy should make it clear what happens after clicking it, meaning
      copy like "Next" or "Proceed" shouldn't be used. Read more under the
      [copy-tab](?Copy).


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


      On top of the general modifiers for buttons, the primary button has a
      distinct modifier not available for the other types of buttons:
      **two-rowed button**. The two-rowed button is used in flows where the user
      buys/signs up for something (_köptjänster_). The two-rowed button is used
      to continue between pages. Both rows have text in them, with the first one
      being in a larger font. The first row signals what will happen ("Gå
      vidare", "Godkänn") and the second gives more detail ("Ange uppgifter",
      "Köp försäkring").


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
      examples of use of this modifier is with a clip for attaching files or a
      plus for adding items (like another fund or employee), but it has also
      been used for a more decorative purposes (like after selecting items in
      [Fondkurser](https://www.lansforsakringar.se/stockholm/privat/bank/spara/fondkurser/?shortcut=1&ids=F00000VHUM)).


      #### Log in button










      Log in


      Modifiers (gäller ej log in???)


      Small, normal, large


      Med pil -  As a rule of thumb, the arrow is appended to the button if it
      takes you to another service, but without the arrow if it is an action
      within the same service.


      BankID 


      Please consider


      Design rationale - disabled buttons


      Do not use disabled buttons.




      Instead of a disabled button, make the button clickable and give the user
      a message on why it does not function, and what the user is needed to do
      in order to make it function. If the button is never intended to function,
      do not include the button at all to begin with.
    name: Design
  - content: Funkade länken?
    name: Copy
---

