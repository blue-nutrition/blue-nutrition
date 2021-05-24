import React, {useState, useContext} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const AsOf = (props) => {
  const {asOf, setAsOf} = props;

  console.log(asOf);


  return(
    <Grid container direction="row" justify="flex-start" alignItems="center" >
        <Grid item>
          <h3>
      As Of:
      &nbsp;
          </h3>
        </Grid>
        <Grid item>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
      value={asOf}
      onChange={setAsOf} />
      </MuiPickersUtilsProvider>
        </Grid>
    </Grid>
  )

}

export default AsOf;