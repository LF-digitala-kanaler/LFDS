---
template: ComponentPage
category: Data Visualization
title: Distribution bar
description: The distribution bar gives the user an overview of the relative
  size of different values in relation to each other. A secondary use case is as
  a form of progress bar with discrete steps whose relative size varies over
  time.
previewImage: /img/distribution-bar.svg
intro: The distribution bar gives the user an overview of the relative size of
  different values in relation to each other.
backgroundColor: "#fff"
tabs:
  - content: >-
      ## How to use


      The distribution bar's **main use case** is to compare how different values relate to one another. The distribution bar's total always equals 100%, meaning that the values are translated into percentages of the total before they are displayed in the table. This means that the distribution bar gives an overview of the values at a given time, usually the current values. As the visual overview only works if the user can get a sense of the relations at first glance, only use a distribution bar for comparing few items (a rule of thumb is five items). An example use could be to display your ISK-accounts and how the amount in them relate to each other.




      \---



       However, when trying to measure change over time, bar graphs are best when the changes are larger.

      You can have the text of procent in the bar or in top of the bar. A recommendation is to not show the percentage value inside the bar unless the width is at least 5% or above (depending on your parent width, of course) to make sure the value fits.


      ### Modifiers


      * Arrow that points out separator steps

      * Pointer/arrow as a separator 

      * Tooltip explanation


      #### Arrow that points out separator steps


      You can use arrows that points out the separator steps with an explanation over the arrow so the customer knows what the different steps are. This can be used for values that are growing, or are expected to grow.


      #### Pointer/arrow as a separator


      You can use a pointer separator in the bar to show that something are growing in a direction as in Bekväm pension, were the amount always grows to the amount of 80% were it stops. This can be used for values that are growing, or are expected to grow.


      Try to not to use the arrow at small values, as the arrow has a width around 10px and might disrupt the accuracy of the bar.


      #### Tooltip explanation


      When you don't have room for arrows you can use the mouse over tooltip or for the mobil mouse press function to get more info about the value or part of the bar.


      ### Legends and colors


      All the graphs have the same legends and color styles, read more [here](https://lfui-beta-aedd0a.netlify.com/components/web/data-visualization/graphsand-charts#the-different-parts).


      When to use different graphs you find [here](https://lfui-beta-aedd0a.netlify.com/components/web/data-visualization/graphsand-charts#type-of-graph).


      ## Please consider:


      * Users have a hard time understanding procent

      * Have only been used in pension "bekväm pension"
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
