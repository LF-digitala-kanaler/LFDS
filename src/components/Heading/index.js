import React from 'react';
import PropTypes from 'prop-types'
import style from './index.module.css';
import cx from 'classnames'

export const Heading = ({text, tag, align}) => {
  const Htag = `h${tag}`

  return (
    <Htag className={cx(style.Heading, style['Heading--' + tag], style['Heading--' + align])}>
      {text}
    </Htag>
  );
}

Heading.prototype = {
  text: PropTypes.string.isRequired,
};

export default Heading
