import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'
import style from './index.module.css'


const Preamble = ({text, tag, color, align}) => {
  let Tag = tag;

  return (
    <Tag className={cx(style.Preamble, style['Preamble--' + color], style['Preamble--' + align])}>
      {text}
    </Tag>
  );
}

Preamble.prototype = {
    text: PropTypes.string.isRequired,
};

export default Preamble