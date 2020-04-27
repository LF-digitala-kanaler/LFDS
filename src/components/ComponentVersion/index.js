import React, {useState, useRef} from "react"
import style from './index.module.css';
import _ from 'lodash';
import componentsStatus from '../../data/componentsStatus.json'
import { useStaticQuery, graphql } from "gatsby"
import cx from 'classnames'



export const ComponentVersion = ({version}) => {
  const content = useRef(null);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [isOpen, setOpen] = useState(false);
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setOpen(!isOpen)
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
 
  const data = useStaticQuery(graphql`
    query version {
      settingsYaml {
        oldSiteUrl
        firstSavedVersion
      }
    }
  `)

  // get current pages version
  if(typeof window !== `undefined`) {
     // get latest version
    const versions = _.filter(componentsStatus.components, function(o) { return o.component.toLowerCase() === version.toLowerCase(); });
    //get all versions
    if(versions.length > 0){
      const previousVersions = versions[0].bootstrap.changedInVersion.slice(1).map((item, index) => {
       
        if(item.split('.').join('') >= data.settingsYaml.firstSavedVersion) {
          return <li className={style.ComponentVersion__item } key={index}>
            <a target="_blank" rel="nofollow noreferrer noopener external" className={style.ComponentVersion__link} href={data.settingsYaml.oldSiteUrl + item.split('.').join('')}  aria-label="This is an external link (opens in a new tab)">LFUI {item}</a>
          </li>
        }else {
          return <li className={style.ComponentVersion__item } key={index}>
            <p className={style.ComponentVersion__noLink}>LFUI {item}</p>
          </li>
        }
        
      });
      if (versions[0].bootstrap.changedInVersion.length === 1) {
        return <p className={style.ComponentVersion}>  Last updated: <a className={style.ComponentVersion__aloneLink} target="_black" rel="nofollow noreferrer noopener" href={data.settingsYaml.oldSiteUrl + versions[0].bootstrap.changedInVersion[0].split('.').join('')}>{versions[0].bootstrap.changedInVersion[0]}</a></p>;
      }else {
        return (
          <>
          <div className={style.ComponentVersion}>
            
            <button className={style.ComponentVersion__button +` ${setActive}`} onClick={toggleAccordion}>Last Version: {versions[0].bootstrap.changedInVersion[0]} <svg className={cx(style.ComponentVersion__icon, isOpen ? style['ComponentVersion__icon--active']: '')} width="14" height="9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="compver" d="M7 3.414L1.707 8.707.293 7.293 7 .586l6.707 6.707-1.414 1.414z"/></defs><use fill="#747578" xlinkHref="#compver" transform="matrix(1 0 0 -1 0 9)" fillRule="evenodd"/></svg></button>
            <div  className={style.ComponentVersion__dropdown} ref={content} style={{ maxHeight: `${setHeight}` }}>
                <ul className={style.ComponentVersion__list}>{previousVersions}</ul>
            </div>
          </div>
          </>
        )
      }
    }else {
      return null;
    }
  }
};

export default ComponentVersion;
