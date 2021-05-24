import React from 'react';
import Modal from '@material-ui/core/Modal';


const EditDay = (props) => {

  const foodStyle = {
    maxHeight: '150px',
    width: '100%',
    height: '15vw',
    borderRadius: '5px',
  }

  return(
    <div style={{position: 'relative'}}>
      <h3 id="Edit Day">
      Edit Your Day!
        </h3>
        <p id="Edit Your Day">
          <form>
            <label>
            Water Intake
            <input/>
            &nbsp;
            oz
            </label>
          </form>
          <div style={foodStyle}>
            Your Reported Food
          </div>
        </p>
        <button type="button" style={{ position:'absolute', bottom:0, right:0 }}>
          Update Day
        </button>
    </div>
  )
};

export default EditDay;