---
template: ComponentPage
category: Data Visualization
title: Distribution bar
description: 'The distribution bar illustrates how different values relate to one another. '
previewImage: /img/distribution-bar.svg
intro: 'The distribution bar illustrates how different values relate to one another. '
backgroundColor: '#fff'
tabs:
  - content: >-
      ## How to use


      The distribution bar is great for illustrating how different values relate
      to one another. Colors are automatically set in a repeating sequence of
      navy, blue, sky and baby.


      NOTE: A styling recommendation is to not show the percentage value inside
      a distribution-value unless the width is at least 5% or above (depending
      on your parent width, of course) to make sure the value fits.


      If the bar needs extra margin on top because of using labels use the class
      distribution-bar-labeled after distribution-bar.




      ### Manually selecting colors


      The colors can also be set manually using modifiers to the distribution-x
      class, where x is a color suffix. LFUI ships with the suffixes -red,
      -blue, -navy, -baby, -sky, -green-stripes, -yellow-stripes and
      -red-stripes.


      If you wish to create additional, two mixins are supplied and ready to be
      used, where distribution-color-value() is for a non-striped background
      color, and distribution-color-value-striped() for a striped background
      (the $striped variable is for the $pattern-diagonal-stripes-mixin).




      ### Pointer separator


      Further customisation can be made by adding the
      distribution-value-with-pointer-class to a distribution-value to have the
      separator in the shape of an arrow. This can be used for values that are
      growing, or are expected to grow.


      NOTE: A styling recommendation is to not show the arrow at small values,
      as the arrow has a width around 10px and might disrupt the accuracy of the
      bar.


      Also do note that perfect styling for the arrow is not possible for the
      third (or distribution-sky) distribution-value, as the striped pattern can
      not be applied to the border. Should you need the arrow on your third
      value, overwrite it with a manual color (see above section).
    name: Design
  - content: content copy
    name: Copy
  - content: content code
    name: Code
---

