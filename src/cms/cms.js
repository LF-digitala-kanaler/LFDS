import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {CategoryOverviewTemplate} from '../templates/CategoryOverview'
import { ChangelogPageTemplate } from '../templates/ChangelogPage'
import { LandingPageTemplate } from '../templates/LandingPage'
import Callout from '../components/Callout'

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentNavigation={null} {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('categoryOverview-page', ({ entry }) => (
  <CategoryOverviewTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate componentsLinks={null} componentNavigation={null}  {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('changelog-page', ({ entry }) => (
  <ChangelogPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))






CMS.registerEditorComponent({
  // Internal id of the component
  id: "callout",
  // Visible label
  label: "Callout",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'title', 
      label: 'Title', 
      widget: 'string'
    },
    {
      name: 'text', 
      label: 'Text', 
      widget: 'string'
    }
  ],
  // Pattern to identify a block as being an instance of this component,
  
  pattern:  /<Callout title="(\S+)" text="(\S+)"><\/Callout>/g,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      title: match[1],
      text: match[2],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return  <Callout title={obj.title} text={obj.text} />
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
   return <Callout title={obj.title} text={obj.text} />
  }
});
