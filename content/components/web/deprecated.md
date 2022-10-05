---
template: ArticlePage
title: Deprecated
intro: 'Components that have been marked as no longer in use.  Deprecation can happen because of changes to our UX principles, the scope of LFDS, or when a component has been replaced by a superior alternative.'
---

## Navbar

- Marked as deprecated in 10.1.0

The vertical and horizontal navigation bars implemented in LFUI was old and out of sync with reality. This might be brought back (likely in collaboration with Mina Sidor team), but as for now – it is no more.

## Charts

- Marked as deprecated in 10.0.0

The below statistical components are now deprecated. The charts in LFDU were mostly examples of d3.js implementation and had been neglected for years. The code has been kept for backward compatibility but is now being dropped as it slowed down progress on build scripts and structural improvements.

Distribution Bar, XY-plot Chart, Map Chart, Line Chart, Donut Chart, Bar Chart

We might reintroduce various charts in upcoming releases, with a fresh and serious take on it, together with the broader design team.

## Dropdown

- Marked as deprecated in 8.0.0
- Removed in 10.0.0

The Dropdown component was marked as deprecated in favor of the newly introduced [Dropdown select](/components/web/forms/select) component. Select inherits the same functionality as Dropdown, but adds a few key features:

- Keyboard navigation
- Screen reader support
- Semantic markup
- Automatic mobile vs desktop detection
- Alternative layout with the label inside

## Button outline secondary

- Marked as deprecated in 6.6.0

This button variation, `.btn-outline-secondary`, was removed in favor of our secondary buttons, `btn-secondary`, making our buttons default to primary.

## Pagination progress, colored and steps

- Marked as deprecated in 5.3.0

This alternatives to our pagination component was mark as deprecated to simplify – having only one standard pagination component.

Effected classes are: `pagination-progress`, `pagination-colored` and
`pagination-steps`

## Bold links

- Marked as deprecated in 5.2.0

The bold variant of our links was marked as deprecated because they were unclear and unnecessary which lead to confusing UX patterns. Resort to the normal, secondary links instead.

## Button outline primary

- Marked as deprecated in 4.2.0

This button variation, `.btn-outline-primary`, was removed in favor of our secondary buttons, `btn-secondary`, making our buttons default to primary.

## Disabled buttons

- Marked as a deprecated pattern in 4.2.0

Länsförsäkringar does no longer encourages the use of disabled buttons.

Instead, keep buttons clickable and display a message on why it does not function when it's clicked, along with what the user should do to make it function. If a button is never intended to be functional, do not include it, to begin with.

## Modal-air

- Marked as deprecated in 5.1.0

The `.modal-air` appearance was made the default look for modals.

## Automatic form validation

- Marked as deprecated in 5.1.0

Automatic validation, specified below, is no longer included. You now have to apply the correct classes yourself with JavaScript.

All form elements have their valid state applied when it has a valid value. The styles do not apply whilst the element has focus. The native `:valid` selector is used to achieve this, so ensure to implement proper type and pattern attributes. To disable validation, add the `novalidate` property to the enclosing form element.

If you implement custom validation, we recommend that you set the `formnovalidate` property on the submit button, to enjoy the benefits of visual validation without the actual native validation logic being triggered.
