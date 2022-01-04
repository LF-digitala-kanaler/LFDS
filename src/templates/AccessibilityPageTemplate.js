import { useEffect, useState } from 'react'

import Checkbox from '../components/Checkbox'
import Collapse from '../components/Collapse'
import Content from '../components/Content'
import Filter from '../components/Filter'
import Heading from '../components/Heading'
import LinkList from '../components/LinkList'
import Preamble from '../components/Preamble'
import React from 'react'
import Tags from '../components/Tags'
import Wrapper from '../components/Wrapper'

const AccessibilityPageTemplate = ({
  title,
  intro,
  body,
  wrapperWidth,
  checklist,
  roleInformation
}) => {
  const [checkedItems, setCheckedItems] = useState({})

  const [list, setList] = useState([...checklist])
  const [roleInformationList, setRoleInformationList] = useState([
    ...roleInformation
  ])
  const [activeRole, setRole] = useState('All roles')
  const roles = ['All roles', 'UX/AD', 'Developer', 'Tester', 'Copy']

  const handleChildClick = (index) => {
    setRole(roles[index])
  }

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    })
  }

  useEffect(() => {
    if (activeRole !== 'All roles') {
      let checklistFiltred = checklist.map((element) => {
        return {
          ...element,
          checklistList: element.checklistList.filter((checklistList) =>
            checklistList.tags.includes(activeRole)
          )
        }
      })
      setList(checklistFiltred)
    } else {
      setList(checklist)
    }
    let roleInformationFiltred = roleInformation.filter((element) =>
      element.tags.includes(activeRole)
    )
    setRoleInformationList(roleInformationFiltred)
  }, [checklist, activeRole, roleInformation])

  const listStyle = {
    display: 'flex',
    padding: 0,
    margin: '0 -8px 32px -8px',
    listStyleType: 'none',
    flexWrap: 'wrap',
    alignImtes: 'baseline'
  }

  const style = {
    textUnderlinePosition: 'under',
    color: '#222',
    padding: '8px',
    display: 'block'
  }

  const heading = {
    marginTop: '16px',
    display: 'block'
  }

  const marginTop = {
    marginTop: '16px',
    display: 'block',
    marginBottom: '4px'
  }

  const marginBottom = {
    marginBottom: '0'
  }
  return (
    <>
      <Wrapper tag="div" menu={true} narrow>
        <Heading tag={1} text={title} align={'left'} />
        <Preamble text={intro} tag="p" align={'left'} />
        <Filter items={roles} onChildClick={handleChildClick} />
        <span style={heading}>Go to section:</span>
        <ul style={listStyle}>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <a style={style} href={'#' + item.section}>
                  {item.section}
                </a>
              </li>
            )
          })}
        </ul>
        {roleInformationList.map((item, index) => {
          return (
            <div key={index}>
              <Content source={item.text} />
            </div>
          )
        })}

        {list.map((item, index) => {
          return (
            <div key={index}>
              {item.checklistList.length > 0 && (
                <Heading
                  id={item.section}
                  tag={2}
                  text={item.section}
                  align={'left'}
                />
              )}
              {item.checklistList.map((child, i) => {
                return (
                  <div key={i} style={{ position: 'relative' }}>
                    <Checkbox
                      id={'id' + i}
                      label={child.title}
                      name={'name' + i}
                      checked={checkedItems[i]}
                      onChange={handleChange}
                    />
                    <Collapse title={child.title}>
                      {/* ...text.html is not avalible in cms so to make the preview work */}

                      {typeof checklist[index].checklistList[i].text !=
                      'object' ? (
                        child.text
                      ) : (
                        <Content
                          className="Content--tight"
                          source={checklist[index].checklistList[i].text?.html}
                        />
                      )}
                      {child.relatedLinks && (
                        <>
                          <strong style={marginTop}>Read more:</strong>
                          {
                            <LinkList
                              customCss={marginBottom}
                              items={child.relatedLinks}
                            />
                          }
                        </>
                      )}
                      <Tags items={child.tags} />
                    </Collapse>
                  </div>
                )
              })}
            </div>
          )
        })}
      </Wrapper>
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
