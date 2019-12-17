---
template: ComponentPage
category: System Display
title: Alert
description: >-
  Alerts are used to provide (contextual) messages for typical user actions and
  for important communication from Länsförsäkringar of a non-commercial nature.
previewImage: /img/alert.svg
intro: >-
  Alerts are used to provide (contextual) messages for typical user actions and
  for important communication from Länsförsäkringar of a non-commercial nature.
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      All alerts are contextual system messages for typical user actions and
      notifications. An inline-heading can be set in the beginning of alerts to
      give the user a heads-up of it’s content. The heading should always be
      separated from the content with some form of punctation (i.e. .,!?- ).
      Never use line breaks inside the alerts.


      The alert should be shown as local as possible, without having to be
      repeated. That is, don’t display an alert on top of a page if only parts
      are affected but do not put is so far down that the user gets several
      alerts for the same error. Please refer to examples in use for visual
      examples.


      Showing notifications to the user is great, but avoid having the user
      experience several alert messages at once. If there is something wrong,
      the user should receive one warning message detailing this, not once for
      each affected container/function/ table/etc.


      ### Four main versions


      There are four variants of the alert: info, success, warning and danger.
      Make sure to use the appropriate style to get your message across.


      #### Info


      The info alert is the most commonly used one, simply delivering a message
      with information that is relative to the user on its current view. 


      #### Warning


      The warning alert is the go-to alert when it comes to messages of
      importance demanding focus from the user. When in doubt between using a
      danger or warning alert, use a warning.


      #### Danger


      The danger alert is reserved for "severe" system messages delivering
      information of some kind that may hinder or affect the user in its usage
      of the application, and/or public service announcements that requires the
      attention of the user (one example includes a notification of a flood in a
      certain part of the country).


      #### Success


      The success alert is very rarely used. Some use-cases are known, where a
      message to the user displaying that something has been completed
      successfully has been seen as useful. Confirmation on changes to settings
      or updated information can see a success alert appearing in order to tell
      the user that the changes were successful upon clicking a confirm button
      but staying on the same page.


      ### Modifiers


      There are several modifiers available for the alerts, with corresponding
      styling for all four all versions.


      #### Alert with close-x


      If you want the alert to be closeable by the user, use an X (code-only
      component ‘close’) in the far right of the alert.


      #### Alert with button


      If you need to put a button inside the alert, there is a special version
      of the [secondary buttons](../../buttonandlinks/knapp-i-alerts/) for this.
      Use the outlined button in the same color as your alert. The button should
      be placed on the right hand side of the alert. 


      #### Full page width


      For important information the alert can be displayed over the full
      webpage. Typical examples of this  are "cookie information" and if we have
      any general messages (like “Our telephone provider has problems so you
      can’t call us right now” or “Are you affected by the forest fire, call us
      at phone number”)


      #### Link


      As the text should be kept short, create a new page and link to it from
      the alert if you can’t get all your information across on one line.


      ## Please consider


      * Don’t confuse alerts (striped background) with [“glasspinnar”/modifier
      shortcut ](../../buttonandlinks/shortcut/)(monocolor background and
      arrow) 

      * The close component should never be used together with a button inside
      an alert. The button replaces the cross as it has the same functionality
      (even if the user gets redirected).
    name: Design
  - content: >-
      ## På svenska




      ## In english




      ## Please consider


      * Don’t confuse alerts (striped background) with [“glasspinnar”/modifier
      shortcut ](../../buttonandlinks/shortcut/)(monocolor background and
      arrow) 

      * Do NOT write a warning like this: “This is the header and the body text
      just continues without a separator”.
    name: Copy
  - content: >-
      <table class="Table">

      <tbody><tr><th>Property</th><th>Value</th></tr><tr>

      <td class="text-nowrap">background-color</td>

      <td class="text-nowrap"><dt class="distribution-title"
      style="background-color: #fbd5d6"></dt>#fbd5d6</td></tr><tr>

      <td class="text-nowrap">border-color (and stripes)</td>

      <td class="text-nowrap"><dt class="distribution-title"
      style="background-color: #fbcbd2"></dt>#fbcbd2</td></tr><tr>

      <td class="text-nowrap">border-width</td>

      <td class="text-nowrap"> 2px</td></tr><tr>

      <td class="text-nowrap">color</td>

      <td class="text-nowrap"><dt class="distribution-title"
      style="background-color: #ad1015"></dt>#ad1015</td></tr><tr>

      <td class="text-nowrap">font-family</td>

      <td class="text-nowrap">Arial, "Helvetica Neue", Helvetica,
      sans-serif</td></tr><tr>

      <td class="text-nowrap">font-size</td>

      <td class="text-nowrap">1rem</td></tr><tr>

      <td class="text-nowrap">line-height</td>

      <td class="text-nowrap">1.45</td></tr></tbody></table>
    name: Code
---

