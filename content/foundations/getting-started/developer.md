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

### Installation

`$ npm install --save-dev https://github.com/lf-digitala-kanaler/LFUI.git#release/6.7.0`

The end of the command above is pointing towards a specific branch, in this case our latest release`6.7.0`-branch. You can alter this number to point at the branch/release of your choice.

When LFUI reaches a new release and you want to update your local installation of LFUI, you can do so by pointing at the new release branch by **editing your package.json** like the example above and running

### Updates

When LFUI reaches a new release and you want to update your local installation of LFUI, you can do so by pointing at the new release branch by **editing your package.json** like the example above and running

`$ npm install lfui`

### Releases

LFUI is in constant development, hence new releases are scheduled on continuous basis.

## LFUI usage

In the /dist folder you will find:

* lf.css
* lf.js
* Icons
* Fonts

These files are built/compiled from the project's source files and assets. They can be used as is. Simply add jQuery, `lf.js` and `lf.css` to your document.

### In your build

If you, however, wish to include LFUI in you build, take note to:

* Use your preferred task runner (such as[](https://github.com/nDmitry/grunt-postcss) [Gulp](https://github.com/postcss/gulp-postcss) or plain [npm scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/))

  * See [package.json](https://lf-digitala-kanaler.github.io/LFUI/650/package.json) for an example how the dist files are built
* Add prefixes using a library such as [autoprefixer](https://github.com/postcss/autoprefixer)
* Take appropriate measures to ensure that no SCSS-file is imported more than once, we recommend [node-sass-import-once](https://github.com/at-import/node-sass-import-once)

Import [LFUI.scss](https://lf-digitala-kanaler.github.io/LFUI/650/src/scss/LFUI.scss) in the very beginning of your main SCSS file (often index.scss or main.scss):