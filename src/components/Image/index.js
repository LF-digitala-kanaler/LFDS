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

  render() {
    let { className = '', src, title = '', alt = '' } = this.props

    return (
      <Fragment>
        <Fragment>
          <img
            className={`${className}`}
            src={src}
            srcSet
            title={title}
            alt={alt}
          />
        </Fragment>
      </Fragment>
    )
  }
}

export default Image
