import React from 'react';
import { Box } from 'grommet';


import Form from "../components/exercise/From.jsx";
//accepts exercise form components
function EditDisplay(props) {
    return (
      <Box>
        <Form 
            handleExerciseFormSubmit={props.handleExerciseFormSubmit}   
            exercise={props.exercise}
        />
      </Box>
    );
  }
  
  export default EditDisplay;