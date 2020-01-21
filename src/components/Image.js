import React, { Fragment } from 'react'


class Image extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  imageSizes = [
    '320',
    '450',
    '640',
    '750',
    '800',
    '900',
    '1000',
    '1200',
    '1500',
    '1600',
    '2000'
  ] // image sizes used for image source sets

  
  checkIsUploadcare(src) {
    return typeof src === 'string' && src.includes('ucarecdn.com')
  }

  getResolutionString(res) {
    /* add resolutions options for inline images */
    if (res === 'small') {
      res = '800x'
    } else if (res === 'medium') {
      res = '1000x'
    } else if (res === 'large') {
      res = '2000x'
    }
    return res
  }

  render() {
    let {
      resolutions = '1000x',
      className = '',
      src,
      secSet = '',
      fullSrc,
      title = '',
      alt = '',
      lazy = true
    } = this.props

    const isUploadcare = this.checkIsUploadcare(src),
      fullImage = !isUploadcare || !lazy

    /* create source set for images */
    

    fullSrc = `${src}${
      isUploadcare
        ? '-/progressive/yes/-/format/auto/-/resize/' +
          this.getResolutionString(resolutions) +
          '/'
        : ''
    }`
   
    return (
      <Fragment>
        
        {fullImage && (
          <Fragment>
              <img
                className={`${className}`}
                src={fullSrc}
                srcSet={secSet}
                // sizes={'100vw'}
                title={title}
                alt={alt}
              />
            
          </Fragment>
        )}
      </Fragment>
    )
  }
}



export default Image