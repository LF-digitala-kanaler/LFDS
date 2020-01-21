import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {ComponentGroupTemplate} from '../templates/ComponentGroup'
import { ChangelogPageTemplate } from '../templates/Changelog'
import { LandingPageTemplate } from '../templates/LandingPage'
import { DesignPageTemplate } from '../templates/DesignPage'
import { VisualIdentityPageTemplate } from '../templates/VisualIdentityPage'


CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentNavigation={null} {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('component-group', ({ entry }) => (
  <ComponentGroupTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
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

// add imag ewith background to editor
CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});