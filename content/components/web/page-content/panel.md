---
template: ComponentPage
title: Panel
intro: Panels are our standard containers when we want to “box in” content. When
  panels are used the whole page is usually divided into different panels.
description: Panels are our standard containers when we want to “box in”
  content. When panels are used the whole page is usually divided into different
  panels.
previewImage: /img/panel.svg
category: Page Content
tabs:
  - content: >-
      ## How to use


      When panels are in use, a page is usually divided into several cards (without images), each with their own heading, with full width across the component on top of our gray background. These can contain anything, frequent examples include test, tables and forms.


      ### Versions


      Panels have two main versions; always open and collapsible/expandable. There are no set rules for when to use collapsed or expanded, but a rule of thumb is to have cards with prioritised information expanded by default and the ones with secondary information collapsed. 


      ### Modifiers


      Our panels have several modifiers, but only one which exists for both always open and collapsible/expandable panels, namely "load more". The "load more" is to be used when you have a panel with lots of possible data (like a transaction list), and it isn't feasible or desirable to show all data at once.


      **Modifiers for collapsible panels**


      Collapsible have a few additional modifiers:


      * Collapsible cards can be either collapsed or expanded by default. 

      * If a card fetches information from a backend system there is a version of the panel which has a *lazy load* function which allows for the data to first be fetched if/when a user expands that specific panel. Great for slow backend systems!


      ## Please consider


      * You always need to involve our art directors, but when designing a page with many panels that sweet sweet AD love is extra needed.

      * Panels are often used as a frame for [tables](tables).
    name: Design
  - content: >-
      ## How to use


      The Component name **Panel** is new to LFUI, it was previously a part of [Cards](https://lf-digitala-kanaler.github.io/LFUI/650/#/card). Since LFUI is built on top of Bootstrap all classes in this component still use class names from the card component. 


      There is two variations of Panel in LFUI, One that is always open and one that is collapsible.


      ###   Always open


      ```

      <article class="card">
        <h3 class="card-header">Some kewl section</h3>
        <div class="card-block">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor risus pellentesque eros scelerisque, et euismod lectus tempus. Maecenas at ornare magna. Sed vitae consequat risus. Cras ultrices nec magna in placerat.</p>
        </div>
      </article>

      ```


      ### Collapsible/expandable


      Collapsible (with its chevron and clickable space) is strictly only used along with this specific functionality; if you want a "static collapsible panel", use the default panel styling instead. Using the chevron and clickable surface when the component is never supposed to collapse is wrong.


      Since the collapse button does not have the `.btn`-class, make sure you add the `role="button"`-property to the element.


      ```

      <p class="text-sm mt-15 mb-05 text-muted">Expanded</p>

      <button class="collapse-toggle" role="button" type="button" aria-controls="collapsible1" data-toggle="collapse" data-target="#collapsible1" aria-expanded="true">
        Section heading
      </button>

      <article class="collapse show" id="collapsible1">
        <h1 class="sr-only">Insurances</h1>
        <div class="card mb-0">
          <div class="card-block">
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex diam, ultrices eu diam at, tristique mattis risus. Aenean tristique efficitur sem sed pulvinar. Morbi in felis ex.
            </p>
          </div>
        </div>
      </article>

      ```


      Collapsible uses Bootstrap Collapse functionality to handle the toggle, you can read more about how to use it [here](/components/web/supportive-microinteractions/collapse).
    name: Code
backgroundColor: "#f3f3f3"
---
