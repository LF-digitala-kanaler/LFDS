---
template: ArticlePage
category: Form patterns
title: Form element grouping
intro: Describes how to group input fields, labels and input field descriptions
  as well as how error messages should be handled.
description: Describes how to group input fields, labels and input field
  descriptions  as well as how error messages should be handled.
wide: false
lang: false
hidden: false
---
Our various [form elements](/components/web/forms/) (such as [input fields](/components/web/forms/input-field), [dropdowns](/components/web/forms/dropdown), etc) are all grouped together with labels and input field descriptions in the same manner. Error messages for forms are also part of the form element grouping and are thus also described on this page.

Below is an example of how form elements should be grouped, with the label above the form element. If a field description is needed, it should be placed below the form element.

<LfuiWrapper>
<div width="100%" style="background-color: white; padding: 8px; border: 1px dashed #B1B3B6">

<h5 style="margin-top: -19px; margin-left: -3px"> <span style="background-color: #B1B3B6; color: white; padding: 1px 3px 1px 3px;">Example of correct form element grouping</span></h5>

<form> <div class="form-group"> <label for="exampleInputEmail1">Heading</label> <input type="text" class="form-control" style="width: 50%" aria-describedby="emailHelp1" placeholder="placeholder-text"> <small id="emailHelp1" class="form-text text-muted">(Optional)  field description</small> </div>  </form>

</div>
</LfuiWrapper>





Saker att ha med:

labels (över eller till vänster om)

input fields (deras relation till övrigt)

hjälptexter (input field descriptions)

hur felmeddelanden dyker upp och relationen till hjälptexter