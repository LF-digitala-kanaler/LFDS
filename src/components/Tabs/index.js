import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import style from './index.module.css'
import Wrapper from '../Wrapper'
import Content from '../Content'
const TabsWrapper = ({tabs}) => {
  return (
    <Tabs className={style.Tabs}>
      <TabList className={style.Tabs__list}>
        {tabs.map((tab, index) => (
          <Tab key={index} className={style.Tabs__link}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels className={style.Tabs__panels}>
        {tabs.map((tab, index) => (
          <TabPanel className={style.Tabs__panel} key={index}>
            <Wrapper menu={true} tag="div">
             <Content source={tab.content} />
            </Wrapper>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs> 
  );
}

export default TabsWrapper
