import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  isMenuOpenDesktop: true
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SIDENAV': {
      return {
        ...state,
        isMenuOpenDesktop: state.isMenuOpenDesktop === true ? false : true
      }
    }
    default:
      throw new Error('Bad Action Type')
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
