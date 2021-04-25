---
template: ComponentPage
title: Datepicker
intro: The datepicker is the input field used when a date is the expected input.
  It is designed in such a way that the user can either choose the date from a
  calendar or enter it manually.
description: The datepicker is the input field used when a date is the expected input.
previewImage: /img/datepicker.svg
category: Forms
componentsNavigation:
  - name: Datepicker
  - name: Timepicker
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      Use the datepicker when you want the user to enter a date or time in another manner.


      Visually the datepicker looks like a normal input field with a calendar icon in right part of the field. Interaction-wise a calendar is expanded when the user clicks anywhere in the input field (including on the calendar icon) - in the calendar the user can select the date they wish to choose. If they prefer, the input field can also be used to enter the date with the keyboard.


      ### Variations


      There are a few variations available for the datepicker:


      * There is as a variation called **timepicker**, which works like the datepicker but lets the user choose a time rather than a day

      * You can choose to disable dates if needed. Examples of use case for this are selecting from when an insurance is valid (not possible earlier than today) or doing an injury claim (had to happen today or earlier). You can also choose to disable a specific time span.


      ## Please consider


      For accessibility reasons the datepicker should be replaced with the native solution for date selection in mobile devices. Make sure your developers are aware!


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Datepicker)
    name: Design
  - content:
      Vi fyller i fältet med ååååmmdd eller exempelvis åå-mm-nn beroende på
      hur man måste skriva datumet.
    name: Copy
  - content: >-
      ## How to use


      LFUI uses the `eonasdan-bootstrap-datetimepicker` package. It has plenty of options and functions. Refer to the official website for a [complete documentation](http://eonasdan.github.io/bootstrap-datetimepicker/Options/).


      The datepicker is fully responsive. Do note that the dropdown stretches with a `width: 100%` of its parent input field which might disrupt its styling. Its preferred width is`336px`.


      **In order for screen readers to not get disrupted by the datepicker and its complex html structure**, we disable the datepicker dropdown completely for screen readers by adding the following script to the`dp.show` event:


      ```

      $('.datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');

      ```


      **In mobile devices** it is important to utilize the native solution for date selection on the device, hence we hide the datepicker dropdown and change the input to type="date" and for time type="time". An example to this with javascript is:


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


      ### Variants


      There is two different variants of datepicker. One which let the user pick a date and one that let the user pick a time. 


      #### Date


      ```

      <div class="form-group" style="width: 336px;">
        <div class="input-group datepicker" id="datetimepicker">
          <input type="text" id="datetimepicker-input" class="form-control" placeholder="åååå-mm-dd" required/>
          <span class="input-group-append">
            <button class="btn" type="button" tabIndex="-1">
              <svg class="icon" width="26" height="26">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-calendar-26"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>

      ```


      There is a lot of options you can use when initialize the datepicker. See to the official website for a [complete documentation](http://eonasdan.github.io/bootstrap-datetimepicker/Options/).


      ```

      $('#datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: 'sv',
        allowInputToggle: true,
        defaultDate: '2017/06/02'
      });

      ```


      #### Time


      ```

      <div class="form-group" style="width: 336px;">
        <div class="input-group datepicker" id="timepicker">
          <input type="text" id="timepicker-input" class="form-control" placeholder="hh:mm" required/>
          <span class="input-group-append">
            <button class="btn" type="button" tabIndex="-1">
              <svg class="icon" width="26" height="26">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-clock-24"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>

      ```


      Initialize it: 


      ```

      $('#timepicker').datetimepicker({
        format: 'LT',
        locale: 'sv',
        allowInputToggle: true,
        icons: {
          up: 'next',
          down: 'prev',
        }
      });

      ```


      ### Modifiers


      As mention before there is a lot of customisation you can do. One that we use regular is to disabled dates. 


      ##### Disabled dates


      ```

      ('#datetimepicker-disabled').datetimepicker({
        format: 'YYYY-MM-DD',
        locale: 'sv',
        allowInputToggle: true,
        defaultDate: '2017/06/02',
        disabledDates: [
          '2017/06/04',
          '2017/06/05',
          '2017/06/06'
        ]
      });

      ```


      ### Please note


      When used with an icon as in the examples on this page you will have to toggle the `active`-state by yourself. it could look look something like this. 


      ```

      // Set a correct active state for the button

      $('.datepicker').on('dp.show', function(){
        $('#datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');
        $('.datepicker button').addClass('active');
      });


      $('.datepicker').on('dp.hide', function(){
        $('.datepicker button').removeClass('active');
      });

      ```
    name: Code
---
