import React, { useState, useRef } from "react"
import style from './index.module.css';


const Collapse = ({title, content}) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const ref = useRef(null);

  const toggleCollapse = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${ref.current.scrollHeight}px`
    );
  }
  
  return (
    <div className={style.Collapse}>
      <article className={style.Collapse__section}>
        <button className={style.Collapse__button +` ${setActive}`} onClick={toggleCollapse}>
          <span className={style.Collapse__title}>{title}</span>
         
        </button>
        <div className={style.Collapse__content} ref={content} style={{ maxHeight: `${setHeight}` }}>
          <div className={style.Collapse__inner}>
            {content}
         </div> 
        </div>
      </article>
    </div>
  )
};

export default Collapse;


