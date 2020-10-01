---
template: ComponentPage
title: Card
intro: "The card component is used to inform users about related products or
  content. "
description: "The card component is used to inform users about related products
  or content. "
previewImage: /img/card.svg
category: Page content
tabs:
  - content: >-
      ## How to use


      Cards are used to promote something and consist of an image, a label, date stamp and some text. Cards are typically placed at the bottom of a page to displaying informational or promotional content to users.


      The card comes in several versions all featuring a prominent picture at the top followed by a heading and short text. They all feature a date stamp, but its placement varies between designs (in some implementations the date stamp is replaced by a label such as “Erbjudande” or “Just nu”, but they aren’t part of LFUI).


      ## Please consider


      Cards have historically been a part of page templates in both lansforsakringar.se and Mina sidor, but their future usage is under consideration as page templates are being redesigned so please check if the component still should be used before using it!


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Page Content/Card)
    name: Design
  - name: Code
    content: >-
      ## How to use


      It's not much to say about our Card component. It's built using Bootstrap's card component. Please see [Bootstrap card](https://getbootstrap.com/docs/4.0/components/card/) for full details on this use of the component. 


      You can basically put anything you want inside `.card-block`. We do have some classes to help you with the styling, `.card-title` will give you the heading look, you can use  `.card-text` if you don't want the text to fill the card's width( it has a max-width on it).  


      ```

      <article class="card">
        <img class="card-img-top" src="http://placehold.it/800x640/ffffff" alt="Card image cap">
        <div class="card-block">
          <h3 class="card-title"></h3>
          <p class="card-text"></p>
        </div>
        <div class="card-footer"></div>
      </article>

      ```


      There is a couple of helpers classes to keep in mind. If you have cards in a row and you want them to have equal height you can wrap them with `.card-deck` 


      ```

      <section class="card-deck">
        <article class="card">...</article>
        <article class="card">...</article>
        <article class="card">...</article>
      </section>

      ```


      Sometimes you want your Card to be a link that can be done jsut adding a link inside your card with the class `.link-complex`.


      ```

      <article class="card">
        <a href="#foo" class="link-complex">
          <div class="card-block"></div>
        </a>
      </article>

      ```
backgroundColor: "#f3f3f3"
---
