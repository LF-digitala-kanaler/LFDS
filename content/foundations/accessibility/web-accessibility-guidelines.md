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
        title: 2.01 - Write simple, short and clear copy
        text: >-
          Copy should be written in a simple, short and clear manner. All users
          should be able to understand it, so make sure to check the readability
          of the text. Complement the text with appropriate images.


          You can also create checklists, bullet points or tables to break up and organize the text.\

          Use quotes and subheaders to keep the user interested.


          **Things to avoid:**\

          Walls of text\

          Too much information\

          Italic text \

          Centered text\

          Writing words in uppercase
      - tags:
          - All roles
        title: 2.02 - Left-align body text
        text: >-
          To increase readability, body text should always be left-aligned.
          Avoid hyphenating words, except for extremely long words that may
          cause awkward line breaks. The exception to the rule is of course
          languages where the reading order is the right to left.


          Left-align also the text in main menus and other vertical menus. It will make it easier for the user to browse the menu items, since the user’s eyes can wander along the left edge of the menu.
      - tags:
          - All roles
        title: 2.03 - Break up large texts with graphic elements, charts, icons and
          images
      - tags:
          - All roles
        title: 2.04 - Break up large texts with a checklist, bullet points or tables
      - tags:
          - All roles
        title: "2.05 - Use intermediate headlines and quotes to split up content and
          interest the user  "
        text: Avoid capitalized headlines. If you have to use them, use them maximum of
          one or two words. All capitalized headlines and texts decrease
          readability because we are not used to them. The exception being when
          caps are used for special purposes such as warning text like “THIN
          ICE” or acronyms like “CIO” or “EU”.
      - tags:
          - All roles
        title: 2.06 - Page titles should the same as the headline of the page
      - tags:
          - All roles
        title: 2.07 - Use the correct H-element and hierarchy to organize content
        text: >-
          Headlines communicate how the content is structured on the page.
          Browsers, plug-ins and navigation aids use them to navigate through
          the content. Structure headlines according to their level in the
          hierarchy. The most important headline is H1 and the least important
          is H6.  Jumping over levels can be confusing for some navigation aids,
          so make sure an H1 is followed by and H2. You can jump over levels if
          the page is divided into sections (see following example).


          (missing image)
      - tags:
          - All roles
        title: 2.08 - Avoid directing users by describing spatial directions
        text: Screen reader users may have trouble following directions such as “click
          on the button to the right”. In addition, rotating the screen can
          alter the layout of the page so the spatial directions become
          incorrect.
      - tags:
          - All roles
        title: "2.09 - Avoid directing users by describing colors "
        text: Color blind users may have trouble telling the difference between red and
          green or green and blue. Avoid therefore referring to elements on page
          by color.
      - tags:
          - All roles
        title: 2.10 - Use shorter words and avoid composite words when possible
      - tags:
          - All roles
        title: 2.11 - Highlight words sparingly
        text: >-
          In order to add emphasis to tagline, you can highlight a specific word
          in an H1 headline with the color red (#E30613). Highlight the word
          that is most meaningful to the user.


          You can also highlight keywords in body text by making it bolder but keep the color the same as the rest of the text. Avoid italicizing text.


          Do not underline text that isn’t linked. The user may mistake the text for a link.
      - tags:
          - All roles
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


          **Read more:[](https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/)**\

          [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)\

          [Se till att det går att öka avstånd mellan tecken, rader, stycken och ord](https://webbriktlinjer.se/riktlinjer/157-avstand-mellan-tecken-rader-stycken-och-ord/)
      - tags:
          - All roles
        title: 2.13 - Text can be enlarged 200% without issues
        text: >-
          Many people with limited vision need to enlarge the text in order to
          read it. Make it possible \

          to enlarge text to at least double the height and width without hiding text behind images or clashing with other texts.


          Some best practices to keep in mind:


          * Use relative units, avoid using “px” for texts

          * Avod small text sizes

          * Have generous spacing between columns 


          **Read more:** \

          [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)\

          [Se till att text går att förstora utan problem](https://webbriktlinjer.se/riktlinjer/127-se-till-att-text-gar-att-forstora-utan-problem/)
      - tags:
          - All roles
        title: 2.14 - Downloadable documents should have descriptive file names
        text: >-
          Make sure documents have file names that clearly describe the content.
          Don’t use internal working titles as file names. You should generally
          avoid naming documents after article numbers, registration numbers,
          form numbers or other numbers of that nature. Only if the article
          number or form number is known by the users, should it be part of the
          file name.  


          **Read more:**\

          [Ge dokument tydliga filnamn](https://webbriktlinjer.se/riktlinjer/9-ge-dokument-tydliga-filnamn/)
      - tags:
          - All roles
        title: 2.15 - Downloadable documents are tagged and have the correct structure
        text: >-
          When creating accessible PDF:s, do the accessibility adjustments in
          the original document (perhaps in Microsoft Word or Adobe InDesign).
          Otherwise you’ll have to adjust the settings in Acrobat Professional,
          which may not be accessible to you. Here are some basic guidelines:




          * The file should have coded tags in a tag tree. You can create a tag tree in Word by selecting “Document structure tags for accessibility”. You can also do it after the conversion to PDF by selecting “Add tags to document” in Acrobat. 

          * Tag headlines with headline tags (<H1>, <H2>), tables (<table>), table headlines (<TH>), columns (<colgroup>, bullet point lists (<L>) and table of contents (<TOC>).

          * Add alt-text tags to images, diagrams and image-based figures.

          * Define the reading order. Normally it should be set to “Use document structure”.

          * Include the document title and the name of the author. The option is available under “Document properties”. You can also define the language there. Intermixed text written in a different language should have it’s own language code.

          * Create a table of contents for longer documents, preferably in the form of bookmarks in the PDF. Click the bookmark symbol to edit bookmarks in Acrobat.

          * Make sure copying the document is allowed. You can select the option under security settings. If you still need to to lock the document, check the option for making it available to screen readers.

          * If the document becomes too large after adding the settings, you can always compress it later.


          **Read more:**


          [Create accessible PDFs - Office Support](https://support.microsoft.com/en-us/office/create-accessible-pdfs-064625e0-56ea-4e16-ad71-3aa33bb4b7ed) 


          [Creating accessible PDFs in Adobe Acrobat](https://helpx.adobe.com/acrobat/using/creating-accessible-pdfs.html)


          [Publicera i första hand dokument i html och skapa tillgängliga pdf:er](https://webbriktlinjer.se/riktlinjer/88-publicera-i-forsta-hand-dokument-i-html/)
  - section: Clickable areas - buttons and links
    checklistList:
      - tags:
          - All roles
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
          - All roles
        title: 3.02 - Place buttons in context
        text: Place buttons in close proximity to their context, so that the user
          understands the relationship between the information and the buttons.
      - tags:
          - All roles
        title: "3.03 - Visually highlight links "
        text: The users should be easily able to distinguish between regular text and
          linked text. Make sure linked text visually stands out from regular
          text by using underscores, placement, color or size. Active links can
          be made to stand out by, for example, changing background color. Avoid
          only using color to distinguish a link from the rest of the text.
          Users with colour blindness will have trouble seeing the difference.
      - tags:
          - All roles
        title: 3.04 - A link should be descriptive and able to stand on its own
        text: >-
          When using “Show more” links or buttons, make sure to describe the
          hidden content in the name. For example: “Show more funds”. It makes
          it easier for users with screen readers to get an idea of the content
          before they interact with the link or button.


          Don’t use the url of the page as a link name. 


          **Read more:**


          [Understanding Success Criterion 2.4.4: Link Purpose](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)
      - tags:
          - All roles
        title: 3.05 - Combine color, form and text even with icons and links
        text: >-
          Feel free to use colors, but make sure color is not the only way to
          distinguish objects or pieces of information from each other. Combine
          color with text, patterns or other visual indicators. Also, check out
          how we use universal icons like the “x” for close and the “i” for
          information.


          **Read more:**


          [Understanding Success Criterion 1.4.1: Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)
      - tags:
          - All roles
        title: 3.06 - Link names should be a maximum 100 characters long
        text: >-
          Avoid making link and button texts too long. Buttons should contain no
          more than 2-3 words. We have a two-row button that can be used if
          necessary, but first, try shortening the text.


          Link text should be a maximum of 100 characters long, while clearly telling the user of the link content. For example: ”How to renovate your bathroom with the right waterproofing” (58 characters).
      - tags:
          - All roles
        title: 3.07 -  Make links, clickable areas and menus usable for everyone
        text: >-
          All of our users need to easily understand what elements are
          clickable. Make sure that links have a consistent appearance across
          the entire web site.


          Things to keep in mind:


          * Don’t place links too close to each other. Adding a bit of room around them means we don’t ask for unnecessary precision from our users.

          * Add a generous clickable area around the element being linked (see also 4.03)

          * Make a single link (an a-element) when you have two elements like an icon and text.


          **Read more:**


          [Understanding Success Criterion 3.2.3: Consistent Navigation](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html)


          [Gör länkar, klickbara ytor och menyer användbara för alla](https://webbriktlinjer.se/riktlinjer/34-gor-lankar-och-klickbara-ytor-enkla-att-anvanda-for-alla/)
      - tags:
          - All roles
        title: 3.08 - Text on buttons matches the machine-readable tags
        text: >-
          When users use voice control to operate a button, they usually read
          out loud the text on the button. Make sure the text on buttons and
          other UI elements matches the corresponding machine-readable tags used
          by voice control. This makes for a smoother experience for voice
          control users.


          **Read more:** 


          [Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)


          [Se till att text på knappar och kontroller överensstämmer med maskinläsbara etiketter](https://webbriktlinjer.se/riktlinjer/162-mojliggor-roststyrning-av-knappar-och-kontroller/)
      - tags:
          - All roles
        title: 3.09 - Allow for reversal of actions
        text: >-
          Occasionally, all of us accidentally press a button we did not intend.
          People with limited motoric function or impaired vision are especially
          affected by this. The option to reverse an action is very important
          because it makes the user feel more secure interacting with a service.
          The user can confidently take action without fearing doing something
          that can't be easily reversed.


          **Read more:** 


          [Understanding Success Criterion 2.5.2: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)


          [Gör det möjligt att ångra klick](https://webbriktlinjer.se/riktlinjer/161-gor-det-mojligt-att-angra-klick/)
      - tags:
          - All roles
        title: 3.10 - Make contextual interactions easy to discover
        text: >-
          When the user interacts with a button that reveals a new, contextual
          interaction, place the new


          interaction below or next to the previous interaction. The new interaction should directly follow the previous one in the tab order.
---


* [Layout och bilder](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#layout-och-bilder)
* [Text/innehåll](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#textinnehåll)
* [Klickbara ytor - knappar och länkar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#klickbara-ytor---knappar-och-länkar)
* [Formulär](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#formulär)
* [Video & animering](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#video--animering)
* [Listor](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#listor)
* [Kod & script](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#kod--script)
* [Appar](/foundations/accessibility/webbtillganglighet-punkter-i-checklistan#appar)

