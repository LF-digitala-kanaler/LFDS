---
template: ArticlePage
category: Getting started
title: Developer
intro: Get started with the accessible and feature rich front-end framework for Länsförsäkringar web development.
contentTop: ''
wide: false
lang: false
---

## Getting started

Both our components and icons are available on npm.

```
npm install @lansforsakringar/components
npm install @lansforsakringar/icons
```

## Usage

You have two alternatives for getting started with the framework; either by importing the source files into a [SCSS](https://sass-lang.com) build, or by adding the precompiled files to your HTML document.

### Source alternative

Importing the source code gives you access to the full SCSS suit including our variables and mixins – increasing your flexibility when extending the framework with your own styles and layouts.

Import `LFUI.scss` at the very beginning of your main SCSS file:

```css
@import '@lansforsakringar/components/src/scss/LFUI.scss';
```

The JavaScript bundle can be imported as a whole.

```js
import '@lansforsakringar/components'
```

Some components are also exported, both as part of the bundle as well as individual modules.

```js
// Extract from bundle
import { select } from '@lansforsakringar/components'

// Import only the specific component
import select from '@lansforsakringar/components/select'
```

### Compiled alternative

In the `/dist` folder provided, you will find: `lfui.css`, `lfui.js` and a `fonts` directory. These files can be used as-is. Simply add jQuery along with `lfui.js` and `lfui.css` to your HTML document.

## Fonts

Web fonts are included as an external dependency, so the font urls will need to
be rebased and the source files copied to the build directory. A tool such as
`postcss-url` or the Webpack `file-loader` can help you with that.

See the [fonts documentation](https://github.com/LF-digitala-kanaler/fonts) on loading and preloading techniques for optimal performance and accessibility.

## Icons

Icons are not part of this package. Please see the [Länsförsäkringar Icons](https://github.com/LF-digitala-kanaler/LFUI-icons) for documentation on how to install and use.

## Favicon

See the designated [Länsförsäkringar Favicon](https://github.com/LF-digitala-kanaler/favicon) repo for all the assets and documentation you might need.

## Documentation

Each component is documented, with examples, on [LFDS components page](https://lfds.netlify.app/components/). This is our go-to for documentation.

Along with that, because our code is based on Bootstrap, the documentation from Bootstrap version [four](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and [five](https://getbootstrap.com/docs/5.0/getting-started/introduction/) does provide a good overview of how components are structured, along with listing all the available [utility classes](https://getbootstrap.com/docs/5.0/utilities/api/).

## Bugs and feature requests

If you with to report a bug or submit a feature request, feel free to [open an issue](https://github.com/LF-digitala-kanaler/LFUI-components/issues/). The more information that you provide, the better.
