import React, {useState, useContext} from 'react';
import DatePicker from 'react-datepicker';

const AsOf = (props) => {
  const [startDate, setStartDate] = useState(new Date());


  return(
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  )

}

export default AsOf;