import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../Context.jsx';

const HelloWorld = () => {

  const { exampleState, setExampleState } = useContext(AppContext);

  return (
    <div>
      <h1>{exampleState}</h1>
      <h1>Hello World</h1>
    </div>
  )
};

export default HelloWorld;