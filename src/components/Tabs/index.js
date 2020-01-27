import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import style from './index.module.css'
import Wrapper from '../Wrapper'
import Content from '../Content'
import showdown from 'showdown'



const TabsWrapper = ({tabs, location, navigate}) => {
  const  converter = new showdown.Converter()  
  const tabsName = []
  tabs.forEach(item =>{
    tabsName.push(item.name)
  })
  const index = tabsName.indexOf(location.search.substr(1));
  const onTabsChange = index =>
    navigate(location.pathname + `?${tabsName[index]}`, { replace: false });

  return (
    <Tabs index={index === -1 ? 0 : index} onChange={onTabsChange} className={style.Tabs}>
      <TabList className={style.Tabs__list}>
        {tabs.map((tab, index) => (
          <Tab key={index} className={style.Tabs__link}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels className={style.Tabs__panels}>
        {tabs.map((tab, index) => (
          <TabPanel className={style.Tabs__panel} key={index}>
            <Wrapper menu={true} tag="div" narrow={true}>
             <Content source={converter.makeHtml(tab.content)} />
            </Wrapper>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs> 
  );
}

export default TabsWrapper
