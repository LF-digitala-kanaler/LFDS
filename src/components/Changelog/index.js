import React from 'react';
import style from './index.module.css';
import { useStaticQuery, graphql, Link } from "gatsby"
import Accordion from '../Accordion';

const Changelog = () => {

  
  const data = useStaticQuery(graphql`
      query Changelog {
        log: github {
          organization(login: "LF-digitala-kanaler") {
              repository(name: "LFUI") {
                releases(first: 3, orderBy: {
                  field: CREATED_AT
                  direction: DESC
                }) {
                  edges {
                    node {
                      name
                      createdAt
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
    //get 3 latest lfui releases 
    
    const latestVersions = data.log.organization.repository.releases.edges.map(version => {
      return version.node;
    })
    const formatDate = (date) => {
      const event = new Date(date);
      return typeof event == "object" ? event.toLocaleDateString("sv-SE") : "";
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const versions  = latestVersions.map(item => {
      return <Accordion key={item.name} title={item.name} date={formatDate(item.publishedAt)} text={item.descriptionHTML} />
    })
   
      return (
        
        <div className={style.Changelog}>
          <h4 className={style.Changelog__title}>Latest Updates</h4>
          {versions}
           <Link className={style.Changelog__link} to='about/whats-new/changelog' >View complete Changelog</Link>
        </div>
        
      )
  
}

export default Changelog;