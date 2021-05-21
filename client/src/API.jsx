import React, { useContext, useEffect }from 'react';
import { AppContext } from './Context.jsx';
import HelloWorld from './components/HelloWorld.jsx';

const API = () => {

  const { exampleState } = useContext(AppContext);
  console.log(exampleState);

  return (
    <div>
      <HelloWorld />
      <h1>Hello World</h1>
    </div>
  )
};

export default API;