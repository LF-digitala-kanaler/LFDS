---
template: ComponentPage
title: Navbar
intro: The navbar is the foundation for the various menus used at
  Länsförsäkringar. As each channel/system has its own need from a menu it is
  however always modified for that environment.
description: The navbar is the foundation for the various menus used at Länsförsäkringar.
previewImage: /img/navbar.svg
category: Navigations
componentsNavigation:
  - name: Blue
  - name: White
tabs:
  - content: >-
      ## How to use


      The navbar differs from our other components in that it is a foundation to build on, rather than a set design. If you're designing on a system level and need a new menu, use the navbar as your starting point and then adapt it to what suits your environment.


      ### Variations


      We have two variations of our navbar; blue and white. Technically you could use any colour combination you want, but using other colours than blue and white should only be done as a last resort.


      #### Blue navbar


      The blue navbar should only be used for customer-facing systems/applications, and when in use it should be the main menu. 


      #### White navbar


      The white navbar is used as a secondary menu (like the "personal menu" on Mina Sidor) or in internal systems. This is the menu you should use in  mini-portals and campaigns.


      ### Modifiers


      A number of modifiers exist for the navbar, and  you can combine them freely with exception for direction (which for obvious reasons can only be one way). 


      #### Direction


      Your navbar can be either vertical or horizontal. Which one to choose depends on the rest of your layout and preferred behavior of your menu:


      * Horizontal: Good for either very small applications or large ones. Small  applications lets you click the link and you're there. In large application/sites the horizontal menu serves well as the basis for a mega menu (like on [lansforsakringar.se](https://www.lansforsakringar.se)).

        * **Modifier for horizontal navbars:** If you wish, you can add a logotype in the first part of the menu.
      * Vertical: Great for responsive views and for mid-sizes applications. It lets the users either find their way to a category page and navigate within the content or to dig deeper by clicking the chevron on the right hand side of the text. The vertical menu is always placed on the left hand side.


      #### Icons


      The menu items may have an icon in front of them. If you choose to use icons, have an icon in front of every item on that level.


      #### Size


      There are three sizes available for the navbar; standard, small and extra small. They can all be used, but recommended usage is as follows:


      * Normal size with horizontal direction

      * Small size with vertical direction

      * Extra small for pop-out menus


      ## Please consider


      * Menues should be visible by default in desktop views. If you wish to be able to hide them, make it a user-action.
    name: Design
  - content: >-
      ## How to use


      Navbars require a wrapping `.navbar` with optional classes for colour schema, directions and sizes.


      ```

      <nav class="navbar *"></nav>

      ```


      ### Variants


      There is two different colour schemas of the navbar **blue** and **white**. Without any modifier the blue colour schema will be used.


      To use the **white** variant add **.**`navbar-light` to `.navbar`

       

      ```

      <nav class="navbar navbar-light"></nav>

      ```




      #### Modifiers


      A number of modifiers exist for the navbar, and except for direction they are all on/off, meaning that you can combine them freely.


      ##### Direction


      By default navbar is horizontal. If you want it vertical instead use `.navbar-stacked. `


      ```

      <nav class="navbar navbar-light navbar-stacked"></nav>

      ```


      Vertical navbar also comes with support for a second level inside your navigation. Functionality for the button toggle **is not** part of LFUI, you have to build that yourself.


      ```

      <nav class="navbar navbar-light navbar-stacked">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#trolol">Home</a>
          </li>
          <li class="nav-item has-sub open">
            <a class="nav-link" href="#trolol">Features</a>
            <button type="button" role="button" class="navbar-toggle" aria-expanded="true"></button>
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#trolol">Home</a>
              </li>
              <li class="nav-item has-sub open">
                <a class="nav-link" href="#trolol">Features</a>
                <button type="button" role="button" class="navbar-toggle" aria-expanded="true"></button>
                <ul class="nav navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#trolol">Home</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#trolol">Pricing</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#trolol">Pricing</a>
          </li>
        </ul>
      </nav>

      ```


      ##### Size


      You have the option to change size of the navbar. LFUI comes with two modifiers to do so `.navbar-sm` and `.navbar-xs` Both will make the padding and font size smaller.


      ```

      <nav class="navbar navbar-light navbar-stacked navbar-sm"></nav>

      ```


      ##### Icons


      You have the option to use icons for each item in a navbar. Use any of the 32px Icons LFUI provide. If you are using a size modifier `.navbar-sm` or `.navbar-xs ` use a 20px icon instead.


      ```
       <nav class="navbar navbar-light navbar-stacked">
         <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#trolol">
              <svg class="navbar-icon" width="32" height="32">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-navigation-home-32"></use>
              </svg>
              Home
            </a>
          </li>
        </ul>
       </nav>
      ```


      ### Accessibility


      Make sure you include relevant accessibility markup. In order to have the buttons and links have the proper styling, add the `role="button` to the `.nav-toggle` and `.nav-link`-elements.


      *"When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers."*


      ### Please consider


      At the moment navbar is not adjusted to responsive design. That's something you have to build yourself. There is a couple of modifiers available in [Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) that can get you started.
    name: Code
backgroundColor: "#f3f3f3"
---
