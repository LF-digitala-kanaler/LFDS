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

<form> <div class="form-group" style="width: 60%" > <label for="exampleInputEmail1">Label</label> <input type="text" class="form-control" aria-describedby="emailHelp1" placeholder="placeholder-text"> <small id="emailHelp1" class="form-text text-muted">(Optional)  field description</small> </div>  </form>

</div>



</LfuiWrapper>

The three form elements should be used as follows:

* The **label** should tell the user what they are expected to enter in the form element at hand. Typical examples are "Personnummer" and "E-post".
* The **input element** can feature a placeholder text. The placeholder text should be used to give an example of expected format if there are limitations on how to write them (examples can be found under the copy-tab of the element, like here on[ input field](/components/web/forms/input-field?copy)).
* **Input descriptions** are used when we need/want to give further explanation or instructions to the user. They should also be kept short and not span more than two rows. An example is "Lämna fältet tomt om namnet inte är bestämt" from the [purchase flow for kid insurance](https://www.lansforsakringar.se/stockholm/privat/forsakring/personforsakring/gravidforsakring/ansok/).

  * The input description is also used for GDPR-compliance links as soon as the user enters personal data. It should be placed under the first field which handles personal data in a flow. Scroll down to "Fråga eller boka rådgivning" on the [contact page on lf.se](https://www.lansforsakringar.se/stockholm/privat/om-oss/kontakta-oss/) for a live example of this principle.

### Error message handling

If an error occurs during the [form validation,](form-validation) the [error message](/components/web/text/specific-use-text-styles) is placed as a part of the form element group where the error occurs as follows: 

<LfuiWrapper>

<div width="100%" style="background-color: white; padding: 8px; border: 1px dashed #B1B3B6">

<h5 style="margin-top: -19px; margin-left: -3px"> <span style="background-color: #B1B3B6; color: white; padding: 1px 3px 1px 3px;">Example of error message in form group</span></h5>

<form> <div class="form-group has-danger" style="width: 60%" > <label for="exampleInputEmail1">Label</label> <input type="text" class="form-control" aria-describedby="emailHelp1" value="Something is wrong with this input"><small class="form-control-feedback">Error messages are placed between input and input description</small> <small id="emailHelp1" class="form-text text-muted">(Optional)  field description</small> </div>  </form>

</div>

</LfuiWrapper>

As can be seen from the example, the error message is placed just below the input element, pushing the input description below it (if present at all). You can find the guidelines on how to write error messages in the [Writing-section](/patterns/general-patterns/writing).

### Designing a form

Thus far, this page has focused on how to group form elements together but when creating a form you will work with many form elements. As every form is unique, your design needs to be based on what your form is supposed to do. However, there are a few general rules of thumb you should keep in mind. All of these are present in the image below.

<figure class="Image Image__background"><img src="/img/form-grouping-examples.png" srcset="/img/form-grouping-examples.png 2x" alt="Example of form grouping"><figcaption><div class="Image__caption">Example of form grouping</div></figcaption></figure>

#### Use the grid

When placing your elements, make sure to follow [our design dimensions](/visual-identity/design-dimensions) (the grid).

#### Not more than two elements next to each other

It is often a good idea to put two different input elements next to each other to give a more compact feeling to the form. The items should have a natural connection to each other, like postal number and postal address in the example image above. Make sure to not put more than two items next to each other however as it decreases readability of the form drastically and makes it more difficult to know in which order to fill it out.

#### Make the size of the input element correspond to expected length of input

When designing a form, use the length of the element to give the user an idea of expected length of the input. If it only is a few characters (like postal number in the image above), make the input element short and let the adjacent one be bigger (like postal address above).

#### Create clusters of related information

To make longer forms easier to fill out and more intelligible to users, make sure to create clusters of input elements. In longer forms (like the one depicted above), it is common to use [panels](/components/web/page-content/panel) as a way of creating visually distinct clusters. As an added bonus, the panel provides you with headings so you can inform the user in advance what the cluster contains.