import React, { Component } from 'react'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        noindex
        canonicalLink
        description
      }
    }
  }
`

export default class Meta extends Component {
  render() {
    const {
      title,
      pageTitle,
      url,
      description,
      absoluteImageUrl = '',
      canonicalLink
    } = this.props

    return (
      <Helmet>
        {title && <meta name="title" content={title} />}
        {description && <meta name="description" content={description} />}

        {pageTitle && <meta property="og:title" content={pageTitle} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {url && <meta property="og:type" content="website" />}
        {url && <meta property="og:url" content={url} />}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image" content={absoluteImageUrl} />

        <meta name="robots" content="noindex" />
        {canonicalLink && <link rel="canonical" href={canonicalLink} />}

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={absoluteImageUrl} />
      </Helmet>
    )
  }
}
