import React, { useContext, useState, useEffect }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';

//MaterialUI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const AddFood = (props) => {
  const { userId } = useContext(AppContext);

  const [values, setValues] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    foodName: '',
    userId: userId,
    meal: props.meal,
    date: new Date()
  });

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  }

  return (
    <div>
      <div>
        <FormControl>
          <Input
            id="foodName-form"
            value={values.foodName}
            onChange={handleChange('foodName')}
            aria-describedby="food-name-helper-text"
            inputProps={{
              'aria-label': 'food name',
            }}
          />
          <FormHelperText id="food-name-helper-text">Food name</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <Input
            id="calories-form"
            type="number"
            value={values.calories}
            onChange={handleChange('calories')}
            endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
            aria-describedby="calorie-helper-text"
            inputProps={{
              'aria-label': 'calories',
            }}
          />
          <FormHelperText id="calorie-helper-text">Calories</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <Input
            id="protein-form"
            type="number"
            value={values.protein}
            onChange={handleChange('protein')}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            aria-describedby="protein-helper-text"
            inputProps={{
              'aria-label': 'protein',
            }}
          />
          <FormHelperText id="protein-helper-text">Protein</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <Input
            id="carbs-form"
            type="number"
            value={values.carbs}
            onChange={handleChange('carbs')}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            aria-describedby="carbs-helper-text"
            inputProps={{
              'aria-label': 'carbs',
            }}
          />
          <FormHelperText id="carbs-helper-text">Carbs</FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <Input
            id="fat-form"
            type="number"
            value={values.fat}
            onChange={handleChange('fat')}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            aria-describedby="fat-helper-text"
            inputProps={{
              'aria-label': 'fat',
            }}
          />
          <FormHelperText id="fat-helper-text">Fat</FormHelperText>
        </FormControl>
      </div>
      <Grid container justify="center">
        <Grid item>
          <Button onClick={() => props.handleClose(values)}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default AddFood;