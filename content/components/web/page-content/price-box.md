---
template: ComponentPage
title: Price box
intro: The Price-box component displays the price/cost in flows where the user
  can purchase/sign-up for something. The price is updated as the user makes
  various choices in the main flow.
description: The Price-box component displays the price/cost in flows where the
  user can purchase/sign-up for something.
previewImage: /img/price-box.svg
category: Page content
componentsNavigation:
  - name: Desktop
  - name: Responsive
tabs:
  - content: >-
      ## How to use


      The pricebox changes placement between desktop and mobile views.


      In **desktop** it is shown at the top of the right column, and sticks to the top of the screen as the user scrolls down (except in Mina sidor). The price is shown prominently (either as a one-time price or monthly/yearly depending on the price model). A wave pattern separates the overall price from a breakdown of what influences the price; examples of such includes selected add-ons and discounts. Optionally a grey information box can be added at the bottom to inform the user of possibilities for more discounts if they have more products with us.


      In **mobile/tablet** the price box is displayed at the bottom of the screen (as there is no column to the right). In its default view the price box is compressed and only the price is shown. If the user clicks on the price box it expands and the more detailed price information is shown below a wavy pattern (the same information as in desktop).


      If there is a discount (there usually is) there is a sub-component to highlight the discount. It is based on our alerts, but spans several lines and includes an animated checkbox.


      ## Please consider


      * The price box is only to be used in flows where the user/customer is signing up for/purchasing a service.

      * In desktop: The price box should always be visible for the user, and thus is sticky to the top when the user starts scrolling. This means that you need to try to keep the right column short to avoid that the price box is pushed out of the screen when the right column hits the bottom.

      * Accesibility-wise it is important that pricebox is before the primary button in the main flow so that people who use screen readers get access to the information.

      * As price box, [value box ](value-box)and [callout](callout) all are various ways of highlighting information you should avoid mixing them in one view.
    name: Design
  - content: >-
      ## How to use


      The Price-box component is used in forms, usually as (or inside of) a sidebar which lets the user keep track of the price/cost of the service as he/she makes changes in the form.


      The component has some fixed classes in order to style the upper part (`.price-box-header`) of the component correctly.


      The lower part (`.price-box-content`) contains a listing of all the factors that affect the price itself, which vary a great deal between forms. Feel free to use different types of LFUI components freely here depending on the form related to the price-box in question.


      <div class="Callout"><strong class="Callout__title">Accesibility </strong><p class="Callout__text">It is important that pricebox is codewise placed before the primary button (= submit) of the main flow so that people who use screen readers get access to the information if they are tabbing through the page.</p></div>


      ### Variations


      The price box (desktop variant) is *not* suitable for smaller views. Because of this there is two different variation you will have to show/hide depending on the screen width(screen width less than 768px show responsive variation).


      #### Responsive

      In smaller devices we use a `position: fixed`-oriented, collapsible price box instead to save space but still keep the easily overviewed component close at hand for the user. The `.price-box-bottom` is positioned in the bottom of the window **so that only the header is visible**, and on click it toggles upwards, showing the main content.

      #### Getting it interactive

      We don't provide any specific Javascript for toggeling the responsive version, instead, we rely on the Bootstrap ´data-bs-toggle="collapse"´. Please see the example implementations.

    name: Code
backgroundColor: '#f3f3f3'
---
