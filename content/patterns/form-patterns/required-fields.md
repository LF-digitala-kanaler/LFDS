---
template: ArticlePage
category: Form patterns
title: Required fields
intro: >-
  At Länsförsäkringar we only highlight required fields when only parts of a
  form is mandatory.
---
In user testing we've found that  unless there is some marker indicating that only parts of a form is mandatory user expect that all fields are required. Hence our rules for required fields are quite simple:

* We only show that a field is required when some fields on a page are mandatory and some aren't.
* When we need to show that a field is mandatory we do so with an asterisks (*) next to the label, without any whitespace in between. The asterisk should have the same styling and colour as the label.

If a field is required, the field should have proper validation. Read more about it in [form validation](../form-validation).

# Här ska sen klickbara exempel på validering ligga. Typ de som ligger i nuvarande LFUI, fast med korrekt formattering på valideringen.
