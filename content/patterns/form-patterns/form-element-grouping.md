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
<form> <div class="form-group"> <label for="exampleInputEmail1">Personnummer</label> <input type="text" pattern="\[0-9]{6,8}-?\[0-9]{4}" required="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp1" placeholder="ååååmmdd-nnnn"> <small id="emailHelp1" class="form-text text-muted">Vi använder din folkbokföringsadress</small> </div> <div class="form-group"> <label for="exampleInputPassword1">Lösenord</label> <input type="password" required="" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div> <div class="form-group"> <label for="exampleInputEmail2">Personnummer</label> <input type="email" required="" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp2" placeholder="920618-0808" disabled=""> <small id="emailHelp2" class="form-text text-muted">Vi använder din folkbokföringsadress</small> </div> <div class="form-group"> <label for="exampleTextarea">Meddelande</label> <textarea class="form-control" required="" id="exampleTextarea" rows="3"></textarea> </div> </form>
</LfuiWrapper>



Saker att ha med:

labels (över eller till vänster om)

input fields (deras relation till övrigt)

hjälptexter (input field descriptions)

hur felmeddelanden dyker upp och relationen till hjälptexter