import React, {useState, useRef} from "react"
import style from './index.module.css';
import _ from 'lodash';
import componentsStatus from '../../data/componentsStatus.json'
import { useStaticQuery, graphql } from "gatsby"
import cx from 'classnames'
import {useClickAway} from 'react-use';


export const ComponentVersion = ({version}) => {
  const [isOpen, setOpen] = useState(false);
  const dropdown = useRef(null);
  const OLDEST_EXISITING_SITE_VERSION = 523;
  const handleOnClick = () => {
    setOpen(!isOpen)
  }
  useClickAway(dropdown, () => {
    setOpen(false)
  });
  const versionLink = (url) => {
    url.split('.').join('')
    console.log(url);
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
    console.log(versions.length)
    if(versions.length > 0){
      const previousVersions = versions[0].bootstrap.changedInVersion.map((item) => {
        console.log(item.split('.').join(''))
        if(item.split('.').join('') >= data.settingsYaml.firstSavedVersion) {
          return <li className={style.ComponentVersion__item }>
            <a target="_black" rel="nofollow noreferrer noopener" className={style.ComponentVersion__link} href={data.settingsYaml.oldSiteUrl + item.split('.').join('')}  aria-label="This is an external link (opens in a new tab)">{item}</a>
          </li>
        }else {
          return <li className={style.ComponentVersion__item }>
            <p className={style.ComponentVersion__noLink}>{item}</p>
          </li>
        }
        
      });
      if (versions[0].bootstrap.changedInVersion.length === 1) {
        return <p className={style.ComponentVersion}>  Last updated: <a className={style.ComponentVersion__aloneLink} target="_black" rel="nofollow noreferrer noopener" href={data.settingsYaml.oldSiteUrl + versions[0].bootstrap.changedInVersion[0].split('.').join('')}>{versions[0].bootstrap.changedInVersion[0]}</a></p>;
      }else {
        return (
          <>
          <div ref={dropdown} className={style.ComponentVersion}>
            <button className={style.ComponentVersion__button} onClick={handleOnClick}>Last updated: {versions[0].bootstrap.changedInVersion[0]} <svg className={cx(style.ComponentVersion__icon, isOpen ? style['ComponentVersion__icon--active']: '')} width="14" height="9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="compver" d="M7 3.414L1.707 8.707.293 7.293 7 .586l6.707 6.707-1.414 1.414z"/></defs><use fill="#747578" xlinkHref="#compver" transform="matrix(1 0 0 -1 0 9)" fillRule="evenodd"/></svg></button>
            <div  className={cx(style.ComponentVersion__dropdown, isOpen ? style['ComponentVersion__dropdown--active'] : '')}>
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


