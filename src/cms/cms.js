import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ComponentPageTemplate } from '../templates/ComponentPage'
import { ComponentGroupTemplate } from '../templates/ComponentGroup'
import { ContactPageTemplate } from '../templates/ContactPage'



if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('component-page', ({ entry }) => (
  <ComponentPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('component-group', ({ entry }) => (
  <ComponentGroupTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))


