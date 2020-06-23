---
template: ComponentPage
title: Links
intro: Links are used when we want to guide the user away from the current page,
  as we expect them to want information which isn't part of the current flow.
description: Links are used when we want to guide the user away from the current
  page, as we expect them to want information which isn't part of the current
  flow.
previewImage: /img/link-primary.svg
category: Button and Links
componentsNavigation:
  - name: Primary
  - name: Regular
tabs:
  - content: >-
      ## How to use


      Links is the main way of helping users find information which isn't included in the current page/view. Examples of where links can lead are another page on our webpage, a pdf with more info or a link to an external webpage. 


      ### Versions


      We have two versions of links; primary and regular. However, headings can also be links (especially on [cards](../page-content/card)) - this use case is described under [Headings in Typography.](../text/headings#linked-headline)


      #### Primary links


      Primary links are used for highlighting a link which you want to put extra emphasis on. Examples include repeating a [primary button](buttons#primary-buttons) further down in the page (a pattern which can often be seen on lansforsakringar.se) or as part of a [call out](../page-content/callout). 


      As they are primary there can only be one primary link per block (and preferably page). Layout-wise the primary link is rather "heavy" with an arrow after the text, meaning it should be used sparsely. 


      <div class="Callout"><strong class="Callout__title">Link or button? </strong><p class="Callout__text">The first time you show a link in a page you might want to use a primary button instead to give extra emphasis to the link, especially at the top of pages. The further down you are, the better it is to use link-styling.</p></div>


      The first time you show a link in a page you might want to use a primary button instead to give extra emphasis to the link, especially at the top of pages. The further down you are, the better it is to use link-styling.


      #### Regular links


      Our regular link follows web standards closely, being blue with and underlined. On hover it changes colour to a darker shade of blue. Depending on in which context it is used there are some aspects to consider.


      ##### Links in relation to text


      How to place a link depends on which kind of text you use it conjuction with. We have placed our recommendations in conjunction with the description of the various text types:


      * If you want to use a link in relation to body text, read about how to do it on the [body text-page](../text/body-text#links-in-body-text). 

      * If you want to place a link in a bullet list, you want to head over to [lists](../text/lists).

      * If you have several links you want to add, you might want to use a [link list](../text/lists#link-list) instead.


      ##### External links


      If your link leads away from the context you're in the link should be amended with an external link icon. This includes changing technical environment within Länsförsäkringar's world (like a link in Mina Sidor or a purchase flow leading to lansforsakringar.se ). The icon should come after the link text and links should open in a new tab/window (depending on the user's browser settings).


      Please see external links in [lists with icons](../typography/lists#link-list) for an exception.


      ##### Paired with a button


      A common usage of the regular link is as a secondary option in a flow. In this case the link contrasts a primary button. Depending on what the link does, it is either placed to the far left in height with the primary button (for "backwards"-functionality) or just prior the primary button (for "cancel"-functionality). The image below shows one of the rare cases where both options exist.


      <figure class="Image Image__background"><img src="/img/skärmavbild-2020-03-12-kl.-18.00.19.png" srcset="/img/skärmavbild-2020-03-12-kl.-18.00.19.png 2x" alt="Regular links next to a primary button in a flow where both "backwards" and "cancel"-options exist."><figcaption><div class="Image__caption"></div></figcaption></figure>


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Button and Links/ "Primary link" and "Secondary link")
    name: Design
  - content: >-
      ## Så skriver vi


      Länkarna ska beskriva var användaren hamna och ska kunna stå ensamma. Undvik "Läs mer" och "Klicka här". Kan med fördel vara fler ord (max 7) ur SEO-synpunkt om de ligger på publik webbplats.


      ### PDF


      Länken bör heta det som dokumentet heter. För villkor döper vi dem till: 


      Typ av dokument - Produkt - Version/Årtal


      Exempel: Villkor Motorfordon 2020
    name: Copy
  - name: Code
    content: >-
      ## Primary


      ```
        <a class="primary-link" href="#">Primary link</a>
      ```


      ## Regular


      LFUI uses a custom link design where the *underline* is in fact a background-image, placed below the text. The link styling is added when an anchor tag has a `href`-value. 


      ```
        <a href="#">Regular link</a>
      ```


      ### Link list


      A collection or list of links can be used together with the `nav` class on their parent to gather the links in a list for easy overview. Use the `<nav>` html element where the links are a part of the main navigation.


      You can also add icons(32px) to links in a link list.


      ```

      <ul class="nav flex-column list-md">
        <li class="nav-item">
          <svg role="presentation" class="icon text-blue mr-05" width="32" height="32"><use xlink:href="#icon-pdf-doc-32"></use></svg>
          <a class="nav-link" href="#">Försäkringspapper</a>
        </li>
        <li class="nav-item">
          <svg role="presentation" class="icon text-blue mr-05" width="32" height="32"><use xlink:href="#icon-pdf-doc-32"></use></svg>
          <a class="nav-link" href="#">Dokumentation</a>
        </li>
        <li class="nav-item">
          <svg role="presentation" class="icon text-blue mr-05" width="32" height="32"><use xlink:href="#icon-pdf-doc-32"></use></svg>
          <a class="nav-link" href="#">Om personliga uppgifter</a>
        </li>
      </ul>

      ```


      ### External links


      External links should always be accompanied with an icon(icon-external-link-20) after it, except in Link list then it should be placed before the link and icon-external-link-32 should be used.


      External links should be opened in another tab/window so they should have the target attribute set to **_blank.**


      ```
        <a href="#" target="_blank">Regular link</a><svg role="presentation" class="text-blue icon-right icon  icon-nudge-up-01" width="20" height="20"><use xlink:href="#icon-external-link-20"></use></svg>
      ```


      #### Modifiers


      There are several helper classes to your disposal to work with this link styling.


      * `link-no-underline` can be used when you do not want the underline.

      * `link-adaptive` does not show the underline until the anchor is interacted with.

      * `link-complex` can be used when the link is wrapped around a container and you want the correct link behavior on a targeted element within the container.

      * `link-complex-adaptive-target` is like `link-complex`(& `link-complex-target`), but the link does not get the default link styling, and instead gets the adaptive, inherit styling. Used mainly in the header and footer components.
backgroundColor: "#fff"
---
