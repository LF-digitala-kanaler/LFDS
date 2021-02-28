import React from 'react'
import style from './index.module.css'
const Checkbox = ({name,checked,onChange, label, id }) => {
  return (
    <span className={style.Checkbox}>
      <label className={style.Checkbox__label} htmlFor={id}>{label}</label>
      <input className={style.Checkbox__input} id={id} type="checkbox" name={name} checked={checked} onChange={onChange} />
    </span>
  )
}

export default Checkbox
