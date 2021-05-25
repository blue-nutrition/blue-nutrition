import React, {useState, useContext} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const AsOf = (props) => {
  const {asOf, setAsOf} = props;

  return(
    <Grid container direction="row" justify="flex-start" alignItems="center" >
        <Grid item>
        <Typography variant="h6">As Of: &nbsp;</Typography>
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