import React from 'react'
import style from './index.module.css'

const Checkbox = ({ name, checked, onChange, label, id }) => {
  return (
    <span className={style.Checkbox}>
      <input
        className={style.Checkbox__input}
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className={style.Checkbox__label} htmlFor={id}>
        <span className={style.Checkbox__hidden}>{label}</span>
      </label>
    </span>
  )
}

export default Checkbox
