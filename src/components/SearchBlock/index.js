import * as style from './index.module.css'

import { ArrowNavigation, useArrowNavigation } from 'react-arrow-navigation'
import { Link, navigate } from 'gatsby'
import React, { useRef, useState } from 'react'
import { useClickAway, useKeyPressEvent } from 'react-use'

import cx from 'classnames'

const Search = () => {
  const [query, setQuery] = useState('') // eslint-disable-line no-unused-vars
  const [isSearchVisible, setIsSearchVisible] = useState(false) // eslint-disable-line no-unused-vars
  const [results, setResults] = useState([])
  const searchBlockContainerRef = useRef(null)
  const searchBlockInputRef = useRef(null)
  // Reset search to default
  const reset = () => {
    setIsSearchVisible(false)
    setResults([])
    searchBlockInputRef.current.value = ''
  }
  //empty search on esc
  useKeyPressEvent('Escape', () => reset())

  // close search click outside
  useClickAway(searchBlockContainerRef, () => {
    reset()
  })

  const ListItem = ({ title, url, xIndex, yIndex }) => {
    const { selected, active } = useArrowNavigation(xIndex, yIndex)
    const keydown = (index) => navigate(results[index].url)
    // const transformCategory = (url) => {
    //   return url.split('/')[1].replace(/-/g, ' ')
    // }
    return (
      <Link
        to={url}
        onKeyDown={useKeyPressEvent('Enter', () => selected && keydown(yIndex))}
        className={cx(
          style.SearchBlock__link,
          selected && active ? style['SearchBlock__link--focused'] : ''
        )}
      >
        {title}
        {/* {transformCategory(url)} */}
      </Link>
    )
  }

  const ResultList = () => {
    if (results.length > 0) {
      return results.map((page, i) => (
        <div className={style.SearchBlock__item} key={i}>
          <ListItem
            url={page.url}
            title={page.title}
            index={i}
            xIndex={0}
            yIndex={i}
          />
        </div>
      ))
    } else {
      return ''
    }
  }

  const getSearchResults = (query) => {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store

    if (!query || !index) {
      return []
    } else {
      var results = []
      // search the indexed fields

      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query)) // more search options at https://github.com/nextapps-de/flexsearch#index.search
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))

      // return the corresponding nodes in the store
      var nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node)

      return nodes
    }
  }

  const search = (event) => {
    const query = event.target.value
    if (query.length > 0) {
      const results = getSearchResults(query)
      setResults(results)
      setQuery(query)
    } else {
      setResults([])
      setQuery(query)
    }
  }
  return (
    <>
      <div className={style.SearchBlock} ref={searchBlockContainerRef}>
        <ArrowNavigation>
          <div className={style.SearchBlock__container}>
            <svg
              className={style.SearchBlock__icon}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M-2-2h24v24H-2z" />
                <path
                  d="M15.207 13.793l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z"
                  fill="#515151"
                />
              </g>
            </svg>
            <input
              className={style.SearchBlock__field}
              type="text"
              aria-label="Search"
              autoComplete="off"
              onChange={search}
              ref={searchBlockInputRef}
            />

            <div
              className={cx(
                style.SearchBlock__list,
                results.length > 0
                  ? style['SearchBlock__list--isVisible']
                  : null
              )}
            >
              <ResultList />
            </div>
          </div>
        </ArrowNavigation>
      </div>
    </>
  )
}

export default Search
