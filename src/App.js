import React from 'react'
import  {RouteConfiq}  from './RouteConfiq.js'
import {GlobalProvider} from './context/GobalState'

export const App = () => {
  return (
    <div>
      <GlobalProvider>
      <RouteConfiq />
      </GlobalProvider>
    </div>
  )
}

