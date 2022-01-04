---
template: ArticlePage
category: Getting started
title: Developer
intro: Get started with LFUI components which is a  HTML-, CSS- and JS framework
  built on top of Bootstrap to be used in Länsförsäkringar's different
  applications and websites. LFUI has restyled many of Bootstrap's native
  components as well as included new ones specific for Länsförsäkringar, along
  with other custom features and utilities.
contentTop: ""
wide: false
lang: false
---
## Getting started

LFUI is divided into separate packages for easier distribution. They are published as GitHub Packages and can be installed as any other node module with npm or your favorite node package manager.

To install any of the LFUI building blocks, you will need to configure your environment for GitHub Packages.

First you'll need to [authenticate with GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages). The easiest way is by logging in with npm. You'll need to [generate a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) which you use as your password.

```
npm login --scope=@lf-digitala-kanaler --registry=https://npm.pkg.github.com
```

Add an .npmrc file to your project root folder.

```
@lf-digitala-kanaler:registry=https://npm.pkg.github.com
```

### LFUI-components

The `lfui-components` package contains all the JavaScript, CSS, Fonts, and HTML samples you need. Some of the components are dependent on icons available in the [lfui-icons](#lfui-icons) package.

```
npm install @lf-digitala-kanaler/lfui-components
```

In the `dist` folder you can find the compiled JavaScript and CSS files as well as fonts. The source files are also included in the package. This allows you to selectively import only the required modules.

### LFUI-icons

The `lfui-icons` package includes the individual icons and a sprite for each icon size set (20, 24, 32 pixels etc).

```
npm install @lf-digitala-kanaler/lfui-icons
```

It is not advised to include or reference the individual icons separately, but instead use the sprite to pick the desired icon from any given set.

```
<svg role="presentation" class="icon" width="20" height="20">
  <use xlink:href="/assets/icons/20/sprite/icons.svg#icon-wallet-20"></use>
</svg>
```
