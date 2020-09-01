import React from 'react'
import  {RouteConfiq}  from './RouteConfiq.js'
import {GlobalProvider} from './context/GobalState'
import {  useEffect } from 'react';

export const App = () => {

  useEffect(() => {
    const timer = setInterval(() => console.log("Hello, World!"), 3000);
  }, []);
  
  return (
    <div>
      <GlobalProvider>
      <RouteConfiq />
      </GlobalProvider>
    </div>
  )
}

