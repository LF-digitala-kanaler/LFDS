---
template: ComponentPage
title: Lists
intro: Lists can be used to make information stand out in contrast to a text
  block or to group similar information in an accessible way. Depending on use
  case we have different stylings.
description: "Lists can be used to make information stand out in contrast to a
  text block or to group similar information in an accessible way. "
previewImage: /img/lists.svg
category: Typography
componentsNavigation:
  - name: Dots
  - name: Numbers
  - name: Checkmarks
tabs:
  - content: >-
      ## How to use


      Web readers prefer copy formatted for ease of scanning, which allows them to easily skip through chunks of text to get to areas of interest. List elements helps to break up large blocks of text, make complex articles and product information easier to grasp, and make key information stand out. 


      As you probably know, we generally recommend putting links after a text block (otherwise, [read this section](body-text#links-in-body-text)). However, when it comes to a list that would actually make it more difficult to identify what the link relates to. Thus, we recommend to phrase the list item in such a way that the link naturally can be placed at the end of the text but still inline with the text *(if you want to put one link to summarise the whole list, the normal recommendation of putting the link after the the textblock applies).*


      ## Variations


      We offer a variety of stylings for different use contexts as well as specific way of handling lists which only include links.




      ## \---- Fabians arbetsmaterial


      ## Siduppbyggnad


      With dots


      With numbers


      With checkmarks


      Link lists




      \------ Lizas text nedanför




      A common question with lists are:


      Where to put the **external icon in a link list**? You can read more about that in the specifik link list part below.


      ### List with dots


      Can also be called bulleted list. Bulleted lists attract attention, support scanning, shorten text, and reveal the relationship of items. 


      ### List with numbers


      Use numbered lists only when the sequence or count of items are important.


      Numbered lists are usually reserved for instances in which the items must occur in a specific order, such as steps in a procedure, or when keeping count is important, such as a top 10 list.


      #### Modifier


      **Big numbers**\

      In lf.se we have a modifier with big numbers and a cirkel around for a better visual popout effect. These lists we recommend to have 2-4 list items.


      ### List with checkmars


      We often use checkmark list when to highlight Unike selling points (USP) or when to compare different levels of products such as the care insurance different parts. 


      See exempel in the intro text and the table och the [car insurance product page](https://www.lansforsakringar.se/privat/forsakring/bilforsakring/).


      #### Modifier


      **Big Checkmarks**\

      In lf.se we have a modifier with big checkmarks and a cirkel around for a better visual popout effect. These lists we recommend to have 2-4 list items.


      ### Link lists


      Here can be a struggle sometimes. We have some easy rules to think about. 


      * Link list without icon

      * Link list with pdf icons

      * Link list with one external link


      #### Link list without icon


      A plain list with links is no problem. Just make a list with linkes and thats that.


      #### Link list with pdf icon


      When a list with pdf icons, the icons always should be on the left side. 


      #### Link list with one external link


      When a plain list with links and some are external links, the icon can be to the right. 


      ## Modifers all lists


      ### List spacing


      You can use two different types of spacing between lists. Vad är det för regler när de olika ska användas? //Lägg till


      Note that a link lists also have special rules on their spacing when placed vertically.


      ### To break down long sentences


      You should always strive for having short items in the lists but sometimes it is harder to do. Here are some help. 


      **Do sections instead**\

      Use a headline instead and break it out to different sections of text, it makes the readers identify the main points of each section and easier to grasp. To highlight and simulate dots you can always make a small graphical element to the right of the textarea.


      **Headings in list items**\

      You should always have short items in the list but sometimes it is harder to do. Make a headline short and pop out with bold text then make a new row in the dot item and put the longer sentence under. 


      ## Please consider


      * Try to have maximum one list a page

      * Only have 3-5 points in the list

      * Have similar line lengths

      * Use the same feel/spirit for list items

      * Don’t require end punctuation


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Typography/Lists)


      **External link:** <https://www.nngroup.com/articles/presenting-bulleted-lists/>
    name: Design
  - content: >-
      Lists in LFUI have the appearance listed below. Also provided (in addition
      to Bootstrap's list utility classes) are utility classes to alter the list
      appearance further.


      The default styling of `ol`  and `ul` is achieved by adding the corresponding class to the element at hand. This means if you're building an ul, also append the `ul` class to that element (and vice versa in the `ol` case).
    name: Code
backgroundColor: "#fff"
---
