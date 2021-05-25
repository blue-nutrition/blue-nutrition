import React from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';


const EditDay = (props) => {
  const {water} = props;

  const foodStyle = {
    maxHeight: '150px',
    width: '100%',
    height: '15vw',
    backgroundColor:'white'
  }

  return(
    <div style={{position: 'relative'}}>
      <h3 id="Edit Day">
      Edit Your Day!
        </h3>
        <div id="Edit Your Day" style={{position:"center"}}>
          <form>
            <label>
            Water Intake
            <input placeholder={water}/>
            &nbsp;
            oz
            </label>
          </form>
          <div>
            Your Reported Food:
          </div>
          <Box border={1} style={foodStyle}>
            Food Item
          </Box>
        </div>
        <button type="button" style={{ position:'absolute', bottom:0, right:0 }}>
          Add Food
        </button>
    </div>
  )
};

export default EditDay;