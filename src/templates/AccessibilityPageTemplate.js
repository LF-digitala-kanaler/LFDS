import React from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Content from '../components/Content'
import HeroBlock from '../components/HeroBlock'

import Tags from '../components/Tags'
import Collapse from '../components/Collapse'

const AccessibilityPageTemplate = ({
  title,
  intro,
  body,
  heroBlock,
  wrapperWidth,
  checklist
}) => (
  <>
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      {
        checklist.map((item,index) => {
          console.log(item)
          return (
            <div key={index}>
              <Heading tag={2} text={item.section} align={'left'} />
              {item.checklistList.map((child) => {
                console.log(child.tags, 'ch')
                return (<Collapse title={child.title}>
                  {child.text}
                  <Tags items={child.tags} />
                </Collapse> )
              })}
            </div>
          )
        })
      }
      {/* <Tags items={tags} /> */}
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

export default AccessibilityPageTemplate