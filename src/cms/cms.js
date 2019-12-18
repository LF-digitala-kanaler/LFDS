import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {ComponentGroupTemplate} from '../templates/ComponentGroup'
import { LandingPageTemplate } from '../templates/LandingPage'
// import ComponentPagePreview from './preview-templates/ComponentPreview'




// if (
//   window.location.hostname === 'localhost' &&
//   window.localStorage.getItem('netlifySiteURL')
// ) {
//   CMS.registerPreviewStyle(
//     window.localStorage.getItem('netlifySiteURL') + '/styles.css'
//   )
// } else {
//   CMS.registerPreviewStyle('/styles.css')
// }

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentNavigation={null} {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('component-group', ({ entry }) => (
  <ComponentGroupTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
// CMS.registerPreviewTemplate('component-page', ComponentPagePreview)


// CMS.registerPreviewTemplate('component-group', ({ entry }) => (
//   <ComponentGroupTemplate {...entry.toJS().data} />
// ))
// CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
//   <ContactPageTemplate {...entry.toJS().data} />
// ))


