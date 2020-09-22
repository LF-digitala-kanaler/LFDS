---
template: ArticlePage
category: Form patterns
title: Form element grouping
intro: Describes how to group input elements, labels and input descriptions as
  well as how error messages should be handled.
description: Describes how to group input elements, labels and input
  descriptions as well as how error messages should be handled.
background: bg-white
wide: false
lang: false
hidden: false
---
Our various [input elements](/components/web/forms/) (such as [input fields](/components/web/forms/input-field), [dropdowns](/components/web/forms/dropdown), etc) are all grouped together with labels and input descriptions in the same manner. Error messages for forms are also part of the form element grouping and are thus also described on this page. If you're looking for information on how to design a form, please refer to [Form layout](form-layout).

Below is an example of how form elements should be grouped, with the [label](/components/web/text/specific-use-text-styles#labels) above the input element. If an [input description](/components/web/text/specific-use-text-styles) is needed, it should be placed below the form element.

The three form elements should be used as follows:

* The **label** should tell the user what they are expected to enter in the form element at hand. Typical examples are "Personnummer" and "E-post".
* The **input element** can feature a placeholder text. The placeholder text should be used to give an example of expected format if there are limitations on how to write them (examples can be found under the copy-tab of the element, like here on[ input field](/components/web/forms/input-field?copy)).
* **Input descriptions** are used when we need/want to give further explanation or instructions to the user. They should also be kept short and not span more than two rows. An example is "Lämna fältet tomt om namnet inte är bestämt" from the [purchase flow for kid insurance](https://www.lansforsakringar.se/stockholm/privat/forsakring/personforsakring/gravidforsakring/ansok/).

  * The input description is also used for GDPR-compliance links as soon as the user enters personal data. It should be placed under the first field which handles personal data in a flow. Scroll down to "Fråga eller boka rådgivning" on the [contact page on lf.se](https://www.lansforsakringar.se/stockholm/privat/om-oss/kontakta-oss/) for a live example of this principle.

### Error message handling

If an error occurs during the [form validation,](form-validation) the [error message](/components/web/text/specific-use-text-styles) is placed as a part of the form element group where the error occurs as follows: 

<LfuiWrapper>
<div>www</div>
console.log('a1');
</LfuiWrapper>

As can be seen from the example, the error message is placed just below the input element, pushing the input description below it (if present at all). You can find the guidelines on how to write error messages in the [Writing-section](/patterns/general-patterns/writing).