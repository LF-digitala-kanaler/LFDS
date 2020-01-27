import React from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import style from './index.module.css'
import Wrapper from '../Wrapper'
import Content from '../Content'

const TabsWrapper = ({tabs, location, navigate}) => {
  
  
  const filterTabName = tabs.map(item =>{
    return item.name.rawMarkdownBody
  })
  
  const index = filterTabName.indexOf(location.search.substr(1));
  const onTabsChange = index =>
    navigate(location.pathname + `?${filterTabName[index]}`, { replace: false });

  return (
    <Tabs index={index === -1 ? 0 : index} onChange={onTabsChange} className={style.Tabs}>
      <TabList className={style.Tabs__list}>
        {filterTabName.map((tab, index) => (
          <Tab key={index} className={style.Tabs__link}>{tab}</Tab>
        ))}
      </TabList>
      <TabPanels className={style.Tabs__panels}>
        {tabs.map((tab, index) => (
          <TabPanel className={style.Tabs__panel} key={index}>
            <Wrapper menu={true} tag="div" narrow={true}>
             <Content source={tab.content.html} />
            </Wrapper>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs> 
  );
}

export default TabsWrapper
