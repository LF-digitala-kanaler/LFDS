---
template: ArticlePage
category: Form patterns
title: Required fields
intro: At Länsförsäkringar we only highlight required fields when only parts of
  a form is mandatory.
background: bg-white
---
In user testing we've found that  unless there is some marker indicating that only parts of a form is mandatory user expect that all fields are required. Hence our rules for required fields are quite simple:

* We only show that a field is required when some fields on a page are mandatory and some aren't.
* When we need to show that a field is mandatory we do so with an asterisks (*) next to the label, without any whitespace in between. The asterisk should have the same styling and colour as the label.

If a field is required, the field should have proper validation. Read more about it in [form validation](../form-validation).

<LfuiWrapper script=" var form = document.getElementById("form1");         var pristine = new Pristine(form);      form.addEventListener('submit', function (e) {        e.preventDefault();                     var valid = pristine.validate();      });">

<form class="needs-validation" novalidate>

<div class="row">

<div class="col-md-6">

<div class="form-group">

<label for="validationCustom01">First name</label>

<input type="text" class="form-control" id="validationCustom01" placeholder="First name" required>

<div class="valid-feedback">

Looks good!

</div>

</div>

</div>

<div class="col-md-6">

<div class="form-group">

<label for="validationCustom02">Last name</label>

<input type="text" class="form-control" id="validationCustom02" placeholder="Last name" required>

<div class="valid-feedback">

Looks good!

</div>

</div>

</div>

</div>

<div class="row">

<div class="col-md-6">

<div class="form-group">

<label for="validationCustomUsername">Username</label>

<div class="input-group">

<div class="input-group-prepend">

<span class="input-group-text" id="inputGroupPrepend">@</span>

</div>

<input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>

<div class="invalid-feedback">

Please choose a username.

</div>

</div>

</div>

</div>

<div class="col-md-6">

<div class="form-group">

<label for="validationCustom03">City</label>

<input type="text" class="form-control" id="validationCustom03" placeholder="City" required>

<div class="invalid-feedback">

Please provide a valid city.

</div>

</div>

</div>

</div>

<div class="row">

<div class="col-md-6">

<div class="form-group">

<label for="validationCustom04">State</label>

<input type="text" class="form-control" id="validationCustom04" placeholder="State" required>

<div class="invalid-feedback">

Please provide a valid state.

</div>

</div>

</div>

<div class="col-md-6">

<div class="form-group">

<label for="validationCustom05">Zip</label>

<input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>

<div class="invalid-feedback">

Please provide a valid zip.

</div>

</div>

</div>

</div>

<div class="row">

<div class="col-12 text-right">

<button class="btn btn-sm-block btn-primary mb-2" type="submit">Submit form</button>

</div>

</div>

</form>
</LfuiWrapper>
