import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs'

import Content from '../components/Content'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import React from 'react'
import Wrapper from '../components/Wrapper'
import tabStyle from '../components/Tabs/index.module.css'

const ChangelogPageTemplate = ({
  title,
  intro,
  versions,
  index,
  onTabsChange,
  body
}) => (
  <>
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      <Content className="Content Content--tight" source={body} />
    </Wrapper>

    <Tabs
      index={index === -1 ? 0 : index}
      onChange={onTabsChange}
      className={tabStyle.Tabs}
    >
      <TabList className={tabStyle.Tabs__list}>
        <Tab className={tabStyle.Tabs__link}>Components</Tab>
      </TabList>

      <TabPanels className={tabStyle.Tabs__panels}>
        {/* Get component release list from github */}
        <TabPanel className={tabStyle.Tabs__panel}>
          <Wrapper menu={true} tag="div" narrow>
            <div className="Content">

              {versions.lfuiComponents
                .map((item) => {

                  return (
                    <div key={item.node.tagName}>
                      <h2>{item.node.tagName}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.descriptionHTML,
                        }}
                      />
                    </div>
                  )

                })
              }
              {versions.lfui
                .map((item) => {

                  { console.log(item, 'i') }
                  return (
                    <div key={item.node.tagName}>
                      <h2>{item.node.tagName}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.descriptionHTML,
                        }}
                      />
                    </div>
                  )

                })
              }

            </div>
          </Wrapper>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
)

export default ChangelogPageTemplate