import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');

  // Landing page states
  const [userId, setUserId] = useState();
  const [newUserPackage, setNewUserPackage] = useState({
    currentWeight: null,
    waterConsumption: 0,
    caloricIntake: 0,
    proteinMacros: 0,
    carbMacros: 0,
    fatMacros: 0,
    goalWeight: null,
  });

  return (
    <AppContext.Provider value={{exampleState, setExampleState, userId, setUserId, newUserPackage, setNewUserPackage}}>
      {props.children}
    </AppContext.Provider>
  )
}
