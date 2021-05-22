import React, { useContext, useEffect }from 'react';
import { AppContext } from './Context.jsx';
import HelloWorld from './components/HelloWorld.jsx';
import Goals from './components/Goals.jsx';

const API = () => {

  const { exampleState } = useContext(AppContext);
  console.log(exampleState);

  return (
    <div>
      <HelloWorld />
      <h1>Hello World</h1>
      <Goals />
    </div>
  )
};

export default API;