import { Location, navigate } from '@reach/router'

import ComponentExample from '../components/ComponentExample'
import ComponentVersion from '../components/ComponentVersion'
import Deprecated from '../components/Deprecated'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import React from 'react'
import TabsWrapper from '../components/Tabs'
import Wrapper from '../components/Wrapper'

const ComponentPageTemplate = ({
  title,
  intro,
  componentForCurrentPage,
  componentsNavigation,
  backgroundColor,
  tabs,
  currentPage,
  verticalResize,
}) => (
  <>
    {currentPage && <Deprecated componentName={currentPage} />}
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={'left'} />
      {currentPage && <ComponentVersion version={currentPage} />}
    </Wrapper>
    <Wrapper tag="div" menu={true} narrow>
      <Preamble text={intro} tag="p" align={'left'} />
    </Wrapper>
    <Wrapper tag="div" menu={true}>
      {componentForCurrentPage && componentForCurrentPage.length > 0 && (
        <ComponentExample
          verticalResize={verticalResize}
          variants={componentForCurrentPage}
          navigation={componentsNavigation}
          background={backgroundColor}
        />
      )}
    </Wrapper>

    <Location>
      {({ location }) => (
        <TabsWrapper tabs={tabs} location={location} navigate={navigate}>
          {currentPage && (
            <Deprecated fixed={true} componentName={currentPage} />
          )}
        </TabsWrapper>
      )}
    </Location>
  </>
)

export default ComponentPageTemplate
