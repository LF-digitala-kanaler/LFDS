import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Content from '../components/Content'
import HeroBlock from '../components/HeroBlock'

import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import Filter from '../components/Filter'

const AccessibilityPageTemplate = ({
  title,
  intro,
  body,
  heroBlock,
  wrapperWidth,
  checklist
}) => {
  const [list, setList] = useState(checklist)
  const [activeRole, setRole] = useState('All roles')
  const roles = ["All roles", "Art director", "Developer", "Tester", "UX designer"]
  const handleChildClick = (index) => {
    setList(checklist)
    setRole(roles[index])
  }
  console.log(activeRole, checklist)
  return (
  <>
    
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      <Filter items={roles} onChildClick={handleChildClick}  />
      {
        checklist.map((item,index) => {
          
          return (
            <div key={index}>
              <Heading tag={2} text={item.section} align={'left'} />
              {item.checklistList.map((child, index) => {
                return (<Collapse key={index} title={child.title}>
                  {child.text}
                  <Tags items={child.tags} />
                </Collapse> )
              })}
            </div>
          )
        })
      }
    </Wrapper>
    
    {heroBlock && (
      <HeroBlock
        background={heroBlock.color}
        quote={heroBlock.quote}
        cite={heroBlock.cite}
        image={heroBlock.image}
      />
      
    )}
    <Wrapper tag="div" menu={true} narrow={wrapperWidth ? false : true}>
      
        <Content
          className={`Content  ${
            wrapperWidth === true ? 'Content--normal' : 'Content--tight'
          }`}
          source={body}
        />
      
    </Wrapper>
  </>
  )
}


export default AccessibilityPageTemplate