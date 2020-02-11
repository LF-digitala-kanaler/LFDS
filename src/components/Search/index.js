import React, {  useState } from 'react'
import { Link, navigate } from 'gatsby'
import style from './index.module.css';
import cx from 'classnames'
import { ArrowNavigation, useArrowNavigation } from 'react-arrow-navigation'

// Search component


const Search = () => {
  const [query, setQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);  
  const [results, setResults] = useState([]);
  
  const handleClick = () => {
    setIsSearchVisible(!isSearchVisible)
  }
  const SearchButton = () => {
      return (
        <button className={cx(style.Search__button, (isSearchVisible ? style['Search__button--isActive'] : '' ))} onClick={handleClick}>
          <svg className={style.Search__icon} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-2-2h24v24H-2z"/><path d="M15.207 13.793l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z" fill="#515151"/></g></svg>
          <span className={style.Search__text}>Sök</span>
        </button>
      )
  }
  const ListItem = ({title, url, xIndex, yIndex, closeMenu}) => {
    const { selected, active } = useArrowNavigation(xIndex, yIndex)
   
    return (
      <Link 
        to={url} 
        className={cx(style.Search__link, selected && active ? style['Search__link--focused'] : '')}
        onClick={() => {
          closeMenu()
        }}
      >
        {title}
      </Link>
    )
  }

  const ResultList = () => {
    if (results.length > 0) {
      return(
       
        results.map((page, i) => (
          
          <div className={style.Search__item} key={i}>
            <ListItem 
              url={page.url} 
              title={page.title} 
              index={i} 
              xIndex={0} 
              yIndex={i}  
              closeMenu={() => {console.log('hej')}}
              
            />
          </div>
        ))
       
      )
    }  else {
      return ''
    }
  }

  const getSearchResults = (query) => {
    // adicionar variável para língua
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      // search the indexed fields
      Object.keys(index).forEach(idx => {

        results.push(...index[idx].values.search(query)) // more search options at https://github.com/nextapps-de/flexsearch#index.search
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))

      // return the corresponding nodes in the store
      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }
  
  const search = event => {
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
      <div className={style.Search}>
         <ArrowNavigation >
          <input
            className={style.Search__field}
            type="text"
            aria-label="Search"
            autoComplete="off"
            onChange={search}
            placeholder={'Search'}
          />
        
          <div className={cx(style.Search__list, (results.length > 0 ? style['Search__list--isVisible'] : null))}>
            <ResultList />
          </div>
          </ArrowNavigation>
         <SearchButton />
      </div>
    )
  
  

  
}


  


export default Search