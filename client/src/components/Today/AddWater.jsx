import React, { useContext, useState }from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const AddWater = (props) => {
  const [water, setWater] = useState(props.currentWater || 0);

  const handleChange = (event) => {
    if (event.target.value >= 0) {
      setWater(event.target.value);
    }
  }

  return (
    <div style={{}}>
      <FormControl>
        <Input
          id="water-form"
          type="number"
          value={water}
          onChange={() => handleChange(event)}
          endAdornment={<InputAdornment position="end">oz</InputAdornment>}
          aria-describedby="oz-helper-text"
          inputProps={{
            'aria-label': 'water oz',
            'data-testid': "waterFormDiv"
          }}
        />
        <FormHelperText id="oz-helper-text">Water</FormHelperText>
      </FormControl>
      <Grid container justify="center">
        <Grid item>
          <Button onClick={() => props.handleClose(water)}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  )
};

export default AddWater;