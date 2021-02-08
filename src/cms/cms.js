import React from 'react'
import CMS from 'netlify-cms-app'
import '../components/_base/index.css'
import './cms.css'
import HomePageTemplate from '../templates/HomePageTemplate'
import ComponentPageTemplate from '../templates/ComponentPageTemplate'
import CategoryOverviewTemplate from '../templates/CategoryOverviewTemplate'
import ChangelogPageTemplate from '../templates/ChangelogPageTemplate'
import LandingPageTemplate from '../templates/LandingPageTemplate'
import ArticlePageTemplate from '../templates/ArticlePageTemplate'
import IconsTemplate from '../templates/IconsTemplate'

import LFDSImage from './widgets/image'
import Callout from './widgets/callout'
import ColorWidget from './widgets/color'
import CollapseWidget from './widgets/collapse'
import ButtonsBlock from './widgets/buttonsBlock'
import ImageAndText from './widgets/imageAndText'
import LfuiWidget from './widgets/lfuiWidget'

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
CMS.registerPreviewTemplate('icons-page', ({ entry }) => (
  <IconsTemplate {...entry.toJS().data} />
))
