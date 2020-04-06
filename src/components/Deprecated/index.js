import React from 'react';
import componentsStatus from '../../data/componentsStatus.json'
import _ from 'lodash';
import Wrapper from '../Wrapper';
import style from './index.module.css';
import cx from 'classnames'

const Deprecated = ({status, fixed}) => {
  // get current pages object from componentsStatus.json
  console.log(fixed)
  const currentVersion = _.filter(componentsStatus.components, function(o) { return o.component.toLowerCase() === status.toLowerCase(); });
   if (currentVersion === undefined || currentVersion.length === 0) {
     return null
   }
  const isDeprecated = _.get(currentVersion[0].bootstrap, 'deprecated');
  
      return (
        <>
        { isDeprecated  ?
          <article className={cx(style.Deprecated, (fixed ? '' :  style['Deprecated--fixed'] ))}>>
            <Wrapper tight tag="div" menu={true}>
              <div className={style.Deprecated__container}>
                <svg className={style.Deprecated__icon} width="36" height="37" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M38 38H-2V-1h40z"/><path d="M18 36.05c-9.941 0-18-7.857-18-17.55C0 8.807 8.059.95 18 .95S36 8.807 36 18.5c0 9.693-8.059 17.55-18 17.55zm0-1.95c8.837 0 16-6.984 16-15.6S26.837 2.9 18 2.9 2 9.884 2 18.5s7.163 15.6 16 15.6zm-1-12.675V7.775h2v13.65h-2zm1 5.85c-.828 0-1.5-.655-1.5-1.463 0-.807.672-1.462 1.5-1.462s1.5.655 1.5 1.462c0 .808-.672 1.463-1.5 1.463z" fill="#FDB514"/></g></svg>
                <div>
                  <strong>Hear yei, Hear yei!</strong>
                  <p className={style.Deprecated__text}>This component is deprecated and will be removed in next version of LFUI</p>
                </div>
              </div>
            </Wrapper>
          </article>
          : null
        }
        </>
      )
    
   
}


export default Deprecated