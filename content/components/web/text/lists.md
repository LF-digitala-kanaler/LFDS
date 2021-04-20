---
template: ComponentPage
title: Lists
intro: Lists can be used to make information stand out in contrast to a text
  block or to group similar information in an accessible way. Depending on use
  case we have different stylings.
description: "Lists can be used to make information stand out in contrast to a
  text block or to group similar information in an accessible way. "
previewImage: /img/lists.svg
category: Text
componentsNavigation:
  - name: Bullets
  - name: Checkmarks
  - name: Numbers
  - name: Link Lists
backgroundColor: "#fff"
tabs:
  - content: >-
      ## How to use


      Users prefer copy formatted for ease of scanning, which allows them to easily skip through chunks of text to get to areas of interest. List elements helps to break up large blocks of text, make complex articles and product information easier to grasp, and make key information stand out. 


      However, a page which is filled with bullet lists becomes difficult to read as well. For that reason we recommend that you only use one bullet list per page, and a have a rule of no more than one bullet list per section. For optimal reading experience, a bullet list should contain 3-5 items.


      As you probably know, we generally recommend putting links after a text block (otherwise, [read this section](body-text#links-in-body-text)). However, when it comes to a list having the link after the text block would actually make it more difficult to identify what the link relates to. Thus, we recommend to phrase the list item in such a way that the link naturally can be placed at the end of the text but still inline with the text *(if you want to put one link to summarise the whole list, the normal recommendation of putting the link after the the textblock applies).*


      ### Variations


      We offer a variety of stylings for different use contexts as well as specific way of handling lists which only include links:


      * Bullet list

      * List with checkmarks as bullets

      * Numbered list

      * Link list


      <div class="Callout"><strong class="Callout__title">Special variation on lansforsakringar.se </strong><p class="Callout__text">An additional variation exists locally on lansforsakringar.se, which isn't a part of LFUI/LFDS. This variation can be used with either numbering or checkmarks, and features a bigger than normal list item (number or checkmark) within a circle. These go great with 3-4 lines of text and are recommended for 2-4 items.</p></div>


      #### Bullet list


      Bulleted lists attract attention, support scanning, shorten text, and reveal the relationship of items. Our bullet list are a styling of the standard html-tag ul. The first level is a red and filled circle, the second is red and outlined whereas the third is square and blue. In customer facing lists you should never go as the third level.


      #### List with checkmarks as bullets


      In some cases you might want to change the neutral feeling of a dot/circle to a more positively loaded bullet - in that case we have just the thing for you! Checkmarks as bullets. Just beware - they do not have any sublevels designed and just use the sublevels of a standard bullet list.


      ##### Specific Modifier


      So, just having checkmarks isn't enough? Well, you're in luck - we offer them in four colours:


      * Black (default)

      * Green

      * Blue

      * Orange


      #### Numbered lists


      Numbered lists are usually reserved for instances in which the items must occur in a specific order, such as steps in a procedure, or when keeping count is important, such as a top 5 list. Use numbered lists only when the sequence or count of items are important.


      #### Link list


      If we have several links which we want to group together, they are placed in a link list. The link list exist in two versions:


      * Without icons - for links within the system. Make the full text of the bullet a link, and keep the text short! If you have an [external link](../button-and-links/links#external-links) in such a list, the external link-icon should be to the right of the link.

      * With icons - for lists with documents. The icons identify which kind of file or link it is. A typical example is when we want to present terms and "förköpsinformation" in a purchase flow. If this version is used all links should have an icon.

        * An exception to the normal way of handling [external links](../button-and-links/links#external-links) is when they are in a link list with icons. As the other links have icons in front of them, the external links also have the icon in front of the text to create a more coherent visual experience.

      The above holds even in cases where the lists aren't proper lists (according to normal spoken language), but are just one line with link text coded as a "list". See [links](../button-and-links/links)-page for more on this.



      ### General modifiers


      If you should want to add extra spacing to your lists for some reasons, two additional spacings come with Bootstrap; medium (md) and large (lg). They are rarely, if ever, used in customer facing interfaces.


      ## Please consider


      * Try to have maximum one list per page

      * Only have 3-5 points in the list

      * Have similar lengths for all list items

      * Use the same tonality for all list items

      * If all of your bullets are only one sentence long, it actually increases readability to skip punctuation at the end of the sentence


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Typography/Lists)


      **External link:** <https://www.nngroup.com/articles/presenting-bulleted-lists/>
    name: Design
  - name: Copy
    content: >-
      ### To break down long sentences


      You should always strive for having short items in the lists but sometimes it is harder to do. Here are some help. 


      **Do sections instead**\

      Use a headline instead and break it out to different sections of text, it makes the readers identify the main points of each section and easier to grasp. To highlight and simulate dots you can always make a small graphical element to the right of the textarea.
  - content: >-
      ## How to use


      Lists in LFUI have the appearance listed below. Also provided (in addition to Bootstrap's list utility classes) are utility classes to alter the list appearance further.


      The default styling of `ol`  and `ul` is achieved by adding the corresponding class to the element at hand. This means if you're building an ul, also append the `ul` class to that element (and vice versa in the `ol` case).


      ### Modifiers


      You can use the classes `list-md` or `list-lg` to increase the distance between the list items in the ol and ul's.
    name: Code
---
