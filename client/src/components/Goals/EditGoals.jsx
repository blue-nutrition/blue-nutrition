/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context.jsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const EditGoals = ({ handleClose }) => {
  const {
    today, email, password, userId, userGoals, postUser
  } = useContext(AppContext);

  const [editedWeight, setEditedWeight] = useState(userGoals.weight)
  const [editedGoals, setEditedGoals] = useState({
    water: userGoals.water,
    calories: userGoals.calories,
    protein: userGoals.protein,
    carbs: userGoals.carbs,
    fats: userGoals.fats,
    goalWeight: userGoals.goalWeight
  })

  // sample data
  // {
  //   water: 64,
  //   calories: 2000,
  //   protein: 50,
  //   carbs: 120,
  //   fats: 30,
  //   goalWeight: 135
  // }

  const weightData = {
    userId,
    weight: editedWeight,
    date: today,
  }

  const userData = {
    email,
    password,
    goals: editedGoals
  }

  const updateGoals = (e) => {
    e.preventDefault();

    postUser(userData, weightData, handleClose)
  }

  const handleChange = (prop) => (e) => {
    setEditedGoals({...editedGoals, [prop]: e.target.value });
  }

  const subtitleStyle = {
    margin: '3vh'
  }

  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div>
      <div style={container}>
        <FormControl>
          <Typography variant="h3">Edit Your Goals</Typography>
          <Input
            name="editedWeight"
            type="number"
            value={editedWeight}
            onChange={(e) => {setEditedWeight(e.target.value)}}
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            >
          </Input>
          <FormHelperText>
          Update your current weight</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <div style=  {subtitleStyle}>
            <Typography variant="h5">Set Your Daily Goals</Typography>
          </div>
          <Input
            name="water"
            type="number"
            value={editedGoals.water}
            onChange={handleChange("water")}
            endAdornment={<InputAdornment position="end">oz</InputAdornment>}
            />
          <FormHelperText>
            Water Consumption
          </FormHelperText>
          <Input
            name="calories"
            type="number"
            min="1200"
            value={editedGoals.calories}
            onChange={handleChange("calories")}
            endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
            />
          <FormHelperText>
            Caloric Intake
          </FormHelperText>
          <Input
            name="protein"
            type="number"
            value={editedGoals.protein}
            onChange={handleChange("protein")}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            />
          <FormHelperText>
          Protein Macros
          </FormHelperText>
          <Input
            name="carbs"
            type="number"
            value={editedGoals.carbs}
            onChange={handleChange("carbs")}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            />
          <FormHelperText>
          Carbohydrate Macros</FormHelperText>
          <Input
            name="fats"
            type="number"
            value={editedGoals.fats}
            onChange={handleChange("fats")}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            />
          <FormHelperText>
          Fats Macros</FormHelperText>
          <Input
            name="goalWeight"
            type="number"
            value={editedGoals.goalWeight}
            onChange={handleChange("goalWeight")}
            endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
            />
          <FormHelperText>
          Goal Weight</FormHelperText>
          <br></br>
          <Button
            type="button"
            onClick={updateGoals}
          >Update Goals</Button>
        </FormControl>
      </div>
    </div>
  )
}

export default EditGoals;
