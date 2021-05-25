import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context.jsx';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditGoals from './EditGoals.jsx';

let Goals = () => {
  const {
    userGoals
  } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    editGoals: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      overflow: 'scroll',
      height: '100%',
      display: 'block',
    },
  });

  const classes = useStyles();

  return (
    <div id="goals">
      <h1>Your Nutrition Goals!</h1>
      <button
        type="submit"
        onClick={handleOpen}
      >Edit Goals</button>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            container={() => document.getElementById('goals')}
            className={classes.editGoals}
      >
        <EditGoals
          handleClose={handleClose}
        />
      </Modal>
      <h2>Your current weight: {userGoals.weight} lbs (optional)</h2>
      <h2>Your Goals</h2>
      <h3>Water Consumption {userGoals.water} oz</h3>
      <h3>Caloric Intake {userGoals.calories} kcal</h3>
      <h3>Protein Macros {userGoals.protein} g</h3>
      <h3>Carbohydrate Macros {userGoals.carbs} g</h3>
      <h3>Fat Macros {userGoals.fats} g</h3>
      <h3>Goal Weight {userGoals.goalWeight} lbs</h3>
    </div>
  )
}

export default Goals;

// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../../Context.jsx';
// import { Modal } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import EditGoals from './EditGoals.jsx';

// let Goals = () => {
//   const {
//     currentWeight, waterGoal,caloriesGoal, proteinMacrosGoal,carbsMacrosGoal, fatsMacrosGoal,goalWeight
//   } = useContext(AppContext);

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const useStyles = makeStyles({
//     editGoals: {
//       position: 'absolute',
//       top: '10%',
//       left: '10%',
//       overflow: 'scroll',
//       height: '100%',
//       display: 'block',
//     },
//   });

//   const classes = useStyles();

//   return (
//     <div id="goals">
//       <h1>Your Nutrition Goals!</h1>
//       <button
//         type="submit"
//         onClick={handleOpen}
//       >Edit Goals</button>
//       <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//             container={() => document.getElementById('goals')}
//             className={classes.editGoals}
//       >
//         <EditGoals
//           handleClose={handleClose}
//         />
//       </Modal>
//       <h2>Your current weight: {currentWeight} lbs (optional)</h2>
//       <h2>Your Goals</h2>
//       <h3>Water Consumption {waterGoal} oz</h3>
//       <h3>Caloric Intake {caloriesGoal} kcal</h3>
//       <h3>Protein Macros {proteinMacrosGoal} g</h3>
//       <h3>Carbohydrate Macros {carbsMacrosGoal} g</h3>
//       <h3>Fat Macros {fatsMacrosGoal} g</h3>
//       <h3>Goal Weight {goalWeight} lbs</h3>
//     </div>
//   )
// }

// export default Goals;