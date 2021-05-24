import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Container from '@material-ui/core/Container';
import AtAGlance from './AtAGlance.jsx';
import Meal from './Meal.jsx';

const Today = () => {

  const { userId, setUserId } = useContext(AppContext);

  return (
    <div className={'mainContainer'}>
      <AtAGlance/>
      <Meal name={"Breakfast"}/>
      <Meal name={"Lunch"}/>
      <Meal name={"Dinner"}/>
    </div>
  )
};

export default Today;