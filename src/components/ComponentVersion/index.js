import React from "react"
import style from './index.module.css';
import { useStaticQuery, graphql } from "gatsby"
import _ from 'lodash';
import componentsStatus from '../../data/componentsStatus.json'


export const ComponentVersion = ({version}) => {
  
  // get current pages version
  if(typeof window !== `undefined`) {
    const currentVersion = _.filter(componentsStatus.components, function(o) { return o.component.toLowerCase() === version.toLowerCase(); });
  
    if(currentVersion[0]) {
      return ( 
        <p className={style.ComponentVersion}>  Version {currentVersion[0].vanilla.changedInVersion[0]}</p>
      )
    }else {
      return null
    }
  }
};

export const ComponentAllVersions = ({version}) => { 
  const data = useStaticQuery(graphql`
    query version {
      settingsYaml {
        oldSiteUrl
      }
    }
  `)
  const currentVersion = _.filter(componentsStatus.components, function(o) { return o.component === version; });
    
  const versions = currentVersion[0].vanilla.changedInVersion.map((item) => {
    return <a className={style.ComponentVersion__link} href={data.settingsYaml.oldSiteUrl + item.split('.').join('')} target="_blank" rel="noreferrer noopener" aria-label="This is an external link (opens in a new tab)">{item}
      <svg className={style.ComponentVersion__icon} width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M7 2.333V3.5H2.333v8.167H10.5V7h1.167v5.833h-10.5v-10.5H7zm5.833-1.166V5.25h-1.166V3.158L7.412 7.412l-.824-.824 4.254-4.255H8.75V1.167h4.083z" id={item}/></defs><g transform="translate(-1 -1)" fill="none" fill-rule="evenodd"><path d="M0 0h14v14H0z"/><use fill="#515151" xlinkHref={"#"+item}/></g></svg></a>;
  });
  //const createVersionList = item.map
  return (
    <dl className={style.ComponentVersion__list}>
      <dt className={style.ComponentVersion__title}>Versions ( Should I exist? Where should I live in that case ?</dt>
        {versions}
    </dl>
    
  )
  
}


