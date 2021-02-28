import React, { useState, useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Preamble from '../components/Preamble'
import Content from '../components/Content'
import HeroBlock from '../components/HeroBlock'
import Tags from '../components/Tags'
import Filter from '../components/Filter'
import Checkbox from '../components/Checkbox';
import Collapse from '../components/Collapse'


const AccessibilityPageTemplate = ({
  title,
  intro,
  body,
  heroBlock,
  wrapperWidth,
  checklist,
  tags
}) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [list, setList] = useState(checklist)
  const [activeRole, setRole] = useState('All roles')
  const roles = ['All roles', 'Art director', 'Developer', 'Tester', 'UX designer']
  
  const handleChildClick = (index) => {
    setRole(roles[index])
  }
  const handleChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  }
  console.log(checklist, 'first')
  useEffect(() => {
     let checklistNew = checklist.map((element) => {
        return {...element, checklistList: element.checklistList.filter((checklistList) => checklistList.tags.includes(activeRole))}
      })

    setList(checklistNew)
    
  }, [checklist, activeRole])
  
  return (
  <>
    
    <Wrapper tag="div" menu={true} narrow>
      <Heading tag={1} text={title} align={'left'} />
      <Preamble text={intro} tag="p" align={'left'} />
      <Filter items={roles} onChildClick={handleChildClick}  />
      {
        list.map((item,index) => {
          
          return (
            <div key={index}>
              {item.checklistList.length > 0 &&  <Heading tag={2} text={item.section} align={'left'} />}
              {item.checklistList.map((child, index) => {
                
                return (
                <div key={index}  style={{position: "relative"}}>
                <Checkbox label={child.title} name={'name'+index} checked={checkedItems[index]} onChange={handleChange} />
                <Collapse title={child.title}>
                  {child.text}
                  <Tags items={child.tags} />
                </Collapse> 
                </div>
                )
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