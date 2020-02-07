import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {CategoryOverviewTemplate} from '../templates/CategoryOverview'
import { ChangelogPageTemplate } from '../templates/ChangelogPage'
import { LandingPageTemplate } from '../templates/LandingPage'
import { ArticlePageTemplate } from '../templates/ArticlePage'
import AdvancedImage from "./widgets/advancedImage"
import Callout from "./widgets/callout"

CMS.registerEditorComponent(AdvancedImage)
CMS.registerEditorComponent(Callout)


// CMS.registerPreviewTemplate('component-page', ({ entry }) => {
//     console.log(entry.toJS().data,'data')
//     const value = entry.toJS().data.tabs.map(function(event) {
          
          
//           return {
//             name: event.name,
//             content: markdownProcessor.processSync(event.content).toString()
//           } 
          

//         })
   
  
//   return <ComponentPageTemplate 
//           description={entry.getIn(['data', 'description'])} 
//           category={entry.getIn(['data', 'category'])}
//           tabs={value} 
//           backgroundColor={entry.getIn(['data', 'backgroundColor'])}
          
//         />
// })

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('categoryOverview-page', ({ entry }) => (
  <CategoryOverviewTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate componentsLinks={null} componentNavigation={null}  {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('article-page', ({ entry }) => (
  <ArticlePageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('changelog-page', ({ entry }) => (
  <ChangelogPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))




