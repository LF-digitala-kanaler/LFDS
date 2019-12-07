import React from 'react'
import style from './index.module.css';
import cx from 'classnames'


const Wrapper = ({tag, menu, children}) => {
  console.log(menu, 'mneu')
  let Tag = tag;
  return (
    <Tag className={cx(style.Wrapper, (menu ? style['Wrapper--push'] : '' ))}>
      {children}
    </Tag>
  );
}

export default Wrapper