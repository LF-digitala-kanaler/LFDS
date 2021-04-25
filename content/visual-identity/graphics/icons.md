---
template: IconsPage
category: Graphics
previewImage: /img/icons.svg
title: Icons
contentTop: ''
intro: We use icons to explain, clarify and sometimes display emotions ;). Our
  Icons scale with different amounts of details according to size.The
  consistency of the strokes are imperitave for recognition.
specialIconsContent: >-
  ## Special sizes icons


  These icons are used in specific content today. We try to minimize the use of these special sizes so don't use them in new design.
description: >-
  We want our icons to be informative and easy to understand.

  The icons are less abstract and more specific then the graphic objects. They should support the textual information or cluster information.

  The icons come in various sizes, Each size with variations of details.
---

<figure class="Image Image__border Image__wide"><img src="/img/icons.jpg" srcset="/img/icons.jpg 2x" alt=""><figcaption><div class="Image__caption"></div></figcaption></figure>

## Resources

In the LFUI-icon.sketch document you will find all the icons ranging from 24 to 70px. These icons are optimized for digital use, correct RGB values and the 2px stroke.

If you cant find the right icon for your use case, check out "Röda rummet" for further resources.

[Resources at Röda rummet](https://cloud.brandmaster.com/brandcenter/se/lansforsakringar/)

## Icons in LFUI

<section>
<Collapse title="How to use - developer">
<div class="content">

<div class="ImageBlock ImageBlock__right"><div class="ImageBlock__content">

The raw exported files are located in the `icon/src/svg` directory but they are not intended to be used as is. Instead we generate a sprite map and append it to the DOM on page load. If you include `lf.js`you'll get that for free.

We can then have an icon show up anywhere on the page with the svg `<use>.`

```
<svg role="presentation" class="icon" width="20" height="20"><use xlink:href="#icon-wallet-20"></use></svg>
```

Our `.icon` class helps with alignment. Note that most icons inherits the `color` CSS property from the parent element in the DOM (using [currentColor](https://developer.mozilla.org/en/docs/Web/CSS/color_value#currentColor_keyword)).

An icon rarely shows up alone. Together with any text component, be it a link, heading, or paragrah, an icon should have **distance of 10px between itself and the text**. To achieve this, you can use the `.icon-left` if the icon is to be placed to the left of the text, or `.icon-right` for the opposite.</div><div class="ImageBlock__object"><img class="ImageBlock__image" src="undefined" alt="" /></div></div>

</div></Collapse>
</section>
