---
template: ArticlePage
category: Design dimensions
title: Form validation
intro: >-
  Initial form validation at Länsförsäkringar is done as the user submits a form
  page. If there are any errors the user is automatically scrolled to topmost
  error. As the user starts to correct errors they get immediate feedback on
  their progress.
---
The rules for form validation are based on a combination of academic research and our own user testing. Our review of academic research on form validation found that there are two general patterns which outperform others when user experience, completion time and amount of errors. When these two patterns were tested on LFUI-styled design we found that users preferred and expected the following pattern:

1. Let the users fill out the form without interrupting them with error messages. \
   * Exception: if the field has a specific length (e.g. "personnummer", "registreringsnummer") and the user enters more characters than is expected.
2. When the user submits the form any potential error messages are shown to them. This includes warnings if a required field has been left blank.
3. The user is automatically scrolled to the topmost error (if several, otherwise the error). Again, including blank required fields.
4. As the user starts to correct the error it is controlled live, which means we can provide the user with positive feedback as soon as they've corrected the error.\
   * If a required field has been left blank the error message is removed as soon as the user starts entering text/data into the field. From there on validation follows the general pattern.



## Technical description

* Specific field validation is controlled/fired when the user leaves the input (onBlur). The validation is not "live" on each change to the value to avoid interrupting and distracting the user with an error stating the value is faulty before the user has had a chance to fill it out completely.
* When going back to a validated field with an error, validation is then controlled "live" on each change to the value. This is to give a positive interaction to the user upon filling the form out correctly.
* An exception to the two points above is when an input field asks for a value with a specific length (i.e personnummer, registreringsnummer). Upon reaching the specific length, the value can be validated before the user leaves the field. Never before reaching the specific length, though.
* Seeing if all required input fields have been filled out at all is controlled when clicking the submit button.
* If a field has a validation error due to the point above (that is, not having a value at all), the validation error message is removed when the user begins to fill out the input field. Validation then follows the "regular" validation.
