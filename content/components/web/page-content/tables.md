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


      ### Present data


      Use this type of table when you want to present data or information. In most cases you will find that you want to mix text in one or two columns with numbers in the other columns. The image below shows an example of this:


      <figure class="Image Image__background"><img src="/img/datatabell.png" srcset="/img/datatabell.png 2x" alt="Table with a mixture of text and numbers placed within a panel"><figcaption><div class="Image__caption"></div></figcaption></figure>


      The image also shows the table placed inside a [panel](panel), a very common pattern - especially in Mina Sidor.


      #### Modifiers




      Siduppdelning:


      **Informativa**


      ffa för siffror, transaktionshistorik etc. ligger ofta i ett card i mis


      *modifiers*\

      *två storlekar: normall/small*\

      *varannan rad grå (totalraden blir mörkare än annars)*\

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
