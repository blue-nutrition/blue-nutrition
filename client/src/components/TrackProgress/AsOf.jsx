import React, {useState, useContext} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import Today from '../Today/Today.jsx'

const AsOf = (props) => {
  const {asOf, setAsOf, period} = props;

  const handleEdit = () => {
    return (
      <Today asOf={asOf}/>
    )
  }
  const editButton = period !== 'Daily' ? '' : <Typography variant="h6" style={{position:'absolute', right:0, top:0}}>Edit Day's Intake: <EditIcon type="button" onClick={handleEdit}/></Typography>


  return(
    <Grid container direction="row" justify="flex-start" alignItems="center" style={{position:'relative'}}>
        <Grid item xs={1}>
        <Typography variant="h6">As Of: &nbsp;</Typography>
        </Grid>
        <Grid item xs={7}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
      value={asOf}
      onChange={setAsOf} />
      </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4}>
        {editButton}
        </Grid>
    </Grid>
  )

}

export default AsOf;