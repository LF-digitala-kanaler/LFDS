---
template: AccessibilityPage
category: Accessibility
previewImage: /img/accessibility_nobg.svg
title: Web accessibility guidelines
intro: Intro
description: Här går vi igenom punkt för punkt vad de betyder för
  Länsförsäkringar att följa checklistorna.
checklist:
  - title: tst
    section: Layout and images
    checklistList:
      - tags:
          - All roles
        title: 1.01 - Arrange content in a clear and meaningful hierarchy
        text: >-
          Think about how you can arrange content in a meaningful order, so that
          the user can easily follow the flow through the information. Avoid
          filling all available space. Unused space (white space) is important
          in order to not overwhelm the user with visuals and letting the eyes
          rest.



          Make sure there is a clear hierarchy and that elements do not compete for attention. By doing so, you help the user to be naturally drawn to important information and interactions.

          **Read more:**

          [Understanding Success Criterion 1.3.2: Meaningful Sequence](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)

          [Presentera innehållet i en meningsfull ordning för alla](https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/)
      - tags:
          - All roles
        title: 1.02 - Be consistent with navigation, structure and design
        text: >-
          Some users memorize the structure in order to understand the content
          and how the site functions. When content and functions are not
          consistent it can be difficult for the user to interpret the content
          and navigate the site. Therefore, follow a common site structure for
          all pages. Not all pages need to look exactly the same but they should
          follow the same general structure. 


          Functions should be performed the same way regardless of where on the website the user is located. The same rule of consistency applies to names and appearance of functions. For example, a button called “approve” should not be called “OK” on a different page. A “save” icon should have the same appearance everywhere.


          **Read more:**

          [Understanding Success Criterion 3.2.3: Consistent Navigation](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

          [Presentera innehållet i en meningsfull ordning för alla](https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/)
      - tags:
          - All roles
        title: 1.03 - Present content correctly regardless of screen orientation
        text: >-
          ### For designers 


          Not all people have the ability or possibility to rotate the screen. Some have to choose between portrait or landscape and stick with it, for example when the screen is mounted on a wheelchair. Therefore, design content and functions that are accessible regardless of screen orientation. The user should be able to choose orientation after personal preference.


          ### For testers


          * Test the reading order of the page by going through it on different screen sizes.

          * Also test it with a screen reader, for example VoiceOver on an iPhone.

          * Make sure to test the flow of the page in other documents (pdf, word, etc.). See also section 2.15.




          **Read more:** \

          [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)\

          [Se till att allt innehåll presenteras rätt oavsett skärmens riktning](https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/#utdrag-fran-wcag-standarden)
      - tags:
          - All roles
        title: 1.04 - All important information should be available to all users
        text: >-
          Hiding important information in PDFs decreases searchability and makes
          it harder for the user to get an overview of the content. Find a
          balance between presenting information on the web versus keeping it in
          downloadable documents.


          As much as possible, critical information should be available on the web. Make sure to divide the content into relevant pages so you avoid walls of texts.
      - tags:
          - All roles
        title: 1.05 - Create a flexible layout that works when enlarged or viewed on a
          small screen
        text: >-
          A screen or a window should be able to present a page at 320 pixels
          width without side-scrolling.


          * Use primarily responsive design 

          * When creating responsive design is not possible, create a custom mobile version. 

          * PDF:s and other downloadables  should work the same way.


          **Read more:**\

          [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)\

          [Var konsekvent i navigation, struktur och utformning](https://webbriktlinjer.se/riktlinjer/29-var-konsekvent-i-navigation-struktur-och-utformning/)
      - tags:
          - All roles
        title: "1.06 - Offer multiple ways to contact "
        text: >-
          Not all people are able or willing to call a company for help. Some
          may have trouble communicating in writing. Reasons for this can range
          from a physical or cognitive disability to simply being unfamiliar 
          with the language. Give people the option to choose a method they are
          comfortable with. Avoid only having a phone number. Always provide a
          phone number and an email address whenever possible.


          In some cases you may only be able to provide one option. In that case, think about how you can reduce the need for contact. One solution could be answering the most common questions in a “frequently asked questions” section.
      - tags:
          - All roles
        title: "1.07 - The design should pass contrast 5:1 "
        text: >-
          Contrast varies depending on the size of text and icons. Create
          designs the user can zoom in on, in order to see better. Components
          and text should pass a contrast ratio of 5:1 and you can test this
          with automatic tests. Yes, the WCAG 2.1 recommendation is a ratio of
          minimum of 4.5:1, but we’ve rounded it up. It’s easier to remember and
          gives us a little extra margin.


          You can check contrast on a page here: [Contrast Checker](https://webaim.org/resources/contrastchecker/)


          Try passing the contrast level by a good margin. The components in our library should follow these recommendations. If you find a component that isn’t up to standard, contact us.


          There are cases where a component could have a contrast above 5:1 but still be illegible or difficult to interpret. Therefore don’t assume automatic tests are 100% correct, use your own judgement.


          **Read more:**


          [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
      - tags:
          - All roles
        title: "1.08 - Be careful with strong colors, use the red sparingly "
        text: Colors are great for improving usability and aesthetics. Be aware though
          that using strong colors too frequently can steal focus from the most
          important information and interactions. Use our red color (#E30613)
          sparingly, for example when you need a “call-to-action” button.
      - tags:
          - All roles
        title: 1.09 - Allow for popup-functionality to be used by all users
        text: >-
          Content that appears when the user focuses on it with the keyboard or
          mouse should be accessible and controllable for all users. This
          includes users that zoom in on a page or take their time to get to the
          content. It is especially important that users are able to close or
          remove the pop-up content.


          Examples of such content can be sub-menus, tool-tips or non-modal pop-ups. 


          **Read more:** 


          [Understanding Success Criterion 1.4.13: Content on Hover or Focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)\

          [Popup-funktioner ska kunna hanteras och stängas av alla](https://webbriktlinjer.se/riktlinjer/158-popup-funktioner-ska-kunna-hanteras-och-stangas-av-alla/)
      - tags:
          - All roles
        title: 1.10 - Help the user in searches
        text: >-
          Support the user in searching on our website by proactively providing
          search word suggestions. This results in better search hits and makes
          it easier for users with writing or typing difficulties. It also saves
          time and simplifies the process for all other users.


          For performance and efficiency reasons, wait until the user enters two characters in the search field before presenting suggestions.


          **Read more:**\

          [Understanding Success Criterion 3.3.3: Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)\

          [Ge ordförslag vid sökning och inmatning](https://webbriktlinjer.se/riktlinjer/112-ordforslag/)
      - tags:
          - All roles
        title: 1.11 - Avoid placing text in images
        text: >-
          You should generally avoid placing text in images as screen readers
          cannot read text on images. If you do have text in an image and the
          text is highly relevant to the user, make sure the text is included in
          the alt-text.


          **Read more:**\

          [Understanding Success Criterion 1.4.5: Images of Text](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html)\

          [Använd text, inte bilder, för att visa text](https://webbriktlinjer.se/riktlinjer/128-anvand-text-inte-bilder-for-att-visa-text/)
      - tags:
          - All roles
        title: 1.12 - Use “alt-text” on images containing important information
        text: >-
          Images included in the design for more than just decoration (graphs or
          diagrams) need to have an alternative-text. The user should be able to
          understand what the image conveys even if the image is not visible
          because of a bad connection, the image link is broken or the user is
          using a screen reader.\

          \

          One good way of doing this is describing the image the same way you would do it in a phone conversation.


          If a CMS system is being used, make it easier for the editors by making the alt-text field  mandatory.


          **Read more:** \

          [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
      - tags:
          - All roles
        title: 1.13 - Decorative images do not need an “alt-text”
        text: >-
          Decorative images don’t need an alternative text because they don’t
          communicate important information to the user. However, an empty
          alt-tag is still needed in order for the page to validate.  


          **Read more:**\

          [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)
      - tags:
          - All roles
        title: 1.14 - If the image is linked, describe the destination as “alt-text”
        text: >-
          If the image or icon is linked, add a description of the destination
          as an alt-text. The description should be short and clearly
          communicate where the user will be taken. 


          **Read more:**\

          [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
      - tags:
          - All roles
        title: 1.15 - Let the user navigate in the way they are most comfortable with
        text: >-
          People prefer to navigate the web differently, based on either
          personal preference or disability. Therefore, we offer several ways to
          navigate our website.


          Consider user needs and the complexity of the site when choosing ways to navigate.


          Possible functions could be a search function, main menu, in-page navigation, support for tab navigation or traversing through links. 


          Focus on helping the user to their goal. For example, when a user uses the search bar, help the user get to the results quicker by skipping the menu.


          Some navigation aids use only links or headlines to navigate.


          **Read more:**\

          [Understanding Success Criterion 2.4.5: Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways)\

          [Erbjud användarna flera olika sätt att navigera](https://webbriktlinjer.se/riktlinjer/32-erbjud-besokaren-alternativa-orienteringsstod/)
      - tags:
          - All roles
        title: 1.16 - Use sufficient contrast in components and graphics
        text: >-
          Make sure components in the interface and infographics have sufficient
          contrast. Use good contrast for informative parts of illustrations and
          other graphic content, as long as it’s possible.


          The contrast ratio for components and graphics should be at least 3:1.


          Check contrast here: [Contrast Checker](https://webaim.org/resources/contrastchecker/)


          **Read more:**\

          [Understanding Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)\

          [Använd tillräckliga kontraster i komponenter och grafik](https://webbriktlinjer.se/riktlinjer/156-anvand-tillrackliga-kontraster-i-komponenter-och-grafik/)
      - tags:
          - All roles
        title: 1.17 - Highlight the field or element in focus
        text: >-
          Users that navigate with the tab-key need to clearly see which element
          is in focus by seeing a surrounding border. The standard border is
          often a thin, dashed line that can be difficult to discern, especially
          if the surroundings are busy or the contrast between elements is low.


          Make the border clearly visible by using a CSS-rule.


          **Read more:**\

          [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)\

          [Markera tydligt vilket fält eller element som är i fokus](https://webbriktlinjer.se/riktlinjer/140-markera-element-i-fokus/)
      - tags:
          - All roles
        title: 1.18 - Avoid sudden changes when focusing on elements
        text: >-
          To the extent it is possible, make interactions predictable and avoid
          introducing new fields or interactions when the user focuses or
          interacts with an element. 


          You can also prepare the user for the change by using copy or icons. For example, a link to an external site should have an icon that signals that the site will be opened in a new tab.


          Sometimes you may need to include a sudden change in focus. An example of this could be when a user answers a question in a form, and you need a  contextual, follow-up question to


          appear. In that case, make sure the user takes notice of the change by having the new question appear in close proximity and directly after the previous question.


          **Read more:**\

          [Understanding Success Criterion 3.2.1: On Focus](https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html)\

          [Utför inga oväntade förändringar vid fokusering](https://webbriktlinjer.se/riktlinjer/143-utfor-inga-ovantade-forandringar-vid-fokusering/)
      - tags:
          - All roles
        title: 1.19 - Offer alternatives to more complex gestures
        text: >-
          Swiping and gestures that require use of multiple fingers (such as
          pinching) can be difficult to perform for people with reduced motor or
          cognitive function. Some users may also be unable to perform them
          because of the navigation aids they’re using or simply because the
          interactions aren’t immediately obvious. Avoid therefore having
          complex gestures as the primary or most discoverable way to perform
          crucial tasks. This includes tasks like paying bills, transferring
          money or cancelling a debit card. They should be doable with simpler,
          easy to discover interactions, such as single tap, double tap or
          press.


          **Read more:**\

          [Understanding Success Criterion 2.5.1: Pointer Gestures](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html)
      - tags:
          - All roles
        title: 1.20 - Make tables easy to understand and navigate
        text: >-
          **Tables can be tricky to read, especially for users with screen
          readers. Let the html-code define the different parts of a table and
          how they are connected. For example, use th-elements to define which
          cells are rows and which are columns.**


          The attribute “scope” on a th-element creates a connection between header cells and data cells.This enables the screen reader to read the associated header before the content in a data cell. Doing so relieves  the user from having to remember the table structure. This is especially important for tables with many columns or with several header levels. \

          \

          **Read more:** \

          [H51: Using table markup to present tabular information](https://www.w3.org/TR/WCAG20-TECHS/H51.html)\

          [Creating Accessible Tables](https://webaim.org/techniques/tables/data)  \

          [Tips and Tricks • Tables • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/tips/)\

          [Skriv rubriker till tabeller](https://webbriktlinjer.se/riktlinjer/98-anvand-tabellrubriker-for-att-hjalpa-anvandaren/)
      - tags:
          - All roles
        title: 1.21 - Explain icons
        text: >-
          When icons are used to represent buttons, they should be accompanied
          by explanatory text. The exceptions to the rule are icons of the
          universal kind, (think “go back” arrow).


          **Read more:**\

          [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
  - section: Copy and content
    checklistList:
      - tags:
          - All roles
          - Developer
        title: 2.01 - Write simple, short and clear copy
        text: >-
          Copy should be written in a simple, short and clear manner. All users
          should be able to understand it, so make sure to check the readability
          of the text. Complement the text with appropriate images.


          You can also create checklists, bullet points or tables to break up and organize the text.\

          Use quotes and subheaders to keep the user interested.
      - tags:
          - All roles
          - Tester
        title: 2.02 - Left-align body text
        text: >-
          To increase readability, body text should always be left-aligned.
          Avoid hyphenating words, except for extremely long words that may
          cause awkward line breaks. The exception to the rule is of course
          languages where the reading order is the right to left.


          Left-align also the text in main menus and other vertical menus. It will make it easier for the user to browse the menu items, since the user’s eyes can wander along the left edge of the menu.
---


* [Layout och bilder](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#layout-och-bilder)
* [Text/innehåll](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#textinnehåll)
* [Klickbara ytor - knappar och länkar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#klickbara-ytor---knappar-och-länkar)
* [Formulär](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#formulär)
* [Video & animering](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#video--animering)
* [Listor](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#listor)
* [Kod & script](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#kod--script)
* [Appar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#appar)

