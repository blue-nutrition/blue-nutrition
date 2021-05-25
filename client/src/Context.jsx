import React, { createContext, useState } from 'react';
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const _2day = new Date().setHours(0, 0, 0, 0)
  const _2dayUTC = zonedTimeToUtc(_2day, 'America/Denver');
  const _2morrow = zonedTimeToUtc(_2day, 'America/Denver');
  _2morrow.setDate(_2dayUTC.getDate() + 1);
  const _2morrowUTC = zonedTimeToUtc(_2morrow, 'America/Denver');

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');
  const [today, setToday] = useState(_2dayUTC);
  const [tomorrow, setTomorrow] = useState(_2morrowUTC);
  const [userId, setUserId] = useState('5');

  return (
    <AppContext.Provider value={{userId, setUserId, exampleState, setExampleState, today, setToday, tomorrow, setTomorrow}}>
      {props.children}
    </AppContext.Provider>
  )
}
