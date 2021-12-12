import '../components/_base/index.css'

import AccessibilityPageTemplate from '../templates/AccessibilityPageTemplate'
import ArticlePageTemplate from '../templates/ArticlePageTemplate'
import ButtonsBlock from './widgets/buttonsBlock'
import CMS from 'netlify-cms-app'
import Callout from './widgets/callout'
import CategoryOverviewTemplate from '../templates/CategoryOverviewTemplate'
import ChangelogPageTemplate from '../templates/ChangelogPageTemplate'
import CollapseWidget from './widgets/collapse'
import ColorWidget from './widgets/color'
import ComponentPageTemplate from '../templates/ComponentPageTemplate'
import HomePageTemplate from '../templates/HomePageTemplate'
import IconsTemplate from '../templates/IconsTemplate'
import ImageAndText from './widgets/imageAndText'
import LFDSImage from './widgets/image'
import LandingPageTemplate from '../templates/LandingPageTemplate'
import LfuiWidget from './widgets/lfuiWidget'
import React from 'react'

CMS.registerEditorComponent(LFDSImage)
CMS.registerEditorComponent(Callout)
CMS.registerEditorComponent(ColorWidget)
CMS.registerEditorComponent(CollapseWidget)
CMS.registerEditorComponent(ButtonsBlock)
CMS.registerEditorComponent(ImageAndText)
CMS.registerEditorComponent(LfuiWidget)

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate
    componentExample={null}
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('categoryOverview-page', ({ entry }) => (
  <CategoryOverviewTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('categoryOverview-comp', ({ entry }) => (
  <CategoryOverviewTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('design-page', ({ entry }) => (
  <ArticlePageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))

CMS.registerPreviewTemplate('patterns-page', ({ entry }) => (
  <ArticlePageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('visual-identity-page', ({ entry }) => (
  <ArticlePageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('changelog-page', ({ entry }) => (
  <ChangelogPageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('accessibility-page', ({ entry }) => (
  <AccessibilityPageTemplate
    componentsLinks={null}
    componentNavigation={null}
    {...entry.toJS().data}
  />
))
CMS.registerPreviewTemplate('icons-page', ({ entry }) => (
  <IconsTemplate {...entry.toJS().data} />
))
