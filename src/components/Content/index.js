import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export const Content = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

export default Content