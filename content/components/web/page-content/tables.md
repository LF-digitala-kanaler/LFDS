---
template: ComponentPage
title: Tables
intro: Tables are used to display data. The data can be either of an informative
  nature (e.g. a transaction history or a price list) or comparative (e.g.
  what's included in different types of an insurance).
description: Tables are used to display data. The data can be either of an
  informative nature or comparative.
previewImage: /img/tables.svg
category: Page Content
tabs:
  - name: Design
    content: >-
      ## How to use


      Tables are used in two different ways at Länsförsäkringar:


      * To **present data**, meaning the tables are filled with information of different kinds such as your transaction history or [current fund value](https://www.lansforsakringar.se/privat/bank/spara/fondkurser/?shortcut=1).

      * To **compare** different offerings. This is primarily used to showcase the difference between different versions of a type of insurance, like in [this example](https://www.lansforsakringar.se/privat/forsakring/personforsakring/olycksfall-sjukforsakring/).


      A very common pattern for tables are for them to be used together with [panels](panel), as the two components fit well together with the panel providing a framing for the table. What the user will understand as the table header is actually the panel header, and what technically is the header row of the tables is used to describe the column labels of the table. The image below exemplifies how it might look:


      <figure class="Image Image__background"><img src="/img/datatabell.png" srcset="/img/datatabell.png 2x" alt="Table with a mixture of text and numbers placed within a panel"><figcaption><div class="Image__caption"></div></figcaption></figure>


      Responsiveness is handled in the same way in both types of tables; at first the spacing is reduced but at certain breakpoints columns are hidden. This means that you as a designer need to prioritise the columns and let your developer know the prioritisation.


      ### Present data


      Use this type of table when you want to present data or information. In most cases you will find that you want to mix text in one or two columns with numbers in the other columns, as in the example image above. 


      #### Modifiers


      There are quite a few modifiers available for tables which present data. They can all be used in conjunction which each other if you wish to - with the exception for expandable and clickable rows.


      ##### Sizing


      Tables can be displayed in either **large** or **small** styling. The difference between them is the amount of padding used, meaning that the larger styling is a good suit for tables with less content (only spanning a few rows) and the smaller for tables with much content. From a code perspective the large table is the default, meaning a table will be displayed as large unless you specify it to be small. Type sizes are the same for both stylings.


      ##### Summary row


      If you're displaying content in which it makes sense to add everything up (like a list of your accounts) you can add a summary row at the bottom of your table. The summary row has a grey background colour with bold text. The label is left-aligned and the summarised value is right-aligned. This means that you should place the amounts you want to add in the rightmost column to align individual values and the summarised value. 


      ##### Banded rows


      If the contents of your table is such that it you expect the user to want to focus on rows primarily you can help them by adding banded rows. This gives every second row a light grey background designed to discretely help the user follow the contents of a row.


      If used together with a summary row, the summary row will have a darker nuance of grey than normally. 


      ##### In-table grouping


      In some cases you might want to divide the information in the table into different groups. Depending on what and how you want so group things, LFUI offers three styles:


      * The primary way is to use **sub-headers**; a distinct header styling for use in tables. Use this for headers which describe the content below it.

      * You may also repeat the styling of the label-row, and this should thus primarily be used for labels.

      * If you want to show more detailed information in just one cell and using sub-headers doesn't work well you could opt for a **sub-group**. Sub-groups show the first line as a normal cell, and then intendent the remain rows of the cell to give them a feeling of being a sub-group. The main use case for this is to show what is included in a part of an insurance, like "delkasko" in this [car insurance prototype](https://lf-digitala-kanaler.github.io/prototypes/koptjanst-motor/#/Page3?_k=c1fm2b).


      ##### Expandable rows


      Sometimes a table row simply isn't enough for all that rich data. To have a table row expand and show additional data, there's the expandable row. To help the user to see that it is clickable you should make the main text look like a link.


      When activated a click on the row expands the row and gives you space to show the user more data. As exemplified in the [fund prices page](https://www.lansforsakringar.se/privat/bank/spara/fondkurser/?shortcut=1), you don't need to follow a strict table behaviour in the expanded section.


      ##### Clickable rows


      If you want to add a link to another page in your table you can so with a clickable row. Style the main text as a link to help guide the user. A click anywhere on the row will take the user to the new page.


      <div class="Callout"><strong class="Callout__title">Up for redesign! </strong><p class="Callout__text">As the visual design and behaviour for expandable and clickable rows are the same, we don't provide the user with any good affordance. Both use cases are valid, but the design needs to be separated more.</p></div>


      ### Comparative tables


      Comparative tables are, as the name suggests, used for comparing things - usually different alternatives of a type of insurance (like [car insurance](https://www.lansforsakringar.se/privat/forsakring/bilforsakring/)). They feature prominently on product pages on the public web, but can in theory be used anywhere. Their main purpose is to give users a visual overview of their options. The various versions to compare between should be placed in the columns.


      Designwise there are some differences to tables for presenting data:


      * Rows are always banded.

      * The leftmost column features a label of what is described.

        * If an editor enters an explanation of the label a chevron is added to the right of the label. The behaviour is then as in the [collapse-component](../supportive-microinteractions/collapse); clicking the label or chevron expands a row with the explanatory text.
      * Remaining table cells are filled with green checkboxes or left empty, rather than being filled with data

      * They have a sticky header if they are longer than the what can displayed at once on the user's screen.
  - name: "Code "
    content: >-
      ## How to use


      Tables come in many different forms and sizes. Which table you should use is often dependant to its content and background color. The default table looks like the one directly below and is of a "compressed" variant, hence the "small" and `.table-sm` markup. This is due to tables in LF applications usually have a lot of content.


      ### Variations


      If we don't count the endless modifiers you have at your disposal there is two different variations of tables, one that **present data** and one that **compare data.** 


      #### Present data


      This is the "normal" table in LFUI. Use semantic  markup as in the example below and add `.table` and you are good to go. 


      ```

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Account #</th>
            <th scope="col">Balance kr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Billys bucks</td>
            <td>9810.01.345.89</td>
            <td>250</td>
          </tr>
        </tbody>
      </table>

      ```


      ##### Modifiers


      There is several modifiers available for tables. You can mix and match after what you need. 


      ###### Sizing


      There is one sizing modifier available and that is `.table-sm.` Simply add the `.table-sm` class to your `table` element.


      ```

      <table class="table table-sm">...</table>

      ```


      ###### Summary row


      Quite often you will be calculating the total sum of data in table cell's. In the example below you can see appropriate markup to use. Don't forget to add the  `<tfoot>`-element since LFUI will add use this to add the right styling.    


      ```

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Account #</th>
            <th scope="col">Balance kr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Billys bucks</td>
            <td>9810.01.345.89</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Billys bucks</td>
            <td>9810.01.345.89</td>
            <td>55 000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="2" scope="row">Total</th>
            <td class="table-summary">65 000</td>
          </tr>
        </tfoot>
      </table>

      ```


      ###### Banded rows


      Works great on backgrounds where the normal white cells aren't clear enough. Simply add `.table-varied` to the `<table>`-element


      ```

      <table class="table table-varied">...</table>

      ```


      ###### In-table grouping


      If you wish to create a sub-header apply the `.th-sub` and `colspan="3"`(value should be equal to the total number of cells in a row). In the same respect, you can use `.th-main` to enforce its styling on a cell that isn't a really a th. 


      ```
       <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col" class="text-nowrap">Account #</th>
              <th scope="col" class="text-nowrap">Balance kr</th>
            </tr>
          </thead>
          <tbody>
            <tr><th colspan="3" class="th-sub">Regular Accounts</th>
            </tr><tr>
              <td>Billys bucks</td>
              <td>9810.01.345.89</td>
              <td>-250</td>
            </tr>
            <tr>
              <td>Savings</td>
              <td>9810.01.345.89</td>
              <td>53 000</td>
            </tr>
          </tbody>
          <tbody>
            <tr><th colspan="3" class="th-sub">Party Accounts</th>
            </tr><tr>
              <td class="text-nowrap">Billys bucks</td>
              <td class="text-nowrap">9810.01.345.89</td>
              <td class="table-cell-number">-250</td>
            </tr>
            <tr>
              <td class="text-nowrap">Donnas dollars</td>
              <td class="text-nowrap">9810.01.345.89</td>
              <td class="table-cell-number">12 000</td>
            </tr>

          </tbody>

        </table>
      ```


      ###### Expandable rows


      ###### Clickable rows


      ### Comparative tables
backgroundColor: "#f3f3f3"
---
