import * as style from './index.module.css'

import React, { useRef, useState } from 'react'

const Accordion = ({ title, date, text }) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    )
  }

  return (
    <div className={style.Accordion}>
      <article className={style.Accordion__section}>
        <button
          className={style.Accordion__button + ` ${setActive}`}
          onClick={toggleAccordion}
        >
          <span className={style.Accordion__title}>{title}</span>
          {date && <time date={date}>{date}</time>}
        </button>
        <div
          className={style.Accordion__content}
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <div
            className={style.Accordion__inner}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </article>
    </div>
  )
}

export default Accordion
