# Länsförsäkringar Design System

Welcome to Länsförsäkringar's design system. The design system (known as LFDS)
is the heart of digital design at Länsförsäkringar.

# Getting started
First you'll need to authenticate with [GitHub Packages][github-packages]. The
easiest way is by logging in with npm. You'll need to [generate a personal
access token][personal-access-token] which you use as your password.

```
npm login --scope=@lf-digitala-kanaler --registry=https://npm.pkg.github.com
```

Add an `.npmrc` file to your project root folder.

```
@lf-digitala-kanaler:registry=https://npm.pkg.github.com
```

Install the dependencies as you normally would.

```
npm install
```

You should now be able to run the app

```bash
npm start
```

## Update LFUI-components and LFUI-icons

Whenever new version of [lfui-components][lfui-components] or
[lfui-icons][lfui-icons] are released they should be updated and the app needs
to be built and deployed for them to be visible in LFDS.

```
npm install -D @lf-digitala-kanaler/lfui-components@latest
npm install -D @lf-digitala-kanaler/lfui-icons@latest
```

## LFUI-components in LFDS

Each component from `lfui-compoents/dist/docs/html` will be imported to Graphql
and queried in `ComponentPage.js`.
To determine which component to show on which page it will compare the folder
name from `lfui-components` with `location.pathname` for each page.
Make sure to use `PascalCase`for folder name in lfui-compoents.

## Structure

The project is structured as such:

```
LFDS/
├── .github/
│    **Github action workflow**
├── content/
│   ** Markdown files from netlifyCMS **
├── public/
└── src/
    ├── cms/
    │    ** custom widgets for netlifyCMS **
    ├── components/
    │    ** site components **
    ├── context/
    │   ** Context API for Gatsby **
    ├── data/
    │   ** Main navigation structure and component status(component status will be copied from node_modules at each `yarn start` **
    ├── img/
    ├── pages/
    ├── templates/
    │   ** Templates for every page type in LFDS **
    ├── utils/
    └── static/
        ** Asset outside of the module system **
        ├── admin/
        │   ** Configuration options for Netlify CMS**
        ├── favicons/
        ├── fonts/
        └── img/
            ** Images uploaded in Netlify CMS **
```

## Content and Markdown guidelines

https://lf-digitala-kanaler.github.io/admin/

If you are adding or editing content locally in the CMS, a couple of things to
note:

1.  Changes will be pushed to the remote repo.

2.  You will be prompted to enter your site's url, this is necessary for Netlify
Identity to manage user login. This is stored in `localStorage`, so you might
have to empty your browser cache if you are switching projects but remaining on
`localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `static/admin/config.yml`. This is
where you will configure the pages, fields, posts and settings that are editable
by the CMS.

Find out more in the [Netlify CMS Docs][netlify-cms-docs].

[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[lfui-components]: https://github.com/LF-digitala-kanaler/LFUI-components
[lfui-icons]: https://github.com/LF-digitala-kanaler/LFUI-icons
[netlify-cms-docs]: https://www.netlifycms.org/docs/#configuration
