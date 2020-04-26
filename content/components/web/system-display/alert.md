---
template: ComponentPage
title: Alert
intro: Alerts are used to provide (contextual) messages for typical user actions
  and for important communication from Länsförsäkringar of a non-commercial
  nature.
description: Alerts are used to provide (contextual) messages for typical user
  actions and for important communication from Länsförsäkringar of a
  non-commercial nature.
previewImage: /img/alert.svg
category: System Display
tabs:
  - content: >-
      ## How to use


      All alerts are contextual system messages for typical user actions and notifications. An inline-heading can be set in the beginning of alerts to give the user a heads-up of it’s content. The heading should always be separated from the content with some form of punctation (i.e. .,!?- ). Never use line breaks inside the alerts.


      The alert should be shown as local as possible, without having to be repeated. That is, don’t display an alert on top of a page if only parts are affected but do not put is so far down that the user gets several alerts for the same error. Please refer to examples in use for visual examples.


      Showing notifications to the user is great, but avoid having the user experience several alert messages at once. If there is something wrong, the user should receive one warning message detailing this, not once for each affected container/function/ table/etc.


      ### Four main versions


      There are four variants of the alert: info, success, warning and danger. Make sure to use the appropriate style to get your message across.


      #### Info


      The info alert is the most commonly used one, simply delivering a message with information that is relative to the user on its current view. 


      #### Warning


      The warning alert is the go-to alert when it comes to messages of importance demanding focus from the user. When in doubt between using a danger or warning alert, use a warning.


      #### Danger


      The danger alert is reserved for "severe" system messages delivering information of some kind that may hinder or affect the user in its usage of the application, and/or public service announcements that requires the attention of the user (one example includes a notification of a flood in a certain part of the country).


      #### Success


      The success alert is very rarely used. Some use-cases are known, where a message to the user displaying that something has been completed successfully has been seen as useful. Confirmation on changes to settings or updated information can see a success alert appearing in order to tell the user that the changes were successful upon clicking a confirm button but staying on the same page.


      ### Modifiers


      There are several modifiers available for the alerts, with corresponding styling for all four all versions.


      #### Alert with close-x


      If you want the alert to be closeable by the user, use an X (code-only component ‘close’) in the far right of the alert.


      #### Alert with button


      If you need to put a button inside the alert, there is a special version of the [secondary buttons](../../buttonandlinks/knapp-i-alerts/) for this. Use the outlined button in the same color as your alert. The button should be placed on the right hand side of the alert. 


      #### Full page width


      For important information the alert can be displayed over the full webpage. Typical examples of this  are "cookie information" and if we have any general messages (like “Our telephone provider has problems so you can’t call us right now” or “Are you affected by the forest fire, call us at phone number”)


      #### 


      ## Please consider


      * Don’t confuse alerts (striped background) with [“glasspinnar” shortcut ](../buttonandlinks/shortcut/)(monocolor background and arrow) 

      * If you want to use a link create a new page and link to it from the alert if you can’t get all your information across on one line as the text should be kept short.

      * The close component should never be used together with a button inside an alert. The button replaces the cross as it has the same functionality (even if the user gets redirected).
    name: Design
  - content: >-
      ## Så skriver vi


      * Blanda inte ihop dessa med [“glasspinnar”/modifier shortcut ](../../buttonandlinks/shortcut/)som är helfärgade, med pil och visas på startsidan av Mina sidor. 


      En rubrik kan användas i början av alerten som ger användaren en hint om vad det handlar om. Rubriken ska då separeras med ett skiljetecken, som tankstreck eller ".?!". Använd aldrig bindestreck i alerten. Avsluta alltid med punkt. 


      **Exempel:** Kundkännedom - Vänligen vara på frågorna för att kunna fortsätta använda appen.
    name: Copy
  - content: >-
      ## How to use


      There are four variants of the alert: `info`, `success`, `warning` and `danger`. Make sure to use the appropriate style to get your message across.


      Never use line breaks inside the alerts.


      The base HTML is same for each variants. 


      ```

      <div class="alert *" role="alert">
        <span class="alert-header">Info</span> - You have received a new message. <a href="#">Click here to read</a>
      </div>

      ```


      To get desired variant change * to on of these classes:


      * alert-info

      * alert-success

      * alert-danger

      * alert-warning


      ### Modifiers


      There is a couple of modifiers for each variant.


      ##### Alert with close-x[](http://localhost:8000/components/web/system-display/alert#alert-with-close-x)


      If you want your alert banner to be closable you can accomplish this by adding some classes and markup. You will not need any extra javascript to make this work( except if you want to store if the user have closed it).


      * Add a dismiss button and the `.alert-dismissible` class

      * On the dismiss button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality.


      ```

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Stäng"><span class="sr-only">Stäng</span></button>
        <strong>Holy guacamole</strong> - You should check in on some of those fields below.
      </div>

      ```


      Since we use Bootstrap's alert component there is a couple of methods and event avalible for you. You can read more about them [here](https://getbootstrap.com/docs/4.0/components/alerts/) 


      #### Alert with button


      If -**and only if**- you want an outlined secondary button on a striped background (using the background utility class or if it is inside an alert), you may use the respective special-case outlined button for that type of striped background. If it is on the `info`-stripes, use `btn-outline-info` if it is on the `danger`-stripes, use `btn-outline-danger` and vice-versa for `success`and `warning`.


      Buttons in/on alerts/striped backgrounds are always small, `btn-sm`.


      *Never* use these button classes if not on top of a striped background.
    name: Code
backgroundColor: "#fff"
---
