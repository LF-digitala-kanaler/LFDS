---
template: ComponentPage
category: Navigations
title: Pagination
description: >-
  Use pagination to let the user where they are in a flow consisting of several
  pages.
previewImage: /img/pagination.svg
intro: >-
  Use pagination to let the user where they are in a flow consisting of several
  pages.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Our pagination is one of the components which have gone through the most
      design iterations and discussions. Please refer to [Design
      rationale](#design-rationale) below for why this particular design has
      triumphed over alternatives.


      Layoutwise the pagination is really simple: the number of pages available
      is listed with a visible number for each page. The styling of the
      numbering depends on where in the flow the user is:


      * **Previous pages** have a white background with a blue text. By default
      the page number is clickable and lets the user return to that specific
      page. On hover the number is underlined.

      * The **current page** has a blue background with a white text.

      * **Upcoming pages** have a white background and grey text.


      **Counting:** When we determine number of pages included in the numbering
      we count the number of pages from the start of the service, including the
      receipt if such exists. We do however not include any intermediary pages
      in which the user submits initial data needed for the service (this as
      there are often many ways to enter such a service, and the most common way
      is usually as part of a product page on lansforsakringar.se).


      **Displaying:** Although we number the receipt page we do not show the
      pagination on the receipt page. This is as a pagination here wouldn't
      provide any value to the user, as they've finished the flow and wouldn't
      be able to go backwards in the flow as the data has been submitted.


      ### Modifier


      One modifier exists for pagination; the possibility to be able to navigate
      to a previous page can be turned off if it could cause more problems than
      benefits for the user to navigate back. For example, it is used in such a
      way in flows where the user has to identify/sign with BankID in the middle
      of a flow (which in turn should be avoided if possible, but that isn't
      always possible for architectural or security reasons).


      ## Design rationale


      Over the years a number of alternative design, all more descriptive have
      been tested in both qualitative and quantitive tests. To the surprise of
      many the scaled down version in use has outperformed the more descriptive
      versions in all tests.
    name: Design
  - content: content code
    name: Code
---

