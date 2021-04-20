---
template: ComponentPage
title: Specific use text styles
intro: Our forms and tables make use of special text styling, intended for use
  only in that context. This page describes those.
description: "Our forms and tables make use of special text styling, intended
  for use only in that context. "
category: Text
backgroundColor: "#f3f3f3"
tabs:
  - name: Design
    content: >-
      ## How to use


      This chapter describes text styles with specific use cases, such as in forms and tables. Below is which you can see the different types of text styles used in forms and the relation to each other and other form elements.


      <figure class="Image Image__border "><img src="/img/specific-use-text-styles.png" srcset="/img/specific-use-text-styles.png 2x" alt="Image exemplifying different text styles used in forms and how they relate to each other"><figcaption><div class="Image__caption">Different text styles used in forms and how they relate to each other</div></figcaption></figure>


      ### Labels


      Labels can be used in [tables](./page-content/tables) as well as [forms](./forms). In tables they are used as a headings for columns, and in forms they help help the user know what to enter in the adjacent form element (please see [form element grouping ](/patterns/form-patterns/form-element-grouping)for a thorough explanation). Labels should not be used for anything except this.


      Labels are written in Intro Cond bold, 16px and colour #222222. 


      <div class="Callout"><strong class="Callout__title">Sentence-long questions </strong><p class="Callout__text">In some forms (like KYC and "Hälsodeklaration") we need to ask questions in sentence form rather than short and snappy labels. In those cases the boldness of the labels might reduce readability over time, so we recommend using Arial 16 px normal weight in those cases instead.</p></div>


      ### Input description/helptext


      At times you might want to give some context to the expected input or provide information on GDPR-compliance of the data provided by the user. Then input description/helptext/meta (same thing, many names) is your friend - read more about how to use it in 


      Beskrivning av vad användaren förväntas fylla i textfältet skriver du i anslutning till fältet eller komponenten. Ska var max 1 till 2 rader i desktop och mobil. Behöver du mer text kan du använda dig av några olika metoder som finns beskrivna under [General Patterns Read more](../patterns/general-patterns/read-more)  


      Hjälptexter är lite Arial i 14px och grå #747578. Kan även kallas meta.


      Förklarande texter kan även finnas ovanför ett formulär men då använder vi vanlig brödtext.


      ### Hjälptexter i inputfält


      Även kallad goast text, är i Arial 16 px grå #8B8B8B. Bra exempel på hjälptext i fält är tex. ABC123 eller ååååmmdd-nnnn, en snabb input i vad vi tänker oss var data och antal tecken direkt i fältet. Texten försvinner när man börjar mata in text i fältet.


      ### Felmeddelanden


      Felmeddelanden under formulärs delar använder vi röda texter i Intro Cond Bold 14 px i LF röd #E30613.


      ## Other material


      **Sketch file:** 


      LFUXAD Assets/LFUI Commons.sketch (Input/Label Style, Input/Error Style, Meta)
---
