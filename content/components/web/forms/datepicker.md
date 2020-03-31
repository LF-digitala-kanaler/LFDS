---
template: ComponentPage
category: Forms
title: Datepicker
description: The datepicker is the input field used when a date is the expected input.
previewImage: /img/datepicker.svg
intro: >-
  The datepicker is the input field used when a date is the expected input. It
  is designed so that the user can either choose the date from a calendar or
  enter it manually.
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      Use the datepicker when you want the user to enter a date or time in
      another manner.


      Visually the datepicker looks like a normal input field with a calendar
      icon in right part of the field. Interactionwise a calendar is expanded
      when the clicks anywhere in the input field (including on the calendar
      icon), in which the user can choose the date they wish to choose. If they
      prefer, the input field can also be used to manually enter the date.


      ### Modifiers


      There are a few modifiers available for the datepicker:


      * There is as a version called **timepicker**, which works like the
      datepicker but lets the user choose a time rather than a day

      * You can choose to disabled dates if needed. Examples of use case for
      this are buying an insurance (not possible earlier than today) or doing an
      injury claim (had to happen today or earlier). You can also choose to
      disable a specific time span.


      ## Please consider


      For accessibility reasons the datepicker should be replaced with the
      native solution for date selection in mobile devices. Make sure your
      developers are aware!
    name: Design
  - content: content code
    name: Copy
  - content: >-
      ## How to use


      LFUI uses the `eonasdan-bootstrap-datetimepicker`package. It has plenty of
      options and functions. Refer to the official website for a [complete
      documentation](http://eonasdan.github.io/bootstrap-datetimepicker/Options/).


      The datepicker is fully responsive. Do note that the dropdown stretches
      with a`width: 100%`of its parent input field which might disrupt its
      styling. Its preferred width is`336px`.


      **In order for screen readers to not get disrupted by the datepicker and
      its complex html structure**, we disable the datepicker dropdown
      completely for screen readers by adding the following script to
      the`dp.show`event:


      ```

      $('.datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden',
      'true');

      ```


      **In mobile devices**it is important to utilize the native solution for
      date selection on the device, hence we hide the datepicker dropdown and
      change the input to type="date" and for time type="time". An example to
      this with javascript is:


      ```

      //Change the input type to date

      if (/Mobi/.test(navigator.userAgent)) {
        $('datetimepickerinput').type='date';
        $('datetimepickertimeinput').type='time';
      }


      //Hide the datepicker dropdown, called on 'dp.show' event.

      $('.datepicker').on('dp.show', function(){
        if (/Mobi/.test(navigator.userAgent)) {
          $('.datepicker .bootstrap-datetimepicker-widget').css('display', 'none');
        });
      }

      ```
    name: Code
---
