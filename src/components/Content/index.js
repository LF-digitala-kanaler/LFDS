import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import Image from '../Image'

import './index.css'



const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match
    const replaced = match.replace(linkURI, encodeURI(linkURI))
    return replaced
  })
}

const withContentImages = source => {
  
  const images = source.match(/<img(.*?)\\?>/gim)
  
  for (let i in images) {
   
    const src = /src="(.*?)"/g.exec(images[i]),
        alt = /alt="(.*?)"/g.exec(images[i]),
        title = /title="(.*?)"/g.exec(images[i])
    
    source = source.replace(
      images[i],
      ReactDOMServer.renderToStaticMarkup(
        <Image
          className={`Content--image ${title ? title[1] : ''}`}
          src={src ? src[1] : null}
          alt={alt ? alt[1] : null}
        />
      )
    )
  }

  return source
}

const MyImage = ({ nodeKey, src,  alt, title, type}) => {

  const decodedSrc = decodeURI(src)
  console.log(type, title)
  return (
    <Image
      className={`Content--Image ${title}`}
      src={decodedSrc}
      alt={alt}
      title={title}
    />
  )
}

const HtmlBlock = ({ value }) => {
  if (value.indexOf('<iframe') !== 0) return value
  return (
    <div
      className={`Content--Iframe`}
      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  )
}

const Content = ({ source, src, className = '' }) => {

  
  // accepts either html or markdown
  source = source || src || ''
  if (source.match(/^</)) {
    source = withContentImages(source)

    return (
      <div
        className={`Content ${className}`}
        dangerouslySetInnerHTML={{ __html: source}}
      />
    )
  }

  return (
    <Marked
      
      className={`Content ${className}`}
      source={encodeMarkdownURIs(source)}
      renderers={{
        image: MyImage,
        html: HtmlBlock
      }}
    />
  )
}

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
}

export default Content
