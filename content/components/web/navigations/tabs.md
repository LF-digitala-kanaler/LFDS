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
  - name: Line tabs
  - name: Contained tabs
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
    name: Design
  - content: >-
      ## How to use

      Please see [Bootstrap Navs and tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/) for instructions.

      ### Variations

      We offer three varieties: standard tabs (`.nav-tabs`), line tabs (`.nav-lines`) and sub nav (`.nav-sub`). line tabs and sub nav are custom and not part of Bootstrap.

      ### Setting theme

      Themes are used to modify Nav styles for a desired background color. See how the hover color for Line Tabs changes from white to blue on a white background.


      The theme is best applied to a containing element – likely the same element that applies the background color – with the `data-bs-theme="on-gray"` class. Tabs currently support `on-gray` and `on-white`.


      ```

      <div class="bg-body-bg" data-bs-theme="on-gray">
        <div class="nav-tabs">…</div>
      </div>

      ```


      ### Accessibility


      If using a nav bar, add a `role="navigation"` to the most logical parent container of the `<ul>` or wrap a `<nav>` element around the navigation. Don't add the role to the `<ul>` as this will prevent it from being announced as a list by assistive technologies.


      Note that navigation bars - even if styled as tabs with the `.nav-tabs` class - should not have `role="tablist"`, `role="tab"`, or `role="tabpanel"` attributes. See ([this soruce](https://getbootstrap.com/docs/5.3/components/navs-tabs/#regarding-accessibility)) for more information.
    name: Code
---
