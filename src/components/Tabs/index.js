import React, {  useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import style from './index.module.css'
import Wrapper from '../Wrapper'
import Content from '../Content'

const TabsWrapper = ({tabs, location, navigate, children}) => {
 const [tabName, setTabName] = useState([]);
 const [tabContent, setTabContent] = useState([]); 
 const [index, setTabIndex] = useState(0)
 
 useEffect(() => {
   
    if( tabs && tabs.length > 0) {
      setTabName(tabs.map(item => {
        return ((item.name?.rawMarkdownBody || item.name))
      }))
      setTabContent(tabs.map(item => {
        return ((item.content?.html || item.content))
      }))
    }
    
  },[]);
  // Needed for the cms to update the tabs
  useEffect(() => {
    
    if(tabs && tabs.length > 0) {
    setTabName(tabs.map(item => {
      return ((item.name?.rawMarkdownBody || item.name))
    }))
    setTabContent(tabs.map(item => {
      return ((item.content?.html || item.content))
    }))
    }
  },[tabs]);
  useEffect(() => {
    setTabIndex(tabName.indexOf(location.search.substr(1)))
    
  });

  const onTabsChange = index => 
    navigate( `?${tabName[index]}`, { replace: false });
  
  return (
    <Tabs index={index === -1 ? 0 : index} onChange={onTabsChange} className={style.Tabs} >
      {children}
      <TabList className={style.Tabs__list}>
        {
          tabName.map((tab, index) => {
            return <Tab key={index} className={style.Tabs__link}>{tab}</Tab>
          })
        }
        
      </TabList>
      <TabPanels className={style.Tabs__panels}>
        
        {tabContent.map((tab, index) => {
          return (
            <TabPanel className={style.Tabs__panel} key={index}>
              <Wrapper menu={true} tag="div" tight>
              <Content source={tab} />
              </Wrapper>
            </TabPanel>
          )
        })}
      </TabPanels>
    </Tabs>
  );
}

export default TabsWrapper

