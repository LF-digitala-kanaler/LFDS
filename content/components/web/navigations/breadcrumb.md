---
template: ComponentPage
title: Breadcrumbs
intro: Breadcrumbs lets the user get a sense of where they are in your
  application and offers a way to navigate upwards in the site tree.
description: Breadcrumbs lets the user get a sense of where they are in your
  application and offers a way to navigate upwards in the site tree.
previewImage: /img/breadcrumb.svg
category: Navigations
tabs:
  - content: >-
      ## How to use


      Breadcrumbs are a part of the page templates on lansforsakringar.se and Mina sidor and are generated automatically, so there isn't much to think about regarding breadcrumbs for you as a designer of customer facing web applications.


      If you are designing an internal system you should consider whether breadcrumbs are of benefit for your users. In a smaller, flat system you might not see the need, but the larger the system, the bigger the need probably is (especially as the navigation structure gets deeper and deeper).


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Navigations/Breadcrumbs)
    name: Design
  - content: >-
      ## How to use


      Breadcrumb is a simple navigation component that only requires a `nav` container and a `ol` list. The dividers are automatically created in the content of the `::before` pseudo-element of`li` tags. 


      You can inform the current page using the `active` modifier on a `li` tag


      ## Accessibility


      * A `nav` with `aria-label="Breadcrumb"` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.

      * The set of links is structured using an ordered list

      * To prevent screen reader announcement of the visual separators between links, they are added via CSS

      * `aria-current="page"` is applied to the last link in the set to indicate that it represents the current page.
    name: Code
  - content: >-
      ## Så skriver vi


      Breadcrumbs ska spegla sidan användaren är på. Kort och koncist, tänk som i menyn.
    name: Copy
backgroundColor: "#fff"
---
