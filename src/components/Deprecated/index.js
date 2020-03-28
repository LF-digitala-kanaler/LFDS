import React from 'react';
import componentsStatus from '../../data/componentsStatus.json'
import _ from 'lodash';
import Wrapper from '../Wrapper';
import style from './index.module.css';
const Deprecated = ({status}) => {
  // get current pages object from componentsStatus.json
  
  const currentVersion = _.filter(componentsStatus.components, function(o) { return o.component.toLowerCase() === status.toLowerCase(); });
  // if Deprecated is true
  const isDeprecated = _.get(currentVersion[0].bootstrap, 'deprecated');
    
      return (
        <>
        { isDeprecated  ?
          <article className={style.Deprecated}>
            <Wrapper tight tag="div" menu={true}>
              <strong>Hear yei, Hear yei!</strong>
              <p className={style.Deprecated__text}>This component is deprecated and will be removed in next version of LFUI</p>
            </Wrapper>
          </article>
          : null
        }
        </>
      )
    
   
}


export default Deprecated