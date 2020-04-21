---
template: ArticlePage
category: Getting Started
title: Developer
intro: |-
  Get started with LFUI components which is a  HTML-, CSS- and JS framework
    built on top of Bootstrap to be used in Länsförsäkringar's different
    applications and websites. LFUI has restyled many of Bootstrap's native
    components as well as included new ones specific for Länsförsäkringar, along
    with other custom features and utilities.
background: bg-white
wide: false
lang: false
---
## Getting started

### Installation

```
$ npm install --save-dev https://github.com/lf-digitala-kanaler/LFUI.git#release/6.5.0
```

The end of the command above is pointing towards a specific branch, in this case our latest release`6.5.0`-branch. You can alter this number to point at the branch/release of your choice.

When LFUI reaches a new release and you want to update your local installation of LFUI, you can do so by pointing at the new release branch by **editing your package.json** like the example above and running

### Updates

When LFUI reaches a new release and you want to update your local installation of LFUI, you can do so by pointing at the new release branch by **editing your package.json** like the example above and running

```
$ npm install lfui
```

### Releases

LFUI is in constant development, hence new releases are scheduled on continuous basis.

## LFUI usage

In the /dist folder you will find:

* lf.css
* lf.js
* Icons
* Fonts

These files are built/compiled from the project's source files and assets. They can be used as is. Simply add jQuery,`lf.js` and`lf.css` to your document.

### in your build

If you, however, wish to include LFUI in you build, take note to:

* Use your preferred task runner (such as[](https://github.com/nDmitry/grunt-postcss) [Gulp](https://github.com/postcss/gulp-postcss) or plain [npm scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/))

  * See package.json for an example how the dist files are built
* Add prefixes using a library such as [autoprefixer](https://github.com/postcss/autoprefixer)
* Take appropriate measures to ensure that no SCSS-file is imported more than once, we recommend [node-sass-import-once](https://github.com/at-import/node-sass-import-once)

Import LFUI.scss in the very beginning of your main SCSS file (often index.scss or main.scss):

```scss
@import "LFUI/src/scss/LFUI.scss";
```

This will give you access to the full LFUI suit including its variables and mixins.

## Development

**Requirements:**

* Node.js (version > 6.2)
* Python (v 2.7 recommended)
* Familiarity with [Bootstrap 4](https://getbootstrap.com/)
* Knowledge in JavaScript ES2015 and SASS (SCSS)
* In order to work with the structure and build, familiarity with [react.js](https://facebook.github.io/react/) and [webpack](https://webpack.github.io/) is required.

## Living styleguide

LFUI aims to be a "living" styleguide in constant development in both evolution and improvement. The components in LFUI do however seek to be *final* - thoroughly tested and iterated to completion, not only from developers, but also designers and user integration experts - to guarantee that all examples featured in the styleguide are able to be used in an LF-related application of any kind without diverging from LF's design or feel.

To achieve this we usually develop through the following process: Idea -> Design -> Visual documentation -> Code prototype -> Iterations of previous steps -> Green light from user integration and design teams -> Final product added to a LFUI release

Hence LFUI rarely (however it happens) includes "unfinished" components. If a component is "missing" from LFUI but you have been tasked to code it for, say, a prototype, submit an issue (including your suggested code will speed things up further!) so that we can shed some light on where in the process the component is.

### Structure and development instructions

The project is structured as such:

```
LFUI/
├── dist/
│   ├── lf.css
│   ├── lf.js
│   ├── icons.svg
│   └── Fonts/
└── src/
    ├── icon/
    ├── js/
    └── scss/
```

* To modify a component's scss, look inside the relevant file inside the `src/scss/` directory.
* To modify a component's js, instead look inside the `src/js/` directory.

### Contribute

Make sure any changes you make are generic and reusable in other apps. **Always** submit code using pull requests.

* Create features off of the current release development branch and name your branch `feature/my-new-thing`. Create a pull request when you are done.
* Create release branches off of previous finished release and name them `release/6.5.0` (the numbers refer to major release tag / patch tag / hotfix tag respectively).

This article explains the whole thing in great detail: http://nvie.com/posts/a-successful-git-branching-model – read it, it's awesome! We recommend you use [gitflow](https://github.com/nvie/gitflow) to make it easy on yourself.