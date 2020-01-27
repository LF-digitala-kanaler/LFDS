---
template: ComponentPage
category: Forms
title: Input field
description: >-
  Input fields are fields in which the user can enter text of some type (be it
  letters or numbers).
previewImage: /img/panel.svg
intro: >-
  Input fields are fields in which the user can enter text of some type (be it
  letters or numbers). This section describes the styling of input fields and
  the various versions which exist.
backgroundColor: '#f3f3f3'
tabs:
  - content: >-
      ## How to use


      Use an input field when you want the user to enter some information freely
      (use another [form](../) option if they only can select from a set number
      of options). The input field has two companion elements, the label and
      help text (see the [forms landing page](../) for a description of them).


      ### Variations


      There are two mains variations of input fields, the one-lined and the one
      spanning over several lines/rows. The one-lined in addition can be
      modified in a number of ways.


      #### One-lined text input


      The one-lined text input field is the most commonly used input type and is
      used when you want a specific input from the user (such as e-mail, a value
      or subject). Depending on context and amount of space available you can
      put either one or two one-lined input fields on a row by using _**the
      grid**_. If you place two input fields on the same row they should have
      the same size. See images below for an example.


      A one-lined text input field on a row


      ![Example of an input field](/img/one-lined-input-field.png "A one-lined
      input field")


      Two one-lined text input fields on a row


      ![Two one-lined input fields on a row with extra
      content](/img/two-one-lined-on-a-row.png "Two one-lined input fields on a
      row")


      #### Modifiers


      The one-lined text input has several modifiers, all described below.

      ##### Datepicker

      Although a form of input field as well from a user
      perspective, the datepicker is treated as a separate component. [Go
      here](../datepicker) to read about it.

      ##### Password

      If an input field contains a password or other sensitive
      data the please use the password modifier. It follows web standards and
      translates characters into asterisks as they are entered.

      ##### Prefix

      If you need to put a label of sorts prior to the actual input
      area you can add the modifier "prefix". It might be usable in a context
      where the user has to enter a twitter handle or URL, but no actual uses of
      prefix with text are known at time of writing. It is however a technical
      prerequisite for the more common "prefix as image". 

      ##### Prefix as image

      A version of prefix where the text has been replaced
      with an image. The most common usage is relation to motor insurances and
      when users are asked to provide the number plate of the vehicle they want
      to insure/make a claim on.

      ##### Suffix
      
      Adds a label to the end of the input field, most commonly the
      unit (e.g. "kr", "years" and "m²"). 


      #### Text input with several lines (Textarea)


      If you need a text input field which spans several rows you should use the
      textarea-component. It is typically (perhaps exclusively) used for message
      text when the user can write a message to us. Although we set a height
      when the textarea the user can change the height of the textarea within
      its column as is web standard - we have however disabled horisontal
      resizing.
    name: Design
  - content: content code
    name: Code
  - content: content code
    name: Code
---

