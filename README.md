# LF Design System

This is the LF Design System website. It's built using the [Gatsby](https://gatsbyjs.org) and [Netlify CMS](https://github.com/netlify/netlify-cms).

## Structure

```

```

## Navigation Structure

## Content and Markdown guidelines

https://lf-digitala-kanaler.github.io/admin/

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

2.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.
3.  
## Developing

- Clone  repo to your local machine

- `yarn install` – install dependencies

- `yarn start` - Run the development server



## Build 

- `yarn build` 

## Deploy

Github Action will automatically built to Github pages when pushed



## Editing CMS fields

The Netlify CMS configuration is located in `static/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).
