---
template: ArticlePage
title: Deprecated
intro: "This page lists components that have been tagged as deprecated in LFUI. What this means is that the component is no longer in use and should be removed and replaced by its substitute (which you can likely find in its respective page)."
hidden: true
---

<div class="Callout"><strong class="Callout__title">Note</strong><p class="Callout__text">The elements/components on this page may not have proper styling, should their styling has been removed from LFUI since being added to this page.</p></div>

## Pagination-progress
- Marked as deprecated in 5.3.0

This was made deprecated in order for our simple, standard pagination component to be the only one.


<Lfuiwrapper>
<ul class="pagination pagination-progress">
    <li class="page-item "><a href="#" class="page-link">1. <span class="page-link-description">Logga in med BankID</span></a></li>
    <li class="page-item"><a href="#" class="page-link">2. <span class="page-link-description">Beskriv olyckshändelsen</span></a></li>
    <li class="page-item"><a href="#" class="page-link">3. <span class="page-link-description">Var det någon mer där?</span></a></li>
    <li class="page-item"><a href="#" class="page-link">4. <span class="page-link-description">Dina kontaktuppgifter</span></a></li>
  </ul>
  <br />
  <ul class="pagination pagination-progress">
    <li class="page-item"><a href="#" class="page-link">1. <span class="page-link-description">Logga in med BankID</span></a></li>
    <li class="page-item"><a href="#" class="page-link">2. <span class="page-link-description">Beskriv olyckshändelsen</span></a></li>
    <li class="page-item "><a href="#" class="page-link">3. <span class="page-link-description">Var det någon mer där?</span></a></li>
    <li class="page-item"><a href="#" class="page-link">4. <span class="page-link-description">Dina kontaktuppgifter</span></a></li>
  </ul>
</Lfuiwrapper>

##  Pagination-colored
 - Marked as deprecated in 5.3.0

This was made deprecated in order for our simple, standard pagination component to be the only one.

<Lfuiwrapper>
<ul class="pagination pagination-colored">
  <li class="page-item"><span class="page-link">1</span></li>
  <li class="page-item"><span class="page-link">2</span></li>
  <li class="page-item "><span class="page-link">3</span></li>
  <li class="page-item"><span class="page-link">4</span></li>
</ul>
<ul class="pagination pagination-flex pagination-colored">
  <li class="page-item"><span class="page-link">1</span></li>
  <li class="page-item"><span class="page-link">2</span></li>
  <li class="page-item "><span class="page-link">3</span></li>
  <li class="page-item"><span class="page-link">4</span></li>
</ul>
</Lfuiwrapper>

## Paginations-steps 
 - Marked as deprecated in 5.3.0

This was made deprecated in order for our simple, standard pagination component to be the only one.

<Lfuiwrapper>
<ol class="pagination-steps">
  <li class="page-item"><strong>Pick insurance</strong></li>
  <li class="page-item"><strong>Enter credentials</strong></li>
  <li class="page-item "><strong>Summary</strong></li>
  <li class="page-item"><strong>Receipt</strong></li>
</ol>
</Lfuiwrapper>

## Bold links
- Marked as deprecated in 5.2.0

This bold variant of our links has been deprecated as its usage was unclear and unecessary, leading to confusing ux-patterns. Resort to the normal, secondary links.

<Lfuiwrapper>
<button type="button" class="btn btn-link-bold" tabindex="-1">
  Secondary link bold
</button>
</Lfuiwrapper>

## Button outline primary
- Marked as deprecated in 4.2.0

This button has been removed in favor for our secondary buttons btn-outline-secondary, making our primary buttons always btn-primary and without variations.

<Lfuiwrapper>
<button class="btn btn-outline-primary">Click me</button>
</Lfuiwrapper>

## Disabled buttons
- Marked as a deprecated pattern in 4.2.0

LFUI does not encourage the use of disabled buttons.

Instead of a disabled button, make the button clickable and give the user a message on why it does not function, and what the user is needed to do in order to make it function. If the button is never intended to function, do not include the button at all to begin with.

<Lfuiwrapper>
<button class="btn btn-primary disabled">Don't click me</button>
<button class="btn btn-outline-secondary disabled">Don't click me</button>
</Lfuiwrapper>

## Modal-air
- Marked as deprecated in 5.1.0 The .modal-air class has been deprecated. Its appearance is now the default appearance of any modal.

## Automatic form validation
- Marked as deprecated in 5.1.0

The previous automatic validation specified below on forms and custom-forms has been removed. You now have to apply valid-classes yourself through Javascript.

All form elements have their valid state applied when the form element has a valid value (styles do not apply whilst the element has focus). We use the browsers native :valid selector to achieve this, so ensure to implement proper type and pattern attributes. To disable validation add the novalidate property to the enclosing form element.

If you implement custom validation it is recommended that you set the formnovalidate property on the submit button to enjoy the benefits of visual validation without the actual native validation happening.

