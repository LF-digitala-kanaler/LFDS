import { Link, StaticQuery, graphql } from 'gatsby'

import Accordion from '../Accordion'
import React from 'react'
import style from './index.module.css'

const Changelog = () => (
  <StaticQuery
    query={graphql`
      query Changelog {
        log: github {
          organization(login: "LF-digitala-kanaler") {
            repository(name: "LFUI-components") {
              releases(
                first: 3
                orderBy: { field: CREATED_AT, direction: DESC }
              ) {
                edges {
                  node {
                    name
                    createdAt
                    descriptionHTML
                    publishedAt
                    shortDescriptionHTML(limit: 100)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      //get 3 latest lfui releases
      const latestVersions =
        data.log.organization.repository.releases.edges.map((version) => {
          return version.node
        })

      const formatDate = (date) => {
        const event = new Date(date)
        return typeof event == 'object' ? event.toLocaleDateString('sv-SE') : ''
      }

      const versions = latestVersions.map((item) => {
        return (
          <Accordion
            key={item.name}
            title={item.name}
            date={formatDate(item.publishedAt)}
            text={item.descriptionHTML}
          />
        )
      })
      return (
        <div className={style.Changelog}>
          {versions}
          <Link
            className={style.Changelog__link}
            to="/components/web/changelog"
          >
            View complete Changelog
          </Link>
        </div>
      )
    }}
  />
)

export default Changelog
