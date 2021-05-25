import React, {useState, useContext} from 'react';
import {AppContext} from '../../Context.jsx'
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import EditIcon from '@material-ui/icons/Edit';
import Today from '../Today/Today.jsx';
import IconButton from '@material-ui/core/IconButton';
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

const AsOf = (props) => {
  const {asOf, setAsOf, period, handleChange, setStartDate, setEndDate} = props;
  const {setToday, setTomorrow} = useContext(AppContext);

  const handleEdit = () => {
    const day = new Date(asOf).setHours(0,0,0,0);
    const dayUTC = zonedTimeToUtc(day, 'America/Denver');

    const morrow = zonedTimeToUtc(day, 'America/Denver');
  morrow.setDate(dayUTC.getDate() + 1);
  const morrowUTC = zonedTimeToUtc(morrow, 'America/Denver');
      setToday(dayUTC);
      setTomorrow(dayUTC);
      handleChange(null, 0);
  }
  const editButton = period !== 'Daily' ? '' : <Typography variant="h6" style={{position:'absolute', right:0, top:0}}>Edit Day's Intake: <IconButton><EditIcon type="button" onClick={handleEdit}/></IconButton></Typography>


  const handleDateChange = (date) => {
    const dateFormat = new Date(date).setHours(0,0,0,0);
    setAsOf(date);
    setEndDate(date);
    if(period === 'Daily') {
      setStartDate(date)
    } else if (period === 'Weekly') {
      var utcDate = zonedTimeToUtc(date, 'America/Denver');
      console.log('this is utcDate', utcDate)
      var startDate = utcDate.setDate(utcDate.getDate() - 6);
      var startDateUTC = zonedTimeToUtc(startDate, 'America/Denver');
      setStartDate(startDateUTC)
    } else if (period === 'Monthly') {
      var utcDate = zonedTimeToUtc(date, 'America/Denver')
      var startDate = utcDate.setDate(utcDate.getDate() - 29);
      var startDateUTC = zonedTimeToUtc(startDate, 'America/Denver');
      setStartDate(startDateUTC)
    }
  }


  return(
    <Grid container direction="row" justify="flex-start" alignItems="center" style={{position:'relative'}}>
        <Grid item xs={1}>
        <Typography variant="h6">As Of: &nbsp;</Typography>
        </Grid>
        <Grid item xs={7}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
      value={asOf}
      onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={4}>
        {editButton}
        </Grid>
    </Grid>
  )

}

export default AsOf;