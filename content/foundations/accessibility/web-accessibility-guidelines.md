---
template: AccessibilityPage
category: Accessibility
previewImage: /img/accessibility_nobg.svg
title: Web accessibility guidelines
intro: Intro
description: Här går vi igenom punkt för punkt vad de betyder för
  Länsförsäkringar att följa checklistorna.
roleInformation: 
  - tags: 
    - Tester
    text: >
      dummy text
      
checklist:
  - title: tst
    section: Layout and images
    checklistList:
      - tags:
          - UX/AD
          - Copy
        title: 1.01 - Arrange content in a clear and meaningful hierarchy
        text: >
          Think about how you can arrange content in a meaningful order, so that
          the user can easily follow the flow through the information. Avoid
          filling all available space. Unused space (white space) is important
          in order to not overwhelm the user with visuals and letting the eyes
          rest.


          Make sure there is a clear hierarchy and that elements do not compete for attention. By doing so, you help the user to be naturally drawn to important information and interactions.
        relatedLinks:
          - text: "Understanding Success Criterion 1.3.2: Meaningful Sequence"
            url: https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html
          - text: Presentera innehållet i en meningsfull ordning för alla
            url: https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/
      - tags:
          - UX/AD
        title: 1.02 - Be consistent with navigation, structure and design
        text: >-
          Some users memorize the structure in order to understand the content
          and how the site functions. When content and functions are not
          consistent it can be difficult for the user to interpret the content
          and navigate the site. Therefore, follow a common site structure for
          all pages. Not all pages need to look exactly the same but they should
          follow the same general structure. 


          Functions should be performed the same way regardless of where on the website the user is located. The same rule of consistency applies to names and appearance of functions. For example, a button called “approve” should not be called “OK” on a different page. A “save” icon should have the same appearance everywhere.
        relatedLinks:
          - text: "Understanding Success Criterion 3.2.3: Consistent Navigation"
            url: https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html
          - text: Presentera innehållet i en meningsfull ordning för alla
            url: https://webbriktlinjer.se/riktlinjer/122-meningsfull-ordning/
      - tags:
          - UX/AD
          - Developer
          - Tester
        title: 1.03 - Present content correctly regardless of screen orientation
        text: >-
          #### For designers 


          Not all people have the ability or possibility to rotate the screen. Some have to choose between portrait or landscape and stick with it, for example when the screen is mounted on a wheelchair. Therefore, design content and functions that are accessible regardless of screen orientation. The user should be able to choose orientation after personal preference.


          #### For testers


          * Test the reading order of the page by going through it on different screen sizes.

          * Also test it with a screen reader, for example VoiceOver on an iPhone.

          * Make sure to test the flow of the page in other documents (pdf, word, etc.). See also section 2.15.
        relatedLinks:
          - text: "Understanding Success Criterion 1.3.4: Orientation"
            url: https://www.w3.org/WAI/WCAG21/Understanding/orientation.html
          - text: Se till att allt innehåll presenteras rätt oavsett skärmens riktning
            url: https://webbriktlinjer.se/riktlinjer/153-fungerar-oavsett-skarmens-riktning/#utdrag-fran-wcag-standarden
      - tags:
          - UX/AD
        title: 1.04 - All important information should be available to all users
        text: >-
          Hiding important information in PDFs decreases searchability and makes
          it harder for the user to get an overview of the content. Find a
          balance between presenting information on the web versus keeping it in
          downloadable documents.


          As much as possible, critical information should be available on the web. Make sure to divide the content into relevant pages so you avoid walls of texts.
      - tags:
          - UX/AD
        title: 1.05 - Create a flexible layout that works when enlarged or viewed on a
          small screen
        text: >-
          A screen or a window should be able to present a page at 320 pixels
          width without side-scrolling.


          * Use primarily responsive design 

          * When creating responsive design is not possible, create a custom mobile version. 

          * PDF:s and other downloadables  should work the same way.
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.10: Reflow"
            url: https://www.w3.org/WAI/WCAG21/Understanding/reflow.html
          - text: Var konsekvent i navigation, struktur och utformning
            url: https://webbriktlinjer.se/riktlinjer/29-var-konsekvent-i-navigation-struktur-och-utformning/
      - tags:
          - UX/AD
        title: "1.06 - Offer multiple ways to contact "
        text: >-
          Not all people are able or willing to call a company for help. Some
          may have trouble communicating in writing. Reasons for this can range
          from a physical or cognitive disability to simply being
          unfamiliar  with the language. Give people the option to choose a
          method they are comfortable with. Avoid only having a phone number.
          Always provide a phone number and an email address whenever possible.


          In some cases you may only be able to provide one option. In that case, think about how you can reduce the need for contact. One solution could be answering the most common questions in a “frequently asked questions” section.
      - tags:
          - UX/AD
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
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.3: Contrast (Minimum)"
            url: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
      - tags:
          - UX/AD
        title: "1.08 - Be careful with strong colors, use the red sparingly "
        text: Colors are great for improving usability and aesthetics. Be aware though
          that using strong colors too frequently can steal focus from the most
          important information and interactions. Use our red color (#E30613)
          sparingly, for example when you need a “call-to-action” button.
      - tags:
          - UX/AD
          - Developer
        title: 1.09 - Allow for popup-functionality to be used by all users
        text: >-
          Content that appears when the user focuses on it with the keyboard or
          mouse should be accessible and controllable for all users. This
          includes users that zoom in on a page or take their time to get to the
          content. It is especially important that users are able to close or
          remove the pop-up content.


          Examples of such content can be sub-menus, tool-tips or non-modal pop-ups.
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.13: Content on Hover or Focus"
            url: https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html
          - text: Popup-funktioner ska kunna hanteras och stängas av alla
            url: https://webbriktlinjer.se/riktlinjer/158-popup-funktioner-ska-kunna-hanteras-och-stangas-av-alla/
      - tags:
          - UX/AD
          - Developer
        title: 1.10 - Help the user in searches
        text: >-
          Support the user in searching on our website by proactively providing
          search word suggestions. This results in better search hits and makes
          it easier for users with writing or typing difficulties. It also saves
          time and simplifies the process for all other users.


          For performance and efficiency reasons, wait until the user enters two characters in the search field before presenting suggestions.
        relatedLinks:
          - text: "Understanding Success Criterion 3.3.3: Error Suggestion"
            url: https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion
      - tags:
          - UX/AD
          - Copy
        title: 1.11 - Avoid placing text in images
        text: You should generally avoid placing text in images as screen readers cannot
          read text on images. If you do have text in an image and the text is
          highly relevant to the user, make sure the text is included in the
          alt-text.
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.5: Images of Text"
            url: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html
          - text: Använd text, inte bilder, för att visa text
            url: https://webbriktlinjer.se/riktlinjer/128-anvand-text-inte-bilder-for-att-visa-text/
      - tags:
          - Copy
        title: 1.12 - Use “alt-text” on images containing important information
        text: >-
          Images included in the design for more than just decoration (graphs or
          diagrams) need to have an alternative-text. The user should be able to
          understand what the image conveys even if the image is not visible
          because of a bad connection, the image link is broken or the user is
          using a screen reader.

          One good way of doing this is describing the image the same way you would do it in a phone conversation.


          If a CMS system is being used, make it easier for the editors by making the alt-text field  mandatory.
        relatedLinks:
          - text: "Understanding Success Criterion 1.1.1: Non-text Content"
            url: https://www.w3.org/WAI/WCAG21/Understanding/non-text-content
      - tags:
          - Copy
          - Tester
        title: 1.13 - Decorative images do not need an “alt-text”
        text: Decorative images don’t need an alternative text because they don’t
          communicate important information to the user. However, an empty
          alt-tag is still needed in order for the page to validate.
        relatedLinks:
          - text: "H67: Using null alt text and no title attribute on img elements for
              images that AT should ignore"
            url: https://www.w3.org/WAI/WCAG21/Techniques/html/H67
      - tags:
          - Copy
        title: 1.14 - If the image is linked, describe the destination as “alt-text”
        text: If the image or icon is linked, add a description of the destination as an
          alt-text. The description should be short and clearly communicate
          where the user will be taken.
        relatedLinks:
          - text: "Understanding Success Criterion 1.1.1: Non-text Content"
            url: https://www.w3.org/WAI/WCAG21/Understanding/non-text-content
      - tags:
          - UX/AD
          - Developer
        title: 1.15 - Let the user navigate in the way they are most comfortable with
        text: >-
          People prefer to navigate the web differently, based on personal
          preference, physical or mental abilities. Therefore, we offer several
          ways to navigate our website.


          Consider user needs and the complexity of the site when designing ways to navigate.


          Possible functions could be a search function, main menu, in-page navigation, support for tab navigation or traversing through links. 


          Focus on helping the user to their goal. For example, when a user uses the search bar, help the user get to the results quicker by skipping the menu.


          Some navigation aids use only links or headlines to navigate.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.5: Multiple Ways"
            url: https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways
          - text: Erbjud användarna flera olika sätt att navigera
            url: https://webbriktlinjer.se/riktlinjer/32-erbjud-besokaren-alternativa-orienteringsstod/
      - tags:
          - UX/AD
        title: 1.16 - Use sufficient contrast in components and graphics
        text: >-
          Make sure components in the interface and infographics have sufficient
          contrast. Use good contrast for informative parts of illustrations and
          other graphic content, as long as it’s possible.


          The contrast ratio for components and graphics should be at least 3:1.


          Check contrast here: [Contrast Checker](https://webaim.org/resources/contrastchecker/)
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.11: Non-text Contrast"
            url: https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
          - text: Använd tillräckliga kontraster i komponenter och grafik
            url: https://webbriktlinjer.se/riktlinjer/156-anvand-tillrackliga-kontraster-i-komponenter-och-grafik/
      - tags:
          - Developer
        title: 1.17 - Highlight the field or element in focus when users navigate with
          the tab key
        text: >-
          Users that navigate with the tab-key need to clearly see which element
          is in focus by seeing a surrounding border. The standard border is
          often a thin, dashed line that can be difficult to discern, especially
          if the surroundings are busy or the contrast between elements is low.


          Make the border clearly visible by using a CSS-rule.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.7: Focus Visible"
            url: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html
          - text: Markera tydligt vilket fält eller element som är i fokus
            url: https://webbriktlinjer.se/riktlinjer/140-markera-element-i-fokus/
      - tags:
          - UX/AD
          - Developer
          - Tester
        title: 1.18 - Avoid sudden changes when focusing on elements
        text: >-
          To the extent it is possible, make interactions predictable and avoid
          introducing new fields or interactions when the user focuses or
          interacts with an element. 


          You can also prepare the user for the change by using copy or icons. For example, a link to an external site should have an icon that signals that the site will be opened in a new tab.


          Sometimes you may need to include a sudden change in focus. An example of this could be when a user answers a question in a form, and you need a  contextual, follow-up question to


          appear. In that case, make sure the user takes notice of the change by having the new question appear in close proximity and directly after the previous question.
        relatedLinks:
          - text: "Understanding Success Criterion 3.2.1: On Focus"
            url: https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html
          - text: Utför inga oväntade förändringar vid fokusering
            url: https://webbriktlinjer.se/riktlinjer/143-utfor-inga-ovantade-forandringar-vid-fokusering/
      - tags:
          - UX/AD
          - Developer
          - Tester
        title: 1.19 - Offer alternatives to more complex gestures
        text: Swiping and gestures that require use of multiple fingers (such as
          pinching) can be difficult to perform for people with reduced motor or
          cognitive function. Some users may also be unable to perform them
          because of the navigation aids they’re using or simply because the
          interactions aren’t immediately obvious. Avoid therefore having
          complex gestures as the primary or most discoverable way to perform
          crucial tasks. This includes tasks like paying bills, transferring
          money or cancelling a debit card. They should be doable with simpler,
          easy to discover interactions, such as single tap, double tap or
          press.
        relatedLinks:
          - text: "Understanding Success Criterion 2.5.1: Pointer Gestures"
            url: https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html
      - tags:
          - UX/AD
          - Developer
          - Tester
        title: 1.20 - Make tables easy to understand and navigate
        text: >-
          **Tables can be tricky to read, especially for users with screen
          readers. Let the html-code define the different parts of a table and
          how they are connected. For example, use th-elements to define which
          cells are rows and which are columns.**


          The attribute “scope” on a th-element creates a connection between header cells and data cells.This enables the screen reader to read the associated header before the content in a data cell. Doing so relieves  the user from having to remember the table structure. This is especially important for tables with many columns or with several header levels.
        relatedLinks:
          - text: "H51: Using table markup to present tabular information"
            url: https://www.w3.org/TR/WCAG20-TECHS/H51.html
          - text: Creating Accessible Tables
            url: https://webaim.org/techniques/tables/data
          - text: Tips and Tricks • Tables • WAI Web Accessibility Tutorials
            url: https://www.w3.org/WAI/tutorials/tables/tips/
          - text: Skriv rubriker till tabeller
            url: https://webbriktlinjer.se/riktlinjer/98-anvand-tabellrubriker-for-att-hjalpa-anvandaren/
      - tags:
          - UX/AD
        title: 1.21 - Explain icons
        text: When icons are used to represent buttons, they should be accompanied by
          explanatory text. The exceptions to the rule are icons of the
          universal kind, (think “go back” arrow).
        relatedLinks:
          - text: "Understanding Success Criterion 1.1.1: Non-text Content"
            url: https://www.w3.org/WAI/WCAG21/Understanding/non-text-content
  - section: Copy and content
    checklistList:
      - tags:
          - UX/AD
          - Copy
        title: 2.01 - Write simple, short and clear copy
        text: >-
          Copy should be written in a simple, short and clear manner. All users
          should be able to understand it, so make sure to check the readability
          of the text. Complement the text with appropriate images.


          You can also create checklists, bullet points or tables to break up and organize the text.\

          Use quotes and subheaders to keep the user interested.


          **Things to avoid:**

          * Walls of text

          * Too much information

          * Italic text 

          * Centered text

          * Writing words in uppercase
      - tags:
          - UX/AD
          - Copy
        title: 2.02 - Left-align body text
        text: >-
          To increase readability, body text should always be left-aligned.
          Avoid hyphenating words, except for extremely long words that may
          cause awkward line breaks. The exception to the rule is of course
          languages where the reading order is the right to left.


          Left-align also the text in main menus and other vertical menus. It will make it easier for the user to browse the menu items, since the user’s eyes can wander along the left edge of the menu.
      - tags:
          - UX/AD
          - Copy
        title: 2.03 - Break up large texts with graphic elements, charts, icons and
          images
      - tags:
          - UX/AD
          - Copy
        title: 2.04 - Break up large texts with a checklist, bullet points or tables
      - tags:
          - UX/AD
          - Copy
        title: "2.05 - Use intermediate headlines and quotes to split up content and
          interest the user  "
        text: Avoid capitalized headlines. If you have to use them, use them maximum of
          one or two words. All capitalized headlines and texts decrease
          readability because we are not used to them. The exception being when
          caps are used for special purposes such as warning text like “THIN
          ICE” or acronyms like “CIO” or “EU”.
      - tags:
          - Copy
        title: 2.06 - Page titles should the same as the headline of the page
      - tags:
          - Copy
          - Developer
          - Tester
        title: 2.07 - Use the correct H-element and hierarchy to organize content
        text: >-
          Headlines communicate how the content is structured on the page.
          Browsers, plug-ins and navigation aids use them to navigate through
          the content. Structure headlines according to their level in the
          hierarchy. The most important headline is H1 and the least important
          is H6.  Jumping over levels can be confusing for some navigation aids,
          so make sure an H1 is followed by and H2. You can jump over levels if
          the page is divided into sections (see following example).


          (missing image)
      - tags:
          - Copy
        title: 2.08 - Avoid directing users by describing spatial directions
        text: Screen reader users may have trouble following directions such as “click
          on the button to the right”. In addition, rotating the screen can
          alter the layout of the page so the spatial directions become
          incorrect.
      - tags:
          - Copy
        title: "2.09 - Avoid directing users by describing colors "
        text: Color blind users may have trouble telling the difference between red and
          green or green and blue. Avoid therefore referring to elements on page
          by color.
      - tags:
          - Copy
        title: 2.10 - Use shorter words and avoid composite words when possible
      - tags:
          - Copy
        title: 2.11 - Highlight words sparingly
        text: >-
          In order to add emphasis to tagline, you can highlight a specific word
          in an H1 headline with the color red (#E30613). Highlight the word
          that is most meaningful to the user.


          You can also highlight keywords in body text by making it bolder but keep the color the same as the rest of the text. Avoid italicizing text.


          Do not underline text that isn’t linked. The user may mistake the text for a link.
      - tags:
          - Developer
        title: 2.12 - Allow for adjustment of spacing between characters, rows,
          paragraphs and words
        text: >-
          Users with dyslexia or of limited vision need to be able to adjust the
          spacing between paragraphs, rows, words and characters for
          readability. Make it possible for the user to adjust spacing without
          content or functionality clashing or hiding behind other content.


          The user, at minimum, should be able to increase distance at the following relative thresholds:


          * Line spacing to 1,5 times the size of the font

          * Character spacing to 0,12 times the size of the font

          * Word spacing to 0,16 times the size of the font

          * Paragraph spacing to 2 times the size of the font
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.12: Text Spacing"
            url: https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html
          - text: Se till att det går att öka avstånd mellan tecken, rader, stycken och ord
            url: https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/
      - tags:
          - Developer
        title: 2.13 - Text can be enlarged 200% without issues
        text: >-
          Many people with limited vision need to enlarge the text in order to
          read it. Make it possible \

          to enlarge text to at least double the height and width without hiding text behind images or clashing with other texts.


          Some best practices to keep in mind:


          * Use relative units, avoid using “px” for texts

          * Avod small text sizes

          * Have generous spacing between columns
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.4: Resize text"
            url: https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html
          - text: Se till att text går att förstora utan problem
            url: https://webbriktlinjer.se/riktlinjer/127-se-till-att-text-gar-att-forstora-utan-problem/
      - tags:
          - Developer
        title: 2.14 - Downloadable documents should have descriptive file names
        text: Make sure documents have file names that clearly describe the content.
          Don’t use internal working titles as file names. You should generally
          avoid naming documents after article numbers, registration numbers,
          form numbers or other numbers of that nature. Only if the article
          number or form number is known by the users, should it be part of the
          file name.
        relatedLinks:
          - text: Ge dokument tydliga filnamn
            url: https://webbriktlinjer.se/riktlinjer/9-ge-dokument-tydliga-filnamn/
      - tags:
          - Copy
          - Tester
        title: 2.15 - Downloadable documents are tagged and have the correct structure
        text: >-
          When creating accessible PDF:s, do the accessibility adjustments in
          the original document (perhaps in Microsoft Word or Adobe InDesign).
          Otherwise you’ll have to adjust the settings in Acrobat Professional,
          which may not be accessible to you. Here are some basic guidelines:




          * The file should have coded tags in a tag tree. You can create a tag tree in Word by selecting “Document structure tags for accessibility”. You can also do it after the conversion to PDF by selecting “Add tags to document” in Acrobat. 

          * Tag headlines with headline tags `<h1>`, `<h2>`, tables `<table>`, table headlines `<th>`, columns `<colgroup>`, bullet point lists `<l>` and table of contents `<toc>`.

          * Add alt-text tags to images, diagrams and image-based figures.

          * Define the reading order. Normally it should be set to “Use document structure”.

          * Include the document title and the name of the author. The option is available under “Document properties”. You can also define the language there. Intermixed text written in a different language should have it’s own language code.

          * Create a table of contents for longer documents, preferably in the form of bookmarks in the PDF. Click the bookmark symbol to edit bookmarks in Acrobat.

          * Make sure copying the document is allowed. You can select the option under security settings. If you still need to to lock the document, check the option for making it available to screen readers.

          * If the document becomes too large after adding the settings, you can always compress it later.
        relatedLinks:
          - text: Create accessible PDFs - Office Support
            url: https://support.microsoft.com/en-us/office/create-accessible-pdfs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed
          - text: Creating accessible PDFs in Adobe Acrobat
            url: https://helpx.adobe.com/acrobat/using/creating-accessible-pdfs.html
          - text: Publicera i första hand dokument i html och skapa tillgängliga pdf:er
            url: https://webbriktlinjer.se/riktlinjer/88-publicera-i-forsta-hand-dokument-i-html/
  - section: Clickable areas - buttons and links
    checklistList:
      - tags:
          - UX/AD
          - Developer
        title: 3.01 - Use only active buttons
        text: >-
          Use only active, clickable buttons and support the user with error
          messages that clarify what the user needs to do. Make sure the user
          doesn’t miss required input fields by automatically scrolling up to
          the top input field that needs to be corrected.


          In an absolute majority of cases, avoid using greyed-out, unclickable buttons because they make it difficult to explain to the user why they aren’t available.


          An exception when a disabled button can be used is during the choice of payment methods in our purchase flows. In this example, the option “Månad” is clickable when the customer chooses “Autogiro”, but not when “Faktura” is chosen.


          {missing image}
      - tags:
          - UX/AD
        title: 3.02 - Place buttons in context
        text: Place buttons in close proximity to their context, so that the user
          understands the relationship between the information and the buttons.
      - tags:
          - UX/AD
        title: "3.03 - Visually highlight links "
        text: The users should be easily able to distinguish between regular text and
          linked text. Make sure linked text visually stands out from regular
          text by using underscores, placement, color or size. Active links can
          be made to stand out by, for example, changing background color. Avoid
          only using color to distinguish a link from the rest of the text.
          Users with colour blindness will have trouble seeing the difference.
      - tags:
          - UX/AD
          - Copy
        title: 3.04 - A link should be descriptive and able to stand on its own
        text: >-
          When using “Show more” links or buttons, make sure to describe the
          hidden content in the name. For example: “Show more funds”. It makes
          it easier for users with screen readers to get an idea of the content
          before they interact with the link or button.


          Don’t use the url of the page as a link name.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.4: Link Purpose"
            url: https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html
      - tags:
          - UX/AD
        title: 3.05 - Combine color, form and text even with icons and links
        text: Feel free to use colors, but make sure color is not the only way to
          distinguish objects or pieces of information from each other. Combine
          color with text, patterns or other visual indicators. Also, check out
          how we use universal icons like the “x” for close and the “i” for
          information.
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.1: Use of Color"
            url: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
      - tags:
          - Copy
        title: 3.06 - Link names should be a maximum 100 characters long
        text: >-
          Avoid making link and button texts too long. Buttons should contain no
          more than 2-3 words. We have a two-row button that can be used if
          necessary, but first, try shortening the text.


          Link text should be a maximum of 100 characters long, while clearly telling the user of the link content. For example: ”How to renovate your bathroom with the right waterproofing” (58 characters).
      - tags:
          - UX/AD
          - Developer
        title: 3.07 -  Make links, clickable areas and menus usable for everyone
        text: >-
          All of our users need to easily understand what elements are
          clickable. Make sure that links have a consistent appearance across
          the entire web site.


          Things to keep in mind:


          * Don’t place links too close to each other. Adding a bit of room around them means we don’t ask for unnecessary precision from our users.

          * Add a generous clickable area around the element being linked (see also 4.03)

          * Make a single link (an a-element) when you have two elements like an icon and text.
        relatedLinks:
          - text: "Understanding Success Criterion 3.2.3: Consistent Navigation"
            url: https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html
          - text: Gör länkar, klickbara ytor och menyer användbara för alla
            url: https://webbriktlinjer.se/riktlinjer/34-gor-lankar-och-klickbara-ytor-enkla-att-anvanda-for-alla/
      - tags:
          - Developer
        title: 3.08 - Text on buttons matches the machine-readable tags
        text: When users use voice control to operate a button, they usually read out
          loud the text on the button. Make sure the text on buttons and other
          UI elements matches the corresponding machine-readable tags used by
          voice control. This makes for a smoother experience for voice control
          users.
        relatedLinks:
          - text: "Understanding Success Criterion 2.5.3: Label in Name"
            url: https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html
          - text: Se till att text på knappar och kontroller överensstämmer med
              maskinläsbara etiketter
            url: https://webbriktlinjer.se/riktlinjer/162-mojliggor-roststyrning-av-knappar-och-kontroller/
      - tags:
          - UX/AD
          - Developer
        title: 3.09 - Allow for reversal of actions
        text: Occasionally, all of us accidentally press a button we did not intend.
          People with limited motoric function or impaired vision are especially
          affected by this. The option to reverse an action is very important
          because it makes the user feel more secure interacting with a service.
          The user can confidently take action without fearing doing something
          that can't be easily reversed.
        relatedLinks:
          - text: "Understanding Success Criterion 2.5.2: Pointer Cancellation"
            url: https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html
          - text: Gör det möjligt att ångra klick
            url: https://webbriktlinjer.se/riktlinjer/161-gor-det-mojligt-att-angra-klick/
      - tags:
          - UX/AD
        title: 3.10 - Make contextual interactions easy to discover
        text: >-
          When the user interacts with a button that reveals a new, contextual
          interaction, place the new


          interaction below or next to the previous interaction. The new interaction should directly follow the previous one in the tab order.
  - section: Forms
    checklistList:
      - tags:
          - UX/AD
          - Copy
        title: 4.01 - Write concise, short labels for input fields
        text: >-
          Every input field should have a label. Labels are usually placed above
          the input field, where the user can easily see them. If the design
          does not have a label, the developer should add a hidden label that
          can be read by a screen reader.


          Avoid making the solution dependent on title-attribute and placeholder texts.


          Field label copy should be kept short, preferably not longer than two rows. If you need extra space for more detailed instructions you can add them at the beginning of the form.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.6: Headings and Labels"
            url: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html
          - text: Skriv beskrivande rubriker och etiketter
            url: https://webbriktlinjer.se/riktlinjer/61-skriv-tydliga-och-berattande-rubriker/
      - tags:
          - UX/AD
          - Copy
        title: 4.02 - Write clear, actionable error messages
        text: >-
          When the user doesn’t fill out input fields in the way we expect them
          to, or forgets to do it, we should guide them with simply worded,
          positive and constructive messages. The focus should be on helping the
          user move forward rather than telling them what they did wrong.


          Example 1: 


          The user types only 9 digits in the personal number field. Validate the field with “Personal number should contain 10 or 12 digits.” rather than “Incorrect personal number”.


          Example 2: \

          \

          The user forgets to fill out a personal number. Validate the field with “Please enter your personal number” instead of “This field is mandatory”.


          **\
        relatedLinks:
          - text: "Understanding Success Criterion 3.3.1: Error Identification"
            url: https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html
          - text: How to Write Good Error Messages
            url: https://uxplanet.org/how-to-write-good-error-messages-858e4551cd4
      - tags:
          - UX/AD
          - Developer
        title: 4.03 - Create large, clickable areas
        text: Make it easier on the user to by making sure clickable areas around
          objects like checkboxes or radio buttons are sufficiently large. The
          user should be able to click the area around small objects like
          checkboxes and not only on the function itself. In the case of radio
          buttons or checkboxes, you can also make the corresponding text
          clickable. By doing so, we don’t require fine motor skills
          unnecessarily from our users. On mobile, an average area for the index
          finger should be 44x44 pixels.
        relatedLinks:
          - text: "Understanding Success Criterion 2.5.5: Target Size"
            url: https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
      - tags:
          - UX/AD
          - Developer
        title: 4.04 - Give the option to regret, correct or confirm important
          transactions
        text: >-
          Transactions of legal, economical or health-related nature may have
          large and troublesome consequences for all involved parties.
          Therefore, help the user avoid making or correcting potential
          mistakes. 


          Avoid creating interactions that don’t allow the user regret, correct or confirm. When the user enters larger amounts of information (think forms), give the user an opportunity to preview the entered information.
        relatedLinks:
          - text: "Understanding Success Criterion 3.3.4: Error Prevention (Legal,
              Financial, Data"
            url: https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html
          - text: Ge möjlighet att ångra, korrigera eller bekräfta vid viktiga transaktioner
            url: https://webbriktlinjer.se/riktlinjer/150-ge-mojlighet-att-angra-korrigera-eller-bekrafta-viktiga-transaktioner/
      - tags:
          - UX/AD
          - Developer
        title: "4.05 - Cluster objects that belong together "
        text: Make sure field labels and supporting copy are closer to the field they
          belong to, than other input fields or text.
        relatedLinks:
          - text: "Understanding Success Criterion 1.3.1: Info and Relationships"
            url: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships
      - tags:
          - UX/AD
          - Developer
        title: "4.06 - Allow for multiple formats in an input field  "
        text: When we know that there are several ways of writing the same thing,
          accommodate the users by allowing multiple formats. For example, a
          personal number could be written with 10 or 12 digits, with or without
          a dash. Do the same with calendar dates in date pickers, to the extent
          it is possible.
      - tags:
          - Developer
        title: 4.07 - Create a logical tab order
        text: The user should be able to navigate via all interactive elements on a
          page, from top down and left to right (for Swedish and English web
          pages). It is crucial that the focus path is logical in relation to
          how content is presented on a screen or to a screen reader. When the
          focus shifts to an unexpected element it can confuse the user and make
          them more prone to errors. Avoid using tabindex greater than “1” in
          the code.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.3: Focus Order"
            url: https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html
          - text: Gör en logisk tab-ordning
            url: https://webbriktlinjer.se/riktlinjer/136-gor-en-logisk-tab-ordning/
      - tags:
          - Developer
        title: 4.08 - Tag input fields in the code
        text: >-
          Help the user fill out input fields by defining expected input in the
          code. This enables browsers or navigation aids automatically suggest
          input based on examples from other fields with the same definition
          (for example a street address and zip code). The code can also help by
          presenting the input field in a manner the user recognises. 


          Tagging input fields helps all users, but especially people with cognitive/motoric disabilities or people not familiar with the language. Adding the attribute “autocomplete” on input fields adds another layer of accessibility.
        relatedLinks:
          - text: "Understanding Success Criterion 1.3.5: Identify Input Purpose"
            url: https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html
          - text: Märk upp vanliga formulärfält i koden
            url: https://webbriktlinjer.se/riktlinjer/154-mark-upp-vanliga-formularfalt-i-koden/
  - section: Video & animation
    checklistList:
      - tags:
          - UX/AD
          - Copy
        title: 5.01 - Complement text with videos and moving media
        text: Complement text with video or animated material for those that have
          trouble reading text. Don’t forget to use sound for people with visual
          impairments.
      - tags:
          - UX/AD
          - Developer
        title: 5.02 - Allow for pausing, lowering and turning off sound
        text: >-
          In general, we avoid automatically playing sound or video.


          There should always be ways to pause a video or control its volume. A user that navigates with a screen reader may not hear the content if other sounds are being played simultaneously. Users with a lower ability to focus or filter external stimuli may find it hard to use a service if they cannot turn off the sound easily.
        relatedLinks:
          - text: "Understanding Success Criterion 1.4.2: Audio Control"
            url: https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html
          - text: Ge användaren möjlighet att pausa, stänga av eller sänka ljud
            url: https://webbriktlinjer.se/riktlinjer/125-kunna-pausa-ljud/
      - tags:
          - UX/AD
          - Developer
        title: "5.03 - Use animations sparingly "
        text: Before you create an animation, you should define a purpose for it. For
          example, the animation will guide the user, direct their attention to
          a piece of information or provide feedback. Animations can also be
          used to add visual flair to a design. Generally, the animations should
          be kept short and non-looping. Users with ADHD may find looping
          animations to be confusing and distracting. Since animations should
          not be looping, they also should not be critical to functionality.
        relatedLinks:
          - text: "Understanding Success Criterion 2.3.3: Animation from Interactions"
            url: https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
      - tags:
          - Copy
        title: 5.04 Always provide subtitles with video content
        text: There are many reasons why people use subtitles when consuming video
          content. It ranges from a hearing disability, noisy environment
          or  the need to watch without disturbing others. Users for whom
          Swedish isn't their first language sometimes use subtitles as support.
        relatedLinks:
          - text: "Understanding Success Criterion 1.2.2: Captions (Prerecorded)"
            url: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html
          - text: Texta inspelad rörlig media (video, ljud, animationer…)
            url: https://webbriktlinjer.se/riktlinjer/117-texta-inspelad-rorlig-media/
  - section: Lists
    checklistList:
      - tags:
          - Copy
        title: 6.01 - Use available formatting to create lists
      - tags:
          - Copy
        title: "6.02 - Use bullet points when order does not matter, numbers when it
          does "
      - tags:
          - Copy
        title: "6.03 - Avoid using bullet points when they do not fit "
      - tags:
          - Copy
        title: 6.04 - Place a period after the last bullet point if the bullet list is
          an enumeration
  - section: Code & script
    checklistList:
      - tags:
          - Developer
        title: 7.01 - Follow standards
        text: >-
          Structure is everything when you present content to users with
          navigational aids. Valid and semantic HTML makes the structure of the
          content presentable in a meaningful way. CSS, written for
          accessibility makes the web site easier to consume for all users.
          Correctly written CSS can also be used to provide extra information
          that isn’t visible to screen readers. 


           


          * Use HTML5.

          * For presentation and layout with style templates, use CSS. Separate content


          from design - use external style sheets to control presentation and layout. 


          * Create layouts with h-elements. See [2.07](https://docs.google.com/document/d/1PNRR5bo-1oTHdxEB5_Em9pSiYxWieWlg3RosTJjUfAk/edit#heading=h.b5y55cs9w05c)

          * Use the correct h-element when creating lists.

          * Make sure input fields match their connected label elements. Create clear and clickable field labels. See also [4.01](https://docs.google.com/document/d/1PNRR5bo-1oTHdxEB5_Em9pSiYxWieWlg3RosTJjUfAk/edit#heading=h.q4tgchlrp7bw)

          * Add headings to tables See [1.20](https://docs.google.com/document/d/1PNRR5bo-1oTHdxEB5_Em9pSiYxWieWlg3RosTJjUfAk/edit#heading=h.h3g84f8san64) for more details.

          * Mark mandatory input fields in a form. See also [4.08](https://docs.google.com/document/d/1PNRR5bo-1oTHdxEB5_Em9pSiYxWieWlg3RosTJjUfAk/edit#heading=h.6oh083uibybu)

          * Emphasize content with the element “em” and not just italic, since italics can’t be read by a screen reader. 

          * Use WAI-ARIA for elements that can't be expressed with regular HTML.

          * För subscription services, use RSS eller Atom.Make it possible to subscribe to information.
        relatedLinks:
          - text: Using WAI-ARIA
            url: https://www.w3.org/TR/wai-aria-1.1/#usage
          - text: "Understanding Success Criterion 3.3.2: Labels or Instructions"
            url: https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html
          - text: Skapa tydliga och klickbara fältetiketter
            url: https://webbriktlinjer.se/riktlinjer/55-skapa-tydliga-och-klickbara-faltetiketter/
          - text: Gör det möjligt att prenumerera på information
            url: https://webbriktlinjer.se/riktlinjer/87-gor-det-mojligt-att-prenumerera-pa-information/
          - text: The Atom Syndication Format
            url: https://www.ietf.org/rfc/rfc4287.txt
          - text: Använd rätt html-element när ni gör listor
            url: https://webbriktlinjer.se/riktlinjer/104-gor-listor-med-de-html-element-som-ar-till-for-att-skapa-listor/
      - tags:
          - Developer
          - Tester
        title: 7.02 - Offer the possibility to skip repeating content
        text: >-
          For users navigating with a screen reader, tabbing, or other aids it
          may take a while to get through a menu. In addition, when content is
          repeated on several pages it adds additional  mental strain on the
          user. Physical pain can become an issue if the same movement needs to
          be repeated over and over. Therefore, you should always offer the
          option to skip repeating content.


          * Create shortcuts so that users can, for example, skip menus and get to the content immediately.

          * Create headlines with h-elements, since screen readers allow users to navigate faster using headlines. 

          * Use  WAI-ARIA landmark roles, for example main, search, navigation, banner, contentinfo etc. This helps users with screen readers navigate between different sections of the page in a standardized manner.

          * Use structure elements like “main”, “aside”, “header”, “footer” and “nav” to define roles for each section of the page. 

          * R68. Create shortcuts as necessary.
        relatedLinks:
          - text: "Understanding Success Criterion 2.4.1: Bypass Blocks"
            url: https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
          - text: Erbjud möjlighet att hoppa förbi återkommande innehåll
            url: https://webbriktlinjer.se/riktlinjer/75-gruppera-och-skapa-mojlighet-att-hoppa-forbi-delar-pa-sidorna/
      - tags:
          - Developer
        title: 7.03 - Offer the possibility to go back
        text: The backward-button should always work and let the user return to a
          previous page. In some cases, when a user is in the process of making
          a purchase, you may need to inform the user that they’ll lose progress
          if they go backwards. This is OK, as long as the user understands the
          consequences. If you’re creating an SPA-app this has to be resolved
          programmatically.
      - tags:
          - Developer
        title: 7.04 - Create shortcuts with care
        text: >-
          Shortcuts can make navigating through a website faster but they should
          be used with care.


          There is a risk that the websites’ short cuts could be confused with the shortcuts of the browser, operative system or navigation aid. In addition, short cuts that consist of only one key press can cause problems for users with limited motoric skills or users using voice navigation.




          * Use shortcuts sparingly. Ask yourself, why do you need them, and what function do they provide that doesn’t already exist?

          * Use well-established key combinations, so long they don’t clash with browser’s shortcuts.

          * Inform the user which shortcuts are available to them.

          * Provide the option to turn off or change shortcuts that consist of only one key press.
        relatedLinks:
          - text: "Understanding Success Criterion 2.1.4: Character Key Shortcuts"
            url: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html
          - text: Skapa kortkommandon med varsamhet
            url: https://webbriktlinjer.se/riktlinjer/68-skapa-snabbkommandon-for-viktiga-funktioner/
      - tags:
          - Developer
          - Tester
        title: 7.05 - Make sure the code validates
        text: >-
          There are several aids that can make it easier for developers to
          follow standards.


          **Code validation** 


          Validating the code helps you find errors that can be hard to discover on your own. It could ID’s with non-unique values, fields with missing labels or errors in the html code.


          If you want to validate a local page, you can copy/paste the code or download a plugin for your browser.


          [The W3C Markup Validation Service](https://validator.w3.org/)




          **Validate accessibility**


          Chrome has a built-in validation for accessibility in its development tools. If you wish to go to a  bit more detailed level, you can download a plugin called “Axe” for Chrome. You can use it straight from the developer tools menu. 


          * Verify that your function templates, services and style templates validate in accordance with the HTML 5 standard.

          * Try automating a recurring code validation, or create a validation routine procedure when changes to the website code occur. It is easy for previously correct code to become invalid. This could happen when a plugin is updated, a media player is inserted in a blog post, or when someone creates a post in a comment hosting service.
        relatedLinks:
          - text: "Understanding Success Criterion 4.1.1: Parsing"
            url: https://www.w3.org/WAI/WCAG21/Understanding/parsing.html
          - text: Se till att koden validerar
            url: https://webbriktlinjer.se/riktlinjer/84-se-till-att-koden-validerar/
      - tags:
          - Developer
        title: 7.06 - Make sure page speed is up to standard
        text: >-
          A part of great usability is a page that loads quickly, minimising the
          wait times and avoiding shifting elements as the page loads. Users
          today expect a page to be loaded and ready for navigation within 3
          seconds. Some images can be loaded afterwards, but in general it is
          difficult for the user to navigate a page if the content constantly
          shifts because of long loading times.




          It’s especially difficult for visually impared users, as they may have a hard time noticing content that is still loading.


          #### When is the page speed good enough?


          Research has shown that users lose concentration if they have to wait too long. Nielsen-Norman have documented the following [consequences of web response times](http://www.nngroup.com/articles/response-times-3-important-limits/):


          * At 0,1 seconds the user no longer feels the system responds instantaneously   

          * At 1 second response time the user’s flow of thought is being hindered by the waiting.

          * At 10 seconds the user finds it very difficult to stay focused on the task and wants to do something else while waiting.




          Test your page here:


          Pagespeed insights: 


          [Check page speed - Google](https://developers.google.com/speed/pagespeed/insights/?hl=sv&url=lf.se)


          [Optimera webbplatsen för bästa prestanda](https://webbriktlinjer.se/riktlinjer/54-optimera-webbplatsen-for-basta-prestanda/)
      - tags:
          - Developer
        title: 7.07 - All actions should be accessible through a keyboard
        text: Verify that all functionality works using a keyboard alone, since many
          aids in practice function like a keyboard. Users that only use a
          keyboard or aids that connect to keyboard shortcuts, are dependent on
          the system not requiring a mouse or a touch screen.
        relatedLinks:
          - text: "Understanding Guideline 2.1: Keyboard Accessible"
            url: https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible
      - tags:
          - Developer
        title: 7.08 - State the language of the content in the code
        text: In order to facilitate correct hyphenation, automatic translation and
          increase the likelihood of screen readers presenting content
          correctly, define the language in the html code. This is done with
          lang-attribute and language code.
      - tags:
          - Developer
        title: "7.09 - Navigation aids present messages not in focus "
        text: Make sure users with aids like screen readers and magnification software
          can be alerted to important messages even if they appear outside of
          where the user has focus. Define where important messages may appear
          by using role or aria-live attributes. The aids can then recognise
          them and present them to the user at an appropriate time.
        relatedLinks:
          - text: "Understanding Success Criterion 4.1.3: Status Messages"
            url: https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html
          - text: Se till att hjälpmedel kan presentera meddelanden som inte är i fokus
            url: https://webbriktlinjer.se/riktlinjer/164-meddelanden-som-inte-ar-fokus/
  - section: Apps
    checklistList:
      - tags:
          - UX/AD
          - Copy
          - Developer
          - Tester
        title: 8.01 - Basic recommendations for apps
        text: >-
          

          * Follow the web guidelines as far as they are applicable for apps

          * Follow the platforms own guidelines for accessibility




          iOS guidelines: [Introduction - Accessibility - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/)


          Android app guidelines: [Build more accessible apps](https://developer.android.com/guide/topics/ui/accessibility)
---
