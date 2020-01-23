import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {ComponentGroupTemplate} from '../templates/ComponentGroup'
import { ChangelogPageTemplate } from '../templates/ChangelogPage'
import { ComponentLandingPageTemplate } from '../templates/ComponentLandingPage'
import { DesignPageTemplate } from '../templates/DesignPage'
import { VisualIdentityPageTemplate } from '../templates/VisualIdentityPage'
import { PatternsPageTemplate } from '../templates/PatternsPage'

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentNavigation={null} {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('component-group', ({ entry }) => (
  <ComponentGroupTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('component-landing-page', ({ entry }) => (
  <ComponentLandingPageTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('changelog-page', ({ entry }) => (
  <ChangelogPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('design-page', ({ entry }) => (
  <DesignPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('visualIdentity-page', ({ entry }) => (
  <VisualIdentityPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('patterns-page', ({ entry }) => (
  <PatternsPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
// // add imag ewith background to editor
// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: "imageWithBackground",
//   // Visible label
//   label: "Image with background",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       name: 'image', 
//       label: 'Image with background', 
//       widget: 'image'
//     }
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^imageWithBackground (\S+)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       image: match[1]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return 'imageWithBackground ' + obj.image;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     return (
//       '<img src="' + obj.image + '">'
//     );
//   }
// });
