import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');

  return (
    <AppContext.Provider value={{exampleState, setExampleState}}>
      {props.children}
    </AppContext.Provider>
  )
}
