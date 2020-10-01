# LF Design System
 
 This is the LF Design System website. It's built using the [Gatsby](https://gatsbyjs.org) and [Netlify CMS](https://github.com/netlify/netlify-cms).


## Structure

## Content and Markdown guidelines


## Developing

1.  Clone your repo to your local machine

2.  Install dependencies

 `yarn install`

3.  Run the development server

`gatsby develop`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

2.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).


## Build/Deploy


