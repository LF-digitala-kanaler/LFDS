import * as React from 'react'
import GlobalContextProvider from './src/context/GlobalContextProvider'
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
export const shouldUpdateScroll = ({
  routerProps: { location },
}) => {

  if (location.search) {
    return false
  }

  return true
}






