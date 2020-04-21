---
template: ComponentPage
category: Page Content
title: Tables
description: Tables are used to display data. The data can be either of an
  informative nature or comparative.
intro: Tables are used to display data. The data can be either of an informative
  nature (e.g. a transaction history or a price list) or comparative (e.g.
  what's included in different types of an insurance).
tabs:
  - name: Design
    content: >-
      ## How to use


      Tables are used in two different ways at Länsförsäkringar:


      * To **present data**, meaning the tables are filled with information of different kinds such as your transaction history or [current fund value](https://www.lansforsakringar.se/privat/bank/spara/fondkurser/?shortcut=1).

      * To **compare** different offerings. This is primarily used to showcase the difference between different versions of a type of insurance, like in [this example](https://www.lansforsakringar.se/privat/forsakring/personforsakring/olycksfall-sjukforsakring/).


      Responsiveness is handled in the same way in both types of tables; at first the spacing is reduced but at certain breakpoints columns are hidden. This means that you as a designer need to prioritise the columns and let your developer know the prioritisation.


      A very common pattern for tables are for them to be used together with [panels](panel), as the two components fit well together with the panel providing a framing for the table. What the user will understand as the table header is actually the panel header, and what technically is the header row of the tables is used to describe the column labels of the table. The image below exemplifies how it might look:


      <figure class="Image Image__background"><img src="/img/datatabell.png" srcset="/img/datatabell.png 2x" alt="Table with a mixture of text and numbers placed within a panel"><figcaption><div class="Image__caption"></div></figcaption></figure>


      ### Present data


      Use this type of table when you want to present data or information. In most cases you will find that you want to mix text in one or two columns with numbers in the other columns, as in the example-image above. 


      #### Modifiers


      There are quite a few modifiers available for tables which present data. They can all be used in conjunction which each other if you wish to.


      ##### Sizing


      Tables can be displayed in either **large** or **small** styling. The difference between them is the amount of padding used, meaning that the larger styling is a good suit for tables with less content (only spanning a few rows) and the smaller for tables with much content. From a code perspective the large table is the default, meaning a table will be displayed as large unless you specify it to be small. Type sizes are the same for both stylings.


      ##### Summary row


      If you're displaying content in which it makes sense to add everything up (like a list of your accounts) you can add a summary row at the bottom of your table. The summary row has a grey background colour with bold text. The label is left-aligned and the summarised value is right-aligned. This means that you should place the amounts you want to add in the rightmost column to align individual values and the summarised value. 


      ##### Banded rows


      If the contents of your table is such that it you expect the user to want to focus on rows primarily you can help them by adding banded rows. This gives every second row a light grey background designed to discretely help the user follow the contents of a row.


      If used together with a summary row, the summary row will have a darker nuance of grey than normally. 


      ##### In-table headers


      In some cases you might want to divide the information in the table into different segments, and what better way to do that than to use headings? Thus; in-table headers!


      LFUI has two styles of headers in-table:


      * The primary way is to use sub-headers; a distinct header styling for use in tables. Use this for headers which describe the content below it.

      * You may also repeat the styling of the label-row, and this should thus primarily be used for labels.


      Siduppdelning:


      **Informativa**


      ffa för siffror, transaktionshistorik etc. ligger ofta i ett card i mis


      \

      *headings: sub-headers och vanliga*\

      *expandable-rows*\

      *sub-group (kolla upp om denna faktiskt används innan jag skriver!)*


      **Jämförande**


      när du ska jämföra mellan olika saker. vad ingår?


      alltid varannan rad grå\

      text vs gröna bockar/inget  (ex gravidförsäkring som bonus!)


      *modifier*\

      *expand för läsa mer, chevron*\

      *sticky header*
  - name: Code
    content: content
---
