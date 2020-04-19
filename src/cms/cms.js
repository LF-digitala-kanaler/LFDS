import React from 'react'
import CMS from 'netlify-cms-app'
import "../components/_base/index.css"
import "./cms.css"
import { HomePageTemplate } from '../templates/HomePage'
import {ComponentPageTemplate} from '../templates/ComponentPage'
import {CategoryOverviewTemplate} from '../templates/CategoryOverview'
import { ChangelogPageTemplate } from '../templates/ChangelogPage'
import { LandingPageTemplate } from '../templates/LandingPage'
import { ArticlePageTemplate } from '../templates/ArticlePage'
import { IconsPageTemplate } from '../templates/IconsPage'

import AdvancedImage from "./widgets/advancedImage"
import Callout from "./widgets/callout"
import ColorWidget from "./widgets/color"
import CollapseWidget from "./widgets/collapse"
// import ButtonsBlock from './widgets/buttonsBlock'

CMS.registerEditorComponent(AdvancedImage)
CMS.registerEditorComponent(Callout)
CMS.registerEditorComponent(ColorWidget)
CMS.registerEditorComponent(CollapseWidget)
// CMS.registerEditorComponent(ButtonsBlock)

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate  {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate componentExample={null} componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('categoryOverview-page', ({ entry }) => (
  <CategoryOverviewTemplate componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('landing-page', ({ entry }) => (
  <LandingPageTemplate componentsLinks={null} componentNavigation={null}  {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('design-page', ({ entry }) => (
  <ArticlePageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('patterns-page', ({ entry }) => (
  <ArticlePageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('visual-identity-page', ({ entry }) => (
  <ArticlePageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('changelog-page', ({ entry }) => (
  <ChangelogPageTemplate  componentsLinks={null} componentNavigation={null} {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('icons-page', ({ entry }) => (
  <IconsPageTemplate  {...entry.toJS().data} />
))




