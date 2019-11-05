import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import style from './index.module.css'

const TabsWrapper = ({tabs}) => {
  console.log('tabs',tabs)
  return (
    <Tabs>
      <TabList className={style.Tabs__list}>
        {tabs.map((tab, index) => (
          <Tab key={index} className={style.Tabs__link}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels className={style.Tabs__panel}>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs> 
  );
}

export default TabsWrapper
