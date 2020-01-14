import React from './node_modules/react';
import style from './index.module.css';
import { useStaticQuery, graphql } from "./node_modules/gatsby"

const ChangeLog = ({}) => {

  
  const data = useStaticQuery(graphql`
      query ChangelogPage {
        log: github {
          organization(login: "LF-digitala-kanaler") {
              repository(name: "LFUI") {
                releases(last: 60, orderBy: {
                  field: CREATED_AT
                  direction: DESC
                }) {
                  edges {
                    node {
                      name
                      descriptionHTML
                      publishedAt
                      shortDescriptionHTML(limit:100)
                    }
                  }
                }
              }
            }
          }
      }
    `)

      return (

        <div>{console.log(data)}</div>
      )
  
}

export default ChangeLog;