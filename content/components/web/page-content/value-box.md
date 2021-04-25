---
template: ComponentPage
title: Value box
intro: The value box is intended to draw the users attention and give an
  overview of the total value of the related content at a glance. It is
  primarily used in Mina sidor to display value of total/specific content.
description: The value box is intended to draw the users attention and give an
  overview of the total value of the related content at a glance.
previewImage: /img/value-box.svg
category: Page content
tabs:
  - content: >-
      ## How to use


      The value box summarises what is shown in more detail on the rest of the page, and should be placed high in the visual hierarchy. If you want to you may use several value boxes on one page, but then they should be visually grouped with each other (for a live example, look at a specific pension in Mina sidor).


      ### Modifier


      You can choose to add an expandable header to include a short description of the content, if solely the header isn't enough. If you can’t keep it short the value probably shouldn’t be summarised in a value box to start with.


      ## Please consider


      As [price box](price-box), value box and [callout](callout) all are various ways of highlighting information you should avoid mixing them in one view.
    name: Design
  - content: >-
      ## How to use


      The value box is intended to draw the users attention and for them to at-a-glance see the total value of the related content. 


      ```

      <div class="value-box mb-1">
        <div class="value-box-heading">Spending account</div>
        <svg class="h1 value-box-text" fill="currentColor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            30 470 kr
          </text>
        </svg>
      </div>

      ```


      Text in  value box should resize to fit it's parent. That's not included in LFUI but an implementation could look like this:


      ```

      for (const el of document.querySelectorAll('.value-box-text')) {
        const text = svg.firstElementChild;
        const width = text.getBBox().width || text.getComputedTextLength();
        const height = 18;
        el.setAttribute('viewBox', `0 0 ${ width } ${ height }`);
      }

      ```


      There is also a possibility to add a value description in combination with the [collapse](/components/web/supportive-microinteractions/collapse) component.


      ```
       <div class="value-box">
        <button class="value-box-heading collapsed" type="button" data-target="#value-box-info" aria-controls="value-box-info" data-toggle="collapse" aria-expanded="false">
          Account summary<span class="value-box-toggle"></span>
        </button>
        <div class="value-box-collapse collapse" id="value-box-info" aria-expanded="false">
          <div class="value-box-body">
            Forage pitchfork mumblecore, post-ironic bushwick banh mi ramps cronut. Meggings locavore banjo aesthetic, blue bottle you probably haven't heard of them cronut ethical +1 marfa 90's raw denim yuccie occupy DIY.
          </div>
        </div>
        <svg class="h1 value-box-text" fill="currentColor">
          <text x="50%" y="16" font-size="16" style="text-anchor: middle">
            30 470 kr
          </text>
        </svg>
      </div>

      ```
    name: Code
backgroundColor: '#fff'
---
