# gatsby-remark-relative-links

Rewrites absolute URLs to relative ones with [**remark**](https://remark.js.org/)

## Why?

I created this plugin to use in tandem with [remark-external-links](https://github.com/remarkjs/remark-external-links) so that any links that content creators have used absolute versions of can be corrected before that plugin's logic takes effect.

## Important

Use this **before** `gatsby-remark-external-links`

## Installation

```bash
yarn add gatsby-remark-relative-links
```

## Usage

Add following to your `gatsby-config.js`:
```js
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-relative-links",
            options: {
              domainRegex: /http[s]*:\/\/[www.]*yoursite\.com[/]?/,
            }
          },
          'gatsby-remark-external-links',
          ]
        }
      },
```

## API

###### `options.domainRegex` **Required**

Type: `string`
Default: null

Regex used to decipher what domain to "relative-ize". The example provided should handle most cases.

## License

[MIT](LICENSE)
