---
template: ComponentPage
title: Tabs
intro: Tabs are used as contextual navigation when the user has landed on a page
  which hasn't any submenues in the main navigation. We have two main variations
  of tabs; page-level navigation and in-page navigation.
description: Tabs are used as contextual navigation when the user has landed on
  a page which hasn't any submenues in the main navigation.
previewImage: /img/nav.svg
category: Navigations
componentsNavigation:
  - name: Page level navigation
  - name: In page navigation
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Tabs should be used for navigation inside a page. This means that tabs are the most local way of navigating, and should only be used for when it doesn't make sense to divide the content into several pages/views. Tabs are primarily used in "closed environments" such as Mina Sidor and internal systems. Good examples of tab use include settings-pages and navigation within one instance of a product of which a customer may have many (such as occupational pension).


      Changing a tab should affect everything below it within the container/page and nothing above it.


      ### Variations


      We have two main variations of tabs;


      * **Page-level navigation** are tabs which control the whole page.

      * **In-page navigation** are tabs which only control the container they are in.


      #### Page-level navigation


      These tabs should be as high-up on a page as possible - normally the only thing above them are [breadcrumbs](breadcrumb). Their most common usage is in Mina Sidor to display a low-level navigation between related pages built on IM-technology. More modern NIM-based pages usually use a series of [collapsed panels](../page-content/panel) rather than tabs.


      #### In-page navigation


      If you want to add navigation inside a page which only affects parts of the content you should in-page navigational tabs. In-page navigational tabs work great if you have some general information you want to display the whole time, but then have so much or different information that it doesn't fit on a page.


      A great example is if you enter a specific occupational pension in Mina Sidor; the value is displayed prominently and then there are in-page navigational tabs separating the savings-related parts and insurance-related parts into different views.


      <div class="Callout"><strong class="Callout__title">A third variation is coming! </strong><p class="Callout__text">We are currently designing a third variation, for when you want to do even more local adaptations - like changing the style of a graph or what to display in said graph.</p></div>


      ### Modifiers


      There are two modifiers for tabs, and they both work with all types of tabs. 


      #### Styling based on background


      All tabs come in a version for white background and a version for grey background. Choose the right one for your background.


      #### Responsive sidescroll


      If you want you can add some responsiveness to your tabs. With this modifier activated the user will be able to sidescroll between the tabs if they don't fit on one row. Otherwise the tabs will flow over several rows. 


      *Note: it has been suggested to make responsive sidescroll a standard feature of the component, meaning that it will be always on.*


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Navigations/Tabs)
    name: Design
  - content: >-
      ## How to use


      Classes are used throughout, so your markup can be super flexible. Use `<ul>`'s like above, or roll your own with say a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.


      The nav has not been altered in any way that affects implementation or semantics, please see [Bootstrap nav](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior).


      ## Variations


      The LFUI navs come in two different variants, mainly dependant on which background colour they are to be placed upon, the number of tabs expected to be present and if the tabs have more than one level of navigation.


      ### Page-level navigation


      Page-level tabs dosen't make use of the tabbed region In-page tabs does. It's basically a common navigation used when fetching content dynamically inside your app. 


      ```

      <nav role="navigation">
        <ul class="nav nav-page" id="navPage">
          <li class="nav-item">
            <a class="nav-link active" href="#">Fondförvaltning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Traditionell förvaltning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Försäkringsskydd</a>
          </li>
        </ul>
      </nav>

      ```


      You can use the built in `data-toggle="tab"` on each `.nav-link` to activate the tab.


      ```

      <nav role="navigation">
        <ul class="nav nav-page" id="navPage">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#">Fondförvaltning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#">Traditionell förvaltning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#">Försäkringsskydd</a>
          </li>
        </ul>
      </nav>

      ```


      ### In-page navigation


      In-page navigation is our "normal" tab component. It uses Bootstrap's tab JavaScript plugin to create tabbable regions. 


      ```

      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#tab1a" role="tab">Tabby</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tab2a" role="tab">Tubby</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#tab3a" role="tab">Trip</a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active" id="tab1a" role="tabpanel"></div>
        <div class="tab-pane" id="tab2a" role="tabpanel"></div>
        <div class="tab-pane" id="tab3a" role="tabpanel"></div>
      </div>

      ```


      Make sure the href of  `.nav-link` and id of the `.tab-pane` match and use `data-toggle="tab"` to activate the navigation tab. 


      There is a couple of classes you can add to `.nav` that modify the tab design: 


      * .nav-small - less x and y tab padding 

      * .nav-tight - less x tab padding 

      * .nav-tabs-gray - for use on white background




      ## Accessibility


      If you’re using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.


      Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. ([soruce](https://getbootstrap.com/docs/4.0/components/navs/#regarding-accessibility))
    name: Code
---
