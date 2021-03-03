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
      - title: 1.01 - Arrange content in a clear and meaningful hierarchy
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
        tags: 
          Developers
      - title: 1.02 - Be consistent with navigation, structure and design
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
      
      - title: 1.03 - Present content correctly regardless of screen orientation
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
      
      - title: 1.04 - All important information should be available to all users
        text: >-
          Hiding important information in PDFs decreases searchability and makes
          it harder for the user to get an overview of the content. Find a
          balance between presenting information on the web versus keeping it in
          downloadable documents.


          As much as possible, critical information should be available on the web. Make sure to divide the content into relevant pages so you avoid walls of texts.
      
      - title: 1.05 - Create a flexible layout that works when enlarged or viewed on a
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
      
      - title: "1.06 - Offer multiple ways to contact "
        text: >-
          Not all people are able or willing to call a company for help. Some
          may have trouble communicating in writing. Reasons for this can range
          from a physical or cognitive disability to simply being unfamiliar 
          with the language. Give people the option to choose a method they are
          comfortable with. Avoid only having a phone number. Always provide a
          phone number and an email address whenever possible.


          In some cases you may only be able to provide one option. In that case, think about how you can reduce the need for contact. One solution could be answering the most common questions in a “frequently asked questions” section.
      
      
---
