import React from 'react'
import style from './index.module.css';
import cx from 'classnames'


const Wrapper = ({tag, menu, children, narrow}) => {
  let Tag = tag;
  return (
    <Tag className={cx(style.Wrapper, (menu ? style['Wrapper--push'] : '' ), (narrow ? style['Wrapper--narrow'] : '' ))}>
      {children}
    </Tag>
  );
}

export default Wrapper