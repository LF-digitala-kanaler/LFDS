---
template: ArticlePage
category: Form patterns
title: Form element grouping
intro: Describes how to group input fields, labels and input field descriptions.
description: Describes how to group input fields, labels and input field descriptions.
wide: false
lang: false
hidden: false
---
<LfuiWrapper>
<div width="100%" style="background-color: white; padding: 8px">

<h6 style:"z-index: -10">Example of correct form element grouping</h6>

<form> <div class="form-group"> <label for="exampleInputEmail1">Heading</label> <input type="text" class="form-control" aria-describedby="emailHelp1" placeholder="placeholder-text"> <small id="emailHelp1" class="form-text text-muted">(Optional) input field description</small> </div>  </form>

</div>
</LfuiWrapper>



Saker att ha med:

labels (över eller till vänster om)

input fields (deras relation till övrigt)

hjälptexter (input field descriptions)

hur felmeddelanden dyker upp och relationen till hjälptexter