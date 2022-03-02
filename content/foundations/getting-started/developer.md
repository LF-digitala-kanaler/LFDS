---
template: ArticlePage
category: Getting started
title: Developer
intro: Get started with the accessible and feature rich front-end framework for Länsförsäkringar web development.
contentTop: ""
wide: false
lang: false
---

## Getting started

To install Components in your project, you will need to configure your environment for [GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

<div class="Callout"><strong class="Callout__title">Getting access</strong><p class="Callout__text">Please reach out to the Länsförsäkringar design team to get full access to the <a href="https://github.com/LF-digitala-kanaler">Github organisation</a>.</p></div>

First, authenticate npm with GitHub Packages. To do that, generate a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) which you use as your password. Make sure to give the token access rights to both `repo` and `read:packages` scopes.

```
npm login --scope=@lf-digitala-kanaler --registry=https://npm.pkg.github.com
```

Add a `.npmrc` file in your project root folder.

```
@lf-digitala-kanaler:registry=https://npm.pkg.github.com
```

Install the package as you normally would.

```
npm install @lf-digitala-kanaler/lfui-components
```

## Usage

You have two alternatives for getting started with the framework; either by importing the source files into a [SCSS](https://sass-lang.com) build, or by adding the precompiled files to your HTML document.

### Source alternative

Importing the source code gives you access to the full SCSS suit including our variables and mixins – increasing your flexibility when extending the framework with your own styles and layouts.

Import `LFUI.scss` at the very beginning of your main SCSS file:

```css
@import "@lf-digitala-kanaler/lfui-components/src/scss/LFUI.scss";
```

The JavaScript bundle can be imported as a whole.

```js
import '@lf-digitala-kanaler/lfui-components'
```

Some components are also exported, both as part of the bundle as well as individual modules.

```js
// Extract from bundle
import { select } from '@lf-digitala-kanaler/lfui-components'

// Import only the specific component
import select from '@lf-digitala-kanaler/lfui-components/select'
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

Each component is documented, with examples, on the [LFDS](https://getbootstrap.com/docs/5.0/getting-started/introduction/) website. This is our go-to for documentation.

Along with that, because our code is based on Bootstrap, the documentation from Bootstrap version [four](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and [five](https://getbootstrap.com/docs/5.0/getting-started/introduction/) does provide a good overview of how components are structured, along with listing all the available [utility classes](https://getbootstrap.com/docs/5.0/utilities/api/).

## Bugs and feature requests

If you with to report a bug or submit a feature request, feel free to [open an issue](https://github.com/LF-digitala-kanaler/LFUI-components/issues/). The more information that you provide, the better.
