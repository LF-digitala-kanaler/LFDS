import React from 'react'
import styles from './index.module.css';


const Wrapper = ({tag, children}) => {
  let Tag = tag;
  return (
    <Tag className={styles.Wrapper}>
      {children}
    </Tag>
  );
}

export default Wrapper