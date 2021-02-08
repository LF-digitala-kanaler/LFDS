import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import TabsWrapper from '../components/Tabs'
import ComponentExample from '../components/ComponentExample'
import { Location, navigate } from '@reach/router'
import ComponentVersion from '../components/ComponentVersion'
import Deprecated from '../components/Deprecated'
import React from 'react'
const ComponentPageTemplate = ({
  title,
  intro,
  componentsExample,
  componentsNavigation,
  backgroundColor,
  tabs,
  currentDirectory,
  verticalResize,
}) => (
  <>
    
    {currentDirectory && <Deprecated componentName={currentDirectory} />}
    <Wrapper tag="div" menu={true}>
      <Heading tag={1} text={title} align={'left'} />
      {currentDirectory && <ComponentVersion version={currentDirectory} />}
    </Wrapper>
    <Wrapper tag="div" menu={true} narrow>
      <Preamble text={intro} tag="p" align={'left'} />
    </Wrapper>
    <Wrapper tag="div" menu={true}>
      {componentsExample && componentsExample.length > 0 && (
        <ComponentExample
          verticalResize={verticalResize}
          variants={componentsExample}
          navigation={componentsNavigation}
          background={backgroundColor}
        />
      )}
    </Wrapper>

    <Location>
      {({ location }) => (
        <TabsWrapper tabs={tabs} location={location} navigate={navigate}>
          {currentDirectory && (
            <Deprecated fixed={true} componentName={currentDirectory} />
          )}
        </TabsWrapper>
      )}
    </Location>
  </>
)

export default ComponentPageTemplate