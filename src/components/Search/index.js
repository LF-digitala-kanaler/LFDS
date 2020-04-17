import React, {  useState, useRef} from 'react'
import { Link, navigate } from 'gatsby'
import style from './index.module.css';
import cx from 'classnames'
import { ArrowNavigation, useArrowNavigation } from 'react-arrow-navigation'
import {useKeyPressEvent} from 'react-use';
import Modal from 'react-modal';


Modal.setAppElement('#___gatsby');


// set focus on input when search is open
const UseFocus = () => {
	const htmlElRef = useRef(null)
	const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

	return [ htmlElRef,  setFocus ] 
}

const Search = () => {
  
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);  
  const [results, setResults] = useState([]);
  const [inputRef, setInputFocus] = UseFocus()
  const containerRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
    setResults([])
    inputRef.current.value="";
  }
  
  const afterOpenModal = () => {
    setInputFocus()
  }

  const SearchButton = () => {
      return (
        <button className={style.Search__button} onClick={openModal} aria-label="Open Search">
          <svg className={style.Search__icon} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-2-2h24v24H-2z"/><path d="M15.207 13.793l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z" fill="#515151"/></g></svg> 
        </button>
      )
  }
  const ListItem = ({title, url, xIndex, yIndex}) => {
    const { selected, active } = useArrowNavigation(xIndex, yIndex)
    const keydown = (index) => navigate(results[index].url)
    // const transformCategory = (url) => {
    //   return url.split('/')[1].replace(/-/g, ' ')
    // } 
    return (
      <Link 
        to={url} 
        onKeyDown={useKeyPressEvent('Enter', () => (selected && keydown(yIndex)))}
        className={cx(style.Search__link, selected && active ? style['Search__link--focused'] : '')}
      >
        {title}
        {/* {transformCategory(url)} */}
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
            />
          </div>
        ))
       
      )
    }  else {
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
    <>
    <SearchButton />
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      closeTimeoutMS={250}
      className="Modal"
      overlayClassName="Overlay"
    >
    <button className={style.Search__close} onClick={closeModal} aria-label="Close Search">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-12-12h40v40h-40z"/><path d="M15.778 1.636L9.415 7.999l6.363 6.365-1.414 1.414-6.363-6.364-6.365 6.364-1.414-1.414 6.364-6.365L.222 1.636 1.636.222l6.365 6.363L14.364.222l1.414 1.414z" fill="#747578"/></g></svg>
    </button>
      <div className={style.Search} ref={containerRef}>
         <ArrowNavigation>
          <div className={style.Search__container}>
            <svg className={style.Search__icon} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-2-2h24v24H-2z"/><path d="M15.207 13.793l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2z" fill="#515151"/></g></svg> 
            <input
              className={style.Search__field}
              type="text"
              aria-label="Search"
              autoComplete="off"
              onChange={search}
              ref={inputRef}
              
            />
           </div> 
          <div className={cx(style.Search__list, (results.length > 0 ? style['Search__list--isVisible'] : null))}>
            <ResultList />
          </div>
          </ArrowNavigation>
        
         
      </div>
      </Modal>
      </>
    )
  
  

  
}


  


export default Search