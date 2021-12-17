# Länsförsäkringar Design System

Welcome to Länsförsäkringar's design system. The design system (known as LFDS) is the heart of digital design at Länsförsäkringar.

# Installation

Clone the repo

```bash
  git clone https://github.com/LF-digitala-kanaler/LFDS.git
```

## Environment Variables

To run this project, you need to add 2 files in the root of the project. 

`.env.development` and `.env.production` with the key `GITHUB_TOKEN`. This is needed so we can fetch data from Github for changelog component and changelog page.  

### Generate a personal access token

A personal access token gives access to our app so it can make requests to our Github.

To get a personal access token, login to your Github account and click your avatar and choose "Settings". After that navigate to Developer Settings and Personal access tokens and generate a new token with repo scope selected. 
Copy the personal access token since it will disappear next time you go to this page.

When that done add it to both `.env.development` and `.env.production`.

```bash
GITHUB_TOKEN=your_token
```

When you have your .env files and your token added it's time to install packages

```bash
 yarn install
```

You should now be able to run the site

```bash
 yarn start
```

--------- 
* Deploy
* Add content 
* Update icons
* Update LFUi-componens
* file structure
* cms basics

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
         │    ** Configuration options for Netlify CMS**
         ├── favicons/
         ├── fonts/
         ├── icons/ 
         │    ** Icons from lfui-icons to update run `yarn copy:icons` **
         ├── img/
         │    ** Images uploaded in Netlify CMS **
         ├── docs.js ** Copied from lfui-components and used in iframe to show examples **
         └── lf.js ** Copied from lfui-components and used in iframe to show examples **

    

```

## Navigation Structure

## Content and Markdown guidelines

https://lf-digitala-kanaler.github.io/admin/

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

2.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:8000`.
3.  





## Editing CMS fields

The Netlify CMS configuration is located in `static/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).
