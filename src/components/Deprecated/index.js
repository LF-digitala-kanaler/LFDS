import React from 'react'
import Wrapper from '../Wrapper'
import _ from 'lodash'
import componentsStatus from '../../data/componentsStatus.json'
import cx from 'classnames'
import style from './index.module.css'

const Deprecated = ({ componentName, fixed }) => {
  // get current pages object from componentsStatus.json

  const currentVersion = _.filter(componentsStatus.components, function (o) {
    return o.component.toLowerCase() === componentName.toLowerCase()
  })
  if (currentVersion === undefined || currentVersion.length === 0) {
    return null
  }
  const isDeprecated = _.get(currentVersion[0].bootstrap, 'deprecated')

  return (
    <>
      {isDeprecated ? (
        <article
          className={cx(
            style.Deprecated,
            !fixed ? '' : style['Deprecated--position']
          )}
        >
          <div className={cx(!fixed ? '' : style['Deprecated__content'])}>
            <div className={cx(!fixed ? '' : style['Deprecated__bubble'])}>
              <Wrapper tight tag="div" menu={true}>
                <div className={style.Deprecated__container}>
                  <div>
                    <strong>This component is deprecated</strong>
                    <p className={style.Deprecated__text}>
                      This component has been deprecated and will be removed in
                      a future version.
                    </p>
                  </div>
                </div>
              </Wrapper>
            </div>
          </div>
        </article>
      ) : null}
    </>
  )
}

export default Deprecated
