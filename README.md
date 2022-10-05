# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> Länsförsäkringar Design System

The website and content for our design system – the heart of digital design at Länsförsäkringar.

[Design system →](https://lfds.netlify.app/) &nbsp;&nbsp;&nbsp;&nbsp; [CMS →](https://lfds.netlify.app/admin/)

# Getting started

Clone the repo and run;

```
npm install
```

You should now be able to start the app.

```
npm start
```

## Project structure

```
.
├── .github           # Github Action workflow
├── content           # Markdown files, often updated or created via Netlify CMS
├── public
└── src
    ├── cms           # Custom widgets for Netlify CMS
    ├── components    # LFDS website components
    ├── context       # Context API for Gatsby
    ├── data/         # Nav structure and component status (updated on `yarn start`)
    ├── img
    ├── pages
    ├── templates     # Template files for the LFDS pages
    ├── utils
    └── static        # Asset outside of the module system
        ├── admin     # Netlify CMS config
        ├── favicons
        ├── fonts
        └── img       # Uploaded via Netlify CMS
```

## Components in LFDS

Each component from `lfui-compoents/dist/docs/html` are imported to Graphql and queried in `ComponentPage.js`.

To determine which component to display on a specific LFDS page, we match component folder names (`PascalCase`) with `location.pathname` (specified in the page views).

# Bumping Components and Icons

Whenever new version of [Components][lfui-components] or [Icons][lfui-icons] are released, LDFS will need to be updated and rebuilt.

```
npm install -D @lansforsakringar/components@latest
npm install -D @lansforsakringar/icons@latest
```

# Editing content

The content within the repo can be modified via the [LFDS CMS][cms], an instance of [Netlify CMS](https://www.netlifycms.org).

## Making changes locally

Content can also be edited locally in the markdown files or via a locally served instance of the CMS.

This works well, but a couple of things to note:

1. Changes in CMS served locally will still push updates to the remote branch on Github.
2. You will be prompted to enter your site's URL, this is necessary for Netlify CMS to manage user identity. This will be stored in `localstorage` on `localhost:8000`.

## Configuring the CMS

Netlify CMS allows for configuring of pages, fields, posts, and settings. See the [Netlify CMS documentation][netlify-cms-docs] and apply via `static/admin/config.yml`.

[cms]: https://lf-digitala-kanaler.github.io/admin/
[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[lfui-components]: https://github.com/LF-digitala-kanaler/LFUI-components
[lfui-icons]: https://github.com/LF-digitala-kanaler/LFUI-icons
[netlify-cms-docs]: https://www.netlifycms.org/docs/#configuration
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
