import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';

const App = (props) => {

  return (
    <div>
      <ContextProvider>
        <div>
          <API />
          <h1>Hello World</h1>
        </div>
      </ContextProvider>
      <h1>Hello World</h1>
    </div>
  )
};

export default App;