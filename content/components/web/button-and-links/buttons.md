---
template: ComponentPage
title: Buttons
intro: Buttons are used as a part of a flow, and is the component which the user
  clicks to make progress in said flow.
description: Buttons are used as a part of a flow, and is the component which
  the user clicks to make progress in said flow.
previewImage: /img/button-primary.svg
category: Button and Links
componentsNavigation:
  - name: Primary
  - name: Secondary
  - name: Login
tabs:
  - content: >-
      ## How to use


      Buttons are in their essence a form of link which helps the user through a specific flow, typical examples are progressing to the next page and to submit something. They are also used as a way of entering a specific flow. Through their visual presence they give the users queues on what expected actions exist.


      The responsive rules for our buttons transform them the full row-width in smaller screens. This should be your default design, but feel free to put two buttons next to each other even in smaller screens if the context makes it a better choice. 


      <figure class="Image Image__border"><img src="/img/responsive-button.jpg" srcset="/img/responsive-button.jpg 2x" alt=""><figcaption><div class="Image__caption">Example of button in desktop and responsive web-states</div></figcaption></figure>


      The button copy should make it clear what happens after clicking it, meaning copy like "Next" or "Proceed" shouldn't be used. Go to the [copy-tab](?Copy) for more details and examples.


      <div class="Callout"><strong class="Callout__title">Don't use disabled buttons! </strong><p class="Callout__text">For accessibility reasons LFUI strongly discourages from using disabled buttons. Please read more in "Design rationale" at the bottom of the page to learn more.</p></div>


      ### Variations


      We have three main variations of buttons, but other versions exist as part of another component (such as in [alerts](../system-display/alert#alert-with-button)):


      * Primary button

      * Secondary button

      * Log in button


      #### Primary buttons


      As their name suggests, primary buttons are used to identify the most likely action the user might take in a specific view. As nothing is primary if several things are primary you should limit the use to one per section (even better if you can keep it to one per page) - make any other buttons secondary. or use [regular links](links#regular-links).


      ##### Modifier for primary buttons


      On top of the [general modifiers](#modifiers) for buttons, the primary button has two distinct modifiers not available for the other types of buttons: two-rowed button and with BankID-icon. 


      **The two-rowed button** is used in flows where the user buys/signs up for something (*köptjänster*). The two-rowed button is used to continue between pages. Both rows have text in them, with the first one being in a larger font. The first row signals what will happen ("Gå vidare", "Godkänn") and the second gives more detail ("Ange uppgifter", "Köp försäkring").


      **With BankID-icon** is used as part of our [pattern for using BankID](/patterns/general-patterns/bank-id). The modifier adds a white BankID-icon to the left of the text in the button. Note that the pattern states that you also should add an explanatory text on why we need BankID next to the button.


      #### Secondary buttons


      Perhaps the secondary button would be better named as "standard button". This is the button to use when you want a button and it isn't primary. You may use how many secondary buttons as you wish in a view (in theory you can even combine them with a primary button, although this only has been applied in internal systems thus far).


      ##### Modifier for secondary buttons


      On top of the general modifiers for buttons, the secondary button has a distinct modifier not available for the other types of buttons: **button with icon**. The icon is added to the left of the button text. Typical examples of use of this modifier in line with web standards) are with a clip for attaching files or a plus for adding items (like another fund or employee), but it has also been used for a more decorative purposes (like after selecting items in [Fondkurser](https://www.lansforsakringar.se/stockholm/privat/bank/spara/fondkurser/?shortcut=1&ids=F00000VHUM)).


      #### Log in button


      To support the user in easily finding their way into Mina Sidor (and not having several primary buttons on a page) our log-in button has a unique colour (#007DB0) which is only used for logging in-purposes. The button is used for directing users to our log-in page as well as doing the actual logging in on the log-in page. It is also used for logging out from Mina Sidor.


      The log-in button is always available in the top right corner of our public web pages, but can also be repeated in-page if relevant (one good example is "Återbäring" which has content on how to retrieve it on public pages, but the user has to do actions in Mina Sidor (which many insurance-customer don't visit). The copy should however always only be "Logga in" (or "Logga ut" if in a logged in-view).


      <div class="Callout"><p class="Callout__text"><strong>Only for logging in/out! </strong>This button should never be used for any other purposes than signing in or out-purposes!</p></div>


      ### Modifiers


      On top of the specific modifiers for primary and secondary buttons there are three modifiers which are available for all three types of buttons:


      * Different sizes

      * With an arrow

      * With loading state


      #### Different sizes


      Our buttons come in three sizes: default, smaller and larger. 


      * The default is as the name suggests the default version.

      * The smaller button is used where space is more limited, as in forms or in the [radio card](../forms/radio-buttons#radio-card-for-selecting-products).

      * The larger is used when we want to give extra attention to the button, like in campaigns.


      <figure class="Image Image__background"><img src="/img/button-sizes.jpg" srcset="/img/button-sizes.jpg 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption></figure>


      #### With an arrow


      If the user enters a new service (which normally renders a change in the visual framework) this is conveyed by using a version of our buttons with an arrow appended on the right side of the button and text of the button is aligned to the left.


      #### With loading state


      A modifier which we wish we didn't need to have. Add a loading state to your button if you expect that the user might have to wait for a response (like the next page) after clicking on the button. The loading state is our [spinner ](../system-display/spinner)adapted to buttons.


      ## Please consider


      We don't use buttons which are disabled by default in LFUI. However rare use cases exist in which the user's choices lead to options being unavailable which can be identified by the selection (usually not a button) becoming disabled. Read more on why in Design rationale.


      ## Design rationale


      As the question of **disabled buttons** is one which regularly pops up, our design rationale from discouraging from the user of disabled buttons can be found below.


      In designing our general patterns for [form validation](/patterns/general-patterns/form-validation) and [required fields](/patterns/general-patterns/required-fields) we have been informed by academic research as well as our own user testing (we have even had a bachelor thesis looking at our error message handling!). What we found is that as disabled buttons can't give users feedback on what is missing for them to become enabled, it is from a user perspective much better to have buttons which are enabled and when clicked can give users feedback on what has to be corrected before they can progress in the flow. 


      For users who have missed some part of a form, a disabled button forces the user to search for the error themselves (leading to longer completion times and frustration). In comparison an enabled button can provide an error message and in our pattern also auto-scrolls the user to the (first) error, making the completion of the form an easier task.    


      If you are designing a button which is never meant to be enabled, you shouldn't have the button there at all.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Button and Links/ "Primary button", "Secondary button" and "Login & Logout")


      **Live example:** [](https://www.lansforsakringar.se/stockholm/privat/)Loan product page have primary button for the "Calculate mortgages" and you have always the login button on the top right: <https://www.lansforsakringar.se/privat/bank/lana/bolan/>
    name: Design
  - content: >-
      ## Så skriver vi


      ### Primary button


      Ska beskriva vad som händer när användaren klickar på knappen. En uppmaning. Används ofta i en enklare tjänst där knappen beskriver nästkommande steg. Exempel: Skicka, Gå vidare


      ### Primary button with arrow


      Ska beskriva vad som händer när användaren klickar på knappen. En uppmaning. När man byter sida eller kanal/tjänst med knappen kan det vara bra att förklara vad man kommer till. Exempel: Köp bilförsäkring


      ### Buttons with double row


      Knappen används bara i köptjänster och ska förklara vad som händer när jag trycker och även vad jag ska göra i nästa steg. *Exempel: "Gå vidare \[radbryt] och välj försäkring" eller "Gå vidare \[radbryt] och se sammanställning".*


      ### Primary with BankID icon


      #### Legitimering direkt


      När BankID-legitimeringen sker för att identifiera användaren använder vi begreppet "legitimera".


      **Text i knapp:** Legitimera dig


      #### BankID behövs senare


      Om en legitimering eller signering behövs senare i flödet vill vi förvarna användaren om att BankID kommer att behövas.


      **Text bredvid knappen:** Du kommer att behöva BankID


      **Text i knapp:** Gå vidare


      #### Steget där du signerar


      När BankID-signering används för att godkänna använder vi begreppet Signera och/eller godkänn.


      **Text i knapp:** Signera och godkänn


      ### Primärknapp med autogiro


      På kvittosidan i köptjänster finns ibland en primärknapp med länk till digital ansökan om autogiro.


      **Text i knapp:** Ansök om autogiro direkt


      ### Button alerts


      De här knappen används som ett godkännande. Används idag för Cookie-godkännande och till exempel på på kvittosidan för hemförsäkring. 


      **Text i cookie-knapp:** Jag förstår


      **Text som direct action (exempel):** Ring upp mig


      ### Link secondary


      Länkarna ska beskriva var användaren hamna och ska kunna stå ensamma. Undvik "Läs mer" och "Klicka här" ensamt. Kan med fördel vara fler ord (max 7) ur SEO-synpunkt om de ligger på publik webbplats.


      ### Button login


      Knappen får endast användas med texterna "Logga in" eller "Logga ut”.


      **Text:** Logga in eller Logga ut


      Behöver man skriva annat än något av dessa, måste en annan knapp eller länk användas. Då kan vi till exempel skriva: "Logga in på lansforsakringar.se" eller "Logga in på Mina sidor".
    name: Copy
  - content: >-
      ## How to use


      Our `.btn` classes are designed to be used with a `<button>`  element. It is possible to use it on a `<a>` element and if you do these links should be given a `role="button"` to work better with assistive technologies such as screen readers.


      ```html

      <button type="button" class="btn *">Do this</button>

      <a href="#" role="button" class="btn *">Do this</a>

      ```


      ### Variants


      LFUi includes 3 different variants of buttons.  Primary, Secondary and Log in. They all comes with shared as well as individual modifiers. You can read more about when to use which button [here](/buttons?Design).


      #### Primary


      ```

      <button type="button" class="btn btn-primary">Do this</button>

      ```


      ##### Primary modifiers


      ###### Two-rowed button


      ```

      <button class="btn btn-primary btn-arrow">
        Next page
        <span class="d-block text-sm font-weight-normal font-base"> &amp; fyll i dina uppgifter</span>
      </button>

      ```


      ###### bankID


      ```

      <button type="submit" class="btn btn-primary btn-tight">
        <svg class="icon text-white" width="24" height="24">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-bankid-24"></use>
        </svg>
        Legitimera dig
      </button>

      ```


      #### Secondary


      ```

      <button type="button" class="btn btn-secondary">Do this</button>

      ```


      ##### Secondary modifiers


      ###### button with icon


      ```

      <button type="button" class="btn btn-secondary btn-tight btn-sm-block">
        <svg class="icon icon-nudge-up-01 mr-03" width="24" height="24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-chat-24"></use></svg>
        Talk to us
      </button>

      ```


      #### Log in


      ```

      <button type="button" class="btn btn-login-logout">Login</button>

      ```


      ### Shared modifiers


      Primary and Secondary button share some common modifiers between them. You have the option to change size, add arrows, loading state or change how the button displays on smaller screens. 


      #### With arrow


      Append .`btn-arrow` to any primary or secondary button to add the an arrow to the button.


      #### Size


      * `.btn-sm` - less padding.

      * `.btn-lg` - more padding and larger font-size

      * `.btn-tight` - less x-padding


      #### Loading state


      If you want to indicate that you are loading something when the user has clicked on the button, you may use the `loading` class. This with the combination of some markup for the spinner will show a loader on the button. Note that you need to add your own logic for adding and removing the class `loading`.


      ```

      <button type="button" class="btn btn-secondary loading">
        Loading...
        <div class="lf-spinner-btn-secondary">
          <svg viewBox="0 0 105 105" x="0" y="0" role="animation">
            <circle class="static-circle" r="45%" cx="50%" cy="50%"></circle>
            <circle class="lf-spinner-dash" r="45%" cx="50%" cy="50%"></circle>
          </svg>
        </div>
      </button>

      ```


      #### Display


      To have a button take up the entire width of its parent, use `btn-block` in synergy with a variant (i.e`btn-primary`,`btn-secondary`). You can also use `btn-sm-block` to have the button become full width on smaller screens(768px and down)


      .


      ## Accessibility


      Make sure you include relevant accessibility markup for elements that are not really buttons but intend to be used as such. This not only for accessibility reasons, but also for styling purposes. In order for these "buttons" to have the proper styling, add the `role="button"` to the element.


      Also, if you code a `<button>`-element without the `.btn-class`, also add the `role="button"` to the element to have proper styling.


      "When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers."
    name: Code
priority: "2"
---
