---
template: ArticlePage
category: Form patterns
title: Form element grouping
intro: Describes how to group input elements, labels and input descriptions as
  well as how error messages should be handled.
description: Describes how to group input elements, labels and input
  descriptions as well as how error messages should be handled.
wide: false
lang: false
hidden: false
---
Our various [input elements](/components/web/forms/) (such as [input fields](/components/web/forms/input-field), [dropdowns](/components/web/forms/dropdown), etc) are all grouped together with labels and input descriptions in the same manner. Error messages for forms are also part of the form element grouping and are thus also described on this page.

Below is an example of how form elements should be grouped, with the [label](/components/web/text/specific-use-text-styles#labels) above the input element. If an [input description](/components/web/text/specific-use-text-styles) is needed, it should be placed below the form element.

<LfuiWrapper>
<div width="100%" style="background-color: white; padding: 8px; border: 1px dashed #B1B3B6">

<h5 style="margin-top: -19px; margin-left: -3px"> <span style="background-color: #B1B3B6; color: white; padding: 1px 3px 1px 3px;">Example of correct form element grouping</span></h5>

<form> <div class="form-group"> <label for="exampleInputEmail1">Label</label> <input type="text" class="form-control" style="width: 50%" aria-describedby="emailHelp1" placeholder="placeholder-text"> <small id="emailHelp1" class="form-text text-muted">(Optional)  field description</small> </div>  </form>

</div>
</LfuiWrapper>

The three form elements should be used as follows:

* The **label** should tell the user what they are expected to enter in the form element at hand. Typical examples are "Personnummer" and "E-post".
* The **input element** can feature a placeholder text. The placeholder text should be used to give an example of expected format if there are limitations on how to write them (examples can be found under the copy-tab of the element, like here on[ input field](/components/web/forms/input-field?copy)).
* **Input descriptions** are used when we need/want to give further explanation or instructions to the user. They should also be kept short and not span more than two rows. An example is "Lämna fältet tomt om namnet inte är bestämt" from the [purchase flow for kid insurance](https://www.lansforsakringar.se/stockholm/privat/forsakring/personforsakring/gravidforsakring/ansok/).

  * The input description is also used for GFPR-compliance links as soon as the user enters personal data. It should be placed under the first field which handles personal data in a flow.



Saker att ha med:

labels (över)

input fields (deras relation till övrigt)

hjälptexter (input field descriptions)

hur felmeddelanden dyker upp och relationen till hjälptexter



flera element