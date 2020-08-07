---
template: ComponentPage
title: Collapse
intro: Lets the user expand the current page and displays examples or a longer
  explanation which support the user in performing their task. This is the most
  common way of showing Read more in relation to forms.
description: Lets the user expand the current page and displays examples or a
  longer explanation which support the user in performing their task.
previewImage: /img/collapse.svg
category: Supportive Microinteractions
componentsNavigation:
  - name: White
  - name: Gray
tabs:
  - content: >-
      ## How to use


      The collapse-components' standard placement is below a text block or input field. Clicking on it gives the user a more detailed/thorough explanation of the content in the text block or help with what to enter (form).


      There are two visual variants of the component; one which expands with white background and one which expands with a grey background. Your context decides which one to use.


      Keep in mind how a collapsible panel affects page layout: it pushes everything below it downward. This might lead to awkward "flow" on a page, especially forms.


      ## Please consider


      It is important not to over-use this functionality. Information not crucial to the view should be weighted if it is relevant to print out at all. If information is considered crucial, it should not be hidden and require an action (collapse) to begin with. But take into consideration which channel you’re in as well:


      * If you are on lansforsakringar.se without having logged in, a new page with editorial text is often a good option if you can’t keep it short and snappy. 

      * If you’re logged in or in the process of buying something you want to keep the user in the main flow which leads to longer texts in collapsible mode being acceptable (but still not preferred). Please consider [modals](modal) as an alternative if the text can’t be kept short.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Supportive Microinteractions/Collapse)
    name: Design
  - content: >-
      ## How to use


      Collapse uses the built in collapse functionality from Bootstrap. You can use a link with the `href` attribute, or a button with the `data-target` attribute. In both cases, the `data-toggle="collapse"` is required.


      Your hidden container will need an ID that matches that `that-target` or `href,`


      ### Variants 


      There is 2 different versions of collapse, one where the expanded area have a white background and one with grey background.


      White is the default. To add a grey background, add `.bg-body-bg` to your collapse target like this:


      ```

      <button type="button" id="collapse" data-toggle="collapse" href="#collapse" aria-expanded="false" aria-controls="collapseExample">Läs mer</button>

      <div class="collapse bg-body-bg" id="collapse"></div>

      ```


      ## Accessibility


      Be sure to add `aria-expanded` to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. 


      If you’ve set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element’s HTML element is not a button (e.g., an `<a>`or `<div>`), the attribute `role="button"` should be added to the element.


      If your control element is targeting a single collapsible element – i.e. the `data-target` attribute is pointing to an `id` selector – you should add the `aria-controls` attribute to the control element, containing the `id` of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself. *(source: [bootstrap](https://getbootstrap.com/docs/4.0/components/collapse/#accessibility))*
    name: Code
  - content: >-
      ## Så skriver vi


      Skriv inte "Läs mer".


      Beskriv gärna vad det är som finns i innehållet, både ur ett SEO- och tillgänglighetsperspektiv. 


      Skriv hellre: "Mer om helförsäkringen"
    name: Copy
backgroundColor: "#fff"
---
