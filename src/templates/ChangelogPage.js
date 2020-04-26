import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import { navigate } from "@reach/router";
import tabStyle from '../components/Tabs/index.module.css';

// Export Template for use in CMS preview
export const ChangelogPageTemplate = ({
  title,
  intro,
  components,
  index,
  onTabsChange
  
}) => (
   
  <>
  <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={"left"} />
      <Preamble text={intro} tag="p" align={"left"} />
  </Wrapper>
      <Tabs index={index === -1 ? 0 : index} onChange={onTabsChange} className={tabStyle.Tabs} >
      <TabList className={tabStyle.Tabs__list}>
        <Tab  className={tabStyle.Tabs__link}>Components</Tab>
      </TabList>
      <TabPanels className={tabStyle.Tabs__panels}>
        {/* Get component release list from github */}
        <TabPanel className={tabStyle.Tabs__panel} >
          <Wrapper menu={true} tag="div" narrow>
            <div className="Content">
              {console.log(components)}
            {
              
              components.filter(item => item.node.descriptionHTML != "").map(item => {
                return (
                  <div key={item.node.id}>
                    <h2>{item.node.tagName}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.node.descriptionHTML }} />
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




const ChangelogPage = ({ data: { page, log }, location } ) => {
  const breadcrumb = { 
    title: page.frontmatter.title,
    location: location
  }
  const tabs = ["Components",];
  const index = tabs.indexOf(location.search.substr(1));
  const onTabsChange = index =>
    navigate(`?${tabs[index]}`, { replace: false });
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      breadcrumb={breadcrumb}
      backgroundClass={page.frontmatter.background}
      menu={true}
    >
      <ChangelogPageTemplate 
        {...page} 
        {...page.frontmatter} 
        index={index}
        onTabsChange={onTabsChange}
        title={page.frontmatter.title}
        intro={page.frontmatter.intro}
        components={log.organization.repository.releases.edges}
      />
    </Layout>
  )
}

export default ChangelogPage

export const pageQuery = graphql`
  
  
  query ChangelogPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        intro
        background
      }
    }
    log: github {
     organization(login: "LF-digitala-kanaler") {
        repository(name: "LFUI") {
          releases(last: 60, orderBy: {
            field: CREATED_AT
            direction: DESC
          }) {
            edges {
              node {
                tagName
                descriptionHTML
              }
            }
          }
        }
      }
    }
    
  }
`