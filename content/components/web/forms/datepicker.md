---
template: ComponentPage
title: Datepicker
intro: The datepicker is the input field used when a date is the expected input.
  It is designed in such a way that the user can either choose the date from a
  calendar or enter it manually.
description: The datepicker is the input field used when a date is the expected
  input.
previewImage: /img/datepicker.svg
category: Forms
componentsNavigation:
  - name: Datepicker
  - name: Timepicker
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      Use the datepicker when you want the user to enter a date or time.


      ### Dates and times


      There are two main variants of the datepicker, one for dates and one for
      times.


      #### Datepicker


      As per best practices, the datepicker is a plain input field with an
      accompanying icon which, when clicked, opens a calendar widget. This
      allows for both keyboard input as well as usage of the interactive widget.


      #### Timepicker


      The timepicker has some slightly different charactersitics. It'll open
      the widget once the input field receives focus and the icon is merely
      decorational.


      ##### On mobile devices


      The timepicker is not well suited for mobile devices and hence it is
      adviced that the timepicker be repalced with a native input control on
      mobile devices.


      ## Other material


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Form/Datepicker)
    name: Design
  - content: Vi fyller i fältet med dd-mm-åååå.
    name: Copy
  - content: >-
      ## How to use


      ### Datepicker


      The datepicker uses [`@duetds/date-picker](https://duetds.github.io/date-picker/).
      The datepicker is a progressively enhanced input field which is upgraded
      to a custom element once initalized.


      The datepicker respects native input attributes for controlling e.g.
      minimum or maximum dates one can select.


      The datepicker can be customized further either by providing an options
      object on initialization or by defining `data-` attributes on the input
      field. Refer to the [offical documentation](https://github.com/duetds/date-picker)
      for configutation options.


      #### The Markup


      ```

      <div class="form-group">
        <label for="my-date">Choose a date</label>
        <div class="input-group">
          <input type="date" id="my-date" name="date" class="form-control" required>
          <span class="input-group-append">
            <button class="btn" type="button" aria-controls="my-date" title="Välj datum">
              <svg class="icon" width="26" height="26">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>

      ```


      #### Initialization


      ```

      import { datepicker } from '@lf-digitala-kanaler/lfui'


      datepicker(document.getElementById('my-date'))

      ```



      The default configuration for the datepicker is available as a named
      export, `DEFAULTS`. These can be extended upon to selectively override
      certain options.


      ```

      import { datepicker, DEFAULTS } from '@lf-digitala-kanaler/lfui'


      datepicker(document.getElementById('my-date'), {
        localization: {
          ...DEFAULTS.localization,
          closeLabel: 'Abort'
        }
      })

      ```


      ### Timepicker


      The timepicker uses the `eonasdan-bootstrap-datetimepicker` package. It
      has plenty of options and functions. Refer to the official website for a
      [complete documentation](http://eonasdan.github.io/bootstrap-datetimepicker/Options/).


      The timepicker is fully responsive. Do note that the dropdown stretches
      with a `width: 100%` of its parent input field which might disrupt its
      styling. Its preferred width is`336px`.


      **In order for screen readers to not get disrupted by the timepicker and
      its complex html structure**, we disable the timepicker dropdown
      completely for screen readers by adding the following script to
      the `dp.show` event:


      ```

      $('.datetimepicker .bootstrap-datetimepicker-widget').attr('aria-hidden', 'true');

      ```


      **In mobile devices** it is important to utilize the native solution for
      date selection on the device, hence we hide the timepicker dropdown and
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

      #### The Markup


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
    name: Code
---
