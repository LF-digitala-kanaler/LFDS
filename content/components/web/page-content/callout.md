---
template: ComponentPage
title: Callout
intro: "The callout is used to highlight information which we want the user to
  notice in relation to a chunk of text. "
description: "The callout is used to highlight information which we want the
  user to notice in relation to a chunk of text. "
previewImage: /img/callout.svg
category: Page Content
tabs:
  - content: >-
      ## How to use


      Use the callout to highlight crucial information so it doesn’t disappear in a chunk of text. A good example is telephone numbers to injury claims on product pages. Typical headings for a callout are “Viktig information”, “Tips för …” and “Tänk på …”.


      The small red corner appears with an animation as the callout comes into view for the user to help bring attention to the callout.


      ## Please consider


      As price box, value box and callout all are various ways of highlighting information you should avoid mixing them in one view.


      ## Other material[](https://lfui-beta-aedd0a.netlify.app/components/web/button-and-links/buttons#other-material)


      **Sketch file:** LFUXAD Assets/LFUI Web.sketch (Page Content/Callout)
    name: Design
  - name: Code
    content: >-
      ## How to use


      Callout uses [Vivus](https://github.com/maxwellito/vivus) for the animation of the SVG. Animation initialise is not part of LFUI and something you have to do yourself. The animation should autostart when the component is in view. This is an example how the initialise script could look like. 


      ```

      $('[data-draw]').each((index, el) => {
        const $el = $(el);
        const options = getDataOptions($el.data());

        if (options.hasOwnProperty('on')) {
          delete options.on;
          options.start = 'autostart';
          $el.on(options.on, () => draw(el, options));
        } else {
          draw(el, options);
        }
      });

      ```
backgroundColor: "#fff"
---
