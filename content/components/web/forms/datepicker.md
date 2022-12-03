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
  - name: Monthpicker
  - name: Timepicker
backgroundColor: '#fff'
tabs:
  - name: Design
    content: >-
      ## How to use


      Use the datepicker when you want the user to enter a date or time.


      ### Dates and times


      There are two main variants of the datepicker, one for dates and one for
      times.


      #### Datepicker


      As per best practices, the datepicker is a plain input field with an
      accompanying icon which, when clicked, opens a calendar widget. This
      allows for both keyboard input as well as usage of the interactive widget.


      #### Monthpicker


      The monthpicker is a variant of the date picker with the same
      characteristics and functionality.


      #### Timepicker


      The time picker relies on the native browser time picker which supports
      all the behaviour you would expect from a time picker.

  - name: Code
    content: >-
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

      import { datepicker } from '@lansforsakringar/components'


      datepicker(document.getElementById('my-date'))

      ```



      The default configuration for the datepicker is available as a named
      export, `DEFAULTS`. These can be extended upon to selectively override
      certain options.


      ```

      import { datepicker, DEFAULTS } from '@lansforsakringar/components/datepicker'


      datepicker(document.getElementById('my-date'), {
        localization: {
          ...DEFAULTS.localization,
          closeLabel: 'Abort'
        }
      })

      ```


      ### Monthpicker


      The monthpicker borrows most of its appearence and functionality from the
      datepicker. And just as the datepicker, the monthpicker exposes a function
      for intializing an input (`type="month"`) field. The initialization
      function returns a container `div` element which has replaced the `input`
      element. To react to changes in the monthpicker, listen to the `change`
      event triggered on the returned `div` element.



      ```

      <div class="form-group">
        <label for="my-month">Choose a month</label>
        <div class="input-group">
          <input type="month" id="my-month" name="month" class="form-control" required />
          <span class="input-group-append">
            <button class="btn" type="button" aria-controls="my-month" title="Välj månad">
              <svg class="icon" width="26" height="26">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>

      ```



      ```

      import { monthpicker } from '@lansforsakringar/components'


      const container = monthpicker(document.getElementById('my-month'))


      container.addEventListener('change', ({ value }) => {
        console.log(value)
      })

      ```



      The default configuration for the datepicker is available as a named
      export, `DEFAULTS`. These can be extended upon to selectively override
      certain options.


      ```

      import { monthpicker, DEFAULTS } from '@lansforsakringar/components/monthpicker'


      datepicker(document.getElementById('my-month'), {
        localization: {
          ...DEFAULTS.localization,
          closeLabel: 'Abort'
        }
      })

      ```



      #### Implementations



      Other than the default initialization function the month picker is also
      exposed as both a Web Component and as a Preact component. Preact is
      really an implementation detail but exposing the component should allow
      for easier use in an JSX environment, with some configuration.



      ##### Properties



      Both alternate implemnations support the same set of properties which
      allows for interacting with the monthpicker.



      | Property | Type | Description |

      | --- | --- | --- |

      | `open` | `boolean` | Whether the monthpicker widget is open |

      | `value` | `string` | The value of the monthpicker (`YYYY-MM`) |

      | `onchange`/`onChange` | `function` | Callback function for when the value changes |

      | `onfocus`/`onFocus` | `function` | Callback function for when the input element gains focus |

      | `onblur`/`onBlur` | `function` | Callback function for when focus leaves the input element |

      | `onclose`/`onClose` | `function` | Callback function for when the widget is closed |



      ##### Web Component



      Other than the default initialization function the monthpicker is exposed
      as standalone [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
      When using the Web Component you have to manually hook up the controls
      which e.g. toggle the calendar widget.



      ```

      <div class="form-group">
        <label for="my-month">Choose a month</label>
        <div class="input-group">
          <duet-month-picker id="my-month" name="month" required></duet-month-picker>
          <span class="input-group-append">
            <button class="btn" type="button" aria-controls="my-month" title="Välj månad">
              <svg class="icon" width="26" height="26">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>

      ```



      ```

      let open = false


      const button = document.querySelector('[aria-controls="my-month"]')

      const monthpicker = document.getElementById('my-month')

      const toggle = (next = !open) => {
        monthpicker.open = open = next
        button.classList.toggle('active', open)
      }


      monthpicker.onclose = () => toggle(false)

      monthpicker.onchange = ({ value }) => console.log(value)


      button.addEventListener('click', () => toggle())

      ```



      ##### Preact Component



      The underlying implementation uses [Preact](https://preactjs.com/) and is
      hence compatible with React which could ease the implementation if used
      directly. When using the Preact component you have to manually hook up the
      controls which e.g. toggle the calendar widget.




      ```

      import { Monthpicker } from '@lansforsakringar/components/monthpicker'


      function App() {
        const [open, setOpen] = useState(false)

        return (
          <div class="input-group">
            <div class="duet-month-picker">
              <Monthpicker
                open={open}
                id="my-monthpicker"
                onChange={({ value }) => console.log(value)}
                onClose={() => setOpen(false)}
              />
            </div>
            <span class="input-group-append">
              <button
                type="button"
                title="Välj månad"
                aria-controls="my-monthpicker"
                class={`btn ${open ? 'active' : ''}`}
                onClick={() => setOpen(!open)}>
                <svg class="icon" width="26" height="26">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#calendar-26"></use>
                </svg>
              </button>
            </span>
          </div>
        )
      }

      ```



      For use with React you will have to alias `preact/hooks` to `react` and
      inject the react `import` statement into the Preact component. Consult
      your build tool docs for how to do this. Here's how it'd be done with e.g.
      [Vite](https://vitejs.dev/).




      ```

      export default {
        esbuild: {
          jsxInject: "import React from 'react'"
        },
        resolve: {
          alias: {
            'preact/hooks': 'react'
          }
        }
      }

      ```



      ### Timepicker


      The timepicker is the system default `input[type=time]` element.


      ```

      <div class="form-group" style="width: 336px;">
        <div class="input-group datepicker" id="timepicker">
          <input type="time" id="timepicker-input" class="form-control" placeholder="hh:mm" required/>
        </div>
      </div>

      ```
---
