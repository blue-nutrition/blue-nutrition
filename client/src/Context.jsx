import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');

  // Landing page states
  const [loginModalOpen, setLoginModalstate] = useState(false);
  const [createAccountModalOpen, setCreateAccountModalstate] = useState(false);

  return (
    <AppContext.Provider value={{exampleState, setExampleState, loginModalOpen, createAccountModalOpen, setLoginModalstate, setCreateAccountModalstate}}>
      {props.children}
    </AppContext.Provider>
  )
}
