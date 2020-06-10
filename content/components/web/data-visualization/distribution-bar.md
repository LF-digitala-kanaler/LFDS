---
template: ComponentPage
category: Data Visualization
title: Distribution bar
description: The distribution bar gives the user an overview of the relative
  size of different values in relation to each other, like the different funds
  in your ISK.
previewImage: /img/distribution-bar.svg
intro: The distribution bar gives the user an overview of the relative size of
  different values in relation to each other.
backgroundColor: "#fff"
componentsNavigation:
  - name: Default
  - name: Progress Bar
tabs:
  - content: >-
      ## How to use


      The distribution bar is used to compare how different values relate to one another. The distribution bar's total always equals 100%, meaning that the values are translated into percentages of the total before they are displayed in the table. This means that the distribution bar gives an overview of the values at a given time, usually the current values. As the visual overview only works if the user can get a sense of the relations at first glance, only use a distribution bar for comparing few items (a rule of thumb is five items). An example use could be to display your ISK-accounts and how the amount in them relate to each other.


      ### Variation


      The behaviour described in "How to use" is the standard usage of the distribution bar. There is however a specific secondary variation: as a progress bar.


      #### As a progress bar


      A **secondary use case** is as a form of [progress bar](../system-display/progress-bar) with discrete steps whose relation change over time. The distribution bar should only be used as a progress bar if both cases are true. What's great with this use is that you can choose to display parts which aren't affected but part of the total, as the red section in the example image below. The example image below has both modifiers for the use case turned on:


      <figure class="Image Image__background"><img src="/img/distribution-bar-as-progress-bar.png" srcset="/img/distribution-bar-as-progress-bar.png 2x" alt="Distribution bar as progress bar"><figcaption><div class="Image__caption"></div></figcaption></figure>


      As indicated above, to specific modifiers exist for the distribution bar as a progress bar.


      ##### Specific modifiers


      The two specific modifiers which exist for the distribution bar as a progress bar are:


      * Arrows that point out separator steps

      * Pointy-headed separator


      ###### Arrows that point out separator steps


      You can add arrows which point to the gaps between the values. The arrows are accompanied by a small label which should describe the progress being made up to that point. Do not just repeat the legend in the arrow labels.


      ###### Pointy-headed separator


      You can use a pointer separator on a value in the bar to show that something is expected to grow/progress. It is recommended to add the pointy-headed separator to the state which is currently progressing/changing when using the distribution bar as a progress bar.


      Try to not to use the arrow at small values, as the arrow has a width around 10px and might disrupt the accuracy of the bar.


      ### General modifiers


      There are two types of modifiers which exist for both use cases of the distribution bar, and should be used as alternatives to each other:


      * Label inside bar

      * Tooltip explanation


      #### Label inside bar


      You can add labels inside the bar if you wish to. This eases the understanding of the distribution bar and is encouraged, however not implemented by default for accessibility reasons.  A recommendation is to not show the percentage value inside the bar unless the width is at least 5% or above (depending on your parent width, of course) to make sure the value fits in its area.


      #### Tooltip explanation


      If you don't have the room for a label inside the bar, you should add a tooltip explanation. If enabled, the user gets to see the value of a field by hovering over (desktop) or clicking on (mobile) that field in the bar. The value is shown above the bar.


      ### Legends and colors


      All the graphs have the same legends and color styles, read more [here](/patterns/general-patterns/graphs-and-when-to-use-them#the-different-parts).


      When to use different graphs you find [here](/patterns/general-patterns/graphs-and-when-to-use-them#type-of-graph).


      ## Please consider:


      * Many people have troubles understanding percentage, so do not rely on solely the distribution bar to show users their data. Use it as a compliment!
    name: Design
  - content: >-
      ## How to use


      The distribution bar is great for illustrating how different values relate to one another. Colors are automatically set in a repeating sequence of `navy`, `blue`, `sky` and `baby`.


      **NOTE:**A styling recommendation is to not show the percentage value inside a `distribution-value` unless the width is *at least* 5% or above (depending on your parent width, of course) to make sure the value fits.


      If the bar needs extra margin on top because of using labels use the class `distribution-bar-labeled` after `distribution-bar`.


      ### Pointer/arrow as a separator


      Further customisation can be made by adding the `distribution-value-with-pointer`-class to a `distribution-value` to have the separator in the shape of an arrow. This can be used for values that are growing, or are expected to grow.


      **NOTE:**A styling recommendation is to not show the arrow at small values, as the arrow has a width around 10px and might disrupt the accuracy of the bar.


      Also do note that perfect styling for the arrow is not possible for the third (or`distribution-sky`) distribution-value, as the striped pattern can not be applied to the border. Should you need the arrow on your third value, overwrite it with a manual color (see above section).


      ### Tooltip


      There is also possible to add a tooltip to each value. If you can't show value inside `distribution-value`  because of of low value or unknown value you can add `data-tooltip="25%"` to each `distribution-value` to show value inside a tooltip.


      **NOTE:**This is not a replacement for Legends. Legends should still be visible.
    name: Code
---
